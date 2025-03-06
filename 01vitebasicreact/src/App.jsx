
import React from "react"
import { useEffect, useState } from "react"
function App() {
const [product, setProduct] = useState(null)
  const myEffect = useEffect(()  => {
   const fecthdata = async () =>{
    try{
      const response = await fetch("https://fakestoreapi.com/products/1")
      const result = await response.json()
      console.log(result)
      setProduct(result)
    }
    catch(err){
      console.log(err)
    }
   }
   fecthdata();
  },[])


  return (
    <>
    <h1>{product.title}</h1>
    {/* <button onClick={myEffect}>click here</button> */}
    </>
  )
}

export default App
