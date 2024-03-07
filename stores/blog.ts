import { defineStore } from 'pinia'
import type { Iblog } from '~/interfaces/blog'


export const useBlogStore = defineStore('blogs', () => {
  const blogs = ref<Iblog[]>([])

  const addToBlogStore = (blog: Iblog) => {
    blogs.value.push(blog)
  }

  const removeFromBlogStore = (id: number) => {
    const index = blogs.value.findIndex((blog) => blog.id === id)
    if (index !== -1) {
      blogs.value.splice(index, 1)
    }
  }

  const updateBlogStore = (blog: Iblog) => {
    const index = blogs.value.findIndex((b) => b.id === blog.id)
    if (index !== -1) {
      blogs.value[index] = blog
    }
  }

  return {
    blogs,
    addToBlogStore,
    removeFromBlogStore,
    updateBlogStore,
  }
})