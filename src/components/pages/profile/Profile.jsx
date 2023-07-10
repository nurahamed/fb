import React from 'react'
import './Profile.css'
// import '../home/Home.css'
import '../../sidebar/Sidebar.css'
import '../home/feed/Feed.css'
import '../../rightbar/Rightbar.css'

import Topbar from '../../topbar/Topbar'
import Sidebar from '../../sidebar/Sidebar'
import Feed from '../home/feed/Feed'
import Rightbar from '../../rightbar/Rightbar' 


export default function Profile() {
    return ( 
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="homeRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                        <img src="assets/post/3.jpg" alt="" className="profileCoverImg" />
                        <img src="assets/person/5.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Anjani</h4>
                            <span className='profileInfoDesc'>Helo my friends</span>
                        </div>
                        </div>
                    <div className="profilrRightBottom">

                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
