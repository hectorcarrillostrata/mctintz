import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CorporateNavbar from '../components/navbar/corporate-navbar'
import CorporateHeroSlider from '../components/hero-section/corporate-hero-slider'
import VideoCenter from '../components/video/video-center'
import KeyFeature from '../components/feature/key-feature'
import BlogOne from '../components/blog/blog-one'
import ClientOne from '../components/client/client-one'
import PricingOne from '../components/pricing/pricing-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { corporateFeature } from '../data/feature'
import {FiChevronRight, FiArrowRight} from 'react-icons/fi'

export default function Corporate() {
  return (
    <>
     <CorporateNavbar/> 
     <CorporateHeroSlider/>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <div className="features-absolute">
                      <div className="row">
                        {corporateFeature.map((item,index)=>{
                          let Icon = item.icon
                          return(
                              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                  <div className="card features feature-primary feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                                      <div className="icons rounded text-center mx-auto">
                                          <Icon className="h3 mb-0 mx-auto"/>
                                      </div>
          
                                      <div className="card-body p-0 content">
                                          <h5 className="mt-4"><Link href="#" className="title text-dark">{item.title}</Link></h5>
                                          <p className="text-muted">{item.desc}</p>
          
                                          <Link href="#" className="read-more">Read More <FiChevronRight className="align-middle"/></Link>
                                      </div>
                                  </div>
                              </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative">
                      <Image src="/images/company/about2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto" alt=""/>
                     <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">We are the largest <br/> Business expert </h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                      <Link href="#" className="btn btn-primary mt-3">Buy Now <i className="mdi mdi-chevron-right align-middle"></i></Link>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Key Features</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <KeyFeature/>
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
    <CookiesModal/>
    </>
  )
}
