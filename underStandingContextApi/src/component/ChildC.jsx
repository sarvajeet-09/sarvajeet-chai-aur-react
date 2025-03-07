import React, { useContext } from 'react'
import {UserTheme} from '../App'
// import { UserContext } from '../App'
function ChildC() {
    const {theme, setTheme} = useContext(UserTheme)
    // const name = useContext(UserContext)


    const changeBg = () =>{
        if(theme == 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    <div>
       <button onClick={changeBg}>Chage Theme</button>
    </div>
  )
}

export default ChildC