<script defineNuxtConfig>
export default {
    setup() {
        const title = ref("The Rise Book Club");
        const description = ref("Read, Inspire, Support & Engage: Raise your consciousness for personal and spiritual development. We support people to read more and evolve, whilst inspiring and supporting others.");

        useHead({
            title,
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {
                    name: "description",
                    content: description,
                },
                {
                    name: "theme-color",
                    media: "(prefers-color-scheme: dark)",
                    content: "black",
                },
                {
                    name: "theme-color",
                    media: "(prefers-color-scheme: light)",
                    content: "white",
                },
            ],
            link: [{ rel: "icon", type: "image/svg+xml", href: "./favicon.svg" }],
        });
    },
};
</script>

<template>
    <!-- <div class="flex h-screen items-center justify-center"><h1 class="text-4xl text-black dark:text-white">risebookclub.com</h1></div> -->
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
