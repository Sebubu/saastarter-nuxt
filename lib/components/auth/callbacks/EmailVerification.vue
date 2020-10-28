<template>
  <div>
    <div v-if="checkingActionCode">
      <loading-spinner class="mx-auto" />
    </div>

    <div v-if="!checkingActionCode && !isActionCodeValid">
      <p class="text-center text-3xl">Email verification failed.</p>
      <p class="text-center text-md pt-3 md:pt-8">This link seems to be expired or broken.</p>
      <nuxt-link to="/">
        <button
          type="submit"
          class="saastarter-btn-secondary w-full text-lg font-bold p-2 mt-8"
        >Go to main page</button>
      </nuxt-link>
    </div>

    <div v-if="!checkingActionCode && isActionCodeValid">
      <div class>
        <p class="text-center text-3xl">Email verification successful.</p>
        <p class="text-center text-md pt-3 md:pt-8"></p>
        <nuxt-link to="/">
          <button
            type="submit"
            class="saastarter-btn-secondary w-full text-lg font-bold p-2 mt-8"
          >Go to main page</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  props: {
    actionCode: String,
  },
  data: function () {
    return {
      checkingActionCode: true,
      isActionCodeValid: false,
    };
  },
  mounted: async function () {
    try {
      await this.$fireAuth.applyActionCode(this.actionCode);
      this.checkingActionCode = false;
      this.isActionCodeValid = true;
    } catch (e) {
      console.error("error", e.code, e.message);
      this.checkingActionCode = false;
      this.isActionCodeValid = false;
    }
    return;
  },
});
</script>

<style>
</style>
