import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import EditForm from './EditForm'
import DeletionModal from './DeletionModal';
import RecentPosts from './RecentPosts'
import PostContent from './PostContent'
import PostBackground from './PostBackground';

import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  margin-left: 50px;
  justify-content: flex-start;
  padding: 50px 0px;
  z-index: 2;
  animation: ${fadeIn} ease 1.2s;
  
  @media(max-width: 1150px){
    flex-direction: column-reverse
  }
  @media(max-width: 930px){
    margin: 0 auto;
    width: 95vw;
  }
  @media(max-width: 780px){
    width: 90vw;
  }
  @media(max-width: 680px){
    width: 500px
  }
  @media(max-width: 500px){
    width: 400px;
  }
  @media(max-width: 400px){
    width: 350px;
  }
`
const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: lightgrey;
`

export default function Post({
  allPosts, allComments,
  admin, showDeletionModal,
  showEditForm, hideEditForm,
  editClicked, handleSaveEdit,
  verifyEditModal, handleCreateComment,
  deletePost, deleteComment,
  deleteClicked, cancelDeletion
}) {

  const { postId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [postId])

  // FILTERS FOR SELECTED POST
  const post = allPosts.filter((p) => p.id === parseInt(postId))[0]

  return (
    <>
      <DeletionModal
        deletePost={deletePost}
        deleteClicked={deleteClicked}
        cancelDeletion={cancelDeletion}
      />
      {post !== undefined ?
        <>

          <Wrapper>
            {editClicked ?
              <EditForm
                post={post}
                hideEditForm={hideEditForm}
                handleSaveEdit={handleSaveEdit}
                editClicked={editClicked}
              />
              :
              <PostContent
                post={post}
                admin={admin}
                showEditForm={showEditForm}
                showDeletionModal={showDeletionModal}
                handleCreateComment={handleCreateComment}
                allComments={allComments}
                deleteClicked={deleteComment}
              />
            }

            <RecentPosts
              allPosts={allPosts}
              verifyEditModal={verifyEditModal}
            />
          </Wrapper>
          <PostBackground />

        </>
        :
        <Loading>
          <h1 style={{ fontSize: '36px' }}>Loading Content...</h1>
          <img src='https://media.giphy.com/media/elhHndVfpU1621gcEJ/giphy.gif' alt='girl flipping pages' />
        </Loading>
      }
    </>
  )
}
