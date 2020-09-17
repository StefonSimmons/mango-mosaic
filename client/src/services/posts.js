import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/posts')
  console.log(resp.data)
  const posts = resp.data
  return posts
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`)
  const post = resp.data

  return post
}

// ******* CREATE POSTS ********
export const createPost = async (postParams) => {
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const formData = new FormData();
  formData.append('post[main_title]', postParams.main_title)
  formData.append('post[subtitle]', postParams.subtitle)
  formData.append('post[content]', postParams.content)
  formData.append('post[user_id]', postParams.user_id)
  formData.append('post[is_pinned]', postParams.is_pinned)
  formData.append('post[img_URL]', postParams.img_URL)
  // for (let pair of formData.entries()) {
  //   console.log(pair[0] + ': ' + pair[1]);
  // }
  const resp = await api.post('/posts/', formData, config)
  const newPost = resp.data

  return newPost
}

// ******* UPDATE POSTS ********
export const updatePost = async (id, postParams) => {  
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const formData = new FormData();
  formData.append('post[main_title]', postParams.main_title)
  formData.append('post[subtitle]', postParams.subtitle)
  formData.append('post[content]', postParams.content)
  formData.append('post[user_id]', postParams.user_id)
  formData.append('post[is_pinned]', postParams.is_pinned)
  // if img is already stored in aws, it will not be appended to formData
  if (typeof postParams.img_URL !== 'string') { 
    formData.append('post[img_URL]', postParams.img_URL)
  }
  const resp = await api.put(`/posts/${id}`, formData, config)
  const updatedPost = resp.data

  return updatedPost
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`)

  return resp
}

export const searchPosts = async (chars) => {
  const resp = await api.get(`/posts/search/${chars}`)
  
  return resp
}

// Will make another api call if for pinned post
// export const getPinnedPost = async () => {
//   const resp = await api.get('/posts')
//   const posts = resp.data
//   const pinnedPost = posts.find(post => post.is_pinned)
//   return pinnedPost
// }