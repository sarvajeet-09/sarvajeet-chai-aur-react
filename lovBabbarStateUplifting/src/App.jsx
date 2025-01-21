import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
      //create state
    //manage state
    //change state
    //sabhi child me state ko sync karunga 
    const [name, setName] = useState('');
  return (

    <>
      <Card name={name} setName={setName}>

      </Card>
      <p>ye ek parent component hai {name}</p>
        </>
  )
}

export default App
