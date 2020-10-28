<template>
  <div class="userPhoto">
    <div v-if="!photoUrl" 
    v-bind:class="{ hoverEffect: hoverEffect }"
    class="rounded-full bg-gray-400 inline-block p-1">
      <svg
        class="text-gray-200 fill-current w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>

    <img
      v-if="!isLoading && photoUrl"
      v-bind:class="{ hoverEffect: hoverEffect }"
      class="rounded-full inline-block"
      :src="photoUrl"
      alt="User photo"
    />
  </div>
</template>

<style scoped>
.hoverEffect:hover {
  box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.06);
}
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  props: {
    hoverEffect: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  data: function () {
    return {
      isLoading: true,
      user: this.$fireAuth.currentUser,
    };
  },
  mounted: function () {
    this.$fireAuth.onAuthStateChanged((user) => {
      this.isLoading = false;
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
  },
  computed: {
    photoUrl: function () {
      if (!this.user) {
        return null;
      }
      for (const data of this.user.providerData) {
        if (data.photoURL) {
          return data.photoURL;
        }
      }
      return null;
    },
  },

});
</script>

