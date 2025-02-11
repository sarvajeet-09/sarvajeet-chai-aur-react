import React from 'react'
import './Post.css'
import { Avatar } from "@mui/material"
function Post({ ProfilePic, image, username, timestamp }) {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={ProfilePic} className='post_avatar' />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>TimeStamp...</p>
                </div>


            </div>
        </div>
    )
}

export default Post