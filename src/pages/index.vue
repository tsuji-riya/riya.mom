<script setup lang="ts">
import Diamond from "@/components/Diamond.vue";
</script>

<template>
  <img class="absolute right-0 top-100 sm:top-0 -z-20" src="/hero-gradient.svg" alt="hero-gradient"/>
  <div class="block sm:flex h-100 w-full max-w-[1000px] grid-cols-2 items-center justify-center p-5 my-20 mx-auto">
    <div class="w-full sm:w-1/2 m-3 font-bold">
      <h1 class="text-5xl font-bold text-left my-3 text-pink-400">Hello! <br />I'm riya.</h1>
      <ul class="text-lg text-purple-800">
        <li class="my-1">💬 Call me Riya</li>
        <li class="my-1">🔭 I'm computer science student.</li>
        <li class="my-1">😄 I like writing Java, TypeScript, Go.</li>
        <li class="my-1">🔍️ I'm curious low-level computer science.</li>
        <li class="my-1">👨‍💻Working on <a href="https://github.com/loilo-inc" target="_blank" class="underline">Loilo.inc.</a> as a internship student, tysm.</li>
      </ul>
    </div>
    <Diamond class="w-full sm:w-1/2" />
  </div>
</template>

<style scoped>
</style>