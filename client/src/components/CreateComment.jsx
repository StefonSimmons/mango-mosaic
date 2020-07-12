import React, { useState } from 'react'
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
export default function CreateComment({ handleCreateComment, postId }) {

  const [commentData, trackCommentData] = useState({
    commenter: '',
    email: '',
    social: '',
    comment: '',
    postId: postId
  })

  function handleChange(e) {
    const { name, value } = e.target
    trackCommentData({
      ...commentData,
      [name]: value
    })
  }

  const { commenter, email, social, comment, post_id } = commentData
  
  return (
    <div>
      <Divider />

      <CommentForm
        onSubmit={(e) => handleCreateComment(e)}
      >
        <InputWrapper>
          <NameEmailFields>
            <div>
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="email">Email:</label>
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
            <label htmlFor="social">Social:</label>
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
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </CommentForm>
    </div>
  )
}

