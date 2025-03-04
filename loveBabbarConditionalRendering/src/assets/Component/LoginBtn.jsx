import React from 'react'
import './LoginBtn.css'
const LoginBtn = (props) => {



  const verify = (event) =>{
    const email = event.target.email.value.trim()
    const password = event.target.password.value.trim()
    const mymail = 'sarvajeetsingh771@gmail.com'
    const mypass = 'shubham@123'

    if(email === mymail && password === mypass){
      props.updateBtn(true)
      }
    else{
      props.updateBtn(false)
      alert("enter a valid email and password")
    }
    event.preventDefault()
  } 
  
  return (
    <>
      <div className='login-page-css'>
        <form action="#" onSubmit={verify}>
       <h1> User Login</h1>
        
      <input type="text" placeholder='Enter Email' name='email' />
      <input type="password" placeholder='password' name = 'password' />

        <button type="submit">LOG IN</button>
        </form>
      </div>
    </>
  )
}
export default LoginBtn