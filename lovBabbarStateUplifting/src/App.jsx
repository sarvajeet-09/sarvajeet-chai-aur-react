import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Panel from './Components/Panel'


function App() {
      //create state
    //manage state
    //change state
    //sabhi child me state ko sync karunga 
    const [name, setName] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
  return (

    <>
      {/* <Card name={name} setName={setName}>

      </Card>
      <p>ye ek parent component hai {name}</p> */}
       <h2>Shubham Singh Rajput</h2>
      <Panel title='About' isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem ipsa et necessitatibus porro? Quod doloribus nulla hic commodi tenetur!</p>
      </Panel>
      <Panel title='Etymology' isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem ipsa et necessitatibus porro? Quod doloribus nulla hic commodi tenetur!</p>
      </Panel>
    </>
  )
}

export default App
