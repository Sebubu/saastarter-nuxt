
const config = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "SaaStarter",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "Your ready to go template to start your SaaS with NuxtJs."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"
      }
    ],
    script: [
      {
        hid: "stripe-elements",
        src: "https://js.stripe.com/v3/",
        defer: true,
      },
    ],

  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/vue-formulate", 
    "~/plugins/global-components",
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    "~/components",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/firebase", 
    '~modules/nuxt.js'
  ],
  saastarter: {
    appName: 'SaaStarter',
    loginSuccessUrl: '/dashboard',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    defaultStyling: true
  },
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket:
        process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId:
        process.env.FIREBASE_MESSAGING_ID,
      appId: process.env.FIRBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    },
    services: {
      auth: {
        ssr: true
      },
      functions: {
        location: process.env.HOSTING_LOCATION || 'europe-west1'
      },
      firestore: true,
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};

/**
 * Configures the nuxt.config.js to make it work with the Firebase Emulator.
 */
const connectToFirebaseEmulator = function(nuxtConfig) {
    
  nuxtConfig["firebase"]["services"]["functions"] = {
    emulatorPort: 5001
  };
  nuxtConfig["firebase"]["services"]["firestore"] = {
    settings: {
      host: "localhost:8080",
      ssl: false
    }
  };
  nuxtConfig["render"] = {
    bundleRenderer: {
      runInNewContext: false
    }
  };
  return nuxtConfig;
};

if(process.env.NODE_ENV === 'development') {
  console.log('[DEV] Connect to Firebase Emulator');
  connectToFirebaseEmulator(config);
}

export default config;