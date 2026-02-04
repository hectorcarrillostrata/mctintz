import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import FreelancerTab from '../components/tab/freelancer-tab'
import ClientOne from '../components/client/client-one'
import MobileApp from '../components/get-in-touch/mobile-app'
import FooterLight from '../components/footer/footer-light'
import CookiesModal from '../components/cookiesModal'
import ScrollToTop from '../components/scroll-to-top'

import { FiAirplay, FiMail, FiChevronRight} from 'react-icons/fi'
import { MdOutlineRocketLaunch,MdOutlineCheckCircleOutline } from 'react-icons/md'
import { LuBellRing } from 'react-icons/lu'

export default function Freelancer() {
  return (
    <>
    <Navbar/>
    <section className="bg-half-170 pb-0 bg-light d-table w-100 overflow-hidden" style={{backgroundImage:"url('/images/shapes/shape2.png')", backgroundPosition:'top', zIndex:'0'}}>
      <div className="container">
          <div className="row align-items-center mt-5 mt-sm-0">
              <div className="col-md-6">
                  <div className="title-heading text-center text-md-start">
                      <span className="badge rounded-pill bg-soft-primary">Freelancing</span>
                      <h4 className="heading mb-3 mt-2">Grow your freelance <span className="fw-bold">Business</span></h4>
                      <p className="text-muted mb-0 para-dark para-desc mx-auto ms-md-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Sign up & Start growing</Link>
                          <p className="text-muted mt-1 mb-0">*No Credit Card Required</p>
                      </div>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="freelance-hero position-relative">
                      <div className="bg-shape position-relative">
                          <Image src="/images/freelancer/freelancer.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="mx-auto d-block img-fluid" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section> 

    <section className="py-4 border-bottom">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-12 order-1 order-lg-2">
                  <div className="section-title text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0">
                      <span className="badge rounded-pill bg-soft-primary">Services</span>
                      <h4 className="title mt-3 mb-4">Make more, Manage less</h4>
                      <p className="text-muted para-desc mx-auto ms-lg-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="mt-4 d-lg-block d-none">
                          <Link href="#" className="btn btn-primary">See more</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-12 order-2 order-lg-1">
                  <div className="row me-lg-5">
                      <div className="col-md-6 col-12">
                          <div className="row">
                              <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                                      <div className="icons text-center mx-auto shadow rounded-pill">
                                          <MdOutlineRocketLaunch className="d-block h3 mb-0"/>
                                      </div>
                                      <div className="card-body p-0 mt-4">                                            
                                          <Link href="#" className="title h5 text-dark">Targeted <br/> High-quality Leads</Link>
                                          <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                          <MdOutlineRocketLaunch className="full-img"/>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="card border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                                      <div className="icons text-center mx-auto rounded-pill">
                                          <FiAirplay className="d-block h3 mb-0"/>
                                      </div>
                                      <div className="card-body p-0 mt-4">                                            
                                          <Link href="#" className="title h5 text-dark">Send, Schedule, and Snooze Emails</Link>
                                          <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                          <FiAirplay className="full-img"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 col-12">
                          <div className="row pt-lg-4 mt-lg-4">
                              <div className="col-12 mt-4 pt-2">
                                  <div className="card border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                                      <div className="icons text-center mx-auto rounded-pill">
                                          <FiMail className="d-block h3 mb-0"/>
                                      </div>
                                      <div className="card-body p-0 mt-4">                                            
                                          <Link href="#" className="title h5 text-dark">Library of the Best Email Templates</Link>
                                          <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                          <FiMail className="full-img"/>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-12 mt-4 pt-2">
                                  <div className="card border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                                      <div className="icons text-center mx-auto rounded-pill">
                                          <LuBellRing className="d-block h3 mb-0"/>
                                      </div>
                                      <div className="card-body p-0 mt-4">                                            
                                          <Link href="#" className="title h5 text-dark">Automated Follow-up Reminders</Link>
                                          <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                          <LuBellRing className="full-img"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="mt-4 d-lg-none d-block text-center">
                      <Link href="#" className="btn btn-primary">See more</Link>
                  </div>
              </div>
          </div>
      </div>

      <FreelancerTab/>
    </section>

    <section className="section bg-light" style={{backgroundImage:"url('/images/shapes/shape2.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Yea, it actually works.</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <ClientOne/>
      </div>
    </section>

    <section className="section overflow-hidden">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                  <Image src="/images/freelancer/cta.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Turn new leads and past clients into more paid work</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <MobileApp/>
      </div>
    </section>
    <FooterLight/>
    <CookiesModal/>
    <ScrollToTop/>

    </>
  )
}
