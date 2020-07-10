import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { getAllPosts } from './services/posts'
import { loginUser, verifyUser, removeToken } from './services/auth'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Footer from './components/Footer'
import LogInForm from './components/LogInForm';
import { getAllComments } from './services/comments'

function App() {

  const [allPosts, updateAllPosts] = useState([])
  const [allComments, updateAllComments] = useState([])
  const [logInModal, updateLoginModal] = useState(false)
  const [admin, updateAdmin] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      const res = await getAllPosts()
      console.log(res)
      updateAllPosts(res)
      console.log(res)
    }
    getPosts()
  }, [])

  useEffect(() => {
    const getComments = async () => {
      const res = await getAllComments()
      updateAllComments(res)
    }
    getComments()
  },[])

  useEffect(() => {
    const verify = async () => {
      const admin = await verifyUser()
      updateAdmin(admin)
    }
    verify()
  },[])

  const handleLoginSubmit = async (loginParams) => {
    console.log('->', loginParams)
    const admin = await loginUser(loginParams);
    updateAdmin(admin)
    console.log(admin)
  }

  const logOut = () => {
    updateAdmin(null)
    localStorage.clear();
    removeToken();
  }



  function toggleLogInModal() {
    updateLoginModal(!logInModal)
  }



  return (
    <>
      <Header
        admin={admin}
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
          />
        </Route>

      </Switch>

      <LogInForm
        handleLoginSubmit={handleLoginSubmit}
        logInClicked={logInModal}
        hideLogInForm={toggleLogInModal}
      />

      <Footer
        admin={admin}
        logOut={logOut}
        showLogInModal={toggleLogInModal}
      />
    </>
  )
}

export default App;
