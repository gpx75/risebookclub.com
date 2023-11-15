<script>
export default {
    props: ["id", "question"],
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        expandAnswer() {
            return this.$refs.answer.scrollHeight;
        },
    },
};
</script>

<template>
    <div>
        <dl class="faq mx-auto max-w-2xl">
            <dt class="text-lg">
                <button @click="isActive = !isActive" type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="{id}" data-active="false">
                    <span class="font-medium text-gray-900 dark:text-white"> {{ question }} </span>
                    <span class="ml-6 flex h-7 items-center">
                        <svg :class="isActive ? 'rotate-180' : 'rotate-0'" class="arrow-down h-6 w-6 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </span>
                </button>
            </dt>
            <dd ref="answer" :style="isActive ? `max-height:${expandAnswer()}px` : 'max-height:0px'" class="faq-answer block overflow-hidden pr-12 duration-300 ease-in-out" :id="id">
                <slot />
            </dd>
        </dl>
    </div>
</template>
