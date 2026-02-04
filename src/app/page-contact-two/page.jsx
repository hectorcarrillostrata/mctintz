import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import SmallFooter from '../components/footer/small-footer'
import MapModal from '../components/map-modal'
import ScrollToTop from '../components/scroll-to-top'

import {FiUser, FiMail, FiBook, FiMessageCircle, FiPhone, FiMapPin} from 'react-icons/fi'

export default function ContactTwo() {
  return (
    <>
     <Navbar/> 
    <section className="section pt-5 mt-4">
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="card map border-0">
                      <div className="card-body p-0">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} allowFullScreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                  <div className="card custom-form rounded border-0 shadow p-4">
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

              <div className="col-lg-7 col-md-6 order-1 order-md-2">
                  <div className="title-heading ms-lg-4">
                      <h4 className="mb-4">Contact Details</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMail className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h6 className="title fw-bold mb-0">Email</h6>
                              <Link href="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiPhone className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h6 className="title fw-bold mb-0">Phone</h6>
                              <Link href="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMapPin className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h6 className="title fw-bold mb-0">Location</h6>
                              <MapModal/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <SmallFooter/>
    <ScrollToTop/>
    </>
  )
}
