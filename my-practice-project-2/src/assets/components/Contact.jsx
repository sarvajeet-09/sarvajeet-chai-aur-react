import React from 'react'
import '../components/Contat.css'
function Contact() {
  return (
    <>
        
  <section className="contact-us text-light py-4">
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-heading">
              <h1>Have a Question?</h1>
            </div>
            <div className="contact-img">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="email-card">
                    <p><i className="fa fa-envelope "></i> info.hatsumeipackaging@gmail.com</p>
                    <p><i className="fa fa-phone "></i> +91-9310804251</p>
                    <p><i className="fa fa-phone "></i> +91-8285311810</p>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="Address-Card">
                    <p><i className="fa fa-location"></i> Khasra 1088, Gali No.03, Vikas Nagar, Saddique Nagar, Meerut
                      Road,Ghaziabad(U.P) 201003</p>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d218.62419984567984!2d77.28011505719485!3d28.749799196268125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKhasra%201088%2C%20Gali%20No.03%2C%20Vikas%20Nagar%2C%20Saddique%20Nagar%2C%20Meerut%20Road%2CGhaziabad(U.P)%20201003!5e0!3m2!1sen!2sin!4v1727436021728!5m2!1sen!2sin"
                    width="100%" height="306px" style={{border:"0"}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form pt-lg-5 mt-lg-5">
              <form action="" className="form-group" onsubmit="return form()">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control text-light" id="fname" placeholder="Your Name"/>
                      <label for="fname">Enter Your Name</label>
                      <span id="err1" className="text-danger"></span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control text-light" id="fnumber" placeholder="Phone"/>
                      <label for="fnumber">Enter Your Phone</label>
                      <span id="err3" className="text-danger"></span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control text-light" id="femail" placeholder="Email"/>
                      <label for="femail">Enter Your Email</label>
                      <span id="err2" className="text-danger"></span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <textarea className="form-control text-light" placeholder="Leave a comment here"
                        id="floatingTextarea2" style={{height: "150px"}}></textarea>
                      <label for="floatingInput">Message</label>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control text-light" id="codeToenter" placeholder="Enter Captcha"/>
                      <label for="codeToenter">Enter Captcha Code</label>
                      <span id="err4" className="text-danger"></span>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-3">
                    <div className="captcha-para text-light">
                      <p id="captchCode">12hdfg</p>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="refresh-button">
                      <button type="button" id="RefreshCaptcha"><i className="fa fa-arrows-rotate"></i> Refresh</button>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <button type="submit" className="btn btn1 w-100 border">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    </>
  )
}

export default Contact