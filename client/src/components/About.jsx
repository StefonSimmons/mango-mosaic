import React from 'react'
import styled from 'styled-components'
import {fadeIn} from './Blog'
import { aboutMe } from './abouts.js'


export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75vh;
  animation: ${fadeIn} ease 1s;

`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  position: absolute;
`
const Photo = styled.img`
  width: 550px;
  top: 25%;
  left: 15%;
`
export const ContentWrapper = styled.div`
  width: 450px;
  margin-left: 50px;
`
export const ContentTitle = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 48px;
  letter-spacing: 2px;
  margin-bottom: 15px;
`
const Content = styled.p`
  font-family: cursive;
  // font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
`
export const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;
`
export const YellowSquare = styled.div`
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
          <ContentTitle>Hey !</ContentTitle>
          <Content>{aboutMe}</Content>
        </ContentWrapper>
      </Wrapper>
      <RedSquare>
      </RedSquare>
      <YellowSquare>
      </YellowSquare>
    </Main>
  )
}
