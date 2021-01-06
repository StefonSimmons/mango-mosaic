import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllLocations } from '../services/location'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 36px;
  letter-spacing: 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
  margin: 40px 0 20px 0;

`
const Dashboard = styled.div`
  background-Color: white;
  border: solid black 2px;
  width: 700px;
  height: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center
`
const Img = styled.img`
  width: 150px;
  height: 110px;
  object-fit: contain;
  margin: 10px 0
`
const Table = styled.table`
  width: 500px;
  margin: 20px 0

`
const TDetail = styled.td`
  border: solid black 1px;
  padding: 5px;
`
export default function AdminDashboard({ allPosts, allComments }) {

  const totalPosts = allPosts.length
  const totalComments = allComments.length
  const [mostCommented, setMostCommented] = useState([])
  const [commentCount, setCommentCount] = useState(0)
  const [commenterCount, setCommenterCount] = useState(0)
  const [topCommenter, setTopCommenter] = useState('')
  const [topCommenterCount, setTopCommenterCount] = useState(0)

  useEffect(() => {
    getMostCommentedPost()
    getUniqueCommenters()
    getTopCommenter()
    getLocations()
    // eslint-disable-next-line
  }, [])

  // *********
  // GETTER HANDLERS
  // *********
  const getMostCommentedPost = () => {
    const obj = {}
    let lookupId

    allComments.forEach(c => {
      if (!obj[c.post_id]) return obj[c.post_id] = 1
      else return obj[c.post_id] += 1
    })

    const arr = Object.values(obj)

    arr.sort((a, b) => b - a)
    setCommentCount(arr[0])

    for (let id in obj) {
      if (arr[0] === obj[id]) lookupId = id
    }
    setMostCommented(allPosts.filter(p => p.id === parseInt(lookupId))[0])
  }

  // ======================================

  const getUniqueCommenters = () => {
    const obj = {}
    allComments.forEach(c => {
      if (!obj[c.commenter]) return obj[c.commenter] = 1
      else return obj[c.commenter] += 1
    })
    const numOfCommenters = Object.keys(obj).length
    setCommenterCount(numOfCommenters)
  }

  // ======================================

  const getTopCommenter = () => {
    const obj = {}
    let commenter
    allComments.forEach(c => {
      if (!obj[c.commenter]) return obj[c.commenter] = 1
      else return obj[c.commenter] += 1
    })
    const mostCommentsByCommenter = Object.values(obj)[0]
    setTopCommenterCount(mostCommentsByCommenter)
    for (let name in obj) {
      if (mostCommentsByCommenter === obj[name]) commenter = name
    }
    setTopCommenter(commenter)
  }

  // ======================================

  const getLocations = async () => {
    const res = await getAllLocations()
    console.log(res)
  }

  // *********
  // JSX Render for TABLE
  // *********
  const commenters = allComments.map(c => {
    return (
      <tbody key={c.id}>
        <tr>
          <TDetail>{c.commenter}</TDetail>
          <TDetail><a href={`mailto:${c.email}`}>{c.email}</a></TDetail>
          <TDetail>{c.social}</TDetail>
        </tr>
      </tbody>
    )
  })

  // *********
  // Pinned Post(s)
  // *********
  const pinnedPosts = allPosts.filter(post => post.is_pinned)
  const pinnedPostsJSX = pinnedPosts.map(post => {
    return (
      <div key={post.id}>
        <input style={{ marginRight: '10px' }} type="checkbox" name="pinned" id="pinned" checked readOnly />
        <Link to={`/blog/${post.id}`}><label htmlFor="pinned">{post.main_title}</label></Link>
      </div>
    )
  })

  return (
    <div>
      <Title>My Dashboard</Title>
      <Dashboard>
        <h5>Total Posts: {totalPosts}</h5>
        <h5>Total Comments: {totalComments}</h5>
        <br />
        <h5>Pinned Posts:</h5>
        <br />
        {pinnedPostsJSX}
        <br />
        {mostCommented !== undefined ?
          <>
            <h5>Most Commented Post {`(${commentCount} comment(s))`}:</h5>
            <Img src={mostCommented.img_URL} />
            <Link to={`/blog/${mostCommented.id}`}>{mostCommented.main_title}: {mostCommented.subtitle}</Link>
          </>
          :
          null
        }
        <hr />
        <h5>{`Your Blog has ${commenterCount} unique commenter(s)`}</h5>
        <h5>{`${topCommenter} is your top commenter (${topCommenterCount} comment(s))`}</h5>
        <Table>
          <thead>
            <tr>
              <th>Commenter</th>
              <th>Email</th>
              <th>Social</th>
            </tr>
          </thead>
          {commenters}
        </Table>
      </Dashboard>
    </div>
  )
}
