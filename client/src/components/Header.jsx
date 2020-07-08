import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between
`
const Logo = styled.img`
  width: 150px;
  height: 139px;
`
const MMWrapper = styled.div`
  font-family: 'Dancing Script', cursive;
  color: #1831B5;
  position: absolute;
  top: 2.5%;
  left: 6.5%;
`
const Mango = styled.h1`
  font-size: 48px;
  letter-spacing: 2px;
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
`
const List = styled.ul`
  display: flex;
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const NavItem = styled.li`
  padding-left: 69px;
`
export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <MMWrapper>
          <Mango>Mango</Mango>
          <Mosaic>Mosaic</Mosaic>
        </MMWrapper>
        <Logo src="https://imgur.com/DMBxMaA.png" alt="mango-mosaic-logo" />
      </div>
      <Nav>
        <List>
          <NavLink to='/'><NavItem>Home</NavItem></NavLink>
          <NavLink to='/blog'><NavItem>Blog</NavItem></NavLink>
          <NavLink to='/about-me'><NavItem>About</NavItem></NavLink>
          <NavItem>Contact</NavItem>
        </List>
      </Nav>
    </HeaderContainer>
  )
}
