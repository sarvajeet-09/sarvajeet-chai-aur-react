import { useState } from 'react'
import './App.css'
import LoginBtn from './assets/Component/LoginBtn'
import LogoutBtn from './assets/Component/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  const updateBtn = (LoggedIn) => {
    setLoggedIn(LoggedIn);
};

  // if (!isLoggedIn) {
  //   return (
  //     <LoginBtn isLoggedIn={isLoggedIn} setLoggedIn = {setLoggedIn} />
  //   )
  // }
  // return (
  //   <div>
  //     <h1>welCome to the Lecture of Conditional rendering in react js</h1>
  //     {isLoggedIn && <LogoutBtn isLoggedIn={isLoggedIn} setLoggedIn = {setLoggedIn} />}
  //   </div>
  // )


  // return(
  //   isLoggedIn ? <LogoutBtn/> : <LoginBtn/>
  // )


  if(isLoggedIn){
    return(
      <LogoutBtn updateBtn ={updateBtn} />
    )
  }
  else{
    return(
      <LoginBtn updateBtn ={updateBtn}/>
    )
  }
}

export default App
