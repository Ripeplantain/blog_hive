<template>
    <div>
        <div class="flex items-center justify-between">
            <div>
                <h2 
                    v-if="isHomePath"
                    class="text-3xl font-bold tracking-wide font-lora text-gray-900 sm:text-4xl capitalize px-4">the blog hive</h2>

                <h2 
                    v-else-if="isCreatePath"
                    class="text-3xl font-bold tracking-wide font-lora text-gray-900 sm:text-4xl capitalize px-4">Create a post here</h2>

                <h2 
                    v-else
                    class="text-3xl font-bold tracking-wide font-lora text-gray-900 sm:text-4xl capitalize px-4">Edit your Post</h2>

                <p class="mt-2 text-sm font-lato text-gray-500 px-4">A collection of thoughts and ideas</p>
            </div>
            <Button v-show="isHomePath" />
        </div>
        <hr class="mt-12">
    </div>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRoute();

const isHomePath = computed(() => {
    return router.path === '/';
});

const isCreatePath = computed(() => {
    return router.path === '/posts/create';
});
</script>