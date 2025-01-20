import React from 'react'
import "./UserCard.css"
const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' height={200} src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="love" />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Usercard