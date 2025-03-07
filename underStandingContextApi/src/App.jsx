import React, { createContext } from 'react'
import { useState } from 'react';
import './App.css'
import ChildA from './component/ChildA';
import ChildB from './component/ChildB';
import ChildC from './component/ChildC';
import { use } from 'react';


// const UserContext = createContext();
const UserTheme = createContext();


function App() {
// const [name, setNamr] = useState("Shubham Singh Rajput");
const [theme, setTheme] = useState('light');
  return (
    <div>
      {/* <UserContext.Provider value={name}>
      <ChildA/>
      <ChildB/>
      <ChildC/>
      </UserContext.Provider> */}

      <UserTheme.Provider value={{theme,setTheme}}>
         <div id='container' style={{backgroundColor:theme ==='light' ? "beige":"black"}}>
         <ChildA/>
         </div>
      </UserTheme.Provider>

    </div>
  )
}

export default App
// export{UserContext}
export {UserTheme}
