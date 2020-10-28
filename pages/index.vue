<template>
  <div class="container mx-auto px-2 pt-12">
    <div class="flex flex-col justify-center">
      <div></div>
      <div></div>
      <div>
        <h1
          class="text-3xl pt-2 text-gray-700 text-center md:text-6xl relative"
        >
          SaaStarter
          <span style="bottom: -0.7rem" class="text-2xl absolute"
            >Components</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "Demo - " + appName,
    };
  },
});
</script>

<style>
</style>
