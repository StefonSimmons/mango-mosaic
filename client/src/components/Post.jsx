import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Comment from './Comment'
import EditForm from './EditForm'
import DeletionModal from './DeletionModal';
import { DisplayEditor } from './DisplayEditor'


const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  margin-left: 50px;
  justify-content: flex-start;
  padding: 50px 0px;
  z-index: 2;
  animation: ${fadeIn} ease 1.2s;
  
  @media(max-width: 1150px){
    flex-direction: column-reverse
  }
  @media(max-width: 780px){
    width: 600px;
    margin-left: 30px;

  }
  @media(max-width: 680px){
    width: 500px
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
    margin-left: 5px;
  }

`
const ContentContainer = styled.div`
  
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
const Titles = styled.div`
  width: 600px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700; 
`
const MainTitle = styled.h1`
  font-size: 36px;
  // color: rgb(1, 12, 5);
  color: lightgrey;
`
const SubTitle = styled.h2`
  font-size: 24px;
  margin: 12px 0 ;
  // color: rgb(1, 12, 5);
  color: lightgrey;
`
const DateNRead = styled.h5`
  font-weight: 300;;
  color: lightgrey;
  margin-bottom: 12px
`
const EditDelete = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-right: 5px;

  @media(max-width: 475px){
    flex-direction: column;
  }
`
const EditDeleteBtn = styled.button`
  font-family: 'Redressed', cursive;
  font-size: 28px;
  letter-spacing: 2px;
  padding: 3px 15px;
  background-color: #E3D1E2;
  border-radius: 45px;
  border: 1px solid #E3D1E2;

  &:hover{
    background: #D2C0D1;
    border: 1px solid #D2C0D1;
  }
  &:active{
    transform: scale(.95);
  }
  @media(max-width: 475px){
    margin: 10px
  }
`
const ImageContainer = styled.div`
  width: 900px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgba(133,107,123,.3);

  @media(max-width: 930px){
    width: 800px;
  }
  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px;
  }
  @media(max-width: 700px){
    width: 550px
  }
  @media(max-width: 680px){
    width: 500px;
    height: 300px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
    height: 200px;    
  }
`
const PostImg = styled.img`
  width: 900px;
  height: 500px;
  object-fit: contain;
  
  @media(max-width: 930px){
    width: 800px;
  }
  @media(max-width: 780px){
    width: 650px;
  }
  @media(max-width: 730px){
    width: 600px
  }
  @media(max-width: 680px){
    width: 500px;
    height: 300px;
  }
  @media(max-width: 575px){
    width: 400px
  }
  @media(max-width: 475px){
    width: 275px;
    height: 200px;
  }
`
const Content = styled.p`
  width: 900px;
  margin-top: 20px;
  padding: 0 5px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1.75;

