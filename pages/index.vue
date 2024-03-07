<template>
    <div class="p-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        <BlogView
            :blogs="blogs" />
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { fetchBlogPosts } from '~/services/blogService';

const { blogs, addBlog } = useBlogStore();

onMounted(async () => {
    try {
        const blogPosts = await fetchBlogPosts();
        for (const blog of blogPosts) {
            addBlog(blog);
        }
    } catch (error) {
        const err = error as Error;
        console.log('Error fetching blog posts: ', err.message);
    }
});
</script>