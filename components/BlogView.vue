<template>
    <div
        v-for="blog in blogs"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-full lg:grid-cols-3">
        <BlogItem :blog="blog" />
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
