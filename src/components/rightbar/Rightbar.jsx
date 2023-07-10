import React from 'react'
import './Rightbar.css'
import Online from '../online/Online'
import  {Users} from '../../dummyData'
export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText"> <b> Pola Foster</b>and <b>3 other friends</b> have birthday</span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>

        <ul className='rightbarFriendList'>
          { Users.map(u=>(
            <Online key={u.id} user={u} />
            
          ))
          }
        </ul>
      </>
    )
  }

  const ProfileRightbar =()=>{
    return(
      <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">Bangalore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From</span>
          <span className="rightbarInfoValue">Kolkata</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jone carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jone carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jone carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jone carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jone carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jone carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">

        <ProfileRightbar/>
        {/* <div className="birthdayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText"> <b> Pola Foster</b>and <b>3 other friends</b> have birthday</span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>

        <ul className='rightbarFriendList'>
          { Users.map(u=>(
            <Online key={u.id} user={u} />
            
          ))
          }
        </ul> */}
        {/* <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/person/3.jpg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className='rightbarUserName'>Will Smith </span>
        </li> */}

      </div>
    </div>
  )
}
