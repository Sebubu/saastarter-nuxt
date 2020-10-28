<template>
  <div class="container mx-auto px-2 pt-32">
    <saas-auth-callback />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "saastarter",
  head() {
    let title = "Email action";
    switch (this.mode) {
      case "verifyEmail": {
        title = "Email verification";
        break;
      }
      case "resetPassword": {
        title = "Password reset";
        break;
      }
      case "recoverEmail": {
        title = "Recover email";
        break;
      }
      case "missingParams": {
        title = "Missing parameters";
        break;
      }
    }

    const appName = this.$saastarter.appName;
    return {
      title: title + ' - ' + appName 
    };
  },
  data: function () {
    return {
      mode: "",
    };
  },
  mounted: function () {
    const mode = this.$route.query["mode"];
    if (!mode) {
        this.mode = "missingParams";
      }
  },
});
</script>

<style>
</style>
