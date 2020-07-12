import api from './apiConfig';

export const getAllComments = async () => {
  const resp = await api.get('/comments')
  const comments = resp.data

  return comments
}

export const createComment = async (commentParams) => {
  console.log('HELLO, services Comment1', commentParams)
  const resp = await api.post('/comments', { comment: commentParams })
  console.log('HELLO, services Comment2', commentParams)

  const newComment = resp.data

  return newComment
}