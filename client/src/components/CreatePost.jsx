import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { CreationEditor } from './CreationEditor'

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
  align-items: flex-start;
  width: 600px;
  font-family: 'Open Sans Condensed', sans-serif;

  @media(max-width: 680px){
    width: 500px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
  }
`
const FileUpload = styled.input`
  margin: 5px 0;
  width: 590px;

  @media(max-width: 675px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
  }
`
const Title = styled.input`
  margin: 5px;
  font-size: 15px;
  width: 500px;

  @media(max-width: 675px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
  }
  @media(max-width: 380px){
    margin-bottom: 10px
  }
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
  height: 500px;
  object-fit: contain
`

export default function CreatePost({ admin, handleCreatePost }) {

  const history = useHistory()

  const [postData, createPost] = useState({
    main_title: '',
    subtitle: '',
    content: '',
    user_id: 1, //hard coded id because admin is undefined on refresh
    img_URL: '',
    preview_Img: '',
  })

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
      [name]: files[0],
      preview_Img: URL.createObjectURL(files[0])
    })
  }


  return (

    <div>
      <ContentContainer>
        <ButtonWrapper>
          <PostCancel>
            <PostCancelBtn onClick={() => {
              handleCreatePost(postData);
              history.push(`/blog`);
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
        <PostImg src={postData.preview_Img} alt={postData.preview_Img} />

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
            <CreationEditor
              postData={postData}
              createPost={createPost}
            />
          </div>
        </Form>

      </ContentContainer>
    </div>
  )
}
