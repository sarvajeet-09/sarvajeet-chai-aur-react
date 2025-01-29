import React from 'react'

const LoginBtn = (props) => {
  return (
    <div>
        <button type="button" onClick={() =>{

         props.updateBtn(true)
         }}
         >LOG IN</button>
    </div>
  )
}
export default LoginBtn