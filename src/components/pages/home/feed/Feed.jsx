import React from 'react'
import './Feed.css'
import Share from '../../../share/Share'
import Post from '../../../post/Post'
export default function Feed() {
  return (
    <div className='feed'>
     <Share/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </div>
  )
}