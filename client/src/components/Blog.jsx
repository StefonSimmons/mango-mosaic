import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`
const slideIn = keyframes`
{
  0% {transform: translateY(-10%);}
  100% {transform: translateY(0);}
}
`
const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: 70%;  
  justify-items: center;
  animation: ${fadeIn} ease 1.2s;
`
const Post = styled.div`
  display: grid;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(17,1fr);
  height: 300px;
  width: 300px; 
  animation: 1s ease-out 0s 1 ${slideIn};
`
const IDandImage = styled.div`
  grid-column: 1 / span 10;
  grid-row: 1 / span 8;
`
const BlogID = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  margin-bottom: 20px;
`
const PostImg = styled.img`
  width: 250px;
  height: 137px;
  object-fit: scale-down;
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
  // letter-spacing: 2px;
`
const PostSubTitle = styled.h2`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  // letter-spacing: 2px; 
`
const ColorSquare = styled.div`
  grid-column: 2 / span 8;
  grid-row: 3 / span 13;
  z-index: -1;
  border-radius: 5px;

`

export default function Blog({ allPosts }) {

  function setColor(id) {
    // const colors = ['#EF7218', '#1D9D41', '#C90D0D', '#856B7B', '#EBB72D', '#3646D1']
    const colors = ['rgba(239,114,24,.2)', 'rgba(29,157,65,.2)', 'rgba(201,13,13,.2)', 'rgba(133,107,123,.2)', 'rgba(235,183,45,.2)', 'rgba(54,70,209,.2)']

    const selector = id % 6
    return colors[selector]
  }
  const posts = allPosts.map((post, id, posts) =>

    <Post key={post.id}>
      <IDandImage>
        <BlogID>{`#${posts.length - id}`}</BlogID>
        <PostImg src={post.img_URL} alt={post.img_URL} />
      </IDandImage>
      <ColorSquare style={{ backgroundColor: `${setColor(id)}` }}>
      </ColorSquare>
      <TitleWrapper>
        <PostLink to={`/blog/${posts.length - id}`}>
          <PostTitle>{post.main_title}</PostTitle>
          <PostSubTitle>{post.subtitle}</PostSubTitle>
        </PostLink>
      </TitleWrapper>
      <ColorSquare>
      </ColorSquare>
    </Post >
  )

  return (
    <PostsWrapper>
      {posts}
    </PostsWrapper>
  )
}
