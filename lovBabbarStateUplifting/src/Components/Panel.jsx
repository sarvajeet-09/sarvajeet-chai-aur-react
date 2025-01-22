import React from 'react'

const Panel = (props) => {
  return (
    <section className='panel'>
     <h3>
        {props.title}
     </h3>
     {props.isActive ? (
        <p>{props.children}</p>
     ):(
        <button onClick={props.onShow}>show</button>
     )}
    </section>
  )
}

export default Panel