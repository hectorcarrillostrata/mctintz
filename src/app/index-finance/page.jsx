import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import FinanceHero from '../components/hero-section/finance-hero'
import FinanceCta from '../components/cta/finance-cta'
import ClientOne from '../components/client/client-one'
import BlogOne from '../components/blog/blog-one'
import PartnerOne from '../components/partner/partner-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { financeFeature } from '../data/feature'

import { FiChevronRight, FiPieChart } from 'react-icons/fi'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { BsBullseye } from 'react-icons/bs'

export default function Finance() {
  return (
    <>
    <Navbar bgWhite={true}/> 

    <FinanceHero/>

    <section className="bg-light">
      <div className="container-fluid px-0">
          <div className="row g-0 align-items-center">
            {financeFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-xl-2 col-lg-4 col-md-4" key={index}>
                    <div className="card features feature-primary feature-full-bg text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
                        <span className="h2 icon-color">
                            <Icon className="uil uil-crosshair"></Icon>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">It is a long established fact that a reader will be will be of at its layout.</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                              <div className="card-body p-0">
                                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="/"/>
                                  <div className="overlay-work"></div>
                                  <div className="content">
                                      <Link href="#" className="title text-white d-block fw-bold">Web Development</Link>
                                      <small className="text-white-50">IT & Software</small>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-6 col-6">
                          <div className="row">
                              <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Michanical Engineer</Link>
                                              <small className="text-white-50">Engineering</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Chartered Accountant</Link>
                                              <small className="text-white-50">C.A.</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="ms-lg-4">
                      <div className="section-title">
                          <span className="badge bg-soft-primary rounded-pill fw-bold">About us</span>
                          <h4 className="title mb-4 mt-3">We design and develop <br/> world-class web applications.</h4>
                          <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                      </div>

                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Read More <FiChevronRight className="align-middle"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <FiPieChart className="text-primary h2"/>
                      <h4 className="title mt-3 mb-4">Join The Next Revolution. <br/> Create your Website Now!</h4>
                      <p className="text-muted mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-6 mt-2">
                  <div className="px-md-4 pt-4 text-center">
                      <h4 className="mb-3">Individual Services</h4>
                      <p className="text-muted mb-0">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order.</p>

                      <div className="position-relative mt-5">
                          <div className="bg-overlay bg-primary bg-gredient rounded-md" style={{opacity:'0.6'}}></div>
                          <Image src="/images/finance/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-md shadow img-fluid" alt=""/>
                      </div>

                      <div className="px-md-4 pt-4 text-start">
                          <div className="d-flex">
                              <BsBullseye className="h5 text-primary"/>
                              <div className="flex-1 ms-2">
                                  <h5>Engaging Group Discussion​</h5>
                                  <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                              </div>
                          </div>
  
                          <div className="d-flex mt-4">
                              <MdOutlineDashboardCustomize className="h5 text-primary"/>
                              <div className="flex-1 ms-2">
                                  <h5>Software Engineering​</h5>
                                  <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 mt-2">
                  <div className="px-md-4 pt-4 text-center">
                      <h4 className="mb-3">Organization Services</h4>
                      <p className="text-muted mb-0">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order.</p>

                      <div className="position-relative mt-5">
                          <div className="bg-overlay bg-primary bg-gredient rounded-md" style={{opacity:'0.6'}}></div>
                          <Image src="/images/finance/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-md shadow img-fluid" alt=""/>
                      </div>

                      <div className="px-md-4 pt-4 text-start">
                          <div className="d-flex">
                              <BsBullseye className="h5 text-primary"/>
                              <div className="flex-1 ms-2">
                                  <h5>Engaging Group Discussion​</h5>
                                  <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                              </div>
                          </div>

                          <div className="d-flex mt-4">
                              <MdOutlineDashboardCustomize className="h5 text-primary"/>
                              <div className="flex-1 ms-2">
                                  <h5>Software Engineering​</h5>
                                  <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <FinanceCta/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Partners Testimonial</h4>
                      <p className="text-muted mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Latest News</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <BlogOne/>
      </div>
    </section>

    <section className="py-4 bg-light">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>
    
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
