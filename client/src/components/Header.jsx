import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 150px;
  height: 139px
`
const MMWrapper = styled.div`
  font-family: 'Dancing Script', cursive;
  color: #1831B5
`
const Mango = styled.h1`
  font-size: 58px;
  letter-spacing: 2px;
`
const Mosaic = styled(Mango)`
`

export default function Header() {
  return (
    <div>
      <Logo src="https://imgur.com/DMBxMaA.png" alt="mango-mosaic-logo" />
      <MMWrapper>
        <Mango>Mango</Mango>
        <Mosaic>Mosaic</Mosaic>
      </MMWrapper>
    </div>
  )
}
