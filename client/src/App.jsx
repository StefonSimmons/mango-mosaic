import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { getAllPosts, updatePost } from './services/posts'
import { getAllComments, createComment } from './services/comments'
import { loginUser, verifyUser, removeToken } from './services/auth'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Footer from './components/Footer'
import LogInForm from './components/LogInForm';
import DeletionModal from './components/DeletionModal';
import SaveEditModal from './components/SaveEditModal';

function App() {

  const [allPosts, updateAllPosts] = useState([])
  const [allComments, updateAllComments] = useState([])
  const [editForm, updateEditForm] = useState(false)
  const [logInModal, updateLoginModal] = useState(false)
  const [deletionModal, updateDeletionModal] = useState(false)
  const [verifyEditModal, updateEditModal] = useState(false)
  const [admin, updateAdmin] = useState(null)

  // BLOG HANDLERS
  useEffect(() => {
    const getPosts = async () => {
      const res = await getAllPosts()
      updateAllPosts(res)
    }
    getPosts()
  }, [])

  useEffect(() => {
    const getComments = async () => {
      const res = await getAllComments()
      updateAllComments(res)
    }
    getComments()
  }, [])

  // AUTHENTICATION HANDLERS
  useEffect(() => {
    const verify = async () => {
      const admin = await verifyUser()
      updateAdmin(admin)
    }
    verify()
  }, [])

  const handleLoginSubmit = async (loginParams) => {
    const admin = await loginUser(loginParams);
    updateAdmin(admin)
  }

  const logOut = () => {
    updateAdmin(null)
    localStorage.clear();
    removeToken();
  }

  // EDIT AND CREATE FORM HANDLERS
  function toggleEditForm() {
    updateEditForm(!editForm)
  }

  const handleSaveEdit = async (id, postData) => {
    const updatedPost = await updatePost(id, postData)
    const posts = allPosts.map(post => post.id === id ? updatedPost : post)
    updateAllPosts(posts)
  }

  const handleCreateComment = async (commentData) => {
    console.log('HELLO, Im in App(comment)', commentData)
    const newComment = await createComment(commentData)
    console.log('HELLO, After API call(comment)', commentData)
    updateAllComments([ ...allComments, { ...newComment } ])
  }

  // MODAL HANDLERS 
  function toggleLogInModal() {
    updateLoginModal(!logInModal)
  }

  function toggleDeletionModal() {
    updateDeletionModal(!deletionModal)
  }

  function toggleEditFormModal() {
    if (editForm) {
      updateEditModal(!verifyEditModal)
    }
  }

  return (
    <>
      <Header
        admin={admin}
        verifyEditModal={toggleEditFormModal}
      />

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/blog'>
          <Blog
            allPosts={allPosts}
          />
        </Route>

        <Route path='/about-me'>
          <About />
        </Route>

        <Route path='/contact-me'>
          <Contact />
        </Route>

        <Route exact path={`/blog/:postId`}>
          <Post
            admin={admin}
            allPosts={allPosts}
            allComments={allComments}
            showDeletionModal={toggleDeletionModal}
            showEditForm={toggleEditForm}
            hideEditForm={toggleEditForm}
            editClicked={editForm}
            handleSaveEdit={handleSaveEdit}
            verifyEditModal={toggleEditFormModal}
            handleCreateComment={handleCreateComment}
          />
        </Route>

      </Switch>

      <LogInForm
        handleLoginSubmit={handleLoginSubmit}
        logInClicked={logInModal}
        hideLogInForm={toggleLogInModal}
      />

      <DeletionModal
        deleteClicked={deletionModal}
        cancelDeletion={toggleDeletionModal}
      />
      <SaveEditModal
        verifyEditModal={verifyEditModal}
        returnToEdit={toggleEditFormModal}
      />

      <Footer
        verifyEditModal={toggleEditFormModal}
        admin={admin}
        logOut={logOut}
        showLogInModal={toggleLogInModal}
      />
    </>
  )
}

export default App;
