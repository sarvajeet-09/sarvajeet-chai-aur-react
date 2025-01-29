import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("")

//  function handleClick(){
//   alert('You had Clicked the Button')
//  }
// function para(){
//   alert("TOU HOVER MOUSE TO THE PARAGRAPH")
// }


function inputChange(e){
  setCount(e.target.value);
}
function handleSubmit(e){
e.preventDefault();
}
  return (
    <>
     <form  onSubmit={handleSubmit}>
      <input type="text" onChange={inputChange} placeholder='write something in the paragraph' />
      <button>Click Me</button>
      <p>You have Entered {count}</p>
     </form>
    </>
  )
}

export default App
