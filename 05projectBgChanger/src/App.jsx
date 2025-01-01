import { useState } from 'react'


function App() {
  let [Color, bgChange] = useState("#000")

  return (
    <div className="w-100 text-white h-screen text-center duration-200"
      style={{ backgroundColor: Color }}>
      <div className='buttons'>
        <button className='btn-black' onClick={() => bgChange("#000")} >Black</button>
        <button className='btn-Blue' onClick={() => bgChange("#0400ff")}>Blue</button>
        <button className='btn-Red' onClick={() => bgChange("#ff2121")}>Red</button>
        <button className='btn-Olive' onClick={() => bgChange("#7c7c00")}>Olive</button>
        <button className='btn-Green' onClick={() => bgChange("#00d700")}>Green</button>
      </div>
    </div>
  )
}

export default App
