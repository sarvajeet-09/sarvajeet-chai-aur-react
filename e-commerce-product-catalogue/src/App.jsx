import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from'./components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'

function App() {


  return (
    <>
    <Router>
<Navbar/>
<Routes>
  <Route path='/' element={  <Product/>}></Route>
  <Route path='/product/:id' element={  <ProductDetail/>}></Route>
  <Route path='/search/:term' element={  <SearchItem/>}></Route>
  <Route path='/Cart' element={  <Cart/>}></Route>
</Routes>
  
    </Router>
    </>
  )
}

export default App
