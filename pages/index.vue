<template>
    <div>
        <BlogView :blogs="blogs" />
    </div>
</template>

<script setup lang="ts">
import type { Iblog } from '~/interfaces/blog';

const blogs: Iblog[] = [
    { id: 1, title: 'Blog 1', userId: 1, body: 'This is blog 1'},
    { id: 2, title: 'Blog 2', userId: 1, body: 'This is blog 2'},
    { id: 3, title: 'Blog 3', userId: 1, body: 'This is blog 3'},
];

</script>