import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HostingNavbar from '../components/navbar/hosting-navbar'
import PricingOne from '../components/pricing/pricing-one'
import HostingAccordionTwo from '../components/hosting/hosting-accordion-two'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiCheckCircle, FiArrowRight} from 'react-icons/fi'
import { hostingAboutTwo } from '../data/hosting'

export default function HostingReseller() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hosting/reseller.png')"}}>
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row mt-5">
              <div className="col">
                  <div className="pages-heading title-heading">
                      <h4 className="title mb-4 fw-bold text-white title-dark">Reseller Hosting</h4>
                      <p className="text-white-50 para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  
                      <div className="mt-4">
                          <Link href="#" className="btn btn-warning">Get Started</Link>
                      </div>
                      <h6 className="mb-0 mt-2 text-white-50"><FiCheckCircle className="fea icon-sm text-white title-dark me-1"/> 30-day money-back guarantee</h6>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <PricingOne title="Hosting Plans"/>

      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12 order-2 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title">
                    <small className="text-primary"><strong>Next generation hosting platform</strong></small>
                    <h4 className="title mt-2 mb-4">High quality website hosting</h4>
                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    
                    <div className="mt-4">
                        <Link href="#" className="btn btn-primary">Learn More <FiArrowRight className="fea icon-sm"/></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 order-1">
                <div className="me-lg-5">
                    <Image src="/images/hosting/1.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center pb-5">
                      <h4 className="title text-white title-dark mb-3">All the power and performance you'll ever need</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section features-absolute">
      <div className="container">
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
          <div className="row mb-md-4 pb-md-2 justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h4 className="title mb-3">Frequently asked questions</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-10 mt-4 pt-2">
                  <HostingAccordionTwo/>
              </div>
          </div>
      </div>
    </section>

    <section className="section py-5">
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-8 col-12">
                  <div className="section-title text-center text-md-start">
                      <h4 className="title text-white title-dark mb-3">Powerful Reseller <br/> Hosting to fuel your business!</h4>
                      <p className="text-white-50 para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-lg-5 col-md-4 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="text-center text-md-end">
                      <Link href="#" className="btn btn-warning">Get Started</Link>
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
