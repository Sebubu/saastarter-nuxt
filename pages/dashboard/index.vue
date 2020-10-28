<template>
  <div class="container mx-auto px-2 pt-12">
    <div class="flex flex-col justify-center">
      <h1 class="text-3xl pt-2 text-gray-700 text-center md:text-6xl">Dashboard</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "dashboard",
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "Dashboard - " + appName,
    };
  },
});
</script>

<style>
</style>
