<script>
import BaseCard from "./BaseCard";
</script>

<template>
    <div class="my-20 md:my-32">
        <!-- <h2 class="text-3xl font-bold text-rise-700 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl">Upcoming Themes</h2> -->
        <h2 class="text-center text-3xl font-bold text-rise-700 dark:text-white md:text-4xl lg:text-5xl">Upcoming Themes</h2>
        <h3 class="md:text-1xl bg-clip-text text-center font-cursive text-xl text-pink-flamingo-600 lg:text-2xl">Discover What's Next</h3>
        <p class="mt-4 text-center text-gray-600 dark:text-gray-300">Every Last Friday of the Month</p>
        <div class="relative mt-12 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
            <div class="card image-full w-96 bg-base-100 shadow-xl">
                <figure><nuxt-img quality="80" src="images/mindfullness.jpeg" alt="March" /></figure>
                <div class="card-body">
                    <h6 class="font-extrabold">MARCH</h6>
                    <h2 class="card-title font-cursive text-6xl">Mindfullness</h2>
                    <p>The power of mindfulness and meditation. How simple things like rest and breathing can transform your life.</p>
                    <div class="card-actions justify-end"></div>
                </div>
            </div>
            <div class="card image-full w-96 bg-base-100 shadow-xl">
                <figure><nuxt-img quality="80" src="images/consciousness.jpeg" alt="March" /></figure>
                <div class="card-body">
                    <h6 class="font-extrabold">APRIL</h6>
                    <h2 class="card-title font-cursive text-6xl">Consciousness</h2>
                    <p>The exploration of altered states of consciousness with dreaming, imagination and embodied simulation.</p>
                    <div class="card-actions justify-end"></div>
                </div>
            </div>
            <div class="card image-full w-96 bg-base-100 shadow-xl">
                <figure><nuxt-img quality="80" src="images/communication.png" alt="March" /></figure>
                <div class="card-body">
                    <h6 class="font-extrabold">MAY</h6>
                    <h2 class="card-title font-cursive text-6xl">Communication</h2>
                    <p>The exploration of altered states of consciousness with dreaming, imagination and embodied simulation.</p>
                    <div class="card-actions justify-end"></div>
                </div>
            </div>
        </div>
    </div>
</template>
