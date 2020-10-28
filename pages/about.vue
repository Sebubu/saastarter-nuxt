<template>
  <div class="container mx-auto px-2 pt-12">
    <div>
      <h1 class="text-6xl pt-2 text-gray-700 text-center">
        About page
      </h1>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';


export default Vue.extend({
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "About - " + appName,
    };
  },
})

</script>

<style>

</style>

