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
const RPLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const RecentPost = styled.h4`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 13.5px 10px;
  
  &:hover{
    background-color: ${({ theme }) => theme.purple};
    color: white;
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
const SeeMore = styled(Link)`
  align-self: flex-start;
  margin-top: 50px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  color: ${({ theme }) => theme.blue};


  @media(max-width: 1150px){
    margin-top: 10px;
    align-self: center;
    font-size: 18px
  }
`
export default function RecentPosts({ allPosts, verifyEditModal }) {

  const recentPosts = allPosts.filter((post, id) => id < 5).map((p, id) => {
    return (
      <RPLink key={id} onClick={verifyEditModal} to={`/blog/${p.id}`}>
        {p.main_title.length > 19 ?
          <RecentPost>{`${p.main_title.substring(0, 19)}...`}</RecentPost>
          :
          <RecentPost>{p.main_title}</RecentPost>
        }
      </RPLink>
    )
  })

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
