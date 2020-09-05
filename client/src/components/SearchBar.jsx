import React, { useState } from 'react'
import { searchPosts } from '../services/posts'
import styled from 'styled-components'
import mangoMagnifyIcon from '../assets/mango-magnify-icon.png'

const Search = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-top: 40px
`
const Bar = styled.input`
  height: 40px;
  width: 250px;
  border-radius: 15px;
  border: 1px solid grey;
  color: grey;
  padding-left: 50px;
  margin-bottom: 5px;
  font-size: 18px;
  background-color: rgba(235,183,45,.075);
  background-image: url(${mangoMagnifyIcon});
  background-repeat: no-repeat;
  background-position: 3% 63%;
  background-size: contain; 

`
export default function SearchBar({ getPosts, updateAllPosts }) {

  const [characters, updateCharacters] = useState('')

  const search = async (e) => {
    const { value } = e.target
    updateCharacters(value)
    if (value !== '') {
      const response = await searchPosts(value.toLowerCase())
      console.log('value-> ', typeof value.toLowerCase())
      console.log('searching-> ', response.data)
      const searchRes = response.data
      updateAllPosts(searchRes)
    }
    if (value === '') {
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
