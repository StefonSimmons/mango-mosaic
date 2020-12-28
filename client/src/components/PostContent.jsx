import React from 'react'
import styled from 'styled-components'

import { formatDate, getReadTime } from '../utilities/postMethods'

import { DisplayEditor } from './DisplayEditor'
import Comment from './Comment'

const ContentContainer = styled.div`
  
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 475px){
    flex-direction: column-reverse;
  }
`
const Titles = styled.div`
  width: 600px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700; 

  @media(max-width: 475px){
    text-align: center;
    width: 350px;
  }
`
const MainTitle = styled.h1`
  font-size: 36px;
  color: lightgrey;
`
const SubTitle = styled.h2`
  font-size: 24px;
  margin: 12px 0 ;
  color: lightgrey;
`
const DateNRead = styled.h5`
  font-weight: 300;;
  color: lightgrey;
  margin-bottom: 12px
`
const EditDelete = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-right: 5px;

  @media(max-width: 475px){
    flex-direction: column;
  }
`
const EditDeleteBtn = styled.button`
  font-family: 'Redressed', cursive;
  font-size: 28px;
  letter-spacing: 2px;
  padding: 3px 15px;
  background-color: #E3D1E2;
  border-radius: 45px;
  border: 1px solid #E3D1E2;

  &:hover{
    background: #D2C0D1;
    border: 1px solid #D2C0D1;
  }
  &:active{
    transform: scale(.95);
  }
  @media(max-width: 475px){
    margin: 10px;
  }
`
const mediaQuery = `
  @media(max-width: 930px){
    width: 800px;
  }
  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px;
  }
  @media(max-width: 680px){
    width: 500px;
    height: 300px;
  }
  @media(max-width: 500px){
    width: 400px;
    height: 200px;    
  }
  @media(max-width: 400px){
    width: 350px;
  }
`
const ImageContainer = styled.div`
  width: 900px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgba(133,107,123,.3);
  ${mediaQuery}
`
const PostImg = styled.img`
  width: 900px;
  height: 500px;
  object-fit: contain;
  ${mediaQuery}
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

export default function PostContent(
  { post, admin, showDeletionModal, showEditForm,
    handleCreateComment, allComments, deleteComment
  }
) {
  return (
    <ContentContainer>
      <TitleWrapper>
        <Titles>
          <MainTitle>{post.main_title}</MainTitle>
          <SubTitle>{post.subtitle}</SubTitle>
          <DateNRead>{`${formatDate(post)} | ${getReadTime(post)} min. read`}</DateNRead>
        </Titles>
        {admin ?
          <EditDelete>
            <EditDeleteBtn onClick={showEditForm}>Edit</EditDeleteBtn>
            <EditDeleteBtn onClick={showDeletionModal}>Delete</EditDeleteBtn>
          </EditDelete>
          :
          null
        }
      </TitleWrapper>
      <ImageContainer>
        <PostImg src={post.img_URL} alt={`image for post ${post.id}`} />
      </ImageContainer>

      {/* TERNARY CHECKS FOR JSON/EDITOR TEXT OR PLAIN TEXT */}
      {post.content.substring(0, 2) !== '{"' ?
        <Content>{post.content}</Content>
        :
        <DisplayEditor content={post.content}/>
      }
      <Comment
        handleCreateComment={handleCreateComment}
        allComments={allComments}
        admin={admin}
        deleteComment={deleteComment}
      />

    </ContentContainer>
  )
}
