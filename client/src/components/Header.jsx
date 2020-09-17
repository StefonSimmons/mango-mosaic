import React, { useState } from 'react'
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
    position: fixed;
    right: 0;
    background-color: rgb(255,255,255, .3);
    width: 55px;
    height: 105vh;
    justify-content: center;
    z-index: 2;
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
const MoreIcon = styled.div`
  display: none;

  @media(max-width: 1150px) and (min-width: 781px){
    display: flex;
    align-items: flex-end;
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
const rpWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'space-evenly',
  position: 'fixed',
  right: '3.4rem',
  zIndex: '3',
  height: '105vh',
  background: 'rgb(250,224,194',
  borderRadius: '3px',
  borderLeft: 'rgb(219,221,224) 1px solid'
}
const RPWrapper = styled.div`
  display: none;

`
const RPost = styled.div`
  display: none;
`
const RPLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const RPTitle = styled.h4`
  font-size: 36px;
  display: inline-block;
  text-shadow: 1px 0px 2px #808080;

  @media(max-width: 700px){
    font-size: 28px;
  }
`
export default function Header({ admin, verifyEditModal, allPosts }) {

  const [showRP, updateRP] = useState(false)

  const location = useLocation()

  //MAPPING W/ JSX FOR RECENT POSTS 
  // eslint-disable-next-line
  const recentPosts = allPosts.map((p, id) => {
    if (id < 5) {
      return (
        <RPost
          key={id}
          className='r-post'
          style={showRP ? { display: "block", width: '285px', marginLeft: '45px', zIndex: '3' } : null}
        >
          <RPLink onClick={verifyEditModal} to={`/blog/${p.id}`}>
            {p.main_title.length > 19 ?
              <RPTitle onClick={() => updateRP(false)}>{`${p.main_title.substring(0, 15)}...`}</RPTitle>
              :
              <RPTitle onClick={() => updateRP(false)}>{p.main_title}</RPTitle>
            }
          </RPLink>
        </RPost>
      )
    }
  })
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
      <Nav style={showRP ? { backgroundColor: "#EEF4FB" } : null}>
        <List>
          {admin ? <WelcomeBack>Welcome Back, Ashlea</WelcomeBack> : null}
          <NavLink onClick={verifyEditModal} to='/'><NavItem>Home</NavItem></NavLink>
          <NavLink onClick={verifyEditModal} to='/blog'><NavItem>Blog</NavItem></NavLink>
          <NavLink onClick={verifyEditModal} to='/about-me'><NavItem>About me</NavItem></NavLink>
          <NavLink onClick={verifyEditModal} to='/contact-me'><NavItem>Contact me</NavItem></NavLink>
          {location.pathname.match(/\d/) && <MoreIcon><i onClick={() => updateRP(!showRP)} className="material-icons md-36">more_vert</i></MoreIcon>}
        </List>
        <ListIcons>
          <NavLink onClick={() => updateRP(false)} to='/'><i className="material-icons md-36">home</i></NavLink>
          {location.pathname.match(/\d/) ?
            <NavLink onClick={() => updateRP(!showRP)} to='#'><i className="material-icons md-36" >history</i></NavLink>
            : null
          }
          <NavLink onClick={() => updateRP(false)} to='/blog'><i className="material-icons md-36">import_contacts</i></NavLink>
          <NavLink onClick={() => updateRP(false)} to='/about-me'><i className="material-icons md-36">face</i></NavLink>
          <NavLink onClick={() => updateRP(false)} to='/contact-me'><i className="material-icons md-36">contact_support</i></NavLink>
        </ListIcons>
        <RPWrapper
          onMouseLeave={() => updateRP(!showRP)}
          className="animate__animated animate__backInRight"
          style={showRP ? rpWrapperStyle : null}
        >
          {/* <h1 style={{background:"purple", color: 'white', textAlign: 'center'} }>Most Recent</h1> */}
          {recentPosts}
        </RPWrapper>
      </Nav>

    </HeaderContainer>
  )
}
