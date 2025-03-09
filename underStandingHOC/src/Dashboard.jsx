import React from 'react'
import Auth from './utils/Auth'

function Dashboard({name,extra}) {

   
  return (
    <div>my Dashboard
        <h3>{name}</h3>
        <h4>{extra}</h4>
    </div>
  )
}

export default Dashboard