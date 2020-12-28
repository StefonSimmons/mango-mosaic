import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
  letter-spacing: 2px;

  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px;
  }
  @media(max-width: 680px){
    width: 500px
  }
  @media(max-width: 500px){
    width: 400px
  }
  @media(max-width: 400px){
    width: 350px
  }
`
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end
  width: 500px;
  @media(max-width: 500px){
    flex-direction: column;
    align-items: flex-start;
  }
`
const Label = styled.label`
  @media(max-width: 500px){
    display: none;
  }
`
const Input = styled.input`
  margin: 5px;
  width: 220px;
  height: 33px;
  @media(max-width: 500px){
    margin: 5px 0;
  }
`
const NameEmailFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px

`
const CommentArea = styled.textarea`
  margin: 5px 0;
  height: 77px
`
const SubmitBtn = styled.button`
  width: fit-content;
  margin-top: 5px;
  color: white;
  padding: 0 10px;
  background-color: rgb(26,26,26);
  border-radius: 10px;
  border: 1px solid rgb(26,26,26);
`
const CancelBtn = styled(SubmitBtn)`
  margin-left: 15px;
  background: red;
  border: 1px solid red;

`
export default function CreateComment({ handleCreateComment, updateCommentClicked }) {

  const { postId } = useParams()

  const [commentData, trackCommentData] = useState({
    commenter: '',
    email: '',
    social: '',
    comment: '',
    post_id: parseInt(postId)
  })

  function handleChange(e) {
    const { name, value } = e.target
    trackCommentData({
      ...commentData,
      [name]: value
    })
  }

  const { commenter, email, social, comment } = commentData

  return (
    <div>
      <Divider />

      <CommentForm
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateComment(commentData)
          updateCommentClicked(false)
          trackCommentData({
            commenter: '',
            email: '',
            social: '',
            comment: '',
            post_id: parseInt(postId)
          })
        }}>
        <InputWrapper>
          <NameEmailFields>
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input
                id="name"
                type="text"
                name="commenter"
                value={commenter}
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="text"
                name="email"
                value={email}
                placeholder="(Not published)"
                onChange={handleChange}
              />
            </div>
          </NameEmailFields>
          <div>
            <Label htmlFor="social">Social:</Label>
            <Input
              id="social"
              type="text"
              name="social"
              value={social}
              placeholder="@Instagram or @Twitter"
              onChange={handleChange}
            />
          </div>
        </InputWrapper>
        <CommentArea
          type="text"
          name="comment"
          value={comment}
          placeholder='Write Your Comment Here...'
          onChange={handleChange}
        />
        <div>
          <SubmitBtn type="submit">Add Comment</SubmitBtn>
          <CancelBtn onClick={() => { updateCommentClicked(false) }}>Cancel</CancelBtn>
          <button>FB LogIn</button>
        </div>
      </CommentForm>
    </div>
  )
}

