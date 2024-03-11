<template>
  <div class="flex justify-center w-[70vw]">
    <button v-for="pageNumber in totalPages" :key="pageNumber"
      :class="currentPage === pageNumber ? 'bg-black' : 'bg-blue-800'"
      class="text-lg font-lato text-white py-2 px-3 cursor-pointer rounded-lg hover:bg-blue-600 delay-100 ease-in-out mx-1"
      @click="$emit('pageChanged', pageNumber)">
      {{ pageNumber }}
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})
</script>