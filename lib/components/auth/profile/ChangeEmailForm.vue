<template>
  <div>
    <FormulateForm v-model="values" @submit="handleLogin" v-if="!isSuccess">
      <FormulateInput
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="text"
        name="email"
        label="New email"
        validation="required|email"
      />
      <FormulateInput
        input-class="saastarter-text-input"
        label-class="text-lg"
        error-class="saastarter-error-message"
        outer-class="pt-4"
        type="text"
        name="email_confirm"
        label="Confirm new email"
        validation-name="Email confirmation"
        validation="required|email|confirm"
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

      <p v-if="isPublicDemo" class="saastarter-error-message mt-4">
        Password change is deactivated because your are logged in as
        <span class="font-bold">demo@saastarter.com</span>. Sign up with your
        email address to test this functionality.
      </p>

      <div class="flex flex-row-reverse">
        <FormulateInput
          input-class="saastarter-btn-secondary text-lg font-bold p-2 mt-8"
          type="submit"
          label="Change"
          :disabled="isSubmitting || isPublicDemo"
        />
      </div>
      <p v-if="hasLoginError" class="saastarter-error-message mt-4">
        The provided password is wrong.
      </p>
      <p v-if="hasChangeError" class="saastarter-error-message mt-4">
        Failed to changed the email address. Please try again later.
      </p>
    </FormulateForm>
    <div v-if="isSuccess" class="mt-2">
      <p>
        <span class="font-bold">Success.</span> Please head to your inbox and
        verify your new email address.
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import * as firebase from "firebase/app";

export default Vue.extend({
  components: {},
  data: function () {
    return {
      values: {},
      isSubmitting: false,
      hasLoginError: false,
      hasChangeError: false,
      isSuccess: false,
    };
  },
  computed: {
    isPublicDemo() {
      const user = this.$fireAuth.currentUser;
      return user.email == "demo@saastarter.com";
    },
  },
  methods: {
    handleLogin: async function () {
      this.isSubmitting = true;
      const user = this.$fireAuth.currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        this.values.password
      );
      try {
        await user.reauthenticateWithCredential(credential);
      } catch (e) {
        console.error("error", e.code, e.message);
        this.isSubmitting = false;
        this.hasLoginError = true;
        return;
      }
      try {
        await this.$fireAuth.currentUser.updateEmail(this.values.email);
        this.isSuccess = true;
      } catch (e) {
        console.error("error", e.code, e.message);
        this.isSubmitting = false;
        this.hasChangeError = true;
      }

      try {
        await this.$fireAuth.currentUser.sendEmailVerification();
      } catch (e) {
        console.error("error", e.code, e.message);
      }
    },
  },
});
</script>

