<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-9xl font-bold text-primary">RISE</h1>
        <h3 class="mb-5 text-3xl">Almost before we knew it, we had left the ground.</h3>
        <div class="card m-auto w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://api.lorem.space/image/book?w=400&h=225" alt="book" /></figure>
          <div class="card-body">
            <p class="font-cursive text-5xl text-white">If a dog chews books whose books does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useMeta({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  htmlAttrs: {
    "data-theme": "riseTheme",
  },
});
</script>
