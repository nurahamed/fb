import React from 'react'
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
export default function Share() {
    return (
        <div className='share'>
            <div className="shareWarapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/5.jpg" alt="" />
                    <input placeholder="What's in your mind" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareButtom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'> Photo or Videos</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Locations</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <div className="shareButton">Share</div>
                </div>

            </div>

        </div>

    )
}
