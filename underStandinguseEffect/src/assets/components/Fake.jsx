import React, { useState, useEffect } from "react";

function Fake({ product }) {
    const [myProduct, setmyProduct] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`'https://fakestoreapi.com/products/1`);
            const result = await response.json();
            console.log(result);
            setmyProduct(result)
          } catch (err) {
            alert();
          }
        };
    
        fetchData();
      }, [product]);


    return (
        <>

        </>
    )
}

export default Fake