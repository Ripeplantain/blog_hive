<template>
  <div class="p-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
      <LoaderSpinner v-if="loading" />

      <BlogView
          :blogs="pagedBlogs" />

      <Paginator
          :currentPage="currentPage"
          :totalPages="totalPages"
          @pageChanged="changePage" />
  </div>

  <div class="flex justify-center items-center my-auto">
          <h3>{{ currentPage }} / {{ totalPages }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import useFlash from '~/composables/useFlash';

const store = useBlogStore();
const { notify } = useFlash();
const pageSize = 10;
let currentPage = ref(1);
const loading = ref(true)

const totalPages = computed(() => {
  return Math.ceil(store.getBlogs.length / pageSize);
});

const pagedBlogs = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  return store.getBlogs.slice(startIndex, startIndex + pageSize);
})


function changePage(pageNumber: number) {
  currentPage.value = pageNumber;
}

onMounted(async () => {
  try {
      await store.fetchBlogs();
      loading.value = false;
  } catch (error) {
      const err = error as Error;
      notify('Error fetching blog posts', 'error');
      console.error('Error fetching blog posts: ', err.message);
  }
});
</script>