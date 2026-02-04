import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import VideoOne from '../components/video/video-one'
import KeyFeature from '../components/feature/key-feature'
import VideoCenter from '../components/video/video-center'
import PricingTwo from '../components/pricing/pricing-two'
import BlogOne from '../components/blog/blog-one'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiUser, FiMail, FiKey, FiArrowRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { featureFour } from '../data/feature'

export default function LandingFour() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/real/build.png')", backgroundPosition:"bottom", backgroundRepeat:'no-repeat'}}>
      <div className="container">
          <div className="row align-items-center mt-5">
              <div className="col-xl-8 col-lg-7 col-md-6">
                  <div className="title-heading">
                      <span className="badge rounded-pill bg-soft-success">Landing Four</span>
                      <h4 className="heading my-3">Experience, <br/>Expertise, Consulting</h4>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1">Explore Now</Link>
                      </div>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card shadow rounded border-0 ms-lg-4">
                      <div className="card-body">
                          <h5 className="card-title text-center">Get 30 days FREE Trial</h5>

                          <form className="login-form mt-4">
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
                                              <FiKey className="fea icon-sm icons"></FiKey>
                                              <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                                  I Accept <Link href="#" className="text-primary">Terms And Condition</Link>
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="d-grid">
                                          <button className="btn btn-primary">Register</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="py-4 border-bottom border-top">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <span className="badge rounded-pill bg-soft-primary">Features</span>
                      <h4 className="title mt-3 mb-4">What we do ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureFour.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean rounded p-4">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h3 mb-0"></Icon>
                        </div>

                        <div className="card-body p-0 mt-4">
                            <h5>{item.title}</h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                            <div className="mt-2">
                                <Link href="#" className="read-more">Read More <FiArrowRight className="fea icon-sm"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/company/about2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="ms-lg-5">
                      <div className="section-title mb-3">
                          <span className="badge rounded-pill bg-soft-primary">Meet the future</span>
                          <h4 className="title my-3">Introducing a new way</h4>
                          <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          <p className="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                      </div>

                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Fully Responsive</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Multiple Layouts</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Suits Your Style</li>
                      </ul>

                      <div className="mt-3">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Read More <i className="uil uil-angle-right-b align-middle"></i></Link>
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
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
        <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Comfortable Rates</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PricingTwo/>
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
    <NewsletterFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
