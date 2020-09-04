import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import brush from '../assets/brush-stroke.png'
import mango from '../assets/mango-logo.png'
import { useLocation } from 'react-router-dom'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between
`
const Logo = styled.img`
  width: 150px;
  height: 139px;
  
  @media(max-width: 460px){
    margin-left: 115px ;
  }
  @media(max-width: 380px){
    width: 129px;
    height: 120px;
    margin-left: 80px
  }
`
const MMWrapper = styled.div`
  font-family: 'Dancing Script', cursive;
  color: black;
  position: absolute;
  top: 2.5%;
  left: 6.5%;

  @media(max-width: 460px){
    left: 35%;
  }
  @media(max-width: 380px){
    left: 30%
  }
`
const Mango = styled.h1`
  font-size: 48px;
  letter-spacing: 2px;
  color: rgb(1, 12, 5);

  @media(max-width: 380px){
    font-size: 36px;
  }
`
const Mosaic = styled(Mango)`
  padding-left: 40px;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  font-size: 42px;
  letter-spacing: 2px;

  @media(max-width: 960px){
    font-size: 36px;
  }
  @media(max-width: 845px){
    font-size: 32px;
  }
  @media(max-width: 780px){
    position: absolute;
    right: 0;
    background-color: rgb(255,255,255, .3);
    width: 55px;
    height: 100vh;
    justify-content: center;
    z-index: 2
  }
  @media(max-width: 380px){
    background-color: rgb(255,255,255, .2);
    width: 50px;
  }
`
const List = styled.ul`
  display: flex;

  @media(max-width: 780px){
    display: none
  }
`
const ListIcons = styled.ul`
  display: none;

  @media(max-width: 780px){
    display: flex;
    flex-direction: column;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(1, 12, 5);
  transition: transform .5s;

  &:hover{
    background-image: url(${brush});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:active{
    transform: scale(.96);
  }

  @media(max-width: 780px){
    margin: 50px 0
  }
  @media(max-width: 380px){
    margin: 50px 5px;
  }
`
const NavItem = styled.li`
  padding: 0 38px;

  @media(max-width: 1055px){
    padding: 0 24px;
  }
  @media(max-width: 960px){
    padding: 0 20px;
  }
`
const WelcomeBack = styled.li`
  align-self: center;
  padding-left: 69px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  color: #1831B5;
  letter-spacing: 1px;
`
export default function Header({ admin, verifyEditModal }) {

  const location = useLocation()
  
  return (
    <HeaderContainer>
      <div>
        <MMWrapper>
          <Mango>Mango</Mango>
          <Mosaic>Mosaic</Mosaic>
        </MMWrapper>
        <Logo src={mango} alt="mango-mosaic-logo" />
        {/* <Logo src="https://imgur.com/Jjz5gfJ.png" alt="mango-mosaic-logo" /> */}
        {/* <Logo src="https://imgur.com/DMBxMaA.png" alt="mango-mosaic-logo" />         */}
      </div>
      <Nav>
        <List>
          {admin ? <WelcomeBack>Welcome Back, Ashlea</WelcomeBack> : null}
          <NavLink onClick={verifyEditModal} to='/'><NavItem>Home</NavItem></NavLink>
          <NavLink onClick={verifyEditModal} to='/blog'><NavItem>Blog</NavItem></NavLink>
          <NavLink onClick={verifyEditModal} to='/about-me'><NavItem>About me</NavItem></NavLink>
          <NavLink onClick={verifyEditModal} to='/contact-me'><NavItem>Contact me</NavItem></NavLink>
        </List>
        <ListIcons>
          <NavLink onClick={verifyEditModal} to='/'><i className="material-icons md-36">home</i></NavLink>
          {location.pathname.match(/\d/) ?
            <NavLink onClick={verifyEditModal} to='#'><i className="material-icons md-36">dynamic_feed</i></NavLink>
            : null
          }
          <NavLink onClick={verifyEditModal} to='/blog'><i className="material-icons md-36">import_contacts</i></NavLink>
          <NavLink onClick={verifyEditModal} to='/about-me'><i className="material-icons md-36">face</i></NavLink>
          <NavLink onClick={verifyEditModal} to='/contact-me'><i className="material-icons md-36">contact_support</i></NavLink>
        </ListIcons>

      </Nav>
    </HeaderContainer>
  )
}
