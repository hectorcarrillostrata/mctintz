import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import {FiMail, FiChevronRight, FiAirplay, FiLayers ,FiAperture,FiSmartphone, FiMessageCircle, FiCpu } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { LuPenTool } from 'react-icons/lu'
import { AiOutlineAppstore } from 'react-icons/ai'
import { PiCubeBold } from 'react-icons/pi'
import { FaApple } from 'react-icons/fa'
import { TbBrandGooglePlay } from 'react-icons/tb'

import Counter from '../components/counter'
import VideoOne from '../components/video/video-one'
import PartnerTwo from '../components/partner/partner-two'
import ClientOne from '../components/client/client-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import SocialMarketingTooltips from '../components/tooltips/social-marketing-tooltips'
export default function SocialMarketing() {
  return (
    <>
     <Navbar/> 

    <section className="bg-home d-flex align-items-center bg-light" style={{height:"auto"}}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading margin-top-100">
                      <h1 className="heading mb-4">One Solution for your <span className="text-primary">Social Media Marketing</span></h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <ul className="mt-4 list-unstyled mb-0 align-items-center">
                          <li className="list-inline-item"><Link href="/page-contact-one" className="btn btn-primary me-2 d-inline-flex align-items-center"><FiMail className="me-1"></FiMail> Request a Demo</Link></li>
                          <li className="list-inline-item text-muted me-2 h6">Or</li>
                          <li className="list-inline-item"><Link href="#" className="text-primary fw-bold"> Try it for Free <FiChevronRight className="align-middle"></FiChevronRight></Link></li>
                      </ul>
                  </div>

                  <div className="home-dashboard">
                      <Image src="/images/social/hero.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="" className="img-fluid mover"/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-color-white">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section overflow-hidden">
      <div className="container mt-md-5">
          <div className="row justify-content-center" id="counter">
              <div className="col-lg-8 col-md-10">
                  <div className="mb-4 pb-2 text-center">
                      <h5 className="mb-0 fw-normal text-muted">Join <span className="text-success fw-bold"><Counter end={555}/>+</span> user using <span className="fw-bold text-primary">Landrick.</span> to drive customer engagement, inspire brand loyalty, and grow their business</h5>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 pb-md-4">
                  <SocialMarketingTooltips/>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12">
                  <div className="social-feature-left">
                      <Image src="/images/social/1.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <p className="text-primary h2 mb-3"><FiAirplay className="#"/></p>
                      <h4 className="title mb-3">Manage Your All <br/> <span className="text-primary">Social Media</span> Account</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <div className="mt-4">
                          <Link href="" className="btn btn-primary">Get Start Now <FiChevronRight className="#"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12 order-1 order-md-2">
                  <Image src="/images/illustrator/social.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 col-12 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title me-lg-4">
                      <p className="text-primary h2 mb-3"><FiLayers className=""/></p>
                      <h4 className="title mb-3">Rapidly Grow Your <br/> <span className="text-primary">Social Feeds</span></h4>
                      <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented &amp; Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <PartnerTwo/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col--6 col-12">
                  <div className="row me-lg-4" id="counter">
                      <div className="col-md-6 col-12">
                          <div className="row">
                              <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card features feature-primary explore-feature border-0 rounded text-center shadow">
                                      <div className="card-body">
                                          <div className="icons rounded-circle shadow-lg d-inline-block">
                                              <LuPenTool className="fea h4"/>
                                          </div>
                                          <h5 className="mt-3 title">Perfect Design</h5>
                                          <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="card features feature-primary explore-feature border-0 rounded text-center shadow">
                                      <div className="card-body">
                                          <div className="icons rounded-circle shadow-lg d-inline-block">
                                              <FiAperture className="fea h4"/>
                                          </div>
                                          <h5 className="mt-3 title">Manage Social Media</h5>
                                          <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 col-12">
                          <div className="row pt-lg-4 mt-lg-4">
                              <div className="col-12 mt-4 pt-2">
                                  <div className="card features feature-primary explore-feature border-0 rounded text-center shadow">
                                      <div className="card-body">
                                          <div className="icons rounded-circle shadow-lg d-inline-block">
                                              <FiSmartphone className="fea h4"/>
                                          </div>
                                          <h5 className="mt-3 title">No Interface</h5>
                                          <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-12 mt-4 pt-2">
                                  <div className="card features feature-primary explore-feature border-0 rounded text-center shadow">
                                      <div className="card-body">
                                          <div className="icons rounded-circle shadow-lg d-inline-block">
                                              <FiMessageCircle className="fea h4"/>
                                          </div>
                                          <h5 className="mt-3 title">Free Installation</h5>
                                          <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col--6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                  <div className="section-title ms-lg-4">
                      <p className="text-primary h2 mb-3"><AiOutlineAppstore/></p>
                      <h4 className="title mb-3">Our Great Features</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <div className="mt-4">
                          <Link href="" className="btn btn-primary">See More <FiChevronRight className=""/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12 order-1 order-md-2">
                  <div className="social-feature-right">
                      <Image src="/images/social/social.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 col-12 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title me-lg-4">
                      <p className="text-primary h2 mb-3"><PiCubeBold className=""/></p>
                      <h4 className="title mb-3">We Integrated your <br/> Favorite <span className="text-primary">Social Media</span></h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <div className="d-inline-block">
                          <div className="pt-3 d-flex align-items-center border-top">
                              <FiCpu className="fea icon-md me-2 text-primary"></FiCpu>
                              <div className="content">
                                  <h6 className="mb-0">Became a smarter</h6>
                                  <Link href="" className="text-primary">Find more solutions <FiChevronRight className="align-middle"/></Link> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row pt-md-5 justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">User's Stories</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
              <div className="row align-items-end">
                  <div className="col-md-8">
                      <div className="section-title text-md-start text-center">
                          <h4 className="title mb-3 text-white title-dark">Start your free 2 week trial today</h4>
                          <p className="text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      </div>
                  </div>
                  
                  <div className="col-md-4 mt-4 mt-sm-0">
                      <div className="text-md-end text-center">
                          <Link href="" className="btn btn-light">Get Started</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12">
                  <Image src="/images/social/download.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
              </div>

              <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <div className="alert alert-light alert-pills text-dark" role="alert">
                          <span className="badge text-bg-primary rounded-pill me-1">Apps</span>
                          <span className="content">Download now <FiChevronRight className="align-middle"/></span>
                      </div>
                      <h4 className="title mb-4">Available for your <br/> Smartphones</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="my-4">
                          <Link href="" className="btn btn-lg btn-dark mt-2 me-2 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                          <Link href="" className="btn btn-lg btn-dark mt-2 d-inline-flex align-items-center"><TbBrandGooglePlay className="me-1"/>Play Store</Link>
                      </div>

                      <div className="d-inline-block">
                          <div className="pt-4 d-flex align-items-center border-top">
                              <FiSmartphone className="fea icon-md me-2 text-primary"/>
                              <div className="content">
                                  <h6 className="mb-0">Install app now on your cellphones</h6>
                                  <Link href="" className="text-primary">Learn More <FiChevronRight className="align-middle"/></Link> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
