import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from './Blog'
import { aboutMe } from './abouts.js'

const slideIn = keyframes`
{
  0% {transform: translateX(-15%);}
  100% {transform: translateX(0);}
}
`
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75vh;
  animation: ${fadeIn} ease 1.2s;
`
const Wrapper = styled.div`
  display: flex;
  margin-top: -30px;
  animation: 1s ease-out 0s 1 ${slideIn};

  @media(max-width: 845px){
    position: absolute;
    flex-direction: column;
    top: 25%;
    left: 25%;
    transition: transform 1.2s;
    transform-style: preserve-3d
  }
  @media(max-width: 675px){
    left: 20%;
  }
  @media(max-width: 605px){
    left: 15%;
  }
  @media(max-width: 590px){
    left: 12%;
  }
  @media(max-width: 540px){
    left: 8%;
  }
  @media(max-width: 480px){
    left: 4%
  }

`
const Photo = styled.img`
  width: 550px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 0px #000000;

  @media(max-width: 1055px){
    width: 450px;
  }
  @media(max-width: 960px){
    width: 400px;
  }
  @media(max-width: 845px){
    backface-visibility: hidden;
    position: absolute;
  }
  @media(max-width: 540px){
    width: 350px;
  }
  @media(max-width: 440px){
    width: 275px;
    margin-left: 15px;
    margin-top: 55px
  }
`
export const ContentWrapper = styled.div`
  width: 450px;
  margin-left: 50px;

  @media(max-width: 960px){
    width: 400px;
    margin-left: 40px
  }
  @media(max-width: 845px){
    backface-visibility: hidden;
    transform: rotateY(180deg);
    border: solid black 1px;
    box-shadow: 5px 5px 10px 0px #000000;
    background: linear-gradient(rgba(238, 244, 251, 0),rgba(238, 244, 251, .2), rgba(238, 244, 251, 0));
    border-radius: 10px;
    padding: 20px 10px
  }
  @media(max-width: 460px){
    width: 300px;
    margin-left: 25px;
  }
  @media(max-width: 380px){
    width: 275px;
  }
`
export const ContentTitle = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 48px;
  letter-spacing: 2px;
  margin-bottom: 15px;

  @media(max-width: 460px){
    font-size: 36px
  }
`
const Content = styled.p`
  font-family: cursive;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;

  @media(max-width: 460px){
    font-size: 15px;
    line-height: 1.4
  }
  @media(max-width: 380px){
    font-size: 14px;
  }
`
export const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;

  @media(max-width: 540px){
    width: 400px
  }
  @media(max-width: 460px){
    width: 300px;
  }
`
export const YellowSquare = styled.div`
  background-color: #CBB334;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;

  @media(max-width: 540px){
    display: none
  }

`
const CardContainer = styled.div`
  @media(min-width: 845px){
    position: absolute;
    top: 25%;
  }
`

export default function About() {

  const [flipCard, toggleFlip] = useState(false)

  return (
    <Main>
      <CardContainer>
        <Wrapper
          onClick={() => window.screen.width <= 845 && toggleFlip(!flipCard)}
          style={flipCard ? { transform: 'rotateY(180deg)' } : null}
        >
          <Photo src='https://imgur.com/s9JH7E3.png' alt='ashlea' />
          <ContentWrapper>
            <ContentTitle>Hey !</ContentTitle>
            <Content>{aboutMe}</Content>
          </ContentWrapper>
        </Wrapper>
      </CardContainer>
      <RedSquare>
      </RedSquare>
      <YellowSquare>
      </YellowSquare>
    </Main>
  )
}
