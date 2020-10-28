<template>
  <div class="container mx-auto px-2 pt-32">
    <h1 class="text-center text-3xl">Reset password.</h1>

    <saas-reset-password-request-form />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "saastarter",
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "Reset password - " + appName,
    };
  },
});
</script>

<style>
</style>
