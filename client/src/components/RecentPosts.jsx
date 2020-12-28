import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const YellowSquare = styled.div`
  width: 250px;
  height: 400px;
  background-color: #CBB344;
  opacity: .8;
  position: fixed;
  right: 7%;

  @media(max-width: 1150px){
    width: 900px;
    height: 135px;
    border-radius: 45px;
    margin-bottom: 20px
  }
  @media(max-width: 930px){
    width: 800px;
    height: 135px;
    border-radius: 45px;
    margin-bottom: 20px
  }
  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    display: none
  }

`
const RecentPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

`
const RPTitle = styled.h3`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 15px;

  @media(max-width: 1150px){
    font-size: 20px;
    margin-bottom: 10px
  }
`
const RPWrapper = styled.div`

  @media(max-width: 1150px){
    display: flex;
    justify-content: space-evenly;
  }
`
const SeeMore = styled(Link)`
  align-self: flex-start;
  margin-top: 50px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 15px;
  padding-left: 10px;
  color: blue;

  @media(max-width: 1150px){
    margin-top: 10px;
    align-self: center;
    font-size: 18px
  }
`

export default function RecentPosts({ recentPosts, verifyEditModal }) {

  return (
    <YellowSquare>
      <RecentPostsContainer>
        <RPTitle>Most Recent Posts</RPTitle>
        <RPWrapper>
          {recentPosts}
        </RPWrapper>
        <SeeMore onClick={verifyEditModal} to='/blog'>See more posts...</SeeMore>
      </RecentPostsContainer>
    </YellowSquare>
  )
}
