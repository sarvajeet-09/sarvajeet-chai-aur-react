import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from "./Post"

function Feed() {
  return (
    <div className='feed'>
        {/* storyReel */}
        <StoryReel/>
        {/* messageSender */}
        <MessageSender/>
        {/* post */}
         <Post/>
         <Post/>
         <Post/>
    </div>
  )
}

export default Feed