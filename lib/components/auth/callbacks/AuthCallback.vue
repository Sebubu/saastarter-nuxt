<template>
  <div class="">
    <div v-if="!mode">
      <loading-spinner class="mx-auto" />
    </div>
    <div v-if="mode === 'verifyEmail'">
      <email-verification :actionCode="actionCode" />
    </div>
    <div v-if="mode === 'resetPassword'">
      <reset-password :actionCode="actionCode" />
    </div>
    <div v-if="mode === 'recoverEmail'">
      <email-recovery :actionCode="actionCode" />
    </div>
    <div v-if="mode === 'missingParams'">
      <p class="text-center text-3xl">Uppss.</p>
      <p class="text-center text-md pt-3 md:pt-8">This link seems to be broken.</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import EmailVerification from "./EmailVerification.vue";
import ResetPassword from "./ResetPassword.vue";
import EmailRecovery from "./EmailRecovery.vue";

export default Vue.extend({
  components: {
    EmailVerification,
    ResetPassword,
    EmailRecovery,
  },
  data: function () {
    return {
      mode: "",
      actionCode: "",
    };
  },
  mounted: function () {
    this.checkingActionCodeValid();
  },
  methods: {
    checkingActionCodeValid: async function () {
      const mode = this.$route.query["mode"];
      const actionCode = this.$route.query["oobCode"];
      if (!mode || !actionCode) {
        this.mode = "missingParams";
        return;
      }

      this.mode = mode;
      this.actionCode = actionCode;
    },
  },
});
</script>

<style>
</style>
