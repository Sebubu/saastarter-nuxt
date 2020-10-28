<template>
  <div class>
    <div class="relative">
      <div :class="{'opacity-0': isLoading}" v-on:click="openCheckout">
        <slot />
      </div>
      <div class="loader" v-if="isLoading">
        <saas-loading-spinner :size="15" />
      </div>
    </div>
    <span
      v-if="errorOccurred"
      class="saastarter-error-message"
    >An error occurred during the creation of the Stripe checkout session.</span>
  </div>
</template>

<style>
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    priceId: {
      type: String,
      required: true,
    },
    cancelUrl: {
      type: String,
      default: "/",
    },
    successUrl: {
      type: String,
      default: "/",
    },
    prefetch: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data: function () {
    return {
      isLoading: false,
      errorOccurred: false,
      checkoutSessionId: null,
    };
  },
  async mounted() {
    if (this.prefetch && this.priceId) {
      try {
        await this.fetchCheckoutSession();
      } catch (e) {
        console.error(
          this.priceId,
          e,
          e.details
        );
      }
    }
  },
  methods: {
    openCheckout: async function (event) {
      event.preventDefault();
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      try {
        if (!this.checkoutSessionId) {
          await this.fetchCheckoutSession();
        }
        const stripe = Stripe(this.$saastarter.stripePublishableKey);
        await stripe.redirectToCheckout({
          sessionId: this.checkoutSessionId,
        });

        this.isLoading = false;
      } catch (e) {
        console.error(e);
        this.errorOccurred = true;
        this.isLoading = false;
      }
    },
    async fetchCheckoutSession() {
      const createCheckout = this.$fireFunc.httpsCallable(
        "saastarter-billing/create-checkout-session"
      );
      
      const successUrl = this.getCurrentBaseUrl() + this.successUrl;
      const cancelUrl = this.getCurrentBaseUrl() + this.cancelUrl;
      const response = await createCheckout({
        priceId: this.priceId,
        successUrl: successUrl,
        cancelUrl: cancelUrl,
      });
      this.checkoutSessionId = response.data;
    },
    getCurrentBaseUrl: function () {
      const baseUrl = (
        location.protocol +
        "//" +
        location.hostname +
        (location.port ? ":" + location.port : "")
      );

      return baseUrl;
    },
  },
});
</script>

