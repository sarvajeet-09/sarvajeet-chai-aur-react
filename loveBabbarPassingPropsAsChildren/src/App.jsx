import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(1)


  function Click(){
    setCount(count+1);
    console.log("hello")
  }

  return (
    <>
      <Card name="parent">
       <h1>this is parent card rendering a child card</h1>
       <p>Hello every one I am Sarvajeet singh</p>
       <p>goning to the parent class</p>
      </Card>
   <Button Click = {Click} text = "click here to increment count">
   <h1>{count}</h1>
   </Button>
    </>
  )
} 

export default App
