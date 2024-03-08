import { defineStore } from 'pinia'
import type { Iblog } from '~/interfaces/blog'
import { fetchBlogPosts } from '~/services/blogService'


export const useBlogStore = defineStore('blog', () => {
  const blogs = ref<Iblog[]>([])

  const getBlogs = computed(() => blogs.value)

  async function fetchBlogs() {
    blogs.value = await fetchBlogPosts()
  }

  function addBlog(blog: Iblog) {
    console.log('blog', blog)
    console.log('before', getBlogs.value.length)
    blogs.value.push(blog)
    console.log('after', getBlogs.value.length)
  }

  function updateBlog(blog: Iblog) {
    const index = blogs.value.findIndex((b) => b.id === blog.id)
    blogs.value[index] = blog
  }

  function deleteBlog(id: number) {
    const index = blogs.value.findIndex((b) => b.id === id)
    blogs.value.splice(index, 1)
  }

  return {
    getBlogs,
    fetchBlogs,
    addBlog,
    updateBlog,
    deleteBlog,
  }
})