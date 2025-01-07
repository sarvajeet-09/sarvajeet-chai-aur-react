import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
const[amount,setAmount] = useState(0)
const[from, setFrom] = useState("usd")
const[to, setTo] = useState("inr")
const[convertedAmount, setConvertedAmount ] = useState(0)


const currencyInfo = useCurrencyInfo(from)

const options = Object.keys(currencyInfo)
const swap = () =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
const covert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}

  return (
    <>
  <h1 className='text-white py-2 rounded text-3xl bg-orange-500'>Currency App With Sarvajeet</h1>
    </>
  )
}

export default App
