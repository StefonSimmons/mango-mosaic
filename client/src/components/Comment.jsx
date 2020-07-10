import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CommentCount = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
  font-weight: 700
`
const Divider = styled.hr`
  height: 1px;
  width: 700px;
  background: #706B6B;
`
const CommentContainer = styled.div`
  background-color: #E7E7EF;
  width: 700px;
  padding: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400
`
const CreatedAt = styled.h3`
  padding: 10px 0 20px 0;
`
export default function Comment({ allComments }) {

  const { postId } = useParams()

  // NUMBER OF COMMENTS FOR THE ACCESSED POST
  const commentCount = allComments.filter(c => c.id === parseInt(postId)).length

  // FORMATS UTC DATE FOR DISPLAY
  function formatDate(comment) {
    if (comment !== undefined) {
      const milliseconds = Date.parse(comment.created_at)
      const dateObj = new Date(milliseconds)
      const comment_datetime = dateObj.toLocaleString("en-US").replace(',','')
      return comment_datetime
    }
  }

  const comments = allComments.map(c => {
    if (c.id === parseInt(postId)) {
      return (
        <div key={c.id}>
          <Divider/>
          <CommentContainer>
            <h2>{c.commenter}</h2>
            <CreatedAt>{formatDate(c)}</CreatedAt>
            <p>{c.comment}</p>
          </CommentContainer>
        </div>
      )
    }
  })

  return (
    <div>
      {comments !== undefined ?
        <>
          <CommentCount>{`Comments ( ${commentCount} )`}</CommentCount>
          {comments}
        </>
        :
        'Reloading...'
      }
    </div>
  )
}
