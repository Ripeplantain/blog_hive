import { defineStore } from 'pinia'
import type { Iblog } from '~/interfaces/blog'


export const useBlogStore = defineStore('blogs', () => {
  const blogs = ref<Iblog[]>([])

  const addBlog = (blog: Iblog) => {
    blogs.value.push(blog)
  }

  const removeBlog = (id: number) => {
    const index = blogs.value.findIndex((blog) => blog.id === id)
    if (index !== -1) {
      blogs.value.splice(index, 1)
    }
  }

  const setBlogPosts = (posts: Iblog[]) => {
    blogs.value = posts
  }

  return {
    blogs,
    addBlog,
    removeBlog,
    setBlogPosts,
  }
})