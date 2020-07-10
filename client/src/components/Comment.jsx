import React from 'react'
import { useParams } from 'react-router-dom'

export default function Comment({ allComments }) {

  const { postId } = useParams()
  console.log(allComments)
  const comments = allComments.filter(c => c.id === parseInt(postId))[0]
  console.log(comments)
  return (
    <div>
      {comments !== undefined?
        <h1>{`Comments ${comments.comment}`}</h1>
        :
        'Reloading...'
      }
    </div>
  )
}
