<template>
  <div>
    <user-info class="pt-6 md:pt-16" />

    <div v-if="isEmailAuthenticated">
      <h2 class="pt-8 md:pt-16 font-bold text-lg">Change email</h2>
      <change-email-form />
    </div>

    <div v-if="isEmailAuthenticated">
      <h2 class="pt-8 md:pt-16 font-bold text-lg">Change password</h2>
      <change-password-form />
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import ChangeEmailForm from "./ChangeEmailForm.vue";
import UserInfo from "./UserInfo.vue";
import ChangePasswordForm from "./ChangePasswordForm.vue";

export default Vue.extend({
  components: {
    UserInfo,
    ChangeEmailForm,
    ChangePasswordForm,
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
