import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  margin: 20px 0 10px 0
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 0; 
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 12px;
  color: black;
`
const Text = styled.h6`
  letter-spacing: 3px;
`
const AdminLogIn = styled.h6`
  font-weight: 700;
  letter-spacing: 5px;
  cursor: pointer;
`
export default function Footer() {
  return (
    <>
      <Foot>
        <Bottom>
          <AdminLogIn>Admin Log-in</AdminLogIn>
          <Text>Crafted By Stefon Simmons</Text>
        </Bottom>
      </Foot>
    </>
  )
}
