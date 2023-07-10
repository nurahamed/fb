import React from 'react'
import './closedFriend.css'
export default function ClosedFriend({user}) {
    return (
        <>
            <li className="sidebarFriend">
                <img src={user.ProfilePicture} alt="profile" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </>
    )
}
