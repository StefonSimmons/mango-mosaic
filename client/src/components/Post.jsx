import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'


const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
`
const ContentContainer = styled.div`
`
const MainTitle = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
`
const SubTitle = styled.h2`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 15px;
`
const PostImg = styled.img`
  width: 900px
`
const Content = styled.p`
  width: 600px;
  padding: 0 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 1.75;
`
const YellowSquare = styled.div`
  width: 250px;
  height: 400px;
  background-color: #CBB344;
  opacity: .5;
`
const RecentPostsContainer = styled.div`
  position: absolute;
  right: 6.90%;
  top: 4.5%;
  display: flex;
  flex-direction: column;
`
const RPTitle = styled.h3`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 15px
`
const RPLink = styled(Link)`
  color: black;
  text-decoration: none
`
const RecentPost = styled.h4`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding: 18px 0;
`
const SeeMore = styled(Link)`
  align-self: center;
  margin-top: 50px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 15px;
  color: blue;
`
const Background = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px
`
const GreenSquare = styled.div`
  background-color: #2B791E;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1
`
const RedSquare = styled.div`
  background-color: #972309;
  width: 500px;
  height: 500px;
  opacity: .2;
  z-index: -1;
`

export default function Post({ allPosts }) {

  console.log(allPosts)

  const { postId } = useParams()
  console.log(postId)

  const post = allPosts.filter(p => p.id === parseInt(postId))[0]
  console.log(post)


  const recentPosts = allPosts.map((p, i) => {
    if (i < 5) {
      return (
        <RPLink to={`/blog/${p.id}`}><RecentPost>{p.main_title}</RecentPost></RPLink>
      )
    }
  })

  return (
    <>
      {post !== undefined ?
        <div>
          <Wrapper>
            <ContentContainer>
              <MainTitle>{post.main_title}</MainTitle>
              <SubTitle>{post.subtitle}</SubTitle>
              <PostImg src={post.img_URL} alt={post.img_URL} />
              <Content>{post.content}</Content>
            </ContentContainer>
            <YellowSquare>
            </YellowSquare>
            <RecentPostsContainer>
              <RPTitle>Most Recent Posts</RPTitle>
              {recentPosts}
              <SeeMore to='/blog'>See more posts...</SeeMore>
            </RecentPostsContainer>
          </Wrapper>
          <Background>
            <GreenSquare>
            </GreenSquare>
            <RedSquare>
            </RedSquare>
          </Background>

        </div>
        :
        'Reloading...'
      }
    </>
  )
}
