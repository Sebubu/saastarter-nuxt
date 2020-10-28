<template>
  <div>
    <FormulateForm v-model="values" @submit="handleLogin" class="pt-3 md:pt-8">
      <FormulateInput
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="text"
        name="name"
        label="Name"
        validation="required"
      />
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

      <FormulateInput input-class="saastarter-btn-primary" type="submit" label="Sign Up" :disabled="isSubmitting" />
      <p v-if="hasError" class="saastarter-error-message mt-4">Signup failed. Have you already signed up?</p>
    </FormulateForm>
    <div class="my-10 flex justify-center items-center">
      <hr class="w-full" />
      <span class="px-2 text-gray-700">OR</span>
      <hr class="w-full" />
    </div>
    <google-sign-in></google-sign-in>
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
      hasError: false,
    };
  },
  methods: {
    handleLogin: async function () {
      this.isSubmitting = true;
      try {
        const credentials = await this.$fireAuth.createUserWithEmailAndPassword(
          this.values.email,
          this.values.password
        );
        await credentials.user?.sendEmailVerification();
        credentials.user.updateProfile({
          displayName: this.values.name,
        });

        this.$router.push(this.loginSuccessUrl);
      } catch (e) {
        console.error("error", e.code, e.message);
        this.isSubmitting = false;
        this.hasError = true;
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

