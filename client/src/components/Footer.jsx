import React from 'react'
import { Link } from 'react-router-dom'
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
const CreatePost = styled.button`
  letter-spacing: 3px;
  color: white;
  background-color: rgb(26,26,26);
  border-radius: 10px;
  border: 1px solid rgb(26,26,26);

  &:hover{
    border: 1px solid #2B791E;
    background: rgba(43,121,30, .5);
    color: black
  }
`
const AdminLogIn = styled.h6`
  font-weight: 700;
  letter-spacing: 5px;
  cursor: pointer;
`
const AdminLogOut = styled(AdminLogIn)`
`

export default function Footer({ admin, logOut, showLogInModal, verifyEditModal }) {
  return (
    <>
      <Foot>
        <Bottom>
          {admin ?
            <>
              <AdminLogOut onClick={() => { logOut(); verifyEditModal() }}>Log Out</AdminLogOut>
              <Link to='/new-post'><CreatePost>Create New Post</CreatePost></Link>
            </>
            :
            <>
              <AdminLogIn onClick={showLogInModal}>Admin Log-in</AdminLogIn>
              <Text>Crafted By: Stefon Simmons</Text>
            </>
          }

        </Bottom>
      </Foot>
    </>
  )
}
