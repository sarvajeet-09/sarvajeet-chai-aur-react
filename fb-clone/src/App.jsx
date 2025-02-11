import React from 'react'
import "./App.css"
// import SearchIcon from '@mui/icons-material/Search';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'

function App() {
  return (
    <div className='app'>
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app-body">
        {/* sidebar */}
        <Sidebar/>
        {/* feed */}
        <Feed/>


        {/* widgets */}
      </div>






    </div>
  )
}

export default App