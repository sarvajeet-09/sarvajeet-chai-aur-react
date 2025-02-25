import { useState } from 'react'
import './App.css'
import Todolistitem from './components/Todolistitem'
function App() {
  const [todolist, setTodolist] = useState([])


  let saveToDoList = (event) => {
    let toname = event.target.toDoName.value;


    if (!todolist.includes(toname)) {
      let finaltoDolist = [...todolist, toname]
      setTodolist(finaltoDolist);
    }
    else {
      alert("already exists")
    }

    // alert(toname)
    event.preventDefault();
  }
let Mylist = todolist.map((value,index) => {
  return(
    <Todolistitem value = {value} key={index} index={index} todolist={todolist} setTodolist = {setTodolist}/>
  )
})
  
  return (
    <>
      <h1>To Do App</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toDoName" />
        <button>Save</button>
      </form>

      <div className="list">
        <ul>
          {Mylist}
        </ul>
      </div>
    </>
  )
}

export default App
