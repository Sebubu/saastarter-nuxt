<template>
  <div>
    <div class="relative">
      <div :class="{'opacity-0': isLoading}" v-on:click="openBilling">
        <slot />
      </div>
      <div class="loader" v-if="isLoading">
        <saas-loading-spinner :size="15" />
      </div>
    </div>
  </div>
</template>

<style>
.loader {
  top: 50%;
  left: 50%;
  margin-top: -7px;
  margin-left: -7px;
  position: absolute;
}
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    returnUrl: {
      type: String,
      default: '/'
    }
  },
  data: function () {
    return {
      isLoading: false,
    };
  },
  methods: {
    openBilling: async function () {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      const createSession = this.$fireFunc.httpsCallable(
        "saastarter-billing/create-customer-portal-session"
      );
      const response = await createSession({
        returnUrl: this.getCurrentBaseUrl() + this.returnUrl,
      });
      const url = response.data;
      window.location.href = url;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
      
    },
    getCurrentBaseUrl: function () {
      return (
        location.protocol +
        "//" +
        location.hostname +
        (location.port ? ":" + location.port : "")
      );
    },
  },
});
</script>

