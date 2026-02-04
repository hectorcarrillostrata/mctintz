import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import MapModal from '../components/map-modal'

import {FiUser, FiMail, FiBook, FiMessageCircle, FiPhone, FiMapPin } from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function ContactThree() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/contact-detail.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0">Contact Us</h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Contact</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Three</li>
                  </ul>
              </nav>
          </div>
      </div> 
    </section>

    <div className="position-relative">
        <div className="shape overflow-hidden text-color-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-6  mt-4 pt-2">
                  <div className="card shadow rounded border-0">
                      <div className="card-body py-5">
                          <h4 className="card-title">Get In Touch !</h4>
                          <div className="custom-form mt-3">
                              <form>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiUser className="fea icon-sm icons"/>
                                                  <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :"/>
                                              </div>
                                          </div>
                                      </div>
  
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMail className="fea icon-sm icons"/>
                                                  <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :"/>
                                              </div>
                                          </div> 
                                      </div>
  
                                      <div className="col-12">
                                          <div className="mb-3">
                                              <label className="form-label">Subject</label>
                                              <div className="form-icon position-relative">
                                                  <FiBook className="fea icon-sm icons"/>
                                                  <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :"/>
                                              </div>
                                          </div>
                                      </div>
  
                                      <div className="col-12">
                                          <div className="mb-3">
                                              <label className="form-label">Comments <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMessageCircle className="fea icon-sm icons clearfix"/>
                                                  <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Message :"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="d-grid">
                                              <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8 col-md-6 ps-md-3 pe-md-3 mt-4 pt-2">
                  <div className="card map map-height-two rounded map-gray border-0">
                      <div className="card-body p-0">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} className="rounded" allowFullScreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-md-4">
                  <div className="card border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center rounded mx-auto">
                          <FiPhone className="h3 mb-0"/>
                      </div>
                      <div className="content mt-4">
                          <h5 className="fw-bold">Phone</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <Link href="tel:+152534-468-854" className="read-more">+152 534-468-854</Link>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center rounded mx-auto">
                          <FiMail className="h3 mb-0"/>
                      </div>
                      <div className="content mt-4">
                          <h5 className="fw-bold">Email</h5>
                          <p className="text-muted">Start working with Landrick that can provide everything</p>
                          <Link href="mailto:contact@example.com" className="read-more">contact@example.com</Link>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center rounded mx-auto">
                          <FiMapPin className="h3 mb-0"/>
                      </div>
                      <div className="content mt-4">
                          <h5 className="fw-bold">Location</h5>
                          <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                          <MapModal/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
