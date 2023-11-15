<script>
export default {
    props: ["label", "type", "emphasis", "to", "size"],
};
</script>

<template>
    <component :is="to ? 'a' : 'button'" :href="to" :class="emphasis == 'primary' ? 'before:bg-primary' : 'before:border before:border-transparent before:bg-primary/10 dark:before:border-gray-700 dark:before:bg-gray-800'" :type="type" :data-size="size" class="relative flex h-11 w-full items-center justify-center px-5 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 data-[size=sm]:h-9 data-[size=sm]:px-4">
        <span class="data-[size=sm]:text-sm" :data-size="size" :class="emphasis == 'primary' ? 'text-white' : 'text-primary dark:text-white'">
            {{ label }}
        </span>
    </component>
</template>

<style scoped>
a {
    @apply w-max;
}
span {
    @apply relative w-max text-base font-semibold;
}
</style>
