import React from 'react'

import HostingNavbar from '../components/navbar/hosting-navbar'
import PricingTwo from '../components/pricing/pricing-two'
import AboutOne from '../components/about/about-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import { hostingAboutTwo } from '../data/hosting'

export default function HostingShared() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/hosting/shared.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="pages-heading title-heading text-center">
                      <h4 className="title text-white title-dark mb-4">Shared Web Hosting</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
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
      <div className="features-absolute">
          <div className="container">
              <PricingTwo/>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Why Shared Hosting ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {hostingAboutTwo.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span className="h1 icon-color mb-3">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
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
          <AboutOne/>
      </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
