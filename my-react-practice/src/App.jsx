import { useState } from 'react'
import './App.css'
import Home from './assets/components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Home></Home>
    </>
  )
}

export default App
