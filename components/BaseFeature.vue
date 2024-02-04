<script>
export default {
    props: ["title", "description"],
};
</script>

<template>
    <div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
        <div class="flex h-10 w-10 rounded">
            <slot />
        </div>
        <div>
            <h2 class="0 text-xl font-semibold text-white dark:text-white">{{ title }}</h2>
            <p class="text-greeen-600 mt-3 dark:text-gray-400">{{ description }}</p>
        </div>
    </div>
</template>
