<template>
    <div class="p-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        <BlogView
            :blogs="pagedBlogs" />
        <Paginator
            :currentPage="currentPage"
            :totalPages="totalPages"
            @clickedPreviousButton="previousPage"
            @clickedNextButton="nextPage" />
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { fetchBlogPosts } from '~/services/blogService';
import useFlash from '~/composables/useFlash';

const { blogs, addToBlogStore } = useBlogStore();
const { notify } = useFlash();
const pageSize = 10;
let currentPage = ref(1);

const totalPages = computed(() => {
    return Math.ceil(blogs.length / pageSize);
});

const pagedBlogs = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    return blogs.slice(startIndex, startIndex + pageSize);
})

function previousPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

onMounted(async () => {
    try {
        const blogPosts = await fetchBlogPosts();
        for (const blog of blogPosts) {
            addToBlogStore(blog);
        }
    } catch (error) {
        const err = error as Error;
        notify('Error fetching blog posts', 'error');
        console.log('Error fetching blog posts: ', err.message);
    }
});
</script>