

import './Online.css'
// import '../rightbar/Rightbar.css'

export default function Online({user}) {
  return (
        <> 
       <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={user.ProfilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className='rightbarUserName'>{user.username} </span>
        </li>
        </>
  )
}
