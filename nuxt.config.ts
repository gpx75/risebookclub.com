export default defineNuxtConfig({
    target: "static",
    plugins: ['@/plugins/firebase.js'],
    nitro: {
        // preset: "firebase",
        publicAssets: [
            {
                baseURL: "images",
                dir: "public/images",
                maxAge: 60 * 60 * 24 * 7, // 7 days
            },
        ],
        firebase: {
            nodeVersion: "20",
            gen: 2,
            httpsOptions: {
                region: "europe-west6",
                maxInstances: 3,
            },
        },
    },
    head: {
        htmlAttrs: {
            lang: "en",
            title: "The Rise Book Club",
        },
        meta: [
            {
                name: "description",
                content: "Read, Inspire, Support & Engage: Raise your consciousness for personal and spiritual development We support people to read more and evolve, whilst inspiring and supporting others.",
            },
            {
                name: "theme-color",
                media: "(prefers-color-scheme: light)",
                content: "black",
            },
            {
                name: "theme-color",
                media: "(prefers-color-scheme: light)",
                content: "white",
            },
        ],
        link: [{ rel: "icon", type: "image/svg+xml", href: "./favicon.svg" }],
    },
    css: ["@/assets/css/main.css"],
    modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxt/image", ],
    publicRuntimeConfig: {
        firebaseStorageUrl: `https://firebasestorage.googleapis.com/v0/b/${process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET}/o`,
    },
    image: {
        providers: {
            firebase: {
                provider: '~/providers/firebase.ts', // Path to your Firebase provider
                options: {}
            }
        }
    },
    googleFonts: {
        display: "swap",
        download: true,
        overwriting: false,
        inject: true,
        families: {
            Quicksand: true,
            "Shadows Into Light": true,
            "Fira Sans": true,
            "Fira Mono": true,
            "PT Serif": true,
        },
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
});
