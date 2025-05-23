<script setup lang="ts">
import { marked } from "marked";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

import "../../public/github-markdown.css";

const route = useRoute();
const id = route.params.id;
const content = ref("");
const error = ref(false);
onMounted(async () => {
  const result = await fetch(`/posts/${id}.md`);
  if (result.ok) {
    content.value = await result.text();
  } else {
    error.value = true;
  }
})
</script>

<template>
  <div>
    <div v-if="error">
      <h1 class="text-4xl text-pink-500 text-center font-bold m-5">Blog</h1>
      <h2 class="text-2xl text-red-500 text-center font-bold m-5">Error: 404 Not Found</h2>
    </div>
    <div v-else>
      <h1 class="text-4xl text-pink-500 text-center font-bold m-5">Blog</h1>
      <div class="max-w-[1000px] mx-auto">
        <div v-html="marked.parse(content)" class="markdown-body"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>