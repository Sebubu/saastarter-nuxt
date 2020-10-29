<template>
  <div class="container mx-auto px-2 pt-12">
    <h1 class="text-center text-3xl">Welcome.</h1>

    <saas-login-form />

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
      title: 'Login - ' + appName 
    };
  },
});
</script>

<style>
</style>
