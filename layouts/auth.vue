<script>
import Container from "@/components/layout/Container";
export default {
    components: {
        Container,
    },
};
</script>

<template>
    <main class="flex min-h-screen flex-col justify-center">
        <div class="w-full py-6">
            <container>
                <slot />
            </container>
        </div>
    </main>
</template>
