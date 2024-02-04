<script>
definePageMeta({
    layout: "auth",
});

import BaseCard from "@/components/BaseCard";
import BaseButton from "@/components/BaseButton";

import PricingSection from "@/components/PricingSection.vue";

export default {
    components: {
        BaseCard,
        BaseButton,
        PricingSection,
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
        };
    },
};
</script>

<template>
    <pricing-section />
</template>
