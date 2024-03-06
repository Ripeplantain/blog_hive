<template>
    <div v-for="blog in blogs">
        <BlogItem :blog="blog" />
    </div>
</template>


<script setup lang="ts">
import type { IBlogViewProps, Iblog } from '~/interfaces/blog';

const props: IBlogViewProps = defineProps({
    blogs: {
        type: Array as PropType<Iblog[]>,
        required: true
    }
})
</script>
