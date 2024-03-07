<template>
  <button
    @click="navigateToCreatePost"
    class="bg-blue-800 cursor-pointer text-white text-xl p-6 border-0 rounded hover:bg-blue-600 delay-100 ease-in-out">
    Create Post</button>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToCreatePost() {
  router.push('/posts/create');
}
</script>