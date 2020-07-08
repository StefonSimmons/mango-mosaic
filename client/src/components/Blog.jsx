import React from 'react'
import styled from 'styled-components'


export default function Blog({ allPosts }) {

  const posts = allPosts.map(post =>
    <div key={post.id}>
      <p>{post.id}</p>
      <img src={post.img_URL} alt={post.img_URL}/>
      <h1>{post.main_title}</h1>
      <h2>{post.subtitle}</h2>

    </div>
  )
  return (
    <div>
      {posts}
    </div>
  )
}
