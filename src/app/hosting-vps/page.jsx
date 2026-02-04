import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { hostingFeature } from '../data/hosting'

import HostingNavbar from '../components/navbar/hosting-navbar'
import HostingTab from '../components/hosting/hosting-tab'
import AccordionOne from '../components/accordion/accordion-one'
import HostingAccordion from '../components/hosting/hosting-accordion'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function HostingVps() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-170 d-table w-100">
      <div className="bg-overlay bg-gradient-primary"></div>
      <div className="container">
          <div className="row align-items-center mt-5">
              <div className="col-lg-6">
                  <div className="pages-heading title-heading">
                      <h4 className="title mb-4 text-white title-dark">Reliable VPS Hosting <br/> Built for Enterprise</h4>
                      <p className="text-white-50 para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Get Started</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6">
                  <Image src="/images/hosting/vps.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title mb-3">Why choose VPS Hosting</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row">
          {hostingFeature.map((item,index)=>{
            let Icon = item.icon
            return(
              <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                      <span className="h2 icon-color mb-3">
                          <Icon className=""/>
                      </span>
                      <div className="card-body p-0 content">
                          <h5>SSD storage</h5>
                          <p className="para text-muted mb-0">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>
                      </div>
                      <div className="position-absolute top-0 end-0">
                          <Icon className="display-1 opacity-05"/>
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
                      <h4 className="title mb-3">VPS Hosting Plans</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <HostingTab/>
      </div>
    </section>

    <section className="section bg-primary">
      <div className="container">
          <div className="row mb-md-4 pb-md-2 justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-md-4 pb-md-2 pb-5 pb-sm-0">
                      <h4 className="title text-white  title-dark mb-3">Frequently asked questions</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section features-absolute" id="question">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 col-md-6 col-12 mt-3 mt-sm-0">
                  <div className="me-lg-4">
                      <h4 className="text-white title-dark text-md-start text-center">Technical Questions</h4>
                      <HostingAccordion/>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 mt-5 mt-sm-0">
                  <div className="ms-lg-4">
                      <h4 className="text-white title-dark d-none d-md-block">General Questions</h4>
                      <h4 className="d-md-none d-block text-md-start text-center">General Questions</h4>
                      <AccordionOne/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
