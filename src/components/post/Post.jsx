import React, { useState } from 'react'
import "./Post.css"
import { MoreVert } from '@mui/icons-material'
import {Users} from '../../dummyData'
export default function Post({post}) {
         const [like, setLike] = useState (post.like)
         const [isLiked, setIsLiked] = useState (false)
    // const user = Users.filter((u=>u.id===1))
    // console.log(user[0].username)

    const likeHandeler = ()=>{
        setLike(isLiked ? like-1 : like +1 )
        setIsLiked(!isLiked)
    }
    return (

        <>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img src= {Users.filter((u)=>u.id===post.userId)[0].ProfilePicture} alt="" className="postProfileImg" />
                            <span className="postUserName"> {Users.filter((u)=>u.id===post.userId)[0].username}</span>
                            <span className="postDate"> {post.date}</span>

                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>

                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img className='postImg' src={post.photo} alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className='likeIcon' src="/assets/like.png" onClick={likeHandeler} alt="" />
                            <img className='likeIcon' src="/assets/heart.png" onClick={likeHandeler} alt="" />
                            <span className="postLikeCounter">{like} people line it</span>
                        </div>
                        <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
