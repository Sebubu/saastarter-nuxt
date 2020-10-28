<template>
  <div>
    <FormulateForm v-model="values" @submit="handleLogin" class="pt-3 md:pt-8">
      <FormulateInput
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="text"
        name="email"
        label="Email address"
        validation="required|email"
      />
      <FormulateInput
        input-class="saastarter-btn-primary"
        type="submit"
        label="Reset"
        :disabled="isSubmitting"
      />
      <p v-if="hasLoginError" class="saastarter-error-message mt-4">
        Password reset failed. Please check your email address.
      </p>
    </FormulateForm>

    <div class="text-center pt-12 pb-12">
      <p>
        Don't have an account?
        <nuxt-link to="/auth/signup" class="underline font-semibold"
          >Register here.</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      values: {},
      isSubmitting: false,
      hasLoginError: false,
    };
  },
  methods: {
    handleLogin: async function () {
      this.isSubmitting = true;
      try {
        await this.$fireAuth.sendPasswordResetEmail(this.values.email);
        this.$router.push("/auth/reset-password/sent");
      } catch (e) {
        console.error("error", e.code, e.message);
        this.isSubmitting = false;
        this.hasLoginError = true;
      }
    },
  },
});
</script>

