import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { CreationEditor } from './CreationEditor'

const ContentContainer = styled.div`
margin: 0 30px;
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
  color: lightgrey;

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

  &::placeholder{
    color: lightgrey
  }

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

const PostCancelPin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 10px
`
const PostCancelBtn = styled.button`
  font-family: 'Redressed', cursive;
  font-size: 28px;
  letter-spacing: 2px;
  padding: 3px 15px;
  background-color: #E3D1E2;
  border-radius: 45px;
  border: 2px solid #E3D1E2;

  &:hover{
    background: #D2C0D1;
    border: 1px solid #D2C0D1;
  }
  &:active{
    transform: scale(.95);
  }
`
export const PinBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Redressed', cursive;
  letter-spacing: 2px;
  font-size: 28px;
  color: lightgrey;
`
export const CheckBox = styled.input`
  width: 40px;
  height: 40px;
`
const PostImg = styled.img`
  width: 900px;
  height: 500px;
  object-fit: contain;
  background: white;
`

export default function CreatePost({ handleCreatePost }) {

  const history = useHistory()

  const [postData, createPost] = useState({
    main_title: '',
    subtitle: '',
    content: '',
    user_id: 1, //hard coded id because admin is undefined on refresh
    is_pinned: false,
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
    // previewImg allows me a temporary solution 
    // to view the image on the DOM before uploading.
    // img_URL get's updated in State inorder to be delivered to the ___?
    // URL.createObjectURL(files[0]) will create a local URL string representing the
    // file object
    createPost({
      ...postData,
      [name]: files[0],
      preview_Img: URL.createObjectURL(files[0])
    })
  }

  const handleCheck = () => {
    createPost({
      ...postData,
      is_pinned: !postData.is_pinned
    })
  }

  return (

    <div>
      <ContentContainer>
        <ButtonWrapper>
          <PostCancelPin>
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
            <PinBox htmlFor='pinned'>
              <span>Pin?</span>
              <CheckBox
                id="pinned"
                type='checkbox'
                name="is_pinned"
                value={postData.is_pinned}
                onChange={handleCheck}
              />
            </PinBox>
          </PostCancelPin>
        </ButtonWrapper>
        <PostImg src={postData.preview_Img} alt={postData.preview_Img} />

        {/* CREATE FORM  */}
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
            {/* COMPONENT for DRAFT.JS RICH-TEXT EDITING */}
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
