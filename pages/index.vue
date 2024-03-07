<template>
    <div>
        <BlogView :blogs="blogs" />
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { fetchBlogPosts } from '~/services/blogService';

const { blogs, setBlogPosts } = useBlogStore();

onMounted(async () => {
    try {
        const blogPosts = await fetchBlogPosts();
        setBlogPosts(blogPosts);
    } catch (error) {
        const err = error as Error;
        console.log('Error fetching blog posts: ', err.message);
    }
});
</script>