<template>
  <div>
    <FormulateForm v-model="values" @submit="handleLogin" class="pt-3 md:pt-8" v-if="!isSuccess">
      <FormulateInput
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="password"
        name="password"
        label="Password"
        validation="required|min:6"
      />
      <FormulateInput
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="password"
        name="password_confirm"
        label="Repeat password"
        validation-name="Password confirmation"
        validation="required|confirm"
      />

      <FormulateInput
        input-class="saastarter-btn-primary"
        type="submit"
        label="Reset password"
        :disabled="isSubmitting"
      />
      <p v-if="hasError" class="saastarter-error-message mt-4">Password reset failed.</p>
    </FormulateForm>

    <div v-if="isSuccess">
      <p class="text-center text-3xl">Password reset successful.</p>
      <p class="text-center text-md pt-3 md:pt-8"></p>
      <nuxt-link to="/auth/login">
        <button
          type="submit"
          class="saastarter-btn-secondary w-full text-lg font-bold p-2 mt-8"
        >Go to login</button>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    actionCode: {
      type: String,
    },
    userEmail: {
      type: String,
    },
  },
  data: function () {
    return {
      values: {},
      isSubmitting: false,
      hasError: false,
      isSuccess: false,
    };
  },
  methods: {
    handleLogin: async function () {
      this.isSubmitting = true;
      try {
        await this.$fireAuth.confirmPasswordReset(
          this.actionCode,
          this.values.password
        );
        await this.$fireAuth.signInWithEmailAndPassword(
          this.userEmail,
          this.values.password
        );
        this.isSuccess = true;
      } catch (e) {
        console.error("error", e.code, e.message);
        this.isSubmitting = false;
        this.hasError = true;
      }
    },
  },
});
</script>

