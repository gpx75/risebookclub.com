<script>
import Container from "./layout/Container";
import Faqs from "./Faqs";

export default {
    components: { Container, Faqs },
};
</script>

<template>
    <section class="relative pt-8 md:pt-20" id="pricing">
        <div aria-hidden="true" class="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80">
            <div class="h-56 bg-gradient-to-br from-primary to-pink-flamingo-500 blur-[106px] dark:from-rise-700"></div>
            <div class="h-32 bg-gradient-to-r from-rise-200 to-sky-300 blur-[106px] dark:to-rise-800"></div>
        </div>
        <container>
            <faqs />
        </container>
    </section>
</template>
