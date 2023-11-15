<script>
import AppFooter from "~~/components/AppFooter.vue";
import AppHeader from "~~/components/AppHeader.vue";
export default {
    components: { AppFooter, AppHeader },
};
</script>

<template>
    <app-header />
    <main class="mb-40 min-h-screen">
        <slot></slot>
    </main>
    <app-footer />
</template>
