import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <h2 className="bg-green-400 text-black p-4 rounded-xl mb-4"> tailwind Css</h2>
      <Card name="Sarvajeet Singh" btnText = "jaake padho"  />

    </>
  )
}

export default App
