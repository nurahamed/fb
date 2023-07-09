import React from 'react'
import './Home.css'
import Topbar from '../../topbar/Topbar'
import Sidebar from '../../sidebar/Sidebar'
import Rightbar from '../../rightbar/Rightbar'
import Feed from './feed/Feed'

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>

    </>
  )
}
