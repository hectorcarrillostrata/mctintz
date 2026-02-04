import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CorporateNavbar from '../components/navbar/corporate-navbar'
import VideoCenter from '../components/video/video-center'
import PricingOne from '../components/pricing/pricing-one'
import ClientOne from '../components/client/client-one'
import BlogOne from '../components/blog/blog-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiChevronRight, FiArrowRight} from 'react-icons/fi'

export default function CorporateAbout() {
  return (
    <>
     <CorporateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/corporate/pages.jpg')", backgroundPosition:'top'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark"> About us </h2>
                      <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-corporate">Business</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Aboutus</li>
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
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                              <div className="card-body p-0">
                                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="#"/>
                                  <div className="overlay-work"></div>
                                  <div className="content">
                                      <Link href="#" className="title text-white d-block fw-bold">Web Development</Link>
                                      <small className="text-white-50">IT & Software</small>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-6 col-6">
                          <div className="row">
                              <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Michanical Engineer</Link>
                                              <small className="text-white-50">Engineering</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Chartered Accountant</Link>
                                              <small className="text-white-50">C.A.</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="ms-lg-4">
                      <div className="section-title">
                          <span className="badge bg-soft-primary rounded-pill fw-bold">About us</span>
                          <h4 className="title mb-4 mt-3">We design and develop <br/> world-class web applications.</h4>
                          <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                      </div>

                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Read More <FiChevronRight className="align-middle"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="video-solution-cta position-relative" style={{zIndex:'1'}}>
                      <div className="position-relative">
                          <Image src="/images/cta-bg.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
                          <VideoCenter/>
                      </div>
                      <div className="content mt-md-4 pt-md-2">
                          <div className="row justify-content-center">
                              <div className="col-lg-10 text-center">
                                  <div className="row align-items-center">
                                      <div className="col-md-6 mt-4 pt-2">
                                          <div className="section-title text-md-start">
                                              <h6 className="text-white-50">Team</h6>
                                              <h4 className="title text-white title-dark mb-0">Meet Experience <br/> Team Member</h4>
                                          </div>
                                      </div>

                                      <div className="col-md-6 col-12 mt-4 pt-md-2">
                                          <div className="section-title text-md-start">
                                              <p className="text-white-50 para-desc">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                              <Link href="#" className="text-white title-dark">Read More <FiArrowRight className="fea icon-sm"/></Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="feature-posts-placeholder bg-primary bg-gradient"></div>
      </div>
    </section>

    <section className="section">
      <PricingOne title="Our Consulting Charge"/>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Clients Said</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <h6 className="text-primary">Blog</h6>
                      <h4 className="title mb-4 mb-lg-0">Reads Our Latest <br/> News & Blog</h4>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <p className="text-muted mb-0 mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <BlogOne/>
      </div>
    </section>
    <ContactFooter/>
    <ScrollToTop/>
    
    </>
  )
}
