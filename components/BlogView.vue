<template>
    <div
        v-for="blog in blogs">
        <BlogItem
            :key="blog.id"
            :blog="blog" />
    </div>
</template>


<script setup lang="ts">
import type { Iblog } from '~/interfaces/blog';

defineProps({
    blogs: {
        type: Array as PropType<Iblog[]>,
        required: true
    }
})
</script>
