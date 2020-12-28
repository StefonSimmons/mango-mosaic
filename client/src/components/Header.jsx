import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import mango from '../assets/mango-logo.png'


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 15px;
`
const Logo = styled.img`
  width: 140px;
  height: 125px;
`
const MMWrapper = styled.div`
  position: relative;

  @media(max-width: 575px){
    display: flex;
    justify-content: center;
    width: 95vw;
  }
`
const TitleWrapper = styled.div`
  position: absolute;
  right: -55%;
  bottom: -5%;
  @media(max-width: 575px){
    right: 25%;
  }
`
const Mango = styled.h1`
  font-size: 42px;
  letter-spacing: 2px;
  color: lightgrey;
  font-family: 'Redressed', cursive;

  @media(max-width: 575px){
    font-size: 36px;
  }
`
const Mosaic = styled(Mango)`
  padding-left: 40px;
`
const List = styled.ul`
  display: flex;

  @media(max-width: 575px){
    display: none;
  }
`

const WelcomeBack = styled.li`
  align-self: center;
  padding-left: 69px;
  font-size: 18px;
  color: lightgrey;
  letter-spacing: 5px;
  font-family: 'Redressed', cursive;
`

export default function Header({ admin }) {


  return (
    <HeaderContainer>
      <Link to='/blog'>
        <MMWrapper>
          <TitleWrapper>
            <Mango>Mango</Mango>
            <Mosaic>Mosaic</Mosaic>
          </TitleWrapper>
          <Logo src={mango} alt="mango-mosaic-logo" />
        </MMWrapper>
      </Link>
      <List>
        {admin ? <WelcomeBack>Welcome Back, Ashlea</WelcomeBack> : null}
      </List>
    </HeaderContainer>
  )
}
