<template>
<div class="">
        <h3 class="text-xl font-bold mt-24 mb-2">Subscriptions</h3>

      <p v-if="this.$stripe().subscriptions.length === 0">No subscriptions made yet.</p>
      <table class="table-auto text-lg w-full" v-if="this.$stripe().subscriptions.length > 0">
        <thead>
          <tr class>
            <th class>Product</th>
            <th class>Status</th>
            <th class="hidden md:table-cell">Subscription id</th>
            <th class="hidden md:table-cell">Updated at</th>
          </tr>
        </thead>
        <tr v-for="sub in this.$stripe().subscriptions" :key="sub.subscriptionId">
          <td class="break-all">
            <span v-if="sub.priceId === 'price_1HPnPpAaFZg6wHCtRPdaFHNy'">Monthly subscription</span>
            <span v-if="sub.priceId === 'price_1HPnPpAaFZg6wHCtZr2MynTs'">Yearly subscription</span>
            <div class="pl-1 text-xs text-gray-500">{{sub.priceId}}</div>
          </td>
          <td>{{sub.status}}</td>
          <td class="text-gray-500 hidden md:table-cell text-sm">{{sub.subscriptionId}}</td>
          <td class="text-gray-500 hidden md:table-cell text-sm">
            <span v-if="sub.updatedAt">{{sub.updatedAt.toDate().toISOString()}}</span>
          </td>
        </tr>
      </table>

      <h3 class="text-xl font-bold mt-16 mb-2">One time payments</h3>
      <p v-if="this.$stripe().oneTimePayments.length === 0">No one time payments made yet.</p>
      <table class="table-auto text-lg w-full" v-if="this.$stripe().oneTimePayments.length > 0">
        <thead>
          <tr>
            <th class>Product</th>
            <th class>Status</th>
            <th class="hidden md:table-cell">Payment intent id</th>
            <th class="hidden md:table-cell">Updated at</th>
          </tr>
        </thead>
        <tr v-for="payment in this.$stripe().oneTimePayments" :key="payment.paymentIntentId">
          <td class="break-all">
            <span v-if="payment.priceId === 'price_1HSIY0AaFZg6wHCtdkQeYN3S'">Lifetime deal</span>
            <div class="pl-1 text-xs text-gray-500 break-all">{{payment.priceId}}</div>
          </td>
          <td>{{payment.status}}</td>
          <td
            class="break-all hidden md:table-cell text-gray-500 text-sm"
          >{{payment.paymentIntentId}}</td>
          <td
            class="hidden md:table-cell text-gray-500 text-sm"
          >{{payment.updatedAt.toDate().toISOString()}}</td>
        </tr>
      </table>
      </div>
</template>

<style>
table th {
  @apply px-4 py-2 text-gray-700;
}
table td {
  @apply border px-4 py-2;
}
</style>

<script>
import Vue from "vue";


export default Vue.extend({
  components: {
  }
});
</script>

