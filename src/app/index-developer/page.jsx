import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import DeveloperTab from '../components/tab/developer-tab'
import Schedule from '../components/get-in-touch/schedule'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { developerFeature } from '../data/feature'
import { pricingData } from '../data/data'

import {FiChevronRight} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function Developer() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6 col-12">
                  <div className="title-heading">
                      <span className="badge rounded-pill bg-soft-primary">Development</span>
                      <h1 className="fw-bold mt-2 mb-3">A Complete <br/> Developer Toolset</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary me-2">Get Started</Link>
                          <Link href="#" className="btn btn-outline-primary">Documentation</Link>
                      </div>
                      <p className="text-muted mb-0 mt-3">Current Version: v5.0.0</p>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <Image src="/images/digital/about.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid d-block mx-auto" alt=""/>
              </div> 
          </div>
      </div> 
    </section>

    <section className="py-4 border-top bg-light">
      <div className="container">
          <PartnerOne/>
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
          <div className="row">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Key Features</h4>
                      <p className="para-desc text-muted mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row align-items-center">
            {developerFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                        <div className="icons rounded text-start">
                            <Icon className="h3 mb-0"></Icon>
                        </div>
                        <div className="card-body p-0 mt-4">                                            
                            <Link href="#" className="title h5 text-dark">{item.title}</Link>
                            <p className="text-muted mt-2">{item.decs}</p>
                            <Link href="#" className="read-more">Read More <FiChevronRight className=""/></Link>
                            <Icon className="full-img"></Icon>
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
                      <h6 className="text-primary">Quickstart</h6>
                      <h4 className="title mb-4">Awesome isn't it? Let's dive in!</h4>
                      <p className="para-desc mx-auto text-muted mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <DeveloperTab/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <Image src="/images/integration/1.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Build tools and <br/> extensive documention</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Read More <FiChevronRight className="fea icon-sm"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our rates for developer from landrick team</h4>
                      <p className="para-desc mx-auto text-muted mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {pricingData.map((item, index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                  <div className="card pricing pricing-primary business-rate border-0 p-4 rounded-md shadow">
                    {item.tag === true && (
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                    )}
                      <div className="card-body p-0">
                          <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">{item.title}</span>
                          <h2 className="fw-bold mb-0 mt-3">{item.amount}</h2>
                          <p className="text-muted">Per Month</p>

                          <p className="text-muted">{item.desc}</p>

                          <ul className="list-unstyled pt-3 border-top">
                            {item.feature.map((el,index)=>{
                              return(
                                <li className="h6 text-muted mb-1" key={index}><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>{el}</li>
                              )
                            })}
                          </ul>

                          <div className="mt-4">
                              <div className="d-grid">
                                  <button className="btn btn-primary">Buy Now</button>
                              </div>
                              <p className="text-muted mt-3 mb-0">*No credit card required</p>
                          </div>
                      </div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <Schedule title="Want to be among the first to find out?"/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
