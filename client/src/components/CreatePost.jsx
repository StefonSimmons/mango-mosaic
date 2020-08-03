import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

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
const PostCancel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  margin-bottom: 10px
`
const PostCancelBtn = styled.button`
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

export default function CreatePost({ admin, handleCreatePost}) {

  const history = useHistory()

  const [postData, createPost] = useState({
    main_title: '',
    subtitle: '',
    content: '',
    user_id: admin.id,
    img_URL: {}
  })

  const form = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    createPost({
      ...postData,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    createPost({
      ...postData,
      [name]: files[0]
    })
  }

  function refreshMe() {
    history.push(`/blog`);
    window.location.reload();
  }

  return (

    <div>
      <ContentContainer>
        <ButtonWrapper>
          <PostCancel>
            <PostCancelBtn onClick={() => {
              const data = new FormData(form.current)
              console.log(data)
              handleCreatePost(data);
              // refreshMe();
              createPost({
                main_title: '',
                subtitle: '',
                img_URL: '',
                content: '',
                user_id: ''
              })
            }}>Post</PostCancelBtn>
            <PostCancelBtn onClick={() => {
              history.push(`/blog`)
              createPost({
                main_title: '',
                subtitle: '',
                img_URL: '',
                content: '',
                user_id: ''
              })
            }}>Cancel</PostCancelBtn>
          </PostCancel>
        </ButtonWrapper>
        <PostImg src={postData.img_URL} alt={postData.img_URL} />

        <Form ref={form}>
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
            <label htmlFor="content">Content:</label>
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
