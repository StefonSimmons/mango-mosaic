import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75vh
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  position: absolute;
`
const Photo = styled.img`
  width: 500px;
  top: 25%;
  left: 15%;
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
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
`
const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;
`
const YellowSquare = styled.div`
  background-color: #CBB334;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;
`

export default function About() {
  return (
    <Main>
      <Wrapper>
        <Photo src='https://imgur.com/s9JH7E3.png' alt='ashlea' />
        <ContentWrapper>
          <ContentTitle>I am...</ContentTitle>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Content>
        </ContentWrapper>
      </Wrapper>
      <RedSquare>
      </RedSquare>
      <YellowSquare>
      </YellowSquare>
    </Main>
  )
}
