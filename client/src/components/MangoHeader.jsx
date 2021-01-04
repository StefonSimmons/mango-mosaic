import React from 'react'
import mangoHeader from '../assets/blog-header.webp'
import mangoHeaderCropped from '../assets/blog-header-crop.webp'


import styled from 'styled-components'

const BackgroundHeader = styled.div`
  background-image: url(${mangoHeader});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 80vh;
  @media(max-width: 1024px){
    background-image: url(${mangoHeaderCropped});
  }
  @media(max-width: 450px){
    background-attachment: initial;
  }
`
const Overlay = styled.div`
  background-color: rgba(0,0,0,.3);
  width: 100%;
  height: 100%;
`
export default function MangoHeader() {
  return (
    <BackgroundHeader>
      <Overlay>
      </Overlay>
    </BackgroundHeader>
  )
}
