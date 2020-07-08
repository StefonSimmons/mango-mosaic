import React from 'react'
// import styled from 'styled-components'

export default function Blog({ allPosts }) {

  const posts = allPosts.map(post =>
    <div>
      {post.main_title}
    </div>
  )
  return (
    <div>
      {posts}
    </div>
  )
}
