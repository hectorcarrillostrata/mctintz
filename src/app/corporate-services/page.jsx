import React from 'react'
import Link from 'next/link'

import CorporateNavbar from '../components/navbar/corporate-navbar'
import OutlineVideo from '../components/video/outline-video'
import CorporateTab from '../components/tab/corporate-tab'
import { corporateServices } from '../data/services'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiChevronRight, FiAirplay} from 'react-icons/fi'
import { RiPresentationLine,} from 'react-icons/ri'
import { MdImageSearch } from 'react-icons/md'

export default function CorporateServices() {
  return (
    <>
    <CorporateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/corporate/pages.jpg')", backgroundPosition:'top'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark"> Services </h2>
                      <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div> 
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-corporate">Business</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            {corporateServices.map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                            <div className="icons rounded text-start">
                                <Icon className="h3 mb-0"/>
                            </div>
                            <div className="card-body p-0 mt-4">                                            
                                <Link href="#" className="title h5 text-dark">{item.title}</Link>
                                <p className="text-muted mt-2">{item.desc}</p>
                                <Link href="#" className="read-more">Read More <FiChevronRight className=""/></Link>
                                <Icon className="full-img"/>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
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
                          <RiPresentationLine className="h3 mb-0"/>
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
                          <FiAirplay className="h3 mb-0"/>
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
                          <MdImageSearch className="h3 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Reporting</h5>
                          <p className="text-muted mb-0">Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="bg-cta shadow rounded card overflow-hidden" style={{backgroundImage:"url('/images/2.jpg')", backgroundPosition:'center'}} id="cta">
              <div className="bg-overlay"></div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-12 text-center">
                          <div className="section-title">
                              <h4 className="title title-dark text-white mb-4">We Are Creative Dreamers and Innovators</h4>
                              <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                              <OutlineVideo/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <CorporateTab/>
    </section>

    <ContactFooter/>
    <ScrollToTop/>
    </>
  )
}
