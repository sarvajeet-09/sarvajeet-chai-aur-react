import React from 'react'
import '../components/Home.css'
import Header from './Header'
import HomeBanner from './HomeBanner'
import About from './About'
import Ourproducts from './Ourproducts'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
function Home() {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <About/>
    <Ourproducts/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home