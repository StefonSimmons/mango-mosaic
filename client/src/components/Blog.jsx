import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Main = styled.div`
  margin: 0 auto;
  width: 70%;
  // background: rgba(208, 235, 45, .7);
`
const PostsWrapper = styled.div`
  display: grid;
  grid-template: auto/auto auto auto;  
  justify-content: center;
`
const PostLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const Post = styled.div`
  margin: 20px 25px;
  align-items: start;
  height: 300px
`
const BlogID = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
  margin-bottom: 20px
`
const Wrapper = styled.div`
  // background: rgba(208, 235, 45, .7);
  width: 295px;
`
const PostImg = styled.img`
  width: 250px;
  height: 137px
`
const ContentWrapper = styled.div`
  // background: blue;
  padding-left: 20px;
  height: 70px;
`
const PostTitle = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 10px
`
const PostSubTitle = styled.h2`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2px; 
`
const ColorSquare = styled.div`
  background-color: #EF7218;
  width: 250px;
  height: 259px;
  top: -75%;
  left: 10%;
  position: relative;
  z-index: -1;
`

export default function Blog({ allPosts }) {

  const posts = allPosts.map(post =>
    <Post key={post.id}>
      <BlogID>{`#${post.id}`}</BlogID>
      <Wrapper>
        <PostImg src={post.img_URL} alt={post.img_URL} />
        <PostLink to={`/blog/${post.id}`}>
          <ContentWrapper>
            <PostTitle>{post.main_title}</PostTitle>
            <PostSubTitle>{post.subtitle}</PostSubTitle>
          </ContentWrapper>
        </PostLink>
      </Wrapper>
      <ColorSquare>
      </ColorSquare>
    </Post>
  )
  
  return (
    <Main>
      <PostsWrapper>
        {posts}
      </PostsWrapper>
    </Main>
  )
}
