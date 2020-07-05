import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 185px;
  height: 171px
`


export default function Header() {
  return (
    <div>
      <Logo src="https://imgur.com/DMBxMaA.png" alt="mango-mosaic-logo"/>
    </div>
  )
}
