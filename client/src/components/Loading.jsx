import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0%{
    transform: rotate(0deg);
    width: 100px;
    color: rgba(211, 211, 211, 1);
  }
  15%{
    transform: rotate(0deg);
    width: 100px;
    color: rgba(211, 211, 211, 1);
  }
  25%{
    width: 7px;
    color: rgba(211, 211, 211, 0);
  }
  50%{
    width: 1px;
    color: rgba(211, 211, 211, 0);
  }
  75%{
    width: 7px;
    color: rgba(211, 211, 211, 0);
  }
  82%{
    transform: rotate(350deg);
    width: 60px;
    color: rgba(211, 211, 211, 1);
  }
  100%{
    transform: rotate(360deg);
    width: 100px;
    color: rgba(211, 211, 211, 1);
  }
`
const Loader = styled.div`
  margin: 25vh auto;
  border-top: solid 3px lightgrey;
  border-right: solid 3px blue;
  border-left: solid 3px green;
  border-bottom: solid 3px orange;
  width: 55px;
  height: 55px;
  border-radius: 45px;
  animation: ${spin} 1.5s ease-in infinite;
  color: rgba(211, 211, 211, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  letter-spacing: 2px;
  font-weight: 700;
  font-family: 'Open Sans Condensed', sans-serif;

`

export default function Loading() {
  return (
    <Loader>Loading...</Loader>
  )
}
