import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 75px ;
  height: 75vh
`
const Wrapper = styled.div`
  display: flex;
  position: absolute;
`
const HomeImg = styled.img`
  width: 500px;
  height: 500px;
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
`
const Content = styled.p`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
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
  top: -8%;
  left: -8%;
  opacity: .2;
`



export default function Home() {
  return (
    <Main>
      <Wrapper>
        <HomeImg src='https://imgur.com/KrfGjBX.png' alt='mango-home' />
        <ContentWrapper>
          <ContentTitle>This blog...</ContentTitle>
          <Content>Lorem IContentsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Content>
        </ContentWrapper>
      </Wrapper>
      <RedSquare>
      </RedSquare>
      <GreenSquare>
      </GreenSquare>
    </Main>
  )
}
