import React, {useState} from 'react'
import { Main, ContentWrapper, ContentTitle } from './About'
import styled, { keyframes } from 'styled-components'
import './SocialIcon.css'
import photobooth from '../assets/ashlea-photobooth.jpg'


const slideIn = keyframes`
{
  0% {transform: translateX(16%);}
  100% {transform: translateX(0%);}
}
`
const Wrapper = styled.div`
  display: flex;
  margin-top: -30px;
  animation: 1.2s ease-out 0s 1 ${slideIn};

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
    left: 10%;
  }
  @media(max-width: 540px){
    left: 8%;
  }
  @media(max-width: 480px){
    left: 4%
  }
`
const Photo = styled.img`
  width: 575px;
  height: 560px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 0px #000000;

  @media(max-width: 1055px){
    width: 475px;
    height: 460px;
    margin-left: 20px
  }
  @media(max-width: 960px){
    width: 425px;
    height: 410px;
    margin-left: 20px
  }
  @media(max-width: 845px){
    backface-visibility: hidden;
    position: absolute;
  }
  @media(max-width: 540px){
    width: 350px;
    height: 335px;
  }
  @media(max-width: 440px){
    width: 300px;
    height: 275px
  }
  @media(max-width: 380px){
    width: 275px;
    height: 250px
  }
`
const Content = styled.p`
  font-family: cursive;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
  padding-left: 8%
`
const Email = styled.a`
  text-decoration: none;
  color: black;
  font-family: cursive
`
const SocialLinks = styled.div`
  padding-left: 4.5%
`
const ContentTitle2 = styled(ContentTitle)`
  margin-top: 30px
`
const YellowSquare = styled.div`
  background-color: #CBB334;
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
const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;

  @media(max-width: 540px){
    display: none
  }
`
const Container = styled.div`
  @media(min-width: 845px){
    position: absolute;
    top: 25%;
  }
`


export default function Contact() {

  const [flipCard, toggleFlip] = useState(false)

  return (
    <Main>
      <Container>
        <Wrapper
          onClick={() => window.screen.width <= 845 && toggleFlip(!flipCard)}
          style={flipCard ? { transform: 'rotateY(180deg)' } : null}
        >
          <Photo src={photobooth} alt='phone-booth' />
          <ContentWrapper>
            <ContentTitle>Contact</ContentTitle>
            <Content>Email | <Email href='mailto:ashleam2013@gmail.com'>ashleam2013@gmail.com</Email></Content>
            <ContentTitle2>Social</ContentTitle2>
            <SocialLinks>
              <a href="https://www.instagram.com/mango.mosaic/" rel="noopener noreferrer" target='_blank' className="fa fa-instagram"> </a>
              <a href="https://www.twitter.com/ashleaamorgan1" rel="noopener noreferrer" target='_blank' className="fa fa-twitter"> </a>
              <a href="https://www.linkedin.com/in/ashlea-morgan-ma-29818a35/" rel="noopener noreferrer" target='_blank' className="fa fa-linkedin"> </a>
            </SocialLinks>
          </ContentWrapper>
        </Wrapper>
      </Container>
      <YellowSquare>
      </YellowSquare>
      <RedSquare>
      </RedSquare>
    </Main>
  )
}
