import React from 'react'
import { Divider } from './Comment'
import styled from 'styled-components'

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 20px;
  background-color: #E7E7EF;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px
`
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end
  width: 500px
`
const Input = styled.input`
  margin: 5px;
  width: 220px;
  height: 33px
`
const NameEmailFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px

`
const CommentArea = styled.textarea`
  margin-top: 5px;
  height: 77px
`
export default function CreateComment() {

  return (
    <div>
      <Divider />

      <CommentForm>
        <InputWrapper>
          <NameEmailFields>
            <div>
              <label htmlFor="name">Name:</label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Input id="email" type="text" placeholder="(Not published)" />
            </div>
          </NameEmailFields>
          <div>
            <label htmlFor="social">Social:</label>
            <Input id="social" type="text" placeholder="@Instagram or @Twitter" />
          </div>
        </InputWrapper>
        <CommentArea type="text" placeholder='Write Your Comment Here...' />
      </CommentForm>
    </div>
  )
}
