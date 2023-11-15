<script>
import Container from "@/components/layout/Container";
export default {
    components: {
        Container,
    },
    props: ["error"],
};
</script>

<template>
    <section v-if="error.statusCode == 404" class="flex min-h-screen flex-col justify-center">
        <div class="w-full py-6 text-center">
            <div class="mx-auto w-max">
                <span class="sr-only">
                    <a href="https://www.flaticon.com/free-icons/empty" title="empty icons">Empty icons created by Ghozi Muhtarom - Flaticon</a>
                </span>
                <nuxt-img class="-ml-6 w-36" src="/images/page.png" alt="page icon illustration" width="512" height="512" />
            </div>
            <div class="mt-8">
                <h1 class="text-center text-3xl font-semibold text-gray-900 dark:text-white">Page Not found !</h1>
                <p class="mb-6 mt-3 text-gray-600 dark:text-gray-300">We can't find the page you're looking for.</p>
                <nuxt-link href="/" class="rounded-full px-3 py-1.5 text-primary transition duration-300 hover:bg-gray-50 dark:text-blue-300 dark:hover:bg-gray-800/60">Take me home</nuxt-link>
            </div>
        </div>
    </section>
</template>
