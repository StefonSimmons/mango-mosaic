import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { getAllPosts } from './services/posts'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'

function App() {

  const [allPosts, updateAllPosts] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const res = await getAllPosts()
      console.log(res)
      updateAllPosts(res)
      console.log(res)
    }
    return apiCall()
  }, [])



  return (
    <>
      <Header />

      <Switch>

        <Route exact path= '/'>
          <Home />
        </Route>

        <Route path= '/blog'>
          <Blog
            allPosts = {allPosts}
          />
        </Route>

      </Switch>
    </>
  )
}

export default App;
