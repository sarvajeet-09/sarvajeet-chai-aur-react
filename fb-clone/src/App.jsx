import React from 'react'
import "./App.css"
// import SearchIcon from '@mui/icons-material/Search';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app-body">
        {/* sidebar */}
        <Sidebar/>
        {/* feed */}
        {/* widgets */}
      </div>






    </div>
  )
}

export default App