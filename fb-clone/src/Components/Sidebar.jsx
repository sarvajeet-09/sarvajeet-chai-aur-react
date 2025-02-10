import React from 'react'
import Sidebarroe from "./Sidebarroe"
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='Sidebar'>
      <Sidebarroe title='pages'/>
      <Sidebarroe title='Friends'/>
      <Sidebarroe title='' />
      <Sidebarroe/>
      <Sidebarroe/>
    </div>
  )
}

export default Sidebar