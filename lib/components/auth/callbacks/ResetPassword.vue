<template>
  <div>
    <div v-if="checkingActionCode">
      <loading-spinner class="mx-auto" />
    </div>

    <div v-if="!isActionCodeValid">
      <p class="text-center text-md pt-3 md:pt-8">
        This link seems to be expired or broken. Please try again.
      </p>
      <nuxt-link to="/auth/login">
        <button
          type="submit"
          class="saastarter-btn-secondary w-full text-lg font-bold p-2 mt-8"
        >
          Back to Log In
        </button>
      </nuxt-link>
    </div>

    <div v-if="isActionCodeValid && !checkingActionCode">
      <p class="text-center text-3xl">Reset Password.</p>
      <reset-password-form
        :actionCode="actionCode"
        :userEmail="userEmail"
      ></reset-password-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ResetPasswordForm from "./ResetPasswordForm.vue";

export default Vue.extend({
  components: {
    ResetPasswordForm,
  },
  props: {
    actionCode: String,
  },
  data: function () {
    return {
      isActionCodeValid: true,
      userEmail: "",
      checkingActionCode: true,
    };
  },
  mounted: function () {
    this.checkingActionCodeValid();
  },
  methods: {
    checkingActionCodeValid: async function () {
      try {
        const userEmail = await this.$fireAuth.verifyPasswordResetCode(
          this.actionCode
        );
        this.isActionCodeValid = true;
        this.userEmail = userEmail;
        this.checkingActionCode = false;
      } catch (e) {
        console.error("error", e.code, e.message);
        this.checkingActionCode = false;
        this.isActionCodeValid = false;
      }
    },
  },
});
</script>

<style>
</style>
