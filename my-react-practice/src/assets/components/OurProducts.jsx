import React from 'react'

function OurProducts() {
    return (
        <>
            <div className="our-products flex flex-wrap lg:px-15 lg:py-5 mb-5 ">
                <div>
                    <h1 className='text-xl text-red-600'>Our Products ----</h1>
                    <p>"Innovative solutions, superior quality "</p>
                </div>
            </div>
            <div class="container mx-auto py-5">
                <div className="flex flex-wrap px-10 lg:px-15">
                    <div className='w-1/3 shadow-1 '>
                        <div className="card mx-2 border-1">
                            <a className="no-underline " href="#">
                                <img src="https://geetabarcode.com/images/product-image/handheld-scanner.png" alt="" />
                                <div className="button  bg-red-500 text-white text-center py-2">
                                    Barcode Printers
                                </div>
                                <div className='border-r-blue-900 p-1'>
                                    <p className='text-black text-justify py-3' >
                                        A barcode printer is an essential device used for printing barcode labels, tags, and receipts that play a vital role in inventory management, product identification, and tracking.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className="card mx-2 border-1">
                            <a className="no-underline " href="#">
                                <img src="https://geetabarcode.com/images/product-image/handheld-scanner.png" alt="" />
                                <div className="button  bg-red-500 text-white text-center py-2">
                                    Barcode Printers
                                </div>
                                <div className='border-r-blue-900 p-1'>
                                    <p className='text-black text-justify py-3' >
                                        A barcode printer is an essential device used for printing barcode labels, tags, and receipts that play a vital role in inventory management, product identification, and tracking.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='w-1/3 shadow-1 '>
                        <div className="card mx-2 border-1">
                            <a className="no-underline " href="#">
                                <img src="https://geetabarcode.com/images/product-image/handheld-scanner.png" alt="" />
                                <div className="button  bg-red-500 text-white text-center py-2">
                                    Barcode Printers
                                </div>
                                <div className='border-r-blue-900 p-1'>
                                    <p className='text-black text-justify py-3' >
                                        A barcode printer is an essential device used for printing barcode labels, tags, and receipts that play a vital role in inventory management, product identification, and tracking.</p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OurProducts