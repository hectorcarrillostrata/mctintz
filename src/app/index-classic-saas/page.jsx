import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import ClientThree from '../components/client/client-three'
import PricingTwo from '../components/pricing/pricing-two'
import CtaOne from '../components/cta/cta-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import ClientTwo from '../components/client/client-two'

import { featureOne } from '../data/feature'

import {FiShield, FiCpu, FiChevronRight} from 'react-icons/fi'

export default function ClassicSass() {
  return (
    <>
    <Navbar app={true}/>

    <section className="bg-half-170 d-table w-100 overflow-hidden" id="home">
      <div className="container">
          <div className="row align-items-center pt-5">
              <div className="col-lg-7 col-md-6">
                  <div className="title-heading">
                      <h1 className="heading mb-3">Everything you <br/> need to do <br/> better work</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary">Buy Now<span className="badge rounded-pill bg-danger ms-2">v5.0.0</span></Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="classic-saas-image position-relative">
                      <div className="bg-saas-shape position-relative">
                          <Image src="/images/laptop.png" width={0} height={0} sizes='100vw' style={{width:'1175px', height:'auto'}} className="mx-auto d-block" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="pt-5">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section overflow-hidden">
      <div className="container pb-5 mb-md-5">
          <div className="row">
              {featureOne.slice(3,6).map((item,index)=>{
                let Icon = item.icon
                return(
                  <div className="col-md-4 col-12 mt-5" key={index}>
                      <div className="features feature-primary text-center">
                          <div className="image position-relative d-inline-block">
                              <Icon className="h2 text-primary"></Icon>
                          </div>

                          <div className="content mt-4">
                              <h5>{item.title}</h5>
                              <p className="text-muted mb-0">{item.desc}</p>
                          </div>
                      </div>
                  </div>
                )
              })}
          </div>
      </div>

      <div className="container pb-5 mb-md-5 mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-7">
                  <div className="saas-feature-shape-left position-relative">
                      <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded shadow" alt=""/>
                  </div>
              </div>

              <div className="col-lg-5 mt-4 pt-2 mt-lg-0 pt-lg-0">
                  <div className="section-title ms-lg-4">
                      <h1 className="title mb-3">Build your site for using this app</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <ClientTwo/>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
                  <div className="section-title me-lg-4">
                      <h1 className="title mb-3">Why Choose us ?</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  
                      <div className="row">
                          <div className="col-12">
                              <div className="d-flex align-items-center pt-4">
                                  <h2><FiShield className="fea icon-m-md text-primary"/></h2>
                                  <div className="ms-3">
                                      <h5>Fully Secured</h5>
                                      <p className="text-muted mb-0">Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-12">
                              <div className="d-flex align-items-center pt-4">
                                  <h2><FiCpu className="fea icon-m-md text-primary"/></h2>
                                  <div className="ms-3">
                                      <h5>Best Performance</h5>
                                      <p className="text-muted mb-0">If the fill text is intended to illustrate the characteristics of sometimes.</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-12 pt-4">
                              <Link href="#" className="btn btn-outline-primary">Install Now <FiChevronRight className="uil uil-angle-right-b"/></Link>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-7 order-1 order-lg-2">
                  <div className="saas-feature-shape-right position-relative">
                      <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded shadow" alt=""/>
                  </div>
              </div>
          </div>
      </div>

      <div className="container pt-4 mt-100 mt-60">
          <ClientThree/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Pricing Rates</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <PricingTwo/>
      </div>

     <CtaOne/>

    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
</>
  )
}
