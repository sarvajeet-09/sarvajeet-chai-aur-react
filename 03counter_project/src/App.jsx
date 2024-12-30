import { useState } from 'react'
import './App.css'

function App() {


let [counter, getCounter] = useState(15)
let none = document.querySelector('#none');

  // let counter = 15
  const addValue = () => {
    console.log("clicked",{counter})
    getCounter(counter+1);
  }
const removeValue = () => {
  if (counter>0){
    getCounter(counter-1)
  }
  else{
    getCounter(0)
    none.style.display = "block"
  }
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value:{counter}</h2>
      <h4 id="none">The Counter Cannot Be less than 0</h4>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}


export default App
//assignment that the remove value doest not go down in negative
//and the add value doesnot goes up after 10