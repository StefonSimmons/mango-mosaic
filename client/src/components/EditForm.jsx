import React, { useState } from 'react'
import styled from 'styled-components'
import { PinBox, CheckBox } from './CreatePost'
import { DisplayEditor } from './DisplayEditor'

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
const PostImg = styled.img`
  width: 900px;
  height: 500px;
  object-fit: contain;

  @media(max-width: 930px){
    width: 800px;
  }
  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px
  }
  @media(max-width: 680px){
    width: 500px;
    height: 300px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
    height: 200px;
  }
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
export default function EditForm({ hideEditForm, post, handleSaveEdit, editClicked }) {

  const { main_title, subtitle, img_URL, content, user_id, id, is_pinned } = post

  const [postData, updatePost] = useState({
    main_title: main_title,
    subtitle: subtitle,
    img_URL: img_URL,
    content: content,
    user_id: user_id,
    is_pinned: is_pinned,
    preview_Img: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePost({
      ...postData,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    updatePost({
      ...postData,
      [name]: files[0],
      preview_Img: URL.createObjectURL(files[0])
    })
  }

  const handleCheck = () => {
    updatePost({
      ...postData,
      is_pinned: !postData.is_pinned
    })
  }

  console.log(postData)
  return (

    <div>
      <ContentContainer>
        <ButtonWrapper>
          <SaveCancel>
            <SaveCancelBtn
              onClick={() => {
                handleSaveEdit(id, postData);
                hideEditForm()
              }}
            >Save</SaveCancelBtn>
            <SaveCancelBtn
              onClick={hideEditForm}
            >Cancel</SaveCancelBtn>
          </SaveCancel>
          <PinBox htmlFor='pinned'>
            <span>Pin?</span>
            <CheckBox
              id="pinned"
              type='checkbox'
              name="is_pinned"
              checked={postData.is_pinned} //if the value is truthy, it will apply the attribute 'checked'
              value={postData.is_pinned}
              onChange={handleCheck}
            />
          </PinBox>
        </ButtonWrapper>
        {postData.preview_Img !== '' ?
          <PostImg src={postData.preview_Img} alt={postData.preview_Img} />
          :
          <PostImg src={postData.img_URL} alt={postData.img_URL} />
        }
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
            {post.content.substring(0, 2) !== '{"' ?
              <Content>{post.content}</Content>
              :
              <DisplayEditor
                content={content}
                editClicked={editClicked}
                updatePost={updatePost}
                postData={postData}
              />
            }

          </div>
        </Form>

      </ContentContainer>
    </div>
  )
}
