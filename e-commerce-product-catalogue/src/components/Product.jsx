import React from 'react'
import "./Product.css"
import { items } from './Data'
import { Link } from 'react-router-dom'
const Product = () => {
    return (
        <>
            <div className="product-card py-5">
                <div className="container">
                    <div className="row">
                        {
                            items.map((product) => {
                                return (
                                    <div className="col-lg-4 mb-4">
                                        <Link to={`/product/${product.id}`} key={product.id} className="main-card">
                                            <div className="pro-card">
                                                <h3>{product.title}</h3>
                                                <img src={product.imgSrc} className='img-fluid img' alt="" />
                                                <p>{product.description}</p>
                                            </div>
                                            <div className="price-about">
                                                <button type='button' className='btn'><i className='fa fa-indian-rupee-sign'></i> {product.price}</button>
                                                <button type='button' className='btn '>Add to Cart <i className='fa fa-cart-shopping'></i></button>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product