import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import MapModal from '../components/map-modal'

import {FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter,FiLinkedin, FiGithub, FiYoutube, FiGitlab} from 'react-icons/fi'

export default function ContactDetail() {
  return (
    <>
     <Navbar/> 

    <section className="vh-100 d-flex align-items-center" style={{backgroundImage:"url('/images/contact-detail.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                  <div className="title-heading mt-5 pt-4">
                      <h1 className="heading">Let's talk about your portfolio</h1>
                      <p className="text-dark">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMail className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Email</h5>
                              <Link href="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiPhone className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Phone</h5>
                              <Link href="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                          </div>
                      </div>
                      
                      <div className="d-flex contact-detail align-items-center mt-3">
                          <div className="icon">
                              <FiMapPin className="fea icon-m-md text-dark me-3"/>
                          </div>
                          <div className="flex-1 content">
                              <h5 className="title fw-bold mb-0">Location</h5>
                              <MapModal/>
                          </div>
                      </div>
                      <ul className="list-unstyled social-icon mb-0 mt-4">
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiGithub className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiYoutube className="fea icon-sm fea-social"/></Link></li>
                          <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiGitlab className="fea icon-sm fea-social"/></Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </section>
    </>
  )
}
