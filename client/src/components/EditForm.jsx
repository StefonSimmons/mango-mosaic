import React, { useState } from 'react'
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
  width: 900px;
  height: 500px
`

export default function EditForm({ hideEditForm, post }) {

  const { main_title, subtitle, img_URL, content, user_id } = post

  const [postData, updatePost] = useState({
    main_title: main_title,
    subtitle: subtitle,
    img_URL: img_URL,
    content: content,
    user_id: user_id
  })

  const handleChange = (e) => {
    const { name, value} = e.target;
    updatePost({
      ...postData,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const { name, files} = e.target;
    updatePost({
      ...postData,
      [name]: URL.createObjectURL(files[0])
    })
  }

  console.log(postData)
  return (

    <div>
      <ContentContainer>
        <ButtonWrapper>
          <SaveCancel>
            <SaveCancelBtn>Save</SaveCancelBtn>
            <SaveCancelBtn onClick={hideEditForm}>Cancel</SaveCancelBtn>
          </SaveCancel>
        </ButtonWrapper>
        <PostImg src={postData.img_URL} alt={img_URL} />
        <Form>
          <div>
            <FileUpload
              id="img_URL"
              type="file"
              name="img_URL"
              accept=".png, .jpg, .jpeg"
              files={postData.img_URL}
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label htmlFor="main_title">Main Title:</label>
            <Title
              id="main_title"
              type="text"
              name="main_title"
              value={postData.main_title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subtitle">Subtitle:</label>
            <Title
              id="subtitle"
              type="text"
              name="subtitle"
              value={postData.subtitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subtitle">Content:</label>
            <Content
              id="content"
              type="text"
              name="content"
              value={postData.content}
              onChange={handleChange}
            />
          </div>
        </Form>

      </ContentContainer>
    </div>
  )
}
