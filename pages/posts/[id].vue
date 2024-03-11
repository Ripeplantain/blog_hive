<template>
    <div class="p-12">
        <form @submit.prevent="handleUpdate">
            <input type="text" placeholder="Title" :value="blogPost.title"
                class="w-full p-2 border-2 border-gray-300 rounded-lg mb-4">
            <textarea
                :value="blogPost.body"
                name="body" id="body" cols="30" rows="10" placeholder="Content"
                class="w-full p-2 border-2 border-gray-300 rounded-lg mb-4"></textarea>
            <input type="submit" value="Edit Post"
                class="bg-blue-800 cursor-pointer text-white text-xl p-6 border-0 rounded hover:bg-blue-600 delay-100 ease-in-out">
        </form>
    </div>
</template>


<script lang="ts" setup>
import { updateBlog, fetchBlog } from '~/services/blogService';
import { useBlogStore } from '~/stores/blog';
import type { Iblog } from '~/interfaces/blog';
import useFlash from '~/composables/useFlash';

const route = useRoute();
const store = useBlogStore();
const { notify } = useFlash();

let blogPost = ref<Iblog>({
    id: 0,
    title: '',
    body: '',
    userId: 0
});

definePageMeta({
    title: 'Edit Blog Post',
    description: 'Edit blog post',
    middleware: 'is-admin'
});

onMounted(async () => {
    try {
        const blog = await fetchBlog(Number(route.params.id));
        blogPost.value = blog;
    } catch (error) {
        const err = error as Error;
        notify(err.message, 'error')
        console.log('Error fetching blog post: ', err.message);
    }
});

function handleUpdate(this: any) {
    updateBlog(blogPost.value);
    store.updateBlog(blogPost.value);
    blogPost.value = {
        id: 0,
        title: '',
        body: '',
        userId: 0
    };
    notify('Blog post updated successfully', 'success');
    setTimeout(() => {
        navigateTo('/')
    }, 5000);
}
</script>