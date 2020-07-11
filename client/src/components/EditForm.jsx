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
const MainTitle = styled.h1`
  font-size: 24px;
`
const SubTitle = styled.h2`
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
const Content = styled.p`
  width: 900px;
  margin-top: 20px;
  padding: 0 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;
`

export default function EditForm({hideEditForm}) {
  return (
    <div>
      <ContentContainer>
        <TitleWrapper>
          <Title>
            <MainTitle>title</MainTitle>
            <SubTitle>subtitle</SubTitle>
          </Title>
            <SaveCancel>
              <SaveCancelBtn>Save</SaveCancelBtn>
              <SaveCancelBtn onClick={hideEditForm}>Cancel</SaveCancelBtn>

              {/* <i className="material-icons w3-xxxlarge">close</i> */}
            </SaveCancel>
        </TitleWrapper>

        <PostImg src='' alt='' />
        <Content>postcontent</Content>
      </ContentContainer>
    </div>
  )
}
