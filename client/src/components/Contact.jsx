import React from 'react'
import { Main, Wrapper, Photo, ContentWrapper, ContentTitle, Content } from './About'
import styled from 'styled-components'
import './SocialIcon.css'

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
          <Content>Email | ashleam2013@gmail.com</Content>
          <ContentTitle>Social</ContentTitle>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </ContentWrapper>
      </Wrapper>
      <YellowSquare>
      </YellowSquare>
      <RedSquare>
      </RedSquare>
    </Main>
  )
}
