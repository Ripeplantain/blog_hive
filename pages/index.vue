<template>
    <div>
        <BlogView :blogs="blogs" />
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';


const { blogs } = useBlogStore();
</script>