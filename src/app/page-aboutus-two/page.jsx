import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import Counter from '../components/counter'
import PartnerOne from '../components/partner/partner-one'
import AboutTab from '../components/tab/about-tab'
import VideoCenter from '../components/video/video-center'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiAirplay, FiChevronRight} from 'react-icons/fi'
import { RiPresentationFill } from 'react-icons/ri'
import { LuImagePlus} from 'react-icons/lu'

export default function AboutTwo() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/company/aboutus.jpg')"}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark"> Aboutus </h2>
                      <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Company</Link></li>
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
          <div className="row align-items-center" id="counter">
              <div className="col-md-6">
                  <Image src="/images/company/about2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-lg-4">
                      <div className="d-flex mb-4">
                          <span className="text-primary h1 mb-0"><span className='display-1 fw-bold'><Counter end={15}/></span>+</span>
                          <span className="h6 align-self-end ms-2">Years <br/> Experience</span>
                      </div>
                      <div className="section-title">
                          <h4 className="title mb-4">Who we are ?</h4>
                          <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                          <Link href="#" className="btn btn-primary mt-3">Contact us</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-4">
          <PartnerOne/>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h6 className="text-primary">Work Process</h6>
                      <h4 className="title mb-4">How do we works ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                      <div className="icons text-center rounded mx-auto">
                          <RiPresentationFill className="h4 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Discussion</h5>
                          <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                      <div className="icons text-center rounded mx-auto">
                          <FiAirplay className="h4 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Strategy & Testing</h5>
                          <p className="text-muted mb-0">Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                      <div className="icons text-center rounded mx-auto">
                          <LuImagePlus className="h4 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Reporting</h5>
                          <p className="text-muted mb-0">Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-end mb-4 pb-4">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h6 className="text-primary">Services</h6>
                      <h4 className="title mb-4">What we do ?</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                  <div className="text-center text-md-end">
                      <Link href="#" className="text-primary h6">See More <FiChevronRight className="align-middle"/></Link>
                  </div>
              </div>
          </div>

          <AboutTab/>
      </div>
    </section>

    <section className="section bg-light pt-0">
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
                                              <Link href="#" className="text-white title-dark">Read More <FiChevronRight className="align-middle"/></Link>
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
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
