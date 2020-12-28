import React from 'react'
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255,255,255,.2);
  z-index: 3
`
const Close = styled.span`
  color: lightgrey;
  font-size: 36px;
  position: relative;
  right: -13%;
`
const FBBox = styled.div`
  width: 350px;
  height: 150px;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: lightgrey;
`
const Text = styled.h3`
  margin-bottom: 30px;
  color: rgb(76,106,187);
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;	
`

export default function FacebookAuth() {

  const responseFacebook = (response) => {
    console.log('render?')
    console.log(response)
  }
  const clicked = () => {
    console.log('clicked')
  }

  return (
    <ModalBackground>
      <Close onClick={''}>&times;</Close>
      <FBBox>
        <Text> Login with Facebook to Like and/or Comment</Text>
        <FacebookLogin
          appId="3385132244929365"
          autoLoad={true}
          fields="name,email,picture"
          onClick={clicked}
          callback={responseFacebook} />
      </FBBox>
    </ModalBackground>
  )
}
