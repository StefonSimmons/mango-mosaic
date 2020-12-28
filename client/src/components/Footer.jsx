import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  color: #102467;
  background-color: lightgrey;
  border-radius: 10px;
  border: 1px solid lightgrey;

  &:hover{
    border: 1px solid #2B791E;
    background: rgba(43,121,30, .5);
    color: black
  }
`
const DashBoard = styled(CreatePost)`
  &:hover{
    border: 1px solid #2B791E;
    background: rgba(11,93,199, .5);
    color: black
  }
`
const AdminLogIn = styled.h6`
  font-weight: 700;
  letter-spacing: 5px;
  cursor: pointer;
  color: lightgrey

`
const AdminLogOut = styled(AdminLogIn)`
`

export default function Footer({ admin, logOut, showLogInModal, verifyEditModal }) {

  const location = useLocation()

  return (
    <>
      <Foot>
        <Bottom>
          {admin ?
            <>
              <AdminLogOut onClick={() => { logOut(); verifyEditModal() }}>Log Out</AdminLogOut>
              {location.pathname !== '/new-post' &&
                < Link to='/new-post'><CreatePost>Create New Post</CreatePost></Link>
              }
              <Link to='/admin-dashboard'><DashBoard>Admin Dashboard</DashBoard></Link>
            </>
            :
            <>
              <AdminLogIn onClick={() => showLogInModal(true)}>Admin Log-in</AdminLogIn>
              <Text>Crafted By: Stefon Simmons</Text>
            </>
          }

        </Bottom>
      </Foot>
    </>
  )
}
