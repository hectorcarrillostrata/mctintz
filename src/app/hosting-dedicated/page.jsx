import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HostingNavbar from '../components/navbar/hosting-navbar'
import HostingPricingPlan from '../components/hosting/hosting-pricing-plan'
import HostingAccordionTwo from '../components/hosting/hosting-accordion-two'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import { hostingFeature } from '../data/hosting'
import {FiChevronRight, FiArrowRightCircle, } from 'react-icons/fi'

export default function HostingDedicate() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-170 d-table bg-primary w-100" style={{backgroundImage:"url('/images/hosting/dedicated.png')"}}>
      <div className="bg-overlay opacity-4"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="pages-heading title-heading text-center">
                      <h4 className="title mb-3 text-white title-dark">Dedicated Servers</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Request Call</Link>
                      </div>
                  </div>
              </div>
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
          {hostingFeature.map((item,index)=>{
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
                          <Link href="#" className="read-more">Read More <FiChevronRight className="#"/></Link>
                          <Icon className="full-img"></Icon>
                      </div>
                  </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
        <div className="rounded-md bg-primary py-5 px-4">
            <div className="row py-md-5 py-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="section-title">
                                <h6 className="text-white title-dark mb-3">Powered by SSD</h6>
                                <h2 className="text-white title-dark mb-0">100% Faster Solid State Drive Server</h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <ul className="list-unstyled mb-0 ms-lg-5">
                                <li className="text-white-50 my-2"><FiArrowRightCircle className="fea icon-ex-md me-1"/> Ultrafast Data Read/Write Speeds</li>
                                <li className="text-white-50 my-2"><FiArrowRightCircle className="fea icon-ex-md me-1"/> Enterprise Grade Hardware</li>
                                <li className="text-white-50 my-2"><FiArrowRightCircle className="fea icon-ex-md me-1"/> Highest Data Protection Reliability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title mb-3">Pricing Plans</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <HostingPricingPlan/>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title mb-3">Questions regarding Dedicated Server ?</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row align-items-center">
            <div className="col-lg-6 col-12 mt-4 pt-2">
                <Image src="/images/hosting/faqs.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
            </div>

            <div className="col-lg-6 col-12 mt-4 pt-2">
                <HostingAccordionTwo/>
            </div>
        </div>
      </div>
    </section>

    <ContactFooter full={true}/>
    <ScrollToTop/>
    
    </>
  )
}
