<script>
import BaseCard from "./BaseCard";
</script>

<template>
    <div class="my-20 md:my-32">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl">Upcoming Themes</h3>
        <div class="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <base-card>
                <nuxt-img class="w-10" src="/images/security.webp" alt="safety icon illustration" height="512" width="512" />
                <div>
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Mindfulness</h4>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">The power of mindfulness and meditation. How simple things like rest and breathing can transform your life.</p>
                </div>
            </base-card>
            <base-card>
                <nuxt-img class="w-10" src="/images/card.webp" alt="payment card icon illustration" height="512" width="512" />
                <div>
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Consciousness</h4>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">The exploration of altered states of consciousness with dreaming, imagination and embodied simulation.</p>
                </div>
            </base-card>
            <base-card>
                <nuxt-img class="w-10" src="/images/xp.webp" alt="xp icon illustration" height="512" width="512" />
                <div>
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Communication</h4>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">Exploring the dynamics of communication & relationships, to build lasting connections or better understand when to walk away.</p>
                </div>
            </base-card>
        </div>
    </div>
</template>
