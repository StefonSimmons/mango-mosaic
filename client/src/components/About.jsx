import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px
`
const Photo = styled.img`
  width: 500px;
  position: absolute;
  top: 25%;
  left: 15%;
`
const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1
`
const YellowSquare = styled.div`
  background-color: #CBB334;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1
`

export default function About() {
  return (
    <Wrapper>
      <Photo src= 'https://imgur.com/s9JH7E3.png' alt='ashlea'/>
      <RedSquare>
      </RedSquare>
      <YellowSquare>
      </YellowSquare>
    </Wrapper>
  )
}
