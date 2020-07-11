import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
const Title = styled.div`
  width: 600px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
`
const MainTitle = styled.input`
  font-size: 24px;
`
const SubTitle = styled.input`
  font-size: 18px;
  padding: 12px 0;
  text-align: center;
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
const Content = styled.input`
  width: 900px;
  margin-top: 20px;
  padding: 0 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
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
        <Title>
          <MainTitle
            id="main_title"
            type="text"
            name="main_title"
            // value={email}
            placeholder={post.main_title}
          // onChange={handleChange}
          />
          <SubTitle
            id="subtitle"
            type="text"
            name="subtitle"
            // value={email}
            placeholder={post.subtitle}
          // onChange={handleChange}
          />
          <Content
            id="content"
            type="text"
            name="content"
            // value={email}
            placeholder={post.content}
          // onChange={handleChange}
          />
        </Title>

      </ContentContainer>
    </div>
  )
}
