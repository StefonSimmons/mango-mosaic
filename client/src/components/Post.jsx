import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const MainTitle = styled.h1`
`
const SubTitle = styled.h2`
`
const PostImg = styled.img`
  width: 600px
  
` 
const Content = styled.p`
`
const GreenSquare = styled.div`
`
const RedSquare = styled.div`
`

export default function Post({ allPosts }) {

  console.log(allPosts)

  const { postId } = useParams()
  console.log(postId)

  const post = allPosts.filter(p => p.id === parseInt(postId))[0]
  console.log(post)


  return (
    <>
      {post !== undefined ?
        <div>
          <MainTitle>{post.main_title}</MainTitle>
          <SubTitle>{post.subtitle}</SubTitle>
          <PostImg src={post.img_URL} alt={post.img_URL} />
          <Content>{post.content}</Content>
          
        </div>
        :
        'Reloading...'
      }
    </>
  )
}
