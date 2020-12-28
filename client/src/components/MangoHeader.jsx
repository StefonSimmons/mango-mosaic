import React from 'react'
import mangoHeader from '../assets/blog-header.webp'

import styled from 'styled-components'

const BackgroundHeader = styled.div`
  background-image: url(${mangoHeader});
  // background-attachment: fixed;
  background-cover: contain;
  background-repeat: no-repeat;
  width: 100vw;
  height: 80vh;
  // position: relative;
`
const Overlay = styled.div`
  background-color: rgba(0,0,0,.3);
  width: 100%;
  height: 100%;
`
export default function MangoHeader() {
  return (
    <div>
      <BackgroundHeader>
        <Overlay>
        </Overlay>
      </BackgroundHeader>
    </div>
  )
}
