import React from 'react'
import {Divider} from './Comment'

export default function CreateComment() {

  return (
    <div>
      <Divider />

      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
        <label htmlFor="social">Social</label>
        <input id="social" type="text" />
        <textarea type="text" placeholder='Write Your Comment Here...'/>
      </form>
    </div>
  )
}
