import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  padding: 15px 75px ;
  height: 75vh
`
const HomeImg = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  align-self: center;
`
const RedSquare = styled.div`
  background-color: #972309;
  width: 400px;
  height: 400px;
  align-self: flex-end;
  margin-left: 15%;
  z-index: -1;
  opacity: .2;
`
const GreenSquare = styled.div`
  background-color: #2B791E;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 25%;
  left: 45%;
  opacity: .2;
`



export default function Home() {
  return (
    <Main>
      <HomeImg src='https://imgur.com/KrfGjBX.png' alt='mango-home' />
      <RedSquare>
      </RedSquare>
      <GreenSquare>
      </GreenSquare>
    </Main>
  )
}
