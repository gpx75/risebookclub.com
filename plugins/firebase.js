// plugins/firebase.js

import { initializeApp } from "firebase/app";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
        measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID,
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
});
