import React, { useState, useEffect } from "react";

function Fake({ product }) {
  const [myProduct, setmyProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${product}`);
      //  const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        console.log(result);
        setmyProduct(result); // Set the entire array
      } catch (err) {
        alert();
      }
    };
    fetchData();
  }, [product]);
  return (
    <>
 {myProduct && <h1>{myProduct.title}</h1>}
      {/* <h1>{myProduct && myProduct.map((user) =>{
         return(
           user.name
         )
      })}</h1> */}
      {/* {myProduct && myProduct.map((user) =>(
        <h1 key={user.id}>{user.title}</h1>
       )
      )
      
      
      }     */}
{/* {myProduct.length > 0 ? (
  myProduct.map((user) => (
    <h1 key={user.id}>{user.title}</h1> // Use 'title' instead of 'name'
  ))
) : (
  <p>Loading...</p>
)} */}
          
      </>
  )
}

export default Fake