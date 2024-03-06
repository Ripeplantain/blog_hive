<template>
    <div>
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.body }}</p>
    </div>
</template>


<script setup lang="ts">
import type { Iblog, IBlogItemProps } from '~/interfaces/blog';

const props: IBlogItemProps = defineProps({
    blog: {
        type: Object as PropType<Iblog>,
        required: true
    }
})
</script>