<script>
import BaseButton from "./BaseButton.vue";
import Logo from "./Logo.vue";
import Container from "./layout/Container.vue";

export default {
    components: { Container, BaseButton, Logo },
    data() {
        return {
            isToggled: false,
            links: [
                {
                    to: "/#about",
                    label: "Reading Style",
                },
                {
                    to: "/#solution",
                    label: "How it Works",
                },
                {
                    to: "/#reviews",
                    label: "Testimonials",
                },
                {
                    to: "/#pricing",
                    label: "Membership",
                },
                // {
                //     to: "/login",
                //     label: "Login",
                // },
                {
                    to: "/#faq",
                    label: "FAQ",
                },
            ],
        };
    },
};
</script>

<template>
    <header>
        <nav class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
            <Container>
                <div class="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4">
                    <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                        <nuxt-link href="/#home" aria-label="logo" class="flex items-center space-x-2">
                            <div aria-hidden="true" class="flex space-x-1">
                                <Logo classes="dark:fill-white fill-brand w-44 " orient="horizontal" />
                                <!-- <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                                <div class="h-6 w-2 bg-primary"></div> -->
                            </div>
                            <!-- <span class="font-logo text-2xl font-bold text-gray-900 dark:text-white">RISE Bookclub</span> -->
                        </nuxt-link>

                        <button @click="isToggled = !isToggled" class="relative flex max-h-10 items-center lg:hidden">
                            <div aria-label="humburger" class="relative -mr-6 p-6">
                                <span class="sr-only">
                                    {{ isToggled ? "Close navbar menu" : "Open navbar menu" }}
                                </span>
                                <div aria-hidden="true" :class="isToggled ? 'translate-y-1.5 rotate-45' : ''" class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                                <div aria-hidden="true" :class="isToggled ? '-translate-y-1 -rotate-45' : ''" class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                            </div>
                        </button>
                    </div>
                    <div @click="isToggled = !isToggled" aria-hidden="true" :class="isToggled ? 'origin-top scale-y-100' : ''" class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
                    <div :class="isToggled ? 'visible fixed scale-100 opacity-100 lg:translate-y-0' : 'invisible scale-90 opacity-0'" class="absolute left-0 top-full z-20 w-full origin-top-right translate-y-1 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
                        <div class="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                            <ul class="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                <li @click="isToggled = false" v-for="link in links" :key="link.to">
                                    <nuxt-link :to="link.to" class="block transition hover:text-primary dark:hover:text-white md:px-4">
                                        <span>
                                            {{ link.label }}
                                        </span>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-12 lg:mt-0">
                            <base-button size="sm" to="/membership" label="Join" emphasis="primary" />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    </header>
</template>
