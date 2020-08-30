import React from 'react'
import styled from 'styled-components'
import { aboutBlog } from './abouts.js'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 75px ;
  height: 75vh;
`
const Wrapper = styled.div`
  display: flex;
  position: absolute;
`
const HomeImg = styled.img`
  width: 400px;
  height: 500px;
  margin-left: 55px;
  border-radius: 5px;
  box-shadow: 10px 10px 30px 3px #000000;
`
const ContentWrapper = styled.div`
  width: 450px;
  margin-left: 50px;
`
const ContentTitle = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 48px;
  letter-spacing: 2px;
  margin-bottom: 15px;
  padding-left: 15px;
`
const Content = styled.p`
  font-family: cursive;
  // font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
  font-weight: 700;
  margin-left: 15px
`
const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  align-self: flex-end;
  margin-left: 25%;
  z-index: -1;
  opacity: .2;
`
const GreenSquare = styled.div`
  background-color: #2B791E;
  width: 500px;
  height: 500px;
  position: relative;
  z-index: -1;
  top: -9%;
  left: -5%;
  opacity: .2;
`



export default function Home() {
  return (
    <Main>
      <Wrapper>
        {/* <HomeImg src='https://imgur.com/KrfGjBX.png' alt='mango-home' /> */}
        {/* <HomeImg src='https://imgur.com/VA9KBc1.png' alt='mango-home' /> */}
        <HomeImg src='https://imgur.com/X80Z4RF.png' alt='mango-home' />
        <ContentWrapper>
          <ContentTitle>This blog...</ContentTitle>
          <Content>{aboutBlog}</Content>
        </ContentWrapper>
      </Wrapper>
      <RedSquare>
      </RedSquare>
      <GreenSquare>
      </GreenSquare>
    </Main>
  )
}
