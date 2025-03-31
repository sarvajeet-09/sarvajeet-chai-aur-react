import React from 'react'
import Product from './Product'
import './Cart.css'


const Cart = ({ cart, setCart }) => {
  console.log(cart)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            {
              cart.map((product) => {
                return (
                  <div className="cart-card">
                    <div className="cart-image">
                    <img src={product.imgSrc} className='img-fluid' alt="" />
                    </div>
                    <div className="cart-content">
                    {cart.title}
                    </div>
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

export default Cart