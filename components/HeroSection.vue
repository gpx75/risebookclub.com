<script>
import BaseButton from "@/components/BaseButton.vue";
import Container from "@/components/layout/Container.vue";

export default {
    components: {
        Container,
        BaseButton,
    },
};
</script>

<template>
    <section class="overflow-hidden dark:bg-darker lg:overflow-auto" id="home">
        <Container>
            <div class="relative ml-auto pt-40 xl:pt-36">
                <div class="gap-12 md:flex md:items-center">
                    <div class="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
                        <h1 class="text-4xl font-black dark:text-white md:text-5xl xl:text-6xl">Join Our Book Club for Transformation!</h1>
                        <div class="">
                            <h2 class="mt-8 font-cursive text-4xl text-gray-700 dark:text-gray-100">Elevate Your Consciousness Through Personal & Spiritual Development Readings.</h2>
                            <p class="mt-8 text-xl text-gray-700 dark:text-gray-100">We gather online every first Friday of the month. All book enthusiasts welcome!"</p>
                            <div class="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                                <BaseButton emphasis="primary" label="Join" to="/register" />
                                <BaseButton emphasis="secondary" label="Learn more" to="#howto" />
                            </div>
                        </div>
                    </div>
                    <div class="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
                        <div class="-ml-6 md:-mr-72 lg:mr-0">
                            <nuxt-img provider="firebase" class="h-full object-cover object-left dark:hidden" src="images/hero.webp" alt="app screenshot" width="1628" height="1233" />
                            <nuxt-img provider="firebase" class="hidden h-full object-cover object-left dark:block" src="images/hero-dark.webp" alt="app screenshot" width="1628" height="1233" />
                        </div>
                    </div>
                </div>

                <div class="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
                    <!-- <span class="text-sm font-semibold tracking-wider text-gray-800 dark:text-white"> Join our next book club meeting! </span> -->
                    <div class="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                        <nuxt-img class="h-8 w-auto lg:h-14" src="images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="100" height="" />
                        <nuxt-img class="h-6 w-auto lg:h-10" src="images/clients/google.svg" loading="lazy" alt="bissell" width="100" height="" />
                        <nuxt-img class="h-6 w-auto lg:h-10" src="images/clients/ge.svg" loading="lazy" alt="ge" width="100" height="100" />
                        <nuxt-img class="h-6 w-auto lg:h-10" src="images/clients/netflix.svg" loading="lazy" alt="lilly" width="100" height="100" />
                        <nuxt-img class="h-8 w-auto lg:h-14" src="images/clients/microsoft.svg" loading="lazy" alt="microsoft" width="100" height="" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
