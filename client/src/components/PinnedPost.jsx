import React, { useState, useEffect } from 'react'

import {getPinnedPost} from '../services/posts'

import { Post, IDandImage, PostImg, PostLink, TitleWrapper, PostTitle, PostSubTitle } from './Blog'
import pin from '../assets/pin-lg.png'
import pinned from '../assets/pinned-bg-copy.png'
import styled from 'styled-components'

const PinIcon = styled.img`
  display: block;
  width: 35px;
  margin-bottom: 10px
`
const ColorSquare = styled.div`
  grid-column: 1 / span 9;
  grid-row: 1 / span 16;
  z-index: -1;
  border-radius: 5px;
  background-image: url(${pinned});
  background-size: 275px 275px;
  background-repeat: no-repeat; 
`
const PinnedTitleWrapper = styled.div`
  grid-column: 3 / 11;
  grid-row: 13 / span 2;
  z-index: 2;
  background: lightgrey;
  border: 10px;
  padding: 0 5px;
  color: #102467;
`
export default function PinnedPost({ allPosts }) {

  // ====== USED TO DISABLE SEARCHING OF THE PINNED POST ====== //
  const [pinnedPost, setPinnedPost] = useState()

  useEffect(() => {
    const getPinned = async () => {
      const pinned = await getPinnedPost()
      setPinnedPost(pinned)
    }
    getPinned()
  }, [])
  

  // ====== USED TO ENABLE SEARCHING OF THE PINNED POST ====== //
  // const pinnedPost = allPosts.find(post => post.is_pinned)


  return (
    <>
      { pinnedPost &&
        <PostLink to={`/blog/${pinnedPost.id}`} key={pinnedPost.id}>
          <Post style={{ borderRadius: '10px' }}>
            <IDandImage>
              <PinIcon src={pin} alt='pin' />
              <PostImg src={pinnedPost.img_URL} alt={`image for post ${pinnedPost.id}`} />
            </IDandImage>
            <ColorSquare>
            </ColorSquare>
            <PinnedTitleWrapper>
              <PostTitle>{pinnedPost.main_title}</PostTitle>
              <PostSubTitle>{pinnedPost.subtitle}</PostSubTitle>
            </PinnedTitleWrapper>
            <ColorSquare>
            </ColorSquare>
          </Post >
        </PostLink>
      }
    </>
  )
}
