import React from 'react'
import "./Sidebarrow.css"
import {Avatar} from "@mui/material"



function Sidebarroe({src, Icon, title}) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src = {src}/>}
      {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default Sidebarroe