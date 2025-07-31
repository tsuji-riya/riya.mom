<script setup lang="ts">
import Diamond from "@/components/Diamond.vue";
import NoisyText from "@/components/NoisyText.vue";

const descriptions = [
    "💬 Call me Riya",
  "🔭 I'm computer science student.",
  "😄 I like writing Java, TypeScript, Go.",
  "🔍️ I'm curious low-level computer science.",
  "👨‍💻Working on Loilo.inc. as a internship student, tysm."
]
</script>

<template>
  <img class="absolute right-0 top-100 sm:top-0 -z-20" src="/hero-gradient.svg" alt="hero-gradient"/>
  <div class="block sm:flex h-100 w-full max-w-[1000px] grid-cols-2 items-center justify-center p-5 my-20 mx-auto">
    <div class="w-full sm:w-1/2 m-3 font-bold">
      <h1 class="text-5xl font-bold text-left my-3 text-pink-400">
        <NoisyText text="Hello!" />
        <br />
        <NoisyText text="I'm riya." />
      </h1>
      <ul class="text-lg text-purple-800">
        <li class="my-1" v-for="description in descriptions"><NoisyText :text="description" /></li>
      </ul>
    </div>
    <Diamond class="w-full sm:w-1/2" />
  </div>
</template>

<style scoped>
</style>