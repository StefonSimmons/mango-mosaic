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
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const formData = new FormData();
  console.log(postParams)
  formData.append('post[main_title]', postParams.main_title)
  formData.append('post[subtitle]', postParams.subtitle)
  formData.append('post[content]', postParams.content)
  formData.append('post[user_id]', postParams.user_id)
  formData.append('post[img_URL]', postParams.img_URL)
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  const resp = await api.post('/posts/', formData, config)
  console.log(resp)
  const newPost = resp.data

  return newPost
}

export const updatePost = async (id, postParams) => {
  const resp = await api.put(`/posts/${id}`, { post: postParams })
  const updatedPost = resp.data

  return updatedPost
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`)

  return resp
}
