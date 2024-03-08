<template>
  <div class="flex justify-center w-[70vw]">
    <button
      class="mr-4 bg-blue-800 text-lg font-lato text-white py-2 px-3 cursor-pointer rounded-lg hover:bg-blue-600 delay-100 ease-in-out"
      @click="$emit('clickedPreviousButton')" v-show="currentPage > 1">Previous</button>

    <button 
      v-for="pageNumber in totalPages" :key="pageNumber"
      class="bg-blue-800 text-lg font-lato text-white py-2 px-3 cursor-pointer rounded-lg hover:bg-blue-600 delay-100 ease-in-out mx-1"
      @click="$emit('pageChanged', pageNumber)" v-show="currentPage !== pageNumber">
      {{ pageNumber }}
    </button>

    <button
      class="bg-blue-800 text-lg font-lato text-white py-2 px-6 cursor-pointer rounded-lg hover:bg-blue-600 delay-100 ease-in-out"
      @click="$emit('clickedNextButton')" v-show="currentPage < totalPages">Next</button>
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