import React from 'react'
import '../components/Aboutsection.css'


function Aboutsection() {
    return (
        <>
            <div class="about-parent mt-5 flex flex-wrap lg:px-15 lg:py-8 ">
                <div class="w-1/2 py-5   d-flex justify-center items-center">
                    <h1 className='text-white pb-5'>Why Choose Us ? -----</h1>
                    <h3 className='text-white text-2xl'>"Smart Barcode & Printing Solutions for Seamless Operations"</h3>
                    <p className='pb-10 pt-5 text-white text-xl'>At Geeta Barcode International, we prioritize quality, innovation, and customer satisfaction. Here's why businesses choose us:</p>
                    <ul>
                        <li className='text-white mb-4 text-lg'>
                            <p><strong> <i className='fa fa-check'></i> Comprehensive Solutions:</strong>We provide end-to-end barcode and labeling solutions, including printers, scanners, labels, and software, to streamline your business operations.</p>
                        </li>
                        <li className='text-white mb-4 text-lg'>
                            <p><strong> <i className='fa fa-check'></i> Advanced Technology:</strong>Our cutting-edge barcode printers and scanning devices ensure seamless integration, high efficiency, and precise performance.</p>
                        </li>
                        <li className='text-white mb-4 text-lg'>
                            <p><strong> <i className='fa fa-check'></i> Exceptional Support: </strong>Backed by expert guidance and dedicated after-sales service, we ensure smooth operations with reliable technical assistance.</p>
                        </li>

                    </ul>

                    <div className="happy-client flex flex-wrap lg:px-10 mt-10">
                        <div className='w-1/3'>
                            <div className='flex card'>
                                <h4 className='text-5xl text-white flex justify-between items-center'><i className='fa fa-users'></i></h4>
                                <div className='text-center'>
                                    <p className='text-4xl text-white ps-5'>500+</p>
                                    <p className='text-xl text-white'>Happy Clients</p>
                                </div>
                            </div>

                        </div>
                        <div className='w-1/3'>
                        <div className='flex card'>
                                <h4 className='text-5xl text-white flex justify-between items-center'><i className='fa fa-check'></i></h4>
                                <div className='text-center'>
                                    <p className='text-4xl text-white ps-5'>150+</p>
                                    <p className='text-xl text-white'>Project Complete</p>
                                </div>
                            </div>

                        </div>
                        <div className='w-1/3'>
                        
                        <div className='flex card'>
                                <h4 className='text-5xl text-white flex justify-between items-center'><i className='fa fa-award'></i></h4>
                                <div className='text-center px-3'>
                                    <p className='text-4xl text-white ps-5'>20+</p>
                                    <p className='text-xl text-white'>Year Experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="w-1/2">
                <div className="flex justify-center items-center">
                    <img src="https://geetabarcode.com/images/about-image/why-choose-us.png" alt="image" />
                </div>

                </div>
            </div>

        </>
    )
}

export default Aboutsection