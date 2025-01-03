import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //refHook
  const passwordref = useRef(null)
  let passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUBWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = ""

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "`~!@#$%^&*()_-+=}{[]|/"
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,5)
     window.navigator.clipboard.writeText(password)
  }, [password])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4  my-8 text-orange-500 bg-gray-700 '>
        <h1 className="text-xl font-bold mb-2 text-white">
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            className="outline-none w-full py-1 px-3"
            placeholder='password'
            type="text"
            value={password}
            ref={passwordref}
            readOnly
          />
          <button onClick={copyPasswordToClipboard} className='bg-blue-700 p-2 text-white'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />

            <label className='text-white'>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }}
            />
            <label>Number Allowed</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label>Character Allowed</label>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
