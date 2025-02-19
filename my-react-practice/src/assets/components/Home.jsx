import React from 'react'
import Header from './Header'
import Banner from './Banner'
import '../components/Home.css'
import Aboutsection from './AboutSection'
import OurProducts from './OurProducts'

function Home() {
  return (
  <>
  <Header></Header>
  <Banner></Banner>
  <Aboutsection></Aboutsection>
  <OurProducts/>
  </>
  )
}

export default Home