<script>
import Container from "./layout/Container";
import Products from "./Products";
import SolutionContent from "./SolutionContent";

export default {
    components: {
        Container,
        Products,
        SolutionContent,
    },
};
</script>

<template>
    <div class="pt-32 md:pt-44" id="solution">
        <container>
            <div class="text-gray-60Voices of Inspiration: Member Testimonials0 flex-row-reverse items-center justify-between space-y-12 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
                <div class="relative ml-auto h-full md:w-1/2">
                    <nuxt-img class="dark:hidden" src="/images/milestone-light.png" alt="app milestone" width="1174" height="1134" />
                    <nuxt-img class="hidden dark:block" src="/images/milestone-dark.png" alt="app milestone" width="1174" height="1134" />
                </div>

                <div class="md:w-1/2 lg:w-[47%]">
                    <h2 class="text-3xl font-bold text-rise-700 dark:text-white md:text-4xl lg:text-5xl">How it Works</h2>
                    <h3 class="md:text-1xl bg-clip-text font-cursive text-xl text-pink-flamingo-600 lg:text-2xl">We pick a theme. You pick a book.</h3>
                    <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-gray-300">
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span> There are monthly curated themes and you are free to discover and choose you're own book, to then share with the group</span>
                        </li>
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span>Don't worry, there is also a book list if you need support to get started</span>
                        </li>
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span>We are interactive and encourage deep meaningful discussions and everyone learns</span>
                        </li>
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span>After each meeting all members receive a discussion summary</span>
                        </li>
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span>To get the most out of the books we read, we take action and commit to making changes that will support our growth and transformation</span>
                        </li>
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span>Book breaks are allowed and you can choose your own medium for the theme, such as articles, blogs. papers etc.</span>
                        </li>
                        <li class="space-x-2">
                            <span class="font-semibold text-primary dark:text-gray-300">&check;</span>
                            <span>Members also have access to in-person social meetups and digital events with guest speakers.</span>
                        </li>
                    </ul>
                    <!-- <div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                        <div class="mt-8 flex gap-4 md:items-center">
                            <div class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                </svg>
                            </div>
                            <div class="w-5/6">
                                <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Chat Anytime</h3>
                                <p class="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
                            </div>
                        </div>
                        <div class="flex gap-4 pt-4 md:items-center">
                            <div class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                </svg>
                            </div>
                            <div class="w-5/6">
                                <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Real Time Location</h3>
                                <p class="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <products />
            <!-- <solution-content /> -->
        </container>
    </div>
</template>
