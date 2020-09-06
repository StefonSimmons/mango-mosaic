import React, { useState } from 'react'
import { searchPosts } from '../services/posts'
import styled from 'styled-components'
import mangoMagnifyIcon from '../assets/mango-magnify-icon.png'

const Search = styled.div`
  width: 85%;
  margin: 0 auto;

  @media(max-width: 445px){
    width: 75%;
    margin-left: 20px 
  }
`
const Bar = styled.input`
  height: 40px;
  width: 350px;
  border-radius: 15px;
  border: 1px solid grey;
  color: grey;
  padding-left: 50px;
  display: block;
  margin: 35px auto;
  font-size: 18px;
  background-color: rgba(235,183,45,.075);
  background-image: url(${mangoMagnifyIcon});
  background-repeat: no-repeat;
  background-position: 3% 63%;
  background-size: contain; 

  @media(max-width: 780px){
    margin-bottom: 5px;
  }
  @media(max-width: 480px){
    width: 250px;
  }

`
export default function SearchBar({ getPosts, updateAllPosts }) {

  const [characters, updateCharacters] = useState('')

  const search = async (e) => {
    const { value } = e.target
    updateCharacters(value)
    if (value !== '') {
      const response = await searchPosts(value.toLowerCase())
      const searchRes = response.data
      updateAllPosts(searchRes)
    } else{
      getPosts()
    }
  }

  return (
    <Search>
      <Bar
        type='text'
        name={characters}
        onChange={(e) => search(e)}
      />
    </Search>
  )
}
