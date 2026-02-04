import React from 'react'
import Link from 'next/link'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import PropertyDetailImage from '../components/react-estate/property-detail-image'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { LiaCompressArrowsAltSolid } from 'react-icons/lia'
import { LuBedDouble, LuBath } from 'react-icons/lu'

export default function PropertyDetail() {
  return (
    <>
    <RealEstateNavbar navDark={true}/> 
    <PropertyDetailImage/>

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
              <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                  <div className="work-detail">
                      <h4 className="title mb-3">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</h4>

                      <ul className="list-unstyled mt-3 d-flex align-items-center">
                          <li className="d-flex align-items-center me-3">
                              <LiaCompressArrowsAltSolid className="fs-4 me-1 text-primary"/>
                              <span className="text-muted fs-5">8000sqf</span>
                          </li>

                          <li className="d-flex align-items-center me-3">
                              <LuBedDouble className="fs-4 me-1 text-primary"/>
                              <span className="text-muted fs-5">4 Beds</span>
                          </li>

                          <li className="d-flex align-items-center">
                              <LuBath className="fs-4 me-1 text-primary"/>
                              <span className="text-muted fs-5">4 Baths</span>
                          </li>
                      </ul>

                      <p className="description text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                      <p className="description text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                      <p className="description text-muted mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                      
                      <div className="card map map-height-two rounded map-gray border-0 mt-4 pt-2">
                          <div className="card-body p-0">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} className="rounded" allowFullScreen=""></iframe>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-4 col-md-6 order-1 order-md-2">
                  <div className="sticky-bar work-detail">
                      <div className="p-4 rounded shadow">
                          <h4 className="title">Price:</h4>

                          <ul className="list-unstyled mb-0">
                              <li className="mt-3 d-flex justify-content-between">
                                  <b className="fs-5">$ 45,231</b>
                                  <span className="text-primary fw-bold">For Sale</span>
                              </li>
                              <li className="mt-3 d-flex justify-content-between">
                                  <small className="text-muted">Days on Hously</small>
                                  <small className="fw-bold">124 Days</small>
                              </li>
                              <li className="mt-3 d-flex justify-content-between">
                                  <small className="text-muted">Price per sq ft</small>
                                  <small className="fw-bold">$ 186</small>
                              </li>
                              <li className="mt-3 d-flex justify-content-between">
                                  <small className="text-muted">Monthly Payment (estimate)</small>
                                  <small className="fw-bold">$ 1497/Monthly</small>
                              </li>
                          </ul>  
                      </div>

                      <div className="text-center mt-4 pt-2">
                          <h5>Have Question ? Get in touch!</h5>
                          <Link href="" className="btn btn-soft-primary mt-3"><i className="mdi mdi-phone"></i> Contact us</Link>
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
