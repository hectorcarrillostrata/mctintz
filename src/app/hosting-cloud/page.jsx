import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HostingNavbar from '../components/navbar/hosting-navbar'
import PricingTwo from '../components/pricing/pricing-two'
import AccordionOne from '../components/accordion/accordion-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import { hostingFeatureTwo,  } from '../data/hosting'

import {FiChevronRight} from 'react-icons/fi'

export default function HostingCloud() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-170 d-table w-100 bg-primary" style={{backgroundImage:"url('/images/hosting/cloud.png')"}}>
      <div className="bg-overlay opacity-4"></div>
      <div className="container">
          <div className="row mt-5 align-items-center">
              <div className="col-lg-8 col-md-7 col-12">
                  <div className="title-heading me-lg-5">
                      <h4 className="heading text-white title-dark mb-3">Cloud Hosting</h4>
                      <p className="text-white-50 para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      
                      <ul className="feature-list list-unstyled mb-0">
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">10GB</span> Ram</li>
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">100GB</span> Bandwith</li>
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">100GB SSD</span> Storage</li>
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">3 Domain</span> Hosted Support</li>
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">50</span> Email Account</li>
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">5</span> Database</li>
                          <li className="text-white-50 my-1"><i className="mdi mdi-arrow-right text-warning me-2"></i><span className="fw-bold">Unlimited</span> Traffic</li>
                      </ul>
                  </div>
              </div>

              <div className="col-lg-4 col-md-5 col-12">
                  <div className="card border-0 rounded-md shadow text-center">
                      <div className="card-body px-4 py-5">
                          <h5 className="text-primary">Special Offer Price</h5>
                          <div className="d-flex justify-content-center my-3">
                              <span className="h5 text-uted mb-0 mt-2">$</span>
                              <span className="price text-dark display-4 fw-bold mb-0">4.99</span>
                              <span className="h5 text-uted align-self-end mb-1">/mo</span>
                          </div>  
                          <h6 className="mb-0">Original Price <span className="text-warning">$10.99</span></h6>
                          <Link href="#" className="btn btn-soft-primary mt-4">Get Started</Link>
                      </div>
                  </div>  
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-3">Server Features</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              {hostingFeatureTwo.map((item,index)=>{
                let Icon = item.icon
                return(
                  <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                      <div className="card features feature-primary explore-feature border-0 rounded text-center">
                          <div className="card-body">
                              <span className="icons rounded-circle shadow-lg d-inline-block h4">
                                  <Icon className=""/>
                              </span>
                              <div className="content mt-3">
                                  <h5 className="mb-3"><Link href="#" className="title text-dark">{item.title}</Link></h5>
                                  <p className="text-muted mb-3">{item.desc}</p>
                                  <Link href="#" className="read-more">Read More <FiChevronRight className="fea icon-sm"/></Link>
                              </div>
                          </div>
                      </div>
                  </div>
                )
              })}
          </div>
      </div>
    </section>

    <section className="section bg-primary">
      <div className="container">
          <div className="row mb-md-4 pb-md-2 justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-md-5">
                      <h4 className="title text-white title-dark mb-3">Hosting / Server Rates</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="features-absolute">
          <div className="container">
              <PricingTwo/>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-3">Frequently Aksed Questions</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                  </div>
              </div>
          </div>

          <div className="row align-items-center mb-md-5 mb-4 pb-lg-5">
              <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 order-1 order-md-2">
                  <div className="ms-lg-5">
                      <Image src="/images/hosting/faqs.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 col-12 mt-4 pt-2 order-2 order-md-1">
                  <AccordionOne/>
              </div>
          </div>
      </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
