import { useState } from 'react'
import Fake from './assets/components/Fake'
import './App.css'

function App() {
  const [product, setProduct ] = useState(1)
    
  const increProduct = () =>{
    setProduct(product+1)
  }

  return (
    <>
      <Fake products={product}/>  
      <button onClick={increProduct}>
        Next Product
      </button>
    </>
  )
}

export default App
