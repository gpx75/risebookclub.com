<script>
import BaseButton from "./BaseButton";

export default {
    components: {
        BaseButton,
    },
};
</script>

<template>
    <div class="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12">
        <div class="relative md:w-1/2">
            <div aria-hidden="true" class="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60">
                <div class="h-full rounded-full bg-gradient-to-br from-primary to-pink-flamingo-400 blur-[106px] dark:from-blue-700"></div>
                <div class="dark:to-indigo-600 h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px]"></div>
            </div>
            <nuxt-img class="relative dark:hidden" src="/images/illus.webp" alt="stats illustration" width="1746" height="1746" />
            <nuxt-img class="relative hidden dark:block" src="/images/illus-dark.webp" alt="stats illustration" width="1746" height="1746" />
        </div>
        <div class="ml-auto h-full md:w-1/2">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">Go beyond with our top products</h3>
            <p class="my-12 text-gray-600 dark:text-gray-300">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat ? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. <br />
                <br />
                Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
            </p>
            <BaseButton label="Join" emphasis="primary" to="/register" />
        </div>
    </div>
</template>
