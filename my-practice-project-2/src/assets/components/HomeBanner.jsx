import React from 'react'

function HomeBanner() {
  return (
    <>


  <div id="carouselExampleFade" class="my-carousel carousel slide carousel-fade" data-bs-ride="carousel"
    data-bs-interval="2500">
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="https://webmartsolutions.com/demo/Hatsumei-packaging/assets/images/banner/banner-4.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item active">
        <img src="https://webmartsolutions.com/demo/Hatsumei-packaging/assets/images/banner/banner-4.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://webmartsolutions.com/demo/Hatsumei-packaging/assets/images/banner/banner-4.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>



    </>
  )
}

export default HomeBanner