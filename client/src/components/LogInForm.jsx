import React, { Component } from 'react'
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
  margin: 50px 0;
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

export default class LogInForm extends Component {

  state = {
    email: '',
    password: ''
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state;
    const { handleLoginSubmit, logInClicked, hideLogInForm } = this.props;
    return (
      <>
        <div className="w3-modal" style={logInClicked ? { display: "block" } : { display: "none" }}>
          <LogInModal className="w3-modal-content w3-card-4 w3-animate-zoom">
            <span className="w3-button w3-xlarge w3-round w3-hover-purple w3-display-center" onClick={hideLogInForm}>&times;</span>
            <Form onSubmit={(e) => {
              e.preventDefault();
              handleLoginSubmit(this.state);
              hideLogInForm()
              this.setState({
                email: '',
                password: ''
              })
            }}>
              <TitleLogIn>Ashlea Only</TitleLogIn>
              <Input
                id="email"
                type="text"
                name="email"
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />

              <br />
              <Input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder='Secret Letters'
                onChange={this.handleChange}
              />
            </Form>
          </LogInModal>
        </div>
      </>
    )
  }
}