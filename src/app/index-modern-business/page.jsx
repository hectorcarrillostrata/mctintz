import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import PartnerOne from '../components/partner/partner-one'
import VideoCenter from '../components/video/video-center'
import KeyFeature from '../components/feature/key-feature'
import Counter from '../components/counter'
import OutlineVideo from '../components/video/outline-video'
import PricingTwo from '../components/pricing/pricing-two'
import ClientSingle from '../components/client/client-single'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { featureOne } from '../data/feature'

import {FiUser, FiMail, FiKey, FiChevronRight} from 'react-icons/fi'
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function MordenBusiness() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/modern01.jpg') ", backgroundPosition:'center'}} id="home">
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row align-items-center mt-md-5">
              <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                  <div className="card shadow rounded border-0 me-lg-3">
                      <div className="card-body">
                          <h5 className="card-title">Register Now</h5>

                          <form className="login-form">
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">First name <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input type="text" className="form-control ps-5" placeholder="First Name" name="s" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Password <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiKey className="fea icon-sm icons"/>
                                              <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="form-check mb-3">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" href="flexCheckDefault">
                                              I Accept <Link href="#" className="text-primary">Terms And Condition</Link>
                                          </label>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="d-grid">
                                          <button className="btn btn-success">Register</button>
                                      </div>
                                  </div>
                                  <div className="col-lg-12 mt-4 text-center">
                                      <h6>Or Signup With</h6>
                                      <div className="row">
                                          <div className="col-lg-6 mt-3">
                                              <div className="d-grid">
                                                  <Link href="#" className="btn btn-light"><FaFacebookSquare className="text-primary"/> Facebook</Link>
                                              </div>
                                          </div>
                                          
                                          <div className="col-lg-6 mt-3">
                                              <div className="d-grid">
                                                  <Link href="#" className="btn btn-light"><FaGoogle className="text-danger"></FaGoogle> Google</Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 order-1 order-md-2">
                  <div className="title-heading mt-4 ms-lg-4">
                      <h1 className="heading title-dark text-white mb-3">Powerful Solution For Your Startup Business </h1>
                      <p className="para-desc para-dark text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1">Get Started <FiChevronRight className=""/></Link>
                          <VideoOne/>
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

    <section className="py-4 border-bottom">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Beautiful & Creative Interfaces</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              {featureOne.slice(0,3).map((item,index)=>{
                let Icon = item.icon
                return(
                  <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
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

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5">
                  <div className="position-relative">
                      <Image src="/images/company/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                      <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">Startup Business Solution</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="btn btn-primary mt-3">Buy Now <FiChevronRight className="uil uil-angle-right-b"></FiChevronRight></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <KeyFeature/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">See everything about your <span className="text-primary">Landrick</span></h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row" id="counter">
              <div className="col-md-3 col-6 mt-4 pt-2">
                  <div className="counter-box text-center">
                      <Image src="/images/illustrator/Asset190.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                      <h2 className="mb-0 mt-4"><Counter end={45000}/>$</h2>
                      <h6 className="counter-head text-muted">Investment</h6>
                  </div>
              </div>

              <div className="col-md-3 col-6 mt-4 pt-2">
                  <div className="counter-box text-center">
                      <Image src="/images/illustrator/Asset189.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                      <h2 className="mb-0 mt-4"><Counter end={9}/>+</h2>
                      <h6 className="counter-head text-muted">Awards</h6>
                  </div>
              </div>

              <div className="col-md-3 col-6 mt-4 pt-2">
                  <div className="counter-box text-center">
                      <Image src="/images/illustrator/Asset186.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                      <h2 className="mb-0 mt-4"><Counter end={12050}/>$</h2>
                      <h6 className="counter-head text-muted">Profitability</h6>
                  </div>
              </div>

              <div className="col-md-3 col-6 mt-4 pt-2">
                  <div className="counter-box text-center">
                      <Image src="/images/illustrator/Asset187.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                      <h2 className="mb-0 mt-4"><Counter end={11}/>%</h2>
                      <h6 className="counter-head text-muted">Growth</h6>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-cta" style={{backgroundImage:"url('/images/2.jpg')", backgroundPosition:'center'}} id="cta">
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title title-dark text-white mb-4">We Are Creative Dreamers and Innovators</h4>
                      <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <OutlineVideo/>
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
                      <h4 className="title mb-4">Charge your creative inspiration</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PricingTwo/>
      </div>
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/illustrator/Startup_SVG.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">A better compose with landrick marketing</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled mb-0 text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Important Clients Review</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-9 mt-4 pt-2 text-center">
                  <ClientSingle/>
              </div>
          </div>
      </div>
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>
    <FooterLight/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
