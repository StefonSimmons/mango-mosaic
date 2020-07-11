import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 700px;
  font-family: 'Open Sans Condensed', sans-serif;
`
const MainTitle = styled.input`
  margin: 5px;
  font-size: 15px;
  width: 500px;
`
const SubTitle = styled.input`
  margin: 5px;
  font-size: 15px;
  width: 500px;
`
const Content = styled.textarea`
  margin: 5px;
  font-size: 15px;
  width: 500px;
  height: 300px
`
const SaveCancel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-right: 5px
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
        <TitleWrapper>
          <SaveCancel>
            <SaveCancelBtn>Save</SaveCancelBtn>
            <SaveCancelBtn onClick={hideEditForm}>Cancel</SaveCancelBtn>
          </SaveCancel>
        </TitleWrapper>
        <PostImg src='https://imgur.com/TK6W9lt.png' alt='something' />
        <Form>
          <div>
            <label for="main_title">Main Title:</label>
            <MainTitle
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
            <SubTitle
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
