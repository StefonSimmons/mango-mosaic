import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post({ allPosts }) {

  console.log(allPosts)
  const { postId } = useParams()

  console.log(postId)
  const post = allPosts.filter(p => console.log(p.id) === postId)
  console.log(post)


  return (
    <div>
      {console.log(post.main_title)}

      A Post goes here
      {post.main_title}
    </div>
  )
}
