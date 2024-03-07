<template>
  <div class="p-12">
    <form @submit.prevent="handleSubmit">
      <input
        v-model="postData.title"
        type="text" placeholder="Title" class="w-full p-2 border-2 border-gray-300 rounded-lg mb-4">
      <textarea
        v-model="postData.body"
        name="" id="body" cols="30" rows="10" placeholder="Content"
        class="w-full p-2 border-2 border-gray-300 rounded-lg mb-4"></textarea>
      <input type="submit" value="Add Post"
        class="bg-blue-800 cursor-pointer text-white text-xl p-6 border-0 rounded hover:bg-blue-600 delay-100 ease-in-out">
    </form>
  </div>
</template>

<script lang="ts" setup>
import { createBlog } from '~/services/blogService';
import { useBlogStore } from '~/stores/blog';
import { useRouter } from 'vue-router';

const postData = ref({
  title: '',
  body: '',
  userId: 1
});

const { addToBlogStore } = useBlogStore();
const router = useRouter();

function handleSubmit(this: any) {
  createBlog(postData.value);
  addToBlogStore(postData.value);
  postData.value = {
    title: '',
    body: '',
    userId: 0
  };
  router.push('/');
}
</script>

<style></style>