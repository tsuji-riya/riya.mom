<script setup lang="ts">
import posts from "@/generated/posts.json";
</script>

<template>
  <h1 class="text-4xl text-pink-500 text-center font-bold m-5">Blog</h1>
  <ul class="list-disc text-purple-800 text-lg max-w-[1000px] mx-auto pl-10">
    <li v-for="post in posts">
      <RouterLink :to="'/blog/' + post.path" class="underline">
        <span>{{post.name}}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>