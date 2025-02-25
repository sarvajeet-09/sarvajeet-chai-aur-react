import React from 'react'
import { useState } from 'react';
function Todolistitem({value,key, index, todolist, setTodolist}) {
    let[status, setStatus] = useState(false);

    let deleterow = () =>{
      let final = todolist.filter((v,i) => i!=index)
      setTodolist(final)
    }

    let mark = () => {
     setStatus(!status)
    }
    return (
      <li className={(status)?'active':''} onClick={mark}>{value} <span onClick={deleterow} >&times;</span></li>
    )
}

export default Todolistitem