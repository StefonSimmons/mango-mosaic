import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/posts')
  const posts = resp.data
  console.log(posts)
  return posts
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`)
  const post = resp.data

  return post
}

export const createPost = async (postParams) => {
  const resp = await api.post('/posts/', {post: postParams})
  const newPost = resp.data

  return newPost
}

export const updatePost = async (id ,postParams) => {
  const resp = await api.put(`/posts/${id}`, { post: postParams })
  const updatedPost = resp.data

  return updatedPost
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`)
  
  return resp
}
