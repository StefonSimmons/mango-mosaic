import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 150px;
  height: 139px
`
const LogoName = styled.h1`
  font-family: 'Dancing Script', cursive;
`


export default function Header() {
  return (
    <div>
      <Logo src="https://imgur.com/DMBxMaA.png" alt="mango-mosaic-logo"/>
      <LogoName>Mango Mosaic</LogoName>
    </div>
  )
}
