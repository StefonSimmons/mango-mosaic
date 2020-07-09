import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post({ allPosts }) {

  console.log(allPosts)
  const { postId } = useParams()

  console.log(postId)
  const post = allPosts.filter(p => p.id === parseInt(postId))[0]
  console.log(post)

  return (
    <div>
      {post.main_title} 
    </div>
  )
}
