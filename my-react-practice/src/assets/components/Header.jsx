import React from 'react'
import '../components/Header.css'
function Header() {

  const handleMenu = () => {
    let navDialog = document.querySelector('#nav-dialog');
    navDialog.classList.toggle('hidden')
  }
  return (
    // top bar start
    <>
      <div className="topbar flex justify-between items-center bg-black py-3 px-15">
        <div className="top-contact hidden md:flex">
          <a href="#" className='mx-2'><i className='fa fa-phone'></i> +91-8423271404 </a>
          <a href="#"><i className='fa fa-envelope'></i> info@gmail.com</a>
        </div>
        <div className="top-social ">
          <a href="#" className='mx-2'><i className='fa-brands fa-facebook'></i></a>
          <a href="#" className='mx-2'><i className='fa-brands fa-linkedin'></i></a>
          <a href="#" className='mx-2'><i className='fa-brands fa-twitter'></i></a>
          <a href="#" className='mx-2'><i className='fa-brands fa-instagram'></i></a>
        </div>
      </div>
      {/* //top bar end */}




      {/* navbar start */}
      <nav className='px-15 flex bg-white shadow-xl justify-between items-center'>
        <a href="#" id="brand">
          <img className='my-nav-logo object-cover' src="https://www.geetabarcode.com/images/logo/new-log-preview.jpeg" alt="my logo" />
        </a>
        <div id="nav-menu" className='hidden md:flex gap-12'>
          <a href="#" className='font-medium'>Home</a>
          <a href="#" className='font-medium'>About Us</a>
          <a href="#" className='font-medium'>Products</a>
          <a href="#" className='font-medium'>Blogs</a>
          <a href="#" className='font-medium'>Contact Us</a>
        </div>

        <a href='#' javascript = "void(0)" id='get-a-quote' className='getQuote hidden md:flex g-2 border-0 w-40 p-3 text-white items-center bg-red-700'>
          Get a Quote <i className='fa fa-arrow-right ms-2'></i>
        </a>

        {/* toggler-btn-start */}
        <button className='p-2 md:hidden' onClick={handleMenu}>
          <i className='fa fa-bars'></i>
        </button>
        {/* toggler-btn-end */}
        {/* mobile nav start */}
        <div id='nav-dialog' className='hidden fixed md:hidden bg-white inset-0 p-3'>
          <div id="nav-bar" className='flex justify-between items-center'>
            <a href="#" id="brand">
              <img className='my-nav-logo object-cover' src="https://www.geetabarcode.com/images/logo/new-log-preview.jpeg" alt="my logo" />
            </a>
            <button className='p-2 md:hidden' onClick={handleMenu}>
              <i className='fa fa-xmark'></i>
            </button>



          </div>
          <div className='mt-5'>
            <a href="#" className='font-medium m-3 p-3 block rounded-lg hover:bg-gray-200'>Home</a>
            <a href="#" className='font-medium m-3 p-3 block rounded-lg hover:bg-gray-200'>About Us</a>
            <a href="#" className='font-medium m-3 p-3 block rounded-lg hover:bg-gray-200'>Contact Us</a>
            <a href="#" className='font-medium m-3 p-3 block rounded-lg hover:bg-gray-200'>Blogs</a>

          </div>

          <div className='h-[1px] bg-gray-300 block'></div>
          <button className='w-full mt-4 flex g-2 items-center 
          hover:bg-gray-400'>
            Get a Quote <i className='fa fa-arrow-right'></i>
          </button>
        </div>
        {/* mobile-nav-end */}

      </nav>
      {/* navbar end */}

    </>
  )
}

export default Header