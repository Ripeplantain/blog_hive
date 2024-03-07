import type { Iblog } from "~/interfaces/blog";


const fetchBlogPosts = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        return posts;
    } catch(error){
        const err = error as Error;
        console.error('Error fetching posts', err.message);
    }
}


const fetchBlog = async (id: number) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await response.json();
        return post;
    } catch(error){
        const err = error as Error;
        console.error('Error fetching post', err.message);
    }
}


const createBlog = async (blog: Iblog) => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const post = await response.json();
        return post;
    } catch(error){
        const err = error as Error;
        console.error('Error creating post', err.message);
    }
}


const updateBlog = async (blog: Iblog) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blog.id}`, {
            method: 'PUT',
            body: JSON.stringify(blog),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const post = await response.json();
        console.log('post updated successfully');
        return post;
    } catch(error){
        const err = error as Error;
        console.error('Error updating post', err.message);
    }
}


const deleteBlog = async (id: number) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        const post = await response.json();
        return post;
    } catch(error){
        const err = error as Error;
        console.error('Error deleting post', err.message);
    }
}


export {
    fetchBlogPosts,
    fetchBlog,
    createBlog,
    updateBlog,
    deleteBlog,
}