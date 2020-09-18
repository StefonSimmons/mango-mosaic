import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LogInModal = styled.div`
  margin: 15px auto;
  border-radius: 50%;
  width: 550px;
  height: 400px;
  border: rgb(216,224,233) solid 2px;
  font-family: 'Pathway Gothic One', sans-serif; 
  text-align: center;
  background-color: #E3D1E2;
`
const Form = styled.form`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center
`
const TitleLogIn = styled.h4`
  font-size: 42px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 2px;
  color: black
`
const Input = styled.input`
  font-size: 32px;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 2px;
  margin: 12px 0;
  padding: 15px 10px;
  width: 300px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 3px;
`
const Btn = styled.input`
  margin: 20px 0;
  padding: 6px 12px;
  background-color: purple;
  border-radius: 5px;
  border: 1px solid purple;
  font-weight: 500;
  font-size: 15px
  letter-spacing: 1.26px;
  color: white;
`
export default function LogInForm({ admin, updateAdmin, handleLoginSubmit, logInClicked, showLogInForm }) {

  const [credentials, updateCredentials] = useState({ email: '', password: '' })
  const { email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCredentials({ ...credentials, [name]: value })
  }

  // Tracks the state of admin. When admin is changed to true, the login modal is hidden..
  // This is in a useEffect because I needed to use the dependency array in order to wait for the admin state change in order to hide the form
  useEffect(() => {
    admin && showLogInForm(false)
  }, [admin])


  return (
    <>
      <div className="w3-modal" style={logInClicked ? { display: "block" } : { display: "none" }}>
        <LogInModal className="w3-modal-content w3-card-4 w3-animate-zoom">
          <span className="w3-button w3-xlarge w3-round w3-hover-purple w3-display-center" onClick={() => {
            showLogInForm(false)
            updateAdmin(null)
          }}>&times;</span>

          <Form onSubmit={(e) => {
            e.preventDefault();
            handleLoginSubmit(credentials);
            updateCredentials({ email: '', password: '' })
          }}>
            {admin !== undefined ?
              <TitleLogIn>Ashlea Only</TitleLogIn>
              :
              <>
                <h2>Unauthorized Access</h2>
                <br/>
                <h3>Invalid Username and/or Password</h3>
              </>
            }
            <Input
              id="email"
              type="text"
              name="email"
              value={email}
              placeholder='Email'
              onChange={handleChange}
              style={admin === undefined ? { border: 'red solid 3px' } : null}
            />
            <Input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder='Secret Letters'
              onChange={handleChange}
              style={admin === undefined ? { border: 'red solid 3px' } : null}
            />
            <Btn type='submit' value='Log-In' />
          </Form>
        </LogInModal>
      </div>
    </>
  )
}
