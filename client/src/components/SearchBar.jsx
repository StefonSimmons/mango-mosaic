import React, { useState, useEffect } from 'react'
import { searchPosts } from '../services/posts'
import styled from 'styled-components'
import mangoMagnifyIcon from '../assets/mango-magnify-icon-lt.png'

const Search = styled.div`
  width: 85%;
  margin: 0 auto;
`
const Bar = styled.input`
  height: 40px;
  width: 350px;
  border-radius: 15px;
  border: 1px solid grey;
  color: lightgrey;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: 2.5px;
  padding-left: 55px;
  display: block;
  margin: 35px auto;
  font-size: 18px;
  background: rgba(234, 115, 50, 0);
  background-image: url(${mangoMagnifyIcon});
  background-repeat: no-repeat;
  background-position: 3% 63%;
  background-size: contain; 

  &::placeholder{
    color: lightgrey;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  @media(max-width: 780px){
    margin-bottom: 5px;
  }
  @media(max-width: 480px){
    width: 250px;
  }

`
export default function SearchBar({ getPosts, updateAllPosts }) {

  const [characters, updateCharacters] = useState('')

  useEffect(() => {
    return () => {
      getPosts()
    }
    // eslint-disable-next-line
  }, [])

  const search = async (e) => {
    const { value } = e.target
    updateCharacters(value)
    if (value !== '') {
      const response = await searchPosts(value.toLowerCase())
      const searchRes = response.data
      updateAllPosts(searchRes)
    } else {
      getPosts()
    }
  }

  return (
    <Search>
      <Bar
        type='text'
        name={characters}
        placeholder='Search'
        onChange={(e) => search(e)}
      />
    </Search>
  )
}
