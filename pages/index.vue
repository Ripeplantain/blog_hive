<template>
    <div >
        <BlogView
            :blogs="blogs" />
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { fetchBlogPosts } from '~/services/blogService';
import type { Iblog } from '~/interfaces/blog';

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