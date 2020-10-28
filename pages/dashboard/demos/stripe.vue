<template>
  <div class="container mx-auto px-2 pt-12 pb-12">
    <div class>
      <saas-stripe-checkout price-id="price_1HPnPpAaFZg6wHCtRPdaFHNy">
        <button class="saastarter-btn-primary">Checkout Monthly</button>
      </saas-stripe-checkout>

      <saas-stripe-checkout price-id="price_1HPnPpAaFZg6wHCtZr2MynTs">
        <button class="saastarter-btn-primary">Checkout Yearly</button>
      </saas-stripe-checkout>

      <saas-stripe-checkout price-id="price_1HSIY0AaFZg6wHCtdkQeYN3S">
        <button class="saastarter-btn-primary">One time payment</button>
      </saas-stripe-checkout>
    </div>

    <subscription-tables />
  </div>
</template>

<script>
import Vue from "vue";
import SubscriptionTables from '@/components/SubscriptionTables.vue';

export default Vue.extend({
  components: {
    SubscriptionTables
  },
  layout: "dashboard",
  head() {
    const appName = this.$saastarter.appName;
    return {
      title: "Stripe - " + appName,
    };
  },
});
</script>

<style>
</style>
