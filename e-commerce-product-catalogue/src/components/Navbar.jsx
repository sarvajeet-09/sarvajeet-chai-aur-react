import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <header className='sticky-top shadow-2'>
                <div className="nav-bar shadow-1">
                    <div className="brand">
                    <Link to={'/'} className='brand-name'> E-cart</Link>
                    </div>
                    <div className="search">
                     <input type="text" name="" placeholder='search' id="" />
                     <span><i className='fa fa-magnifying-glass'></i></span>
                    </div>
                    <Link to={'/cart'} className="cart">
                    <button className='btn'><i className='fa fa-cart-shopping'></i></button>
                    </Link>
                </div>
            </header>
<hr />
            <div className="navbar-wrapper py-3">
                <div className="items">Filter By {"->"}</div>
                <div className="items">No Filter</div>
                <div className="items">Mobiles</div>
                <div className="items">Laptops</div>
                <div className="items">Tablets</div>
                <div className="items">{">="}29999</div>
                <div className="items">{">="}49999</div>
                <div className="items">{">="}69999</div>
                <div className="items">{">="}89999</div>
           
            </div>

        </>
    )
}

export default Navbar