<script>
import SolutionSection from "@/components/SolutionSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import PricingSection from "@/components/PricingSection.vue";

export default {
    components: {
        HeroSection,
        FeaturesSection,
        SolutionSection,
        ReviewsSection,
        PricingSection,
    },
};
</script>

<template>
    <hero-section />
    <features-section />
    <solution-section />
    <reviews-section />
    <pricing-section />
</template>
