<script>
definePageMeta({
    layout: "auth",
});

import BaseCard from "@/components/BaseCard";
import BaseButton from "@/components/BaseButton";

export default {
    components: {
        BaseCard,
        BaseButton,
    },
    data() {
        return {
            username: "",
            password: "",
        };
    },
};
</script>

<template>
    <div class="mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div class="mb-16">
            <nuxt-link href="/" aria-label="logo" class="flex items-center space-x-2">
                <div aria-hidden="true" class="flex space-x-1">
                    <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                    <div class="h-6 w-2 bg-primary"></div>
                </div>
                <span class="text-2xl font-bold text-gray-900 dark:text-white">Rise</span>
            </nuxt-link>
        </div>

        <base-card>
            <form @submit.prevent="" class="space-y-8">
                <div>
                    <h1 class="text-xl font-semibold text-gray-900 dark:text-white">Signin to your account</h1>
                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">
                        Don't have an account?
                        <nuxt-link class="text-blue-600 dark:text-blue-400" to="/register">Sign Up</nuxt-link>
                        for a free.
                    </p>
                </div>
                <div class="space-y-6">
                    <div>
                        <label for="email" class="mb-2 block text-gray-600 dark:text-gray-300">Email address</label>
                        <input v-model="username" type="email" name="email" id="email" autocomplete="user" class="peer block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700 dark:text-gray-300" />
                        <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                    </div>
                    <div>
                        <label for="password" class="mb-2 block text-gray-600 dark:text-gray-300">Password</label>
                        <input v-model="password" type="password" name="password" id="password" autocomplete="password" class="peer block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700 dark:text-gray-300" />
                        <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                    </div>
                </div>
                <base-button label="Signin" emphasis="primary" type="submit" />
            </form>
        </base-card>
    </div>
</template>
