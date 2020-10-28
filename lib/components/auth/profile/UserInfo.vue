<template>
  <div class="flex items-center flex-wrap -mt-4 text-lg">
    <div class="flex-grow-0 mt-4">
      <user-photo class="w-12 h-12 lg:w-16 lg:h-16 mr-8" />
    </div>

    <div class="mt-4">
      <p v-if="!isLoading" class="break-all font-bold">{{user.displayName}}</p>
      <div v-if="isLoading" class="w-32">
        <Skeleton />
      </div>
      <p v-if="!isLoading" class="break-all">{{user.email}}</p>
      <div v-if="isLoading" class="w-48">
        <Skeleton />
      </div>
      <div class="ml-2 saastarter-error-message">
        <div v-if="!isLoading && !user.emailVerified" id="email-verification">
          <div class="inline-block">
            <svg
              class="w-4 h-4 mb-1 inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Your email is not verified.
            <a
              class="cursor-pointer underline"
              v-if="!verificationMailSent && !verificationError"
              @click="sendVerificationMail"
            >Send verification email.</a>
          </div>

          <div v-if="!isLoading" class="inline-block">
            <p
              v-if="verificationMailSent && !verificationError"
              class="underline font-bold"
            >Verification email sent.</p>
            <p v-if="verificationError" class="font-bold">Please try it again later.</p>
          </div>
        </div>
        <div class="text-sm"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import UserPhoto from "./UserPhoto.vue";
import { Skeleton } from "vue-loading-skeleton";

export default Vue.extend({
  components: {
    UserPhoto,
    Skeleton,
  },
  data: function () {
    return {
      isLoading: true,
      user: this.$fireAuth.currentUser,
      verificationMailSent: false,
      verificationError: false,
    };
  },
  mounted: function () {
    this.$fireAuth.onAuthStateChanged((user) => {
      this.isLoading = false;
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
  },
  methods: {
    sendVerificationMail: async function () {
      try {
        await this.user.sendEmailVerification();
        this.verificationMailSent = true;
      } catch (e) {
        console.error(e);
        this.verificationError = true;
      }
    },
  },
});
</script>

