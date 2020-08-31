import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  margin: 0 auto
`
const Img = styled.img`
  width: 100px;
  height: 60px;
  object-fit: contain
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
    getMostCommented()
    getUniqueCommenters()
    getTopCommenter()
  })

  const getMostCommented = () => {
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

  const commenters = allComments.map(c => {
    return (
      <tbody key={c.id}>
        <tr>
          <td>{c.commenter}</td>
          <td>{c.email}</td>
          <td>{c.social}</td>
        </tr>
      </tbody>
    )
  })

  const getUniqueCommenters = () => {
    const obj = {}
    allComments.forEach(c => {
      if (!obj[c.commenter]) return obj[c.commenter] = 1
      else return obj[c.commenter] += 1
    })
    console.log(obj)
    const numOfCommenters = Object.keys(obj).length
    console.log(numOfCommenters)
    setCommenterCount(numOfCommenters)
  }
  const getTopCommenter = () => {
    const obj = {}
    let commenter
    allComments.forEach(c => {
      if (!obj[c.commenter]) return obj[c.commenter] = 1
      else return obj[c.commenter] += 1
    })
    console.log(obj)
    const mostCommentsByCommenter = Object.values(obj)[0]
    console.log(mostCommentsByCommenter)
    setTopCommenterCount(mostCommentsByCommenter)
    for (let name in obj) {
      if(mostCommentsByCommenter === obj[name]) commenter = name
    }
    console.log(commenter)
    setTopCommenter(commenter)
  }
    
  return (
    <div>
      <Title>My Dashboard</Title>
      <Dashboard>
        <h5>Total Posts: {totalPosts}</h5>
        <h5>Total Comments: {totalComments}</h5>
        <hr />
        {mostCommented !== undefined ?
          <>
            <h5>Most Commented Post {`(${commentCount} comments)`}:</h5>
            <Img src={mostCommented.img_URL} />
            <Link to={`/blog/${mostCommented.id}`}>{mostCommented.main_title}: {mostCommented.subtitle}</Link>
          </>
          :
          null
          // <button onClick={getMostCommented}>Get Most Commented Post</button>
        }
        <hr />
        <table>
          {console.log(allComments)}
          <thead>
            <tr>
              <th>Commenter</th>
              <th>Email</th>
              <th>Social</th>
            </tr>
          </thead>
          {commenters}
        </table>
        {/* <button onClick={getTopCommenter}>most</button> */}
        <h5>{`You Blog has ${commenterCount} unique commenters`}</h5>
        <h5>{`${topCommenter} is your top commenter with ${topCommenterCount} comments`}</h5>
      </Dashboard>
    </div>
  )
}
