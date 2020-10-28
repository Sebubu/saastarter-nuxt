<template>
  <div class="relative" v-click-outside="hideMenu">
    <div
      class="flex rounded-sm border border-transparent px-2 py-1 cursor-pointer"
      v-on:click="isOpened = !isOpened"
    >
      <div class="userPhoto h-8 w-8">
        <saas-user-photo :hoverEffect="true" />
      </div>
    </div>
    <div
      id="menu"
      v-show="isOpened"
      class="absolute p-2 right-0 shadow-md border border-gray-200 rounded-sm mt-4 bg-white"
    >
      <slot />
    </div>
  </div>
</template>

<style>
#menu {
  min-width: 200px;
  z-index: 5000;
}
</style>

<script>
import Vue from "vue";
import ClickOutside from "vue-click-outside";
import UserPhoto from "@/lib/components/auth/profile/UserPhoto.vue";

export default Vue.extend({
  components: {
    UserPhoto,
  },
  data: function () {
    return {
      isOpened: false,
    };
  },

  methods: {
    hideMenu: function () {
      this.isOpened = false;
    },
  },
  directives: {
    ClickOutside,
  },
  computed: {

  },
});
</script>

