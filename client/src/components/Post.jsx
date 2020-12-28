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
const RPLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const RecentPost = styled.h4`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 18px;
  padding: 13.5px 10px;
  
  &:hover{
    background-color: black;
    color: white;
    border-radius: 5px;
    opacity: .7;
  }
  &:active{
    transform: scale(.95);
  }
  @media(max-width: 1150px){
    font-size: 20px;
    font-weight: 700;
    background: rgba(70,7,20,.4);
    border-radius: 45px;

    &:hover{
      background: black;
      color: white;
      border-radius: 45px;
    }
  }
  @media(max-width: 930px){
    font-size: 15px
  }
  @media(max-width: 780px){
    font-size: 14px
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

  //MAPPING W/ JSX FOR RECENT POSTS 
  // eslint-disable-next-line
  const recentPosts = allPosts.map((p, id) => {
    if (id < 5) {
      return (
        <RPLink key={id} onClick={verifyEditModal} to={`/blog/${p.id}`}>
          {p.main_title.length > 19 ?
            <RecentPost>{`${p.main_title.substring(0, 19)}...`}</RecentPost>
            :
            <RecentPost>{p.main_title}</RecentPost>
          }
        </RPLink>
      )
    }
  })

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
              recentPosts={recentPosts}
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
