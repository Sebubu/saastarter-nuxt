<template>
  <div>
    <div class="w-12" v-if="isLoading">
      <skeleton />
    </div>
    <div v-if="!isLoading && isAuthenticated">
      <nuxt-link class="saastarter-btn-primary text-base font-normal px-3 py-1" to="/dashboard">Dashboard</nuxt-link>
    </div>
    <div v-if="!isLoading && !isAuthenticated">
      <nuxt-link to="/auth/login">Login</nuxt-link>
      <nuxt-link class="btn-menu ml-6" to="/auth/signup">Sign up</nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import Vue from "vue";
import { Skeleton } from "vue-loading-skeleton";

export default Vue.extend({
  components: {
    Skeleton,
  },
  data: function () {
    return {
      user: null,
      isLoading: true,
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
    isAuthenticated: function () {
      return !!this.user;
    },
  },
});
</script>

