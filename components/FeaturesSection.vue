<script>
import Container from "@/components/layout/Container";
import BaseFeature from "@/components/BaseFeature";

export default {
    components: {
        Container,
        BaseFeature,
    },
};
</script>
<template>
    <section class="relative pt-32 md:pt-44" id="about">
        <Container>
            <div class="mx-auto md:w-3/5">
                <h2 class="text-center text-3xl font-bold text-rise-700 dark:text-white md:text-4xl lg:text-5xl">Reading style</h2>
                <h3 class="text-center font-cursive text-2xl text-pink-flamingo-600">We read non-fiction books.</h3>
                <p class="mt-4 text-center text-gray-600 dark:text-gray-300">We support people to read more and engage, whilst inspiring and supporting others.</p>
            </div>

            <div class="mt-16 md:mt-20">
                <div class="relative grid rounded-3xl border border-gray-200 bg-rise-100 p-1 dark:border-gray-800 lg:grid-cols-2">
                    <div class="absolute inset-0 hidden h-max dark:block lg:my-auto">
                        <div aria-hidden="true" class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl">
                            <div class="h-60 bg-gradient-to-br from-primary to-pink-flamingo-400 blur-3xl dark:from-blue-700"></div>
                            <div class="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-rise-600"></div>
                        </div>
                    </div>
                    <div>
                        <div class="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
                            <div class="-mb-8 flex flex-wrap overflow-hidden">
                                <div class="">
                                    <nuxt-img alt="happy reader" src="images/happy_reader.png" class="max-w-full border-none" />
                                </div>
                            </div>

                            <!-- <nuxt-img class="rounded-full" quality="80" preload loading="lazy" src="/images/AdobeStock_318843139.jpg" alt="xp icon illustration" width="512" height="512" loading="lazy" /> -->
                            <!-- <div class="mx-auto text-center sm:w-2/5">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Raise your consciousness for personal and spiritual development</h2>
                                <p class="mt-3 text-gray-600 dark:text-gray-400">We support people to read more and evolve, whilst inspiring and supporting others.</p>
                            </div> -->
                        </div>
                    </div>
                    <div class="relative grid overflow-hidden rounded-[1.25rem] bg-white bg-gradient-to-r from-primary p-1 opacity-80 dark:bg-gray-800/50 sm:grid-cols-2">
                        <base-feature title="READ" description="We read non-fiction books. Use our monthly themes as a guide & choose your own book.">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                            </svg> -->
                            <nuxt-img quality="80" preload loading="lazy" src="images/read.png" alt="read" />
                        </base-feature>

                        <base-feature title="INSPIRE" description="We are curious & conscious. To inpsire and awaken the mind, body and soul's inner wisdom.">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
                            </svg> -->
                            <nuxt-img quality="80" preload loading="lazy" src="images/inspire.png" alt="inspire" />
                        </base-feature>

                        <base-feature title="SUPPORT" description="We take action from the books we read. All members are supported to learn, develop and grow.">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                            </svg> -->
                            <nuxt-img quality="80" preload loading="lazy" src="images/support.png" alt="support" />
                        </base-feature>

                        <base-feature title="ENGAGE" description="We have interesting & diverse discussions. Sharing perspectives, deepening connections and community">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg> -->
                            <nuxt-img quality="80" preload loading="lazy" src="images/engage.png" alt="engage" />
                        </base-feature>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
