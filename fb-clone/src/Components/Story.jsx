import React from 'react'
import './Story.css'
import { Avatar } from '@mui/material'

function Story({image, Profilesrc, title }) {
  return (
    <div style={{backgroundImage:`url(${image})`}} className='story'>
        <Avatar className='story_avatar' src={Profilesrc}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story