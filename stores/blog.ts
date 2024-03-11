import { defineStore } from 'pinia'
import type { Iblog } from '~/interfaces/blog'
import { fetchBlogPosts } from '~/services/blogService'


export const useBlogStore = defineStore('blog', () => {
  const blogs = ref<Iblog[]>([])

  const getBlogs = computed(() => blogs.value)

  async function fetchBlogs() {
    try {
      blogs.value = await fetchBlogPosts()
    } catch (error) {
      const err = error as Error
      console.error(err.message)
    }
  }

  function addBlog(blog: Iblog) {
    try {
      blogs.value.push(blog)
    } catch (error){
      const err = error as Error
      console.error(err.message) 
    }
  }

  function updateBlog(blog: Iblog) {
    try {
      const index = blogs.value.findIndex((blogToUpdate) => blogToUpdate.id === blog.id)
      blogs.value[index] = blog
    } catch(error) {
      const err = error as Error
      console.error(err.message)
    }
  }

  function deleteBlog(id: number) {
    try {
      const index = blogs.value.findIndex((blogToDelete) => blogToDelete.id === id)
      blogs.value.splice(index, 1)
    } catch (error){
      const err = error as Error
      console.error(err.message)
    }
  }

  return {
    getBlogs,
    fetchBlogs,
    addBlog,
    updateBlog,
    deleteBlog,
  }
})