<template>
  <div>
    <div class="container mx-auto px-2 py-12" v-if="user">
      <h1 class="text-center text-3xl">Profile.</h1>
      <saas-user-profile />
    </div>
    <saas-loading-spinner v-else class="mt-40 mx-auto" />
  </div>
</template>

<script >
import Vue from "vue";

export default Vue.extend({
  layout: "saastarter",
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "Profile - " + appName,
    };
  },
  data: function () {
    return {
      user: this.$fireAuth.currentUser,
    };
  },
  mounted: function () {
    this.$fireAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
        this.$router.push("/auth/login");
      }
    });
  },
  computed: {
    isEmailAuthenticated: function () {
      if (!this.user) {
        return false;
      }
      for (const provider of this.user.providerData) {
        if (provider.providerId === "password") {
          return true;
        }
      }
      return false;
    },
    isPublicDemo() {
      const user = this.$fireAuth.currentUser;
      return user.email == "demo@saastarter.com";
    },
  },
});
</script>

<style>
</style>
