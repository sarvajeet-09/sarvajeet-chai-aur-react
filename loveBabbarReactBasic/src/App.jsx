import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercard from './components/Usercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <Usercard name="shubham singh"  style={{"border-radius":"20px"}} desc="this shubham description"/>
    <Usercard name="chandra shekhar aajad"  style={{"border-radius":"20px"}} desc="this chadrashekhar ajad" />
    <Usercard name="prithvi raj chauhan"  style={{"border-radius":"20px"}} desc="this is prithvi raj chauhan"  />
    </div>
    </>
  )
}

export default App
