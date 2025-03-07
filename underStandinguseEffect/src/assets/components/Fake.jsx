import React, { useState, useEffect } from "react";

function Fake({ product }) {
  const [myProduct, setmyProduct] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${product}`);
        const result = await response.json();
        console.log(result);
        console.log(product)
        setmyProduct(result)
      } catch (err) {
        alert();
      }
    };

    fetchData();
  }, [product]);


  return (
    <>
 {myProduct && <h1>{myProduct.title}</h1>}
    </>
  )
}

export default Fake