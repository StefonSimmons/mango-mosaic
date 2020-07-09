import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { getAllPosts } from './services/posts'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Footer from './components/Footer'

function App() {

  const [allPosts, updateAllPosts] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const res = await getAllPosts()
      console.log(res)
      updateAllPosts(res)
      console.log(res)
    }
    apiCall()
  }, [])



  return (
    <>
      <Header />

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
            allPosts={allPosts}
          />
        </Route>

      </Switch>

      <Footer />
    </>
  )
}

export default App;
