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
  cursor: pointer
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

export default function FacebookAuth({ setFBLogIn, setFB }) {

  const responseFacebook = (response) => {
    console.log('render?')
    console.log(response)
    if (response.status !== 'unknown') {
      setFBLogIn(true)
      setFB(false)
    }
  }
  const clicked = () => {
    console.log('clicked')
  }

  return (
    <ModalBackground>
      <Close onClick={() => {
        setFBLogIn(false)
        setFB(false)
      }}>&times;</Close>
      <FBBox>
        <Text> Login with Facebook to Like or Comment</Text>
        <FacebookLogin
          appId="3385132244929365"
          autoLoad={false}
          fields="name, email"
          onClick={clicked}
          callback={responseFacebook} />
      </FBBox>
    </ModalBackground>
  )
}
