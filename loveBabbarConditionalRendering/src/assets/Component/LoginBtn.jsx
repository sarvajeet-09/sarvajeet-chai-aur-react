import React from 'react'
import './LoginBtn.css'
const LoginBtn = (props) => {
  const verify = (event) =>{
    const email = event.target.email.value.trim().toLowerCase()
    const password = event.target.password.value.trim().toLowerCase()

    const mymail = 'sarvajeetsingh771@gmail.com'
    const mypass = 'shubham@123'

    if(email === mymail && password === mypass){

    }
  } 
  
  return (
    <>

    

      <div className='login-page-css'>
        <form action="#">
       <h1> User Login</h1>
        
      <input type="text" placeholder='Enter Email' name='email' />
      <input type="password" placeholder='password' name = 'password' />

        <button type="submit" 
         onClick={verify}
        // onClick={() => {
        //   props.updateBtn(true)
        // }}
        >LOG IN</button>
        </form>
      </div>
    </>
  )
}
export default LoginBtn