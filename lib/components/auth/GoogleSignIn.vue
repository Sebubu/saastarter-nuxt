<template>
  <div>
    <button v-on:click="handleLogin" class="btn border border-gray-500 rounded-md px-4 py-2 w-full hover:bg-black hover:text-white hover:border-black">
      <svg class="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
        <defs>
          <filter
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            id="filter-1"
          >
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0"
              in="shadowBlurOuter1"
              type="matrix"
              result="shadowMatrixOuter1"
            />
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0"
              in="shadowBlurOuter2"
              type="matrix"
              result="shadowMatrixOuter2"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <rect id="path-2" x="0" y="0" width="40" height="40" rx="2" />
        </defs>
        <g
          id="Google-Button"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <g
            id="9-PATCH"
            sketch:type="MSArtboardGroup"
            transform="translate(-608.000000, -160.000000)"
          />
          <g
            id="btn_google_light_normal"
            sketch:type="MSArtboardGroup"
            transform="translate(-1.000000, -1.000000)"
          >
            <g
              id="button"
              sketch:type="MSLayerGroup"
              transform="translate(4.000000, 4.000000)"
              filter="url(#filter-1)"
            >
              <g id="button-bg">
                <use
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                  sketch:type="MSShapeGroup"
                  xlink:href="#path-2"
                />
                <use fill="none" xlink:href="#path-2" />
                <use fill="none" xlink:href="#path-2" />
                <use fill="none" xlink:href="#path-2" />
              </g>
            </g>
            <g
              id="logo_googleg_48dp"
              sketch:type="MSLayerGroup"
              transform="translate(15.000000, 15.000000)"
            >
              <path
                d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                id="Shape"
                fill="#4285F4"
                sketch:type="MSShapeGroup"
              />
              <path
                d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                id="Shape"
                fill="#34A853"
                sketch:type="MSShapeGroup"
              />
              <path
                d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                id="Shape"
                fill="#FBBC05"
                sketch:type="MSShapeGroup"
              />
              <path
                d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                id="Shape"
                fill="#EA4335"
                sketch:type="MSShapeGroup"
              />
              <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape" sketch:type="MSShapeGroup" />
            </g>
            <g id="handles_square" sketch:type="MSLayerGroup" />
          </g>
        </g>
      Sign in with Google
    </button>
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";

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
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await this.$fireAuth.signInWithPopup(provider);
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

