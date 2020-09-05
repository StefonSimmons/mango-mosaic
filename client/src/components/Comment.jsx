import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CreateComment from './CreateComment'
import { Twitter, Linkedin, Facebook, Mail, Whatsapp, Pinterest } from 'react-social-sharing'

const CommentHeader = styled.div`
  display: flex;
  width: 700px;
  margin-top: 10px;
  justify-content: space-between;

  @media(max-width: 700px){
    width: 600px;
  }
  @media(max-width: 620px){
    width: 500px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px
  }
`
const CommentCount = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700
`
const AddCommentContainer = styled.div`
  height: 36px
`
const AddCommentBtn = styled.button`
  margin-left: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: rgb(26,26,26);
  border-radius: 10px;
  border: 1px solid rgb(26,26,26);
`
export const Divider = styled.hr`
  height: 1px;
  width: 700px;
  background: #706B6B;

  @media(max-width: 700px){
    width: 600px;
  }
  @media(max-width: 620px){
    width: 500px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px
  }
`
const CommentContainer = styled.div`
  background-color: #E7E7EF;
  width: 700px;
  padding: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400;

  @media(max-width: 700px){
    width: 600px;
  }
  @media(max-width: 620px){
    width: 500px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px
  }
`
const CreatedAt = styled.h3`
  padding: 10px 0 20px 0;
`
export default function Comment({ allComments, handleCreateComment }) {

  const { postId } = useParams()

  // NUMBER OF COMMENTS FOR THE ACCESSED POST
  const commentCount = allComments.filter(c => c.post_id === parseInt(postId)).length

  // FORMATS UTC DATE FOR DISPLAY
  function formatDate(comment) {
    if (comment !== undefined) {
      const milliseconds = Date.parse(comment.created_at)
      const dateObj = new Date(milliseconds)
      const comment_datetime = dateObj.toLocaleString("en-US").replace(',', '')
      return comment_datetime
    }
  }

  const comments = allComments.map(c => {
    if (c.post_id === parseInt(postId)) {
      return (
        <div key={c.id}>
          <Divider />
          <CommentContainer>
            <h2>{c.commenter}</h2>
            <CreatedAt>{formatDate(c)}</CreatedAt>
            <p>{c.comment}</p>
          </CommentContainer>
        </div>
      )
    }
  })
  // FOR COMMENT BTN DISPLAY ANIMATION
  const [cBtnDisplay, updatebtnDisplay] = useState(false)

  // FOR COMMENT CREATION FORM
  const [commentClicked, updateCommentClicked] = useState(false)

  return (
    <div>
      <Divider />
      <Twitter solid small link="https://github.com" />
      <Linkedin solid small link="https://github.com" />
      <Facebook solid small link="https://github.com" />
      <Whatsapp solid small link="https://github.com" />
      <Pinterest solid small link="https://github.com" />
      <Mail solid small link="https://github.com" />

      {comments !== undefined ?
        <>
          <CommentHeader>

            <CommentCount>{`Comments ( ${commentCount} )`}</CommentCount>
            <AddCommentContainer
              onMouseLeave={() => updatebtnDisplay(false)}
              onMouseEnter={() => updatebtnDisplay(true)}
            >
              {cBtnDisplay ?
                <AddCommentBtn onClick={() => { updateCommentClicked(true) }}>Comment</AddCommentBtn>
                :
                <i className="material-icons w3-xxlarge">add_comment</i>
              }
            </AddCommentContainer>

          </CommentHeader>

          { commentClicked ?
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
        'Reloading...'
      }

    </div>
  )
}
