<template>
    <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center justify-between w-full gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500 font-lato">Mar 16, 2020</time>
            <div class="flex items-center gap-4">
                <div @click="editBlogPost(blog.id)"
                    class="flex items-center gap-1 text-gray-500 cursor-pointer">
                    <iconsEdit class="h-4 w-4" />
                    <span class="font-lato">Edit</span>
                </div>
                <div @click="toggleDeleteModal" class="flex items-center gap-1 text-gray-500 cursor-pointer">
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

    <Modal v-show="showDeleteModal" title="Delete Blog post" message="Are you sure you want to delete blog post?"
        @confirm="removeBlogPost(blog.id)" @close="toggleDeleteModal" />
</template>


<script setup lang="ts">
import type { Iblog } from '~/interfaces/blog';
import { deleteBlog } from '~/services/blogService';
import { useBlogStore } from '~/stores/blog';
import useFlash from '~/composables/useFlash';

const store = useBlogStore()
const router = useRouter();
const { notify } = useFlash();
const showDeleteModal = ref(false);

defineProps({
    blog: {
        type: Object as PropType<Iblog>,
        required: true
    }
})

function toggleDeleteModal() {
    showDeleteModal.value = !showDeleteModal.value;
    console.log(showDeleteModal.value);
}

function removeBlogPost(id: number = 0) {
    try {
        deleteBlog(id);
        store.deleteBlog(id);
        notify('Blog post deleted successfully', 'success');
        toggleDeleteModal();
    } catch (error) {
        const err = error as Error;
        notify(err.message, 'error');
        console.log('Error deleting blog: ', err.message);
    }
}

function editBlogPost(id: number = 0) {
    router.push(`/posts/${id}`);
}
</script>