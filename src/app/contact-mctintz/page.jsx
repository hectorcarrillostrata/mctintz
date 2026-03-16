import React from 'react'
import Link from 'next/link'

import MctintzNavbarDark from '../components/navbar/mctintz-navbar-dark'

import {FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter,FiLinkedin, FiGithub, FiYoutube, FiGitlab} from 'react-icons/fi'

export default function ContactMctintz() {
  return (
    <>
     <MctintzNavbarDark/> 

    <section className="vh-100 d-flex align-items-center" style={{backgroundImage:"url('/images/contact-detail.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                  <div className="title-heading mt-5 pt-4">
                      <h1 className="heading">Get in Touch with MC Tintz</h1>
                      <p className="text-dark">Visit <span className="text-primary fw-bold">MC Tintz</span> for premium automotive customization services. We specialize in window tinting, custom wheels, and performance tires with flexible financing options.</p>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMail className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Email</h5>
                              <Link href="mailto:workhard851@yahoo.com" className="text-primary">workhard851@yahoo.com</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiPhone className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Phone</h5>
                              <Link href="tel:+18155400297" className="text-primary">+1 815-540-0297</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMapPin className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Location</h5>
                              <Link href="https://maps.google.com/?q=6810+Forest+Hills+Rd+Loves+Park+IL+61111" target="_blank" rel="noopener noreferrer" className="text-primary">6810 Forest Hills Rd, Loves Park, IL 61111</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiPhone className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Business Hours</h5>
                              <div className="text-muted">
                                  <p className="mb-1"><strong>Monday:</strong> 7:00 am - 3:00 pm</p>
                                  <p className="mb-1"><strong>Tuesday - Saturday:</strong> 7:00 am - 5:00 pm</p>
                                  <p className="mb-0"><strong>Sunday:</strong> Closed</p>
                              </div>
                          </div>
                      </div>

                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMail className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Book Appointment</h5>
                              <Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Book Now</Link>
                          </div>
                      </div>
                      
                      <ul className="list-unstyled social-icon mb-0 mt-4">
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </section>
    </>
  )
}
