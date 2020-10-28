<template>
  <div>
    <header class="mb-10 flex flex-row justify-between container mx-auto mt-12">
      <nuxt-link to="/">
          Nuxt Components
      </nuxt-link>
      <nav>
        <nuxt-link to="/about" class="ml-6">
          About
        </nuxt-link>
        <div class="inline-block">
          <auth-menu class="ml-6 pt-1" />
        </div>
      </nav>
    </header>

    <Nuxt />

  </div>
</template>

<style>

</style>

<script>
import Vue from "vue";
import AuthMenu from "@/components/AuthMenu.vue"

 
export default Vue.extend({
  components: {
    AuthMenu,
  }
});
</script>
