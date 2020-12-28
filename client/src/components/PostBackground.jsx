import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  height: 789px;
  width: 1200px;
  margin-left: 30px;
  display: grid;
  position: fixed;
  top: 18%;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(7,1fr);
  z-index: -1;

  @media(max-width: 730px){
    width: 450px
  }
  @media(max-width: 420px){
    width: 250px
  }
`
const GreenSquare = styled.div`
  background-color: #2B791E;
  grid-column: 1 / span 4;
  grid-row: 2 / span 3;
  opacity: .2;
  z-index: 0;
`
const OrangeSquare = styled.div`
  background-color: rgb(239,114,24);
  grid-column: 2 / span 6;
  grid-row: 3 / span 4;
  opacity: 1;
  z-index: -1;
`
const RedSquare = styled.div`
  background-color: #972309;
  grid-column: 7 / span 4;
  grid-row: 1 / span 3;
  opacity: .2;
  z-index: -1;
`

export default function PostBackground() {
  return (
    <Background>
      <OrangeSquare>
      </OrangeSquare>
      <GreenSquare>
      </GreenSquare>
      <RedSquare>
      </RedSquare>
    </Background>
  )
}
