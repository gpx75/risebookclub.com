<script>
import Container from "./layout/Container";
import BaseButton from "./Products";
import Faqs from "./Faqs";

export default {
    components: { Container, BaseButton, Faqs },
};
</script>

<template>
    <section class="relative pt-32 md:pt-44" id="pricing">
        <div aria-hidden="true" class="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80">
            <div class="h-56 bg-gradient-to-br from-primary to-pink-flamingo-500 blur-[106px] dark:from-rise-700"></div>
            <div class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-rise-600"></div>
        </div>
        <container>
            <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
                <h2 class="text-3xl font-bold text-rise-700 dark:text-white md:text-4xl lg:text-5xl">Choose Your Journey</h2>
                <h3 class="md:text-1xl bg-clip-text text-center font-cursive text-xl text-pink-flamingo-600 lg:text-2xl">Navigate Your Next Read</h3>
                <p class="mt-4 text-center text-gray-600 dark:text-gray-300">With our Curated Themes and Diverse Books</p>
            </div>

            <div class="mt-12 md:mt-20">
                <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div class="flex flex-col justify-between rounded-3xl border border-gray-100 p-8 shadow-2xl shadow-gray-600/20 ring-1 ring-gray-200 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none lg:mt-8 lg:rounded-r-none xl:p-10">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 id="tier-freelancer" class="text-2xl font-bold text-primary dark:text-secondary">Dip into Discovery</h3>
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-900 dark:text-white">Attend a meeting.</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$25</span>
                                <span class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">/one-time</span>
                            </p>
                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-900 dark:text-white">
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Ideal for those who want to experience a meeting and explore the club's offering
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Choose a book based on the theme
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Then join the discussion
                                </li>
                            </ul>
                        </div>
                        <div class="mt-8 flex justify-center">
                            <base-button label="Buy" emphasis="primary" to="/register" />
                        </div>
                    </div>
                    <div class="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/20 ring-1 ring-gray-200 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none lg:z-10 lg:rounded-b-none xl:p-10">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 id="tier-startup" class="text-center text-3xl font-semibold leading-8 text-primary dark:text-secondary">Transformational Traveller</h3>
                                <!-- <p class="text-primary-600 rounded-full bg-white px-2.5 py-1 text-xs font-semibold leading-5 dark:text-black">Most popular</p> -->
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-900 dark:text-white">Year of Transformation & 12-month subscription.</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$200</span>
                                <span class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">/one-time</span>
                            </p>

                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-900 dark:text-white">
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none fill-current" viewBox="0 0 20 20" fill="" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Ideal for members seeking a profound, year-long journey of personal & spiritual transformation, deeply engaging with the club's diverse book selections, discussions and community group chats
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Join a welcome meeting for free
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Acess to 12 monthly meetings
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Acess to meeting summaries & library
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Join our WhatsApp group chat
                                </li>
                            </ul>
                        </div>
                        <div class="mt-8 flex justify-center">
                            <base-button label="Buy" emphasis="primary" to="/register" />
                        </div>
                    </div>
                    <div class="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/20 ring-1 ring-gray-200 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none lg:mt-8 lg:rounded-l-none xl:p-10">
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 id="tier-enterprise" class="text-2xl font-semibold leading-8 text-primary dark:text-secondary">Six-Month Seeker</h3>
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-900 dark:text-white">Journey of Growth & 6-month subscription.</p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$120</span>
                                <span class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">/one-time</span>
                            </p>

                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-900 dark:text-white">
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Perfect if you are ready to commit to a sustained period of exploration, growth, personal development and community engagement
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Join a welcome meeting for free
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Acess to 6 monthly meetings
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="text-primary-600 h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Access to meeting summaries
                                </li>
                            </ul>
                        </div>
                        <div class="mt-8 flex justify-center">
                            <base-button label="Buy" emphasis="primary" to="/register" />
                        </div>
                    </div>
                </div>
                <!-- <div class="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
                    <div class="flex flex-col gap-12 divide-y p-12 dark:divide-gray-800 md:flex-row md:divide-x md:divide-y-0">
                        <div class="text-center md:w-5/12">
                            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">Choose Your Membership</h3>
                            <p class="text-lg text-gray-600 dark:text-gray-300">1 year subscriptions</p>
                            <span class="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white"><span class="text-4xl text-primary dark:text-gray-200">$</span>234</span>

                            <div class="flex justify-center">
                                <base-button label="Join" emphasis="primary" to="/register" />
                            </div>

                            <p class="mt-12 text-sm text-gray-500 dark:text-gray-400">Includes : Security, Unlimited Storage, Payment, Search engine, and all about</p>
                        </div>
                        <div class="relative md:w-7/12 md:pl-12">
                            <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-gray-300">
                                <li class="space-x-2">
                                    <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                                    <span>First BookClubadvantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                                    <span>Second advantage weekly</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                                    <span>Third advantage donate to project</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                                    <span>Fourth, access to all components weekly</span>
                                </li>
                            </ul>
                            <p class="text-gray-700 dark:text-white">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
                            <div class="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale">
                                <nuxt-img class="h-8 w-auto lg:h-12" src="images/clients/airbnb.svg" width="100" alt="airbnb" />
                                <nuxt-img class="h-6 w-auto lg:h-8" src="images/clients/netflix.svg" width="100" alt="bissell" />
                                <nuxt-img class="h-8 w-auto lg:h-10" src="images/clients/ge.svg" width="100" height="100" alt="ge" />
                                <nuxt-img class="ww-auto h-8 lg:h-12" src="images/clients/microsoft.svg" width="100" alt="microsoft" />
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- <faqs /> -->
        </container>
    </section>
</template>
