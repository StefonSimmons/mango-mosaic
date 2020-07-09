import React from 'react'
import { useParams } from 'react-router-dom'
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
  width: 600px
`
const Content = styled.p`
  width: 600px;
  padding: 0 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 15px;
`
const RecentPosts = styled.div`
  width: 300px;
  height: 400px;
  background-color: #CBB344
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
            <RecentPosts>

            </RecentPosts>
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
