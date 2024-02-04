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
            <div class="relative pt-40 xl:pt-36">
                <div class="gap-12 md:flex md:items-center">
                    <div class="w-full text-center sm:px-12">
                        <h1 class="bg-gradient-to-r from-rise-100 to-rise-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-center sm:text-6xl">Your Medium for Transformation</h1>
                        <div class="">
                            <h2 class="bg-gradient-to-r from-pink-flamingo-200 to-pink-flamingo-600 bg-clip-text font-cursive text-3xl tracking-tight text-transparent sm:text-center sm:text-6xl">Elevate Your Consciousness Whilst Reading Personal & Spiritual Development Books.</h2>
                            <p class="mt-8 text-xl text-zinc-700 dark:text-zinc-100">We meet online every last Friday of the month. All readers welcome!</p>

                            <div class="mt-8 flex w-full overflow-visible text-center md:mt-32 lg:mt-20 xl:mt-16">
                                <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 justify-center gap-6 sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                    <li>
                                        <nuxt-img quality="80" preload loading="lazy" src="/images/AdobeStock_488823903.jpeg" width="8256" height="5604" sizes="sm:100vw md:50vw lg:400px" class="inset-0 h-52 w-52 -rotate-3 rounded-3xl object-cover" />
                                    </li>
                                    <li>
                                        <nuxt-img quality="80" preload loading="lazy" src="/images/AdobeStock_466667427.jpg" width="8256" height="5604" sizes="sm:100vw md:50vw lg:400px" class="inset-0 h-52 w-52 -rotate-2 rounded-3xl object-cover" />
                                    </li>
                                    <li>
                                        <nuxt-img quality="80" preload loading="lazy" src="/images/AdobeStock_549218489.jpeg" width="8256" height="5604" sizes="sm:100vw md:50vw lg:400px" class="inset-0 h-52 w-52 rotate-2 rounded-3xl object-cover" />
                                    </li>
                                    <li>
                                        <nuxt-img quality="80" preload loading="lazy" src="/images/AdobeStock_340974509.jpg" width="8256" height="5604" sizes="sm:100vw md:50vw lg:400px" class="inset-0 h-52 w-52 -rotate-2 rounded-3xl object-cover" />
                                    </li>
                                    <li>
                                        <nuxt-img quality="80" preload loading="lazy" src="/images/AdobeStock_396283215.jpeg" width="8256" height="5604" sizes="sm:100vw md:50vw lg:400px" class="inset-0 h-52 w-52 rotate-3 rounded-3xl object-cover" />
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-20 flex justify-center gap-4 sm:gap-6">
                                <BaseButton emphasis="primary" label="Join our book club!" to="/membership" />
                                <BaseButton emphasis="secondary" label="Learn more" to="#solution" />
                            </div>
                        </div>
                    </div>
                    <!-- <div class="relative mt-20 md:mt-0">
                        <div class="-ml-6 md:-mr-72 lg:mr-0"> -->
                    <!-- <nuxt-img provider="firebase" class="w-auto" src="images/laptop.webp" alt="app screenshot" /> -->
                    <!-- <nuxt-img provider="firebase" class="hidden h-full object-cover object-left shadow-md dark:block" src="images/laptop.webp" alt="app screenshot" width="1628" height="1233" /> -->
                    <!-- </div>
                    </div> -->
                </div>
            </div>
        </Container>
    </section>
</template>
