<template>
  <div class="container mx-auto px-2 pt-12">
    <h1 class="text-center text-3xl">Join Us.</h1>

    <saas-signup-form />
    <div class="text-center pt-12 pb-12">
      <p>
        Already have an account?
        <nuxt-link to="/auth/login" class="underline font-semibold"
          >Log in here.</nuxt-link
        >
      </p>
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
    const appName = this.$root.context.$saastarter.appName;
    return {
      title: "Sign Up - " + appName,
    };
  },
});
</script>

<style>
</style>
