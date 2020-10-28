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
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="password"
        name="password"
        label="Password"
        validation="required"
      />

      <FormulateInput
        input-class="saastarter-btn-primary"
        type="submit"
        label="Log In"
        :disabled="isSubmitting"
      />
      <p
        v-if="hasLoginError"
        class="saastarter-error-message mt-4"
      >Login failed. Please check your email address and password.</p>
    </FormulateForm>
    <div class="my-10 flex justify-center items-center">
      <hr class="w-full" />
      <span class="px-2 text-gray-700">OR</span>
      <hr class="w-full" />
    </div>
    <google-sign-in></google-sign-in>
        <div class="text-center pt-12 pb-12">
      <p>
        Don't have an account?
        <nuxt-link to="/auth/signup" class="underline font-semibold">Register here.</nuxt-link>
      </p>
      <p>
        Forgot you password?
        <nuxt-link to="/auth/reset-password" class="underline font-semibold">Reset here.</nuxt-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import GoogleSignIn from "./GoogleSignIn.vue";

export default Vue.extend({
  components: {
    GoogleSignIn,
  },
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
        await this.$fireAuth.signInWithEmailAndPassword(
          this.values.email,
          this.values.password
        );
        this.$router.push(this.loginSuccessUrl);
      } catch (e) {
        console.error("error", e.code, e.message);
        this.isSubmitting = false;
        this.hasLoginError = true;
      }
    },
  },
  computed: {
    loginSuccessUrl() {
      return this.$saastarter.loginSuccessUrl;
    }
  }
});
</script>

