import React from 'react'
import '../components/Header.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
     
{/* fixed icons start */}
<div className="fixed-icons">
    <div className="whatsapp-fixed">
      <a href="# "><i className="fa-brands fa-whatsapp"></i> Chat</a>
    </div>
    <div className="phone-icon">
      <a href="#"><i className="fa fa-phone"></i> Call Us</a>
    </div>
  </div>
{/* fixed icons end */}



     {/* top bar start */}
     
  <section className="topbar">
    <div className="container">
      <div className="top-bar-content">
        <div className="text-content">
          <p><i className="fa fa-location "></i> Khasra 1088, Vikas Nagar, Saddique Nagar, Meerut road, Ghaziabad(U.P) 201003</p>
        </div>
        <div className="content">
          <a href="mailto:info.hatsumeipackaging@gmail.com"><i className="fa fa-envelope"></i>
            info.hatsumeipackaging@gmail.com</a>
          <a href="tel:+91-9310804251"><i className="fa fa-phone"></i> +91-9310804251</a>
       
        </div>
      </div>
    </div>
  </section>

{/* top bar end */}




{/* navbar start */}

  <nav className="navbar navbar-expand-lg  sticky-top navbar-light">
    <div className="container">
      <NavLink className="navbar-brand" to="/"><img src="https://webmartsolutions.com/demo/Hatsumei-packaging/assets/images/logo/Logo.png" className="img-fluid my-0"/></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i classNameName='fa fa-bars'></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About Us</NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Our Products
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><NavLink className="dropdown-item" href="enquire.html">Thermocol Sheets</NavLink></li>
              <li><NavLink className="dropdown-item" href="thermocol-box.html">Thermocol Boxes</NavLink></li>
              <li><NavLink className="dropdown-item" href="air-bubble-pouch.html">Air Bubble Bags</NavLink></li>
              <li><NavLink className="dropdown-item" href="thermocol-box.html">EPE Foam</NavLink></li>
              <li><NavLink className="dropdown-item" href="thermocol-box.html">Poly Bags </NavLink></li>
              <li><NavLink className="dropdown-item" href="thermocol-box.html">Tape </NavLink></li>
              <li><NavLink className="dropdown-item" href="thermocol-box.html">Corrugated Pckaging </NavLink></li>
              <li><NavLink className="dropdown-item" href="blister-packaging.html">Blister Packaging </NavLink></li>
              <li><NavLink className="dropdown-item" href="enquire.html">Stretch Film </NavLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="Gallery.html">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">Blogs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <div className="contact-us-nav d-none d-md-none d-lg-none d-xl-block">
          <NavLink href="tel:+91-8285311810"><i className="fa fa-phone text-light"></i> +91-8285311810</NavLink>
        </div>
      </div>

    </div>
  </nav>


{/* navbar end */}
    </>
  )
}

export default Header