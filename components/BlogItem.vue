<template>
    <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center justify-between w-full gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500 font-lato">Mar 16, 2020</time>
            <div class="flex items-center gap-4">
                <div
                    class="flex items-center gap-1 text-gray-500 cursor-pointer">
                    <iconsEdit class="h-4 w-4" />
                    <span class="font-lato">Edit</span>
                </div>
                <div    
                    @click="removeBlogPost(blog.id)"
                    class="flex items-center gap-1 text-gray-500 cursor-pointer">
                    <iconsDelete class="h-4 w-4" />
                    <span class="font-lato">Delete</span>
                </div>
            </div>
        </div>
        <div class="group relative">
            <h3 class="mt-3 text-lg font-lato font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                    <span class="absolute inset-0"></span>
                    {{ blog.title }}
                </a>
            </h3>
            <p class="mt-5 font-lato line-clamp-3 text-sm leading-6 text-gray-600">{{ blog.body }}</p>
        </div>
    </article>
</template>


<script setup lang="ts">
import type { Iblog } from '~/interfaces/blog';
import { deleteBlog } from '~/services/blogService';
import { useBlogStore } from '~/stores/blog';

const { removeBlog } = useBlogStore()

defineProps({
    blog: {
        type: Object as PropType<Iblog>,
        required: true
    }
})

function removeBlogPost(id: number){
    if(confirm('Are you sure?')) {
        try {
            deleteBlog(id);
            removeBlog(id);
            console.log('Blog deleted');
        } catch(error) {
            const err = error as Error;
            console.log('Error deleting blog: ', err.message);
        }
    }
}
</script>