import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 600px;
  font-family: 'Open Sans Condensed', sans-serif;
`
const FileUpload = styled.input`
  margin: 5px 0;
  width: 590px;
`
const Title = styled.input`
  margin: 5px;
  font-size: 15px;
  width: 500px;
`
const Content = styled.textarea`
  margin: 5px;
  font-size: 15px;
  width: 500px;
  height: 450px
`
const SaveCancel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  margin-bottom: 10px
`
const SaveCancelBtn = styled.button`
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  letter-spacing: 2px;
  padding: 3px 15px;
  background-color: #E3D1E2;
  border-radius: 10px;
  border: 2px solid purple
`
const PostImg = styled.img`
  width: 900px
`

export default function EditForm({ hideEditForm, post }) {
  return (
    <div>
      <ContentContainer>
        <ButtonWrapper>
          <SaveCancel>
            <SaveCancelBtn>Save</SaveCancelBtn>
            <SaveCancelBtn onClick={hideEditForm}>Cancel</SaveCancelBtn>
          </SaveCancel>
        </ButtonWrapper>
        <PostImg src={post.img_URL} alt={post.img_URL} />
        <Form>
          <div>
            <FileUpload
              id="img_URL"
              type="file"
              name="main_title"
              // value={email}
              // placeholder={post.img_URL}
            // onChange={handleChange}
            />
          </div>
          <div>
            <label for="main_title">Main Title:</label>
            <Title
              id="main_title"
              type="text"
              name="main_title"
              // value={email}
              placeholder={post.main_title}
            // onChange={handleChange}
            />
          </div>
          <div>
            <label for="subtitle">Subtitle:</label>
            <Title
              id="subtitle"
              type="text"
              name="subtitle"
              // value={email}
              placeholder={post.subtitle}
            // onChange={handleChange}
            />
          </div>
          <div>
            <label for="subtitle">Content:</label>
            <Content
              id="content"
              type="text"
              name="content"
              // value={email}
              placeholder={post.content}
            // onChange={handleChange}
            />
          </div>
        </Form>

      </ContentContainer>
    </div>
  )
}
