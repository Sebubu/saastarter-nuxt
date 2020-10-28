<template>
  <div>
    <header class="mb-10 flex flex-row justify-between container mx-auto mt-12">
      <nuxt-link to="/dashboard">
        Nuxt Components
      </nuxt-link>
      <nav>
        <div class="flex justify-center items-center flex-wrap" v-if="!isLoading">
          <nuxt-link class="ml-2" to="/dashboard/demos/stripe">Stripe</nuxt-link>
          <dashboard-menu class="ml-2">
            <nuxt-link class="cursor-pointer w-full" to="/auth/profile">
              <div class="hover:bg-gray-200 py-2 px-2 hover:text-black">Profile</div>
            </nuxt-link>
            <saas-stripe-portal>
              <div class="hover:bg-gray-200 py-2 px-2 hover:text-black cursor-pointer">Billing</div>
            </saas-stripe-portal>
            <a class="cursor-pointer w-full" v-on:click="logout">
              <div class="hover:bg-gray-200 py-2 px-2 hover:text-black">Logout</div>
            </a>
          </dashboard-menu>
        </div>
      </nav>
    </header>

    <Nuxt v-if="!isLoading" />

    <div class="mb-24 mt-32 text-center" v-if="isLoading">
      <saas-loading-spinner class="mx-auto" />
    </div>


  </div>
</template>

<style>
</style>

<script>
import Vue from "vue";


import DashboardMenu from "@/components/DashboardMenu.vue";
import CustomerPortalUrl from "@/lib/components/billing/StripePortal.vue";

export default Vue.extend({
  components: {

    DashboardMenu,
    CustomerPortalUrl,
  },
  data: function () {
    return {
      isLoading: true,
      unsubscribeAuthChange: () => {},
    };
  },
  methods: {
    logout: async function () {
      await this.$fireAuth.signOut();
      this.$router.push("/");
    },
  },
  mounted: function () {
    this.unsubscribeAuthChange = this.$fireAuth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoading = false;
      } else {
        this.$router.push("/auth/login");
      }
    });
  },
  beforeDestroy: function () {
    this.unsubscribeAuthChange();
  },
});
</script>
