import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// const Main = styled.div`
//   display: grid;
//   justify-items: center;
// `
const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: 70%;  
  justify-items: center;
`
const Post = styled.div`
  display: grid;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(17,1fr);
  height: 300px;
  width: 300px; 
`
const Item1 = styled.div`
  grid-column: 1 / span 10;
  grid-row: 1 / span 8;
`
const BlogID = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
  margin-bottom: 20px;
`
const PostImg = styled.img`
  width: 250px;
  height: 137px
`
const PostLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: hidden;
`
const TitleWrapper = styled.div`
  grid-column: 3 / 11;
  grid-row: 13 / span 2;
  z-index: 2
`
const PostTitle = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 2px;
`
const PostSubTitle = styled.h2`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2px; 
`
const ColorSquare = styled.div`
  background-color: #EF7218;
  grid-column: 2 / span 8;
  grid-row: 3 / span 13;
  z-index: -1

`

export default function Blog({ allPosts }) {

  const posts = allPosts.map(post =>
    <Post key={post.id}>
      <Item1>
        <BlogID>{`#${post.id}`}</BlogID>
        <PostImg src={post.img_URL} alt={post.img_URL} />
      </Item1>
      <ColorSquare>
      </ColorSquare>
      <TitleWrapper>
        <PostLink to={`/blog/${post.id}`}>
          <PostTitle>{post.main_title}</PostTitle>
          <PostSubTitle>{post.subtitle}</PostSubTitle>
        </PostLink>
      </TitleWrapper>
      <ColorSquare>
      </ColorSquare>
    </Post >
  )

  return (
    // <Main>
      <PostsWrapper>
        {posts}
      </PostsWrapper>

    // </Main>
  )
}
