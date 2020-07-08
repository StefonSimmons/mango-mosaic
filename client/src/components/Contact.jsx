import React from 'react'
import { Main, Wrapper, ContentWrapper, ContentTitle } from './About'
import styled from 'styled-components'
import './SocialIcon.css'


const Photo = styled.img`
  width: 500px;
  height: 500px;
  top: 25%;
  left: 15%;
`
const Content = styled.p`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
  padding-left: 10%
`
const Email = styled.a`
  text-decoration: none;
  color: black
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
`
const RedSquare = styled.div`
background-color: #972309;
width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;
`



export default function Contact() {
  return (
    <Main>
      <Wrapper>
        <Photo src='https://imgur.com/TK6W9lt.png' alt='phone-booth' />
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
      <YellowSquare>
      </YellowSquare>
      <RedSquare>
      </RedSquare>
    </Main>
  )
}
