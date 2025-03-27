import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'
function Navbar({setData}) {

  const [searchItem, setSearch] = useState("");
  const navigate = useNavigate()

const filterByCategory = (categor) =>{
    const element = items.filter((item) =>item.category === categor) 
    console.log(element)
    setData(element)
}

const filterByPrice = (price) =>{
    const priceEle = items.filter((item) =>item.price >= price )
    setData(priceEle)
}

const handleClick = (e) => {
    e.preventDefault()
    navigate(`/search/${searchItem}`)

}




    return (
        <>
            <header className='sticky-top shadow-2'>
                <div className="nav-bar shadow-1">
                    <div className="brand">
                    <Link to={'/'} className='brand-name'> E-cart</Link>
                    </div>
                    <form onSubmit={handleClick} className="search">
                     <input type="text"
                     value={searchItem}
                     onChange={(e) => setSearch(e.target.value)}
                     name="" placeholder='search' id="" />
                     <span><i className='fa fa-magnifying-glass'></i></span>
                    </form>
                    <Link to={'/cart'} className="cart">
                    <button className='btn'><i className='fa fa-cart-shopping'></i></button>
                    </Link>
                </div>
            </header>
             <hr />
            <div className="navbar-wrapper py-3">
                <div className="items">Filter By {"->"}</div>
                <div className="items"onClick={()=>setData(items)} >No Filter</div>
                <div className="items" onClick={()=>filterByCategory('mobiles')} >Mobiles</div>
                <div className="items"onClick={()=>filterByCategory('laptops')}>Laptops</div>
                <div className="items"onClick={()=>filterByCategory('tablets')}>Tablets</div>
                <div onClick={()=>filterByPrice('29999')} className="items"   >{">="}29999</div>
                <div onClick={()=>filterByPrice('49999')} className="items"  >{">="}49999</div>
                <div onClick={()=>filterByPrice('69999')} className="items">{">="}69999</div>
                <div onClick={()=>filterByPrice('89999')} className="items">{">="}89999</div>
           
            </div>
        </>
    )
}

export default Navbar