`
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
  font-weight: 400;
  font-size: 18px;
  padding: 13.5px 10px;
  
  &:hover{
    background-color: black;
    color: white;
    border-radius: 5px;
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
  font-size: 15px;
  padding-left: 10px;
  color: blue;

  @media(max-width: 1150px){
    margin-top: 10px;
    align-self: center;
    font-size: 18px
  }
`
const Background = styled.div`
  height: 789px;
  width: 1200px;
  margin-left: 30px;
  display: grid;
  position: fixed;
  top: 18%;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(7,1fr);
  z-index: -1;

  @media(max-width: 730px){
    width: 450px
  }
  @media(max-width: 420px){
    width: 250px
  }
`
const GreenSquare = styled.div`
  background-color: #2B791E;
  grid-column: 1 / span 4;
  grid-row: 3 / span 3;
  opacity: .2;
  z-index: 0;
`
const GreySquare = styled.div`
  background-color: #675310;
  grid-column: 2 / span 6;
  grid-row: 2 / span 3;
  opacity: 1;
  z-index: -1;
`
const RedSquare = styled.div`
  background-color: #972309;
  grid-column: 7 / span 4;
  grid-row: 1 / span 3;
  opacity: .2;
  z-index: -1;
`
const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px
`

export default function Post({
  allPosts, allComments,
  admin, showDeletionModal,
  showEditForm, hideEditForm,
  editClicked, handleSaveEdit,
  verifyEditModal, handleCreateComment,
  deletePost, deleteComment,
  deleteClicked, cancelDeletion
}) {

  const { postId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [postId])

  // FILTERS FOR SELECTED POST
  // const post = allPosts.filter((p, id, arr) => arr.length - id === parseInt(postId))[0]
  const post = allPosts.filter((p, id, arr) => p.id === parseInt(postId))[0]

  // FORMAT DATE FOR CREATED AT
  const formatDate = () => {
    if (post !== undefined) {
      const milliseconds = Date.parse(post.created_at)
      const dateObj = new Date(milliseconds)
      const post_datetime = dateObj.toLocaleString("en-US").substring(0, 11).replace(',', '')
      return post_datetime
    }
  }

  // GETS READ TIME
  const getReadTime = () => {
    const parsedContentArr = JSON.parse(post.content).blocks
    const textWordCountArr = parsedContentArr.map(c => {
      return c.text.split(' ').length
    });
    const contentTextLength = textWordCountArr.reduce((acc, curr) => acc + curr)
    const avgWPM = 170
    const minutesToRead = Math.floor(contentTextLength / avgWPM)
    return minutesToRead
  }

  //MAPPING W/ JSX FOR RECENT POSTS 
  // eslint-disable-next-line
  const recentPosts = allPosts.map((p, id) => {
    if (id < 5) {
      return (
        <RPLink key={id} onClick={verifyEditModal} to={`/blog/${p.id}`}>
          {p.main_title.length > 19 ?
            <RecentPost>{`${p.main_title.substring(0, 19)}...`}</RecentPost>
            :
            <RecentPost>{p.main_title}</RecentPost>
          }
        </RPLink>
      )
    }
  })

  return (
    <>
      <DeletionModal
        deletePost={deletePost}
        deleteClicked={deleteClicked}
        cancelDeletion={cancelDeletion}
      />
      {post !== undefined ?
        <>

          <Wrapper>
            {editClicked ?
              <EditForm
                post={post}
                hideEditForm={hideEditForm}
                handleSaveEdit={handleSaveEdit}
                editClicked={editClicked}
              />
              :
              <ContentContainer>
                <TitleWrapper>
                  <Titles>
                    <MainTitle>{post.main_title}</MainTitle>
                    <SubTitle>{post.subtitle}</SubTitle>
                    <DateNRead>{`${formatDate()} | ${getReadTime()} min. read`}</DateNRead>
                  </Titles>
                  {admin ?
                    <EditDelete>
                      <EditDeleteBtn onClick={showEditForm}>Edit</EditDeleteBtn>
                      <EditDeleteBtn onClick={showDeletionModal}>Delete</EditDeleteBtn>
                    </EditDelete>
                    :
                    null
                  }
                </TitleWrapper>
                <ImageContainer>
                  <PostImg src={post.img_URL} alt={`image for post ${post.id}`} />
                </ImageContainer>
                {/* TERNARY CHECKS FOR JSON/EDITOR TEXT OR PLAIN TEXT */}
                {post.content.substring(0, 2) !== '{"' ?
                  <Content>{post.content}</Content>
                  :
                  <DisplayEditor
                    content={post.content}
                  />
                }
                <Comment
                  handleCreateComment={handleCreateComment}
                  allComments={allComments}
                  admin={admin}
                  deleteComment={deleteComment}
                />

              </ContentContainer>

            }

            <YellowSquare>
              <RecentPostsContainer>

                <RPTitle>Most Recent Posts</RPTitle>
                <RPWrapper>
                  {recentPosts}
                </RPWrapper>
                <SeeMore onClick={verifyEditModal} to='/blog'>See more posts...</SeeMore>
              </RecentPostsContainer>
            </YellowSquare>

          </Wrapper>

          <Background>
            <GreySquare>
            </GreySquare>
            <GreenSquare>
            </GreenSquare>
            <RedSquare>
            </RedSquare>
          </Background>

        </>
        :
        <Loading>
          <h1 style={{ fontSize: '36px' }}>Loading Content...</h1>
          <img src='https://media.giphy.com/media/elhHndVfpU1621gcEJ/giphy.gif' alt='girl flipping pages' />
        </Loading>
      }
    </>
  )
}

// style={{backgroundImage: `linear-gradient(rgba(150,150,150,.5), rgba(150,150,150,.5)),url(${post.img_URL})`}}