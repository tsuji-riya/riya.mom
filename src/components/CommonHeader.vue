<script setup lang="ts">
type Route = {
  name: string;
  path: string;
}

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]
</script>

<template>
  <header class="flex w-full items-center justify-center gap-10 p-5 bg-white shadow-md">
    <RouterLink v-for="route of routes" :to="route.path" class="block text-xl text-pink-500 font-bold" :class="$route.path === route.path ? 'underline' : ''">{{route.name}}</RouterLink>
  </header>
</template>

<style scoped>

</style>