import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => {
      return product.id == id
    })
    console.log(filterProduct)
    setProduct(filterProduct[0])
  }, [id])
  return (
    <div>
      <div>
        <div className="img">
          <h2>{product.category}</h2>
          <img src={product.imgSrc} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail