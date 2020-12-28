import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { getAllPosts, updatePost, createPost, destroyPost } from './services/posts'
import { getAllComments, createComment, destroyComment } from './services/comments'
import { loginUser, verifyUser, removeToken } from './services/auth'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Footer from './components/Footer'
import LogInForm from './components/LogInForm';
import SaveEditModal from './components/SaveEditModal';
import CreatePost from './components/CreatePost'
import AdminDashboard from './components/AdminDashboard'
import MangoHeader from './components/MangoHeader';

function App() {

  const [submitted, toggleSubmitted] = useState(false)
  const [allPosts, updateAllPosts] = useState([])
  const [allComments, updateAllComments] = useState([])
  const [editForm, updateEditForm] = useState(false)
  const [logInModal, updateLoginModal] = useState(false)
  const [deletionModal, updateDeletionModal] = useState(false)
  const [verifyEditModal, updateEditModal] = useState(false)
  const [admin, updateAdmin] = useState(null)

  // POST AND COMMENT HANDLERS
  useEffect(() => {
    getPosts()
  }, [submitted])

  const getPosts = async () => {
    const res = await getAllPosts()
    updateAllPosts(res)
  }

  useEffect(() => {
    const getComments = async () => {
      const res = await getAllComments()
      updateAllComments(res)
    }
    getComments()
  }, [submitted])

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

  // DELETE, EDIT AND CREATE FORM HANDLERS
  function toggleEditForm() {
    updateEditForm(!editForm)
  }

  const handleCreatePost = async (postData) => {
    const newPost = await createPost(postData)
    updateAllPosts([...allPosts, { ...newPost }])
    toggleSubmitted(!submitted)
  }

  const handleSaveEdit = async (id, postData) => {
    const updatedPost = await updatePost(id, postData)
    const posts = allPosts.map(post => post.id === id ? updatedPost : post)
    updateAllPosts(posts)
    toggleSubmitted(!submitted)
  }

  const handleCreateComment = async (commentData) => {
    const newComment = await createComment(commentData)
    updateAllComments([...allComments, { ...newComment }])
  }

  const deletePost = async (postId) => {
    await destroyPost(postId)
    const posts = allPosts.filter(post => post.id !== postId)
    updateAllPosts(posts)
  }

  const deleteComment = async (commentId) => {
    await destroyComment(commentId)
    const comments = allComments.filter(comment => comment.id !== commentId)
    updateAllComments(comments)
  }

  // MODAL HANDLERS 
  function toggleLogInModal(boolean) {
    updateLoginModal(boolean)
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
        allPosts={allPosts}
      />


      <Switch>

        <Route exact path='/'>
          {/* <Home /> */}
          <Redirect to="/blog" />
        </Route>

        <Route exact path='/blog'>
          <MangoHeader/>
          <Blog
            allPosts={allPosts}
            getPosts={getPosts}
            updateAllPosts={updateAllPosts}
          />
        </Route>

        {/* <Route path='/about-me'>
          <About />
        </Route> */}

        {/* <Route path='/contact-me'>
          <Contact />
        </Route> */}

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
            deletePost={deletePost}
            deleteComment={deleteComment}
            deleteClicked={deletionModal}
            cancelDeletion={toggleDeletionModal}
          />
        </Route>

        <Route exact path='/new-post'>
          <CreatePost
            handleCreatePost={handleCreatePost}
          />
        </Route>

        <Route exact path='/admin-dashboard'>
          <AdminDashboard
            allPosts={allPosts}
            allComments={allComments}
          />
        </Route>
      </Switch>

      <LogInForm
        admin={admin}
        updateAdmin={updateAdmin}
        handleLoginSubmit={handleLoginSubmit}
        logInClicked={logInModal}
        showLogInForm={toggleLogInModal}
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
