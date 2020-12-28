import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CreateComment from './CreateComment'
import { Twitter, Linkedin, Facebook, Mail, Whatsapp, Pinterest } from 'react-social-sharing'

import { formatDate } from '../utilities/helperMethods'

import like from '../assets/like-icon.png'

const CommentHeader = styled.div`
  display: flex;
  width: 700px;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px;
  }
  @media(max-width: 680px){
    width: 500px
  }
  @media(max-width: 500px){
    width: 400px
  }
  @media(max-width: 400px){
    width: 350px
  }
`
const CommentCount = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: lightgrey;
`
export const Divider = styled.hr`
  height: 1px;
  width: 700px;
  background: #706B6B;

  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px;
  }
  @media(max-width: 680px){
    width: 500px
  }
  @media(max-width: 500px){
    width: 400px
  }
  @media(max-width: 400px){
    width: 350px
  }
`
const DeleteCmnt = styled.button`
  background-color: red;
  border: 1px solid red;
  color: rgb(26,26,26);
  border-radius: 10px;
  font-weight: 700;
  margin-bottom: 10px
`
const YesNoBtns = styled.button`
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-weight: 700;
  margin: 10px 50px; 
  font-size: 20px;
`
const CommentContainer = styled.div`
  background-color: #E7E7EF;
  width: 700px;
  padding: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400;

  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px;
  }
  @media(max-width: 680px){
    width: 500px
  }
  @media(max-width: 500px){
    width: 400px
  }
  @media(max-width: 400px){
    width: 350px
  }
`
const CreatedAt = styled.h3`
  padding: 10px 0 20px 0;
`
export default function Comment({ allComments, handleCreateComment, admin, deleteComment }) {

  const { postId } = useParams()

  const [deleteMsg, confirmDelete] = useState(false)
  const [deleteBtnId, updateID] = useState(null)
  // FOR COMMENT CREATION FORM
  const [commentClicked, updateCommentClicked] = useState(false)
  
  // NUMBER OF COMMENTS FOR THE ACCESSED POST
  const commentCount = allComments.filter(c => c.post_id === parseInt(postId)).length


  // eslint-disable-next-line
  const comments = allComments.map(c => {
    if (c.post_id === parseInt(postId)) {
      return (
        <div key={c.id}>
          <Divider />
          {admin &&
            <DeleteCmnt onClick={() => {
              confirmDelete(true)
              updateID(c.id)
            }}>Delete Comment</DeleteCmnt>
          }
          {deleteMsg && c.id === deleteBtnId &&
            <>
              <h5>Are you sure you want to delete this comment?</h5>
              <YesNoBtns onClick={() => deleteComment(c.id)}>Yes</YesNoBtns>
              <YesNoBtns onClick={() => confirmDelete(false)}>No</YesNoBtns>
            </>
          }
          <CommentContainer>
            <h2>{c.commenter}</h2>
            <CreatedAt>{formatDate(c, 'comment')}</CreatedAt>
            <p>{c.comment}</p>
          </CommentContainer>
        </div>
      )
    }
  })

  return (
    <div>
      <Divider />
      <Twitter solid small link={`https://mango-mosaic.netlify.app/blog/${postId}`} />
      <Linkedin solid small link={`https://mango-mosaic.netlify.app/blog/${postId}`} />
      <Facebook solid small link={`https://mango-mosaic.netlify.app/blog/${postId}`} />
      <Whatsapp solid small link={`https://mango-mosaic.netlify.app/blog/${postId}`} />
      <Pinterest solid small link={`https://mango-mosaic.netlify.app/blog/${postId}`} />
      <Mail solid small link={`https://mango-mosaic.netlify.app/blog/${postId}`} />

      {comments !== undefined ?
        <>
          <CommentHeader>

            <img src={like} alt="like"/>
            <CommentCount>{`Comments ( ${commentCount} )`}</CommentCount>
            <i
              onClick={() => { updateCommentClicked(true) }}
              style={{ cursor: 'pointer' }}
              className="material-icons w3-xxlarge w3-text-light-grey">add_comment</i>

          </CommentHeader>

          {commentClicked ?
            <CreateComment
              handleCreateComment={handleCreateComment}
              postId={postId}
              updateCommentClicked={updateCommentClicked}
            />
            :
            null
          }
          {comments}
        </>
        :
        'Loading Comments...'
      }

    </div>
  )
}
