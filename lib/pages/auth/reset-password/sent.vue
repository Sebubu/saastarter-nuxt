<template>
  <div class="container mx-auto px-2 pt-12">
    <p class="text-center text-3xl">Reset Link Sent.</p>
    <p class="text-center text-md pt-3 md:pt-8">
      We have sent you a password reset link to your email address.
    </p>
    <div class="">
      <nuxt-link to="/auth/login">
        <button
          type="submit"
          class="saastarter-btn-secondary w-full text-lg font-bold p-2 mt-8"
        >
          Back to Log In
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    layout(context) {
    return context.$saastarter.layoutName;
  },
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "Reset password sent - " + appName,
    };
  },
});
</script>

<style>
</style>
