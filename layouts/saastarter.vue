<template>
  <div>
    <div>
      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="flex justify-center md:justify-start pt-12 md:pl-12">
            <div>
              <nuxt-link to="/" v-if="!isAuthenticated">
                Nuxt Components
              </nuxt-link>
              <nuxt-link to="/dashboard" v-if="isAuthenticated">
                Nuxt Components
              </nuxt-link>
            </div>
          </div>

          <div
            class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
          >
            <Nuxt />
          </div>
        </div>

        <div class="w-1/2 shadow-2xl fixed right-0">
          <img class="support-image grayscale" src="/img/mountains.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.support-image {
  min-height: 100vh;
  @apply object-cover w-full h-full hidden;
}
@media only screen and (min-width: 768px) {
  .support-image {
    @apply block;
  }
}
.grayscale {
  filter: grayscale(50%);
  --webkit-filter: grayscale(50%);
  --moz-filter: grayscale(50%);
  --o-filter: grayscale(50%);
  --ms-filter: grayscale(50%);
}
</style>

<script>
import Vue from "vue";


export default Vue.extend({
  data: function () {
    return {
      user: null,
      unsubscribeAuthChange: () => {},
    };
  },
  mounted: function () {
    this.unsubscribeAuthChange = this.$fireAuth.onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  beforeDestroy: function () {
    this.unsubscribeAuthChange();
  },
  computed: {
    isAuthenticated: function () {
      return !!this.user;
    },
  },
});
</script>
