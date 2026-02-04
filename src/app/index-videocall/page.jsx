import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import Counter from '../components/counter'
import PartnerOne from '../components/partner/partner-one'
import { videoCallFeature,  } from '../data/feature'

import {FiArrowRight, FiPhone, FiMessageCircle, FiChevronRight} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { FaApple } from 'react-icons/fa'
import { RiGooglePlayLine } from 'react-icons/ri'

import Image from 'next/image'
import { videoAbout } from '../data/data'
import ClientOne from '../components/client/client-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function VideoCall() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 d-table w-100">
      <div className="container">
          <div className="row mt-5 align-items-center position-relative" style={{zIndex:'1'}}>
              <div className="col-lg-6">
                  <div className="title-heading text-center text-lg-start">
                      <span className="badge rounded-lg bg-soft-primary">Videocall</span>
                      <h4 className="heading fw-bold mb-3 mt-3">Team Chat, <br/> Virtual Meetings, <br/> File sharing and more...</h4>
                      <p className="para-desc text-muted mx-auto mx-lg-start mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-3">
                          <Link href="#" className="btn btn-primary me-2 mt-2">Try For Free</Link>
                          <Link href="#" className="btn btn-soft-primary mt-2">Get a live video</Link>
                          <p className="mt-3 mb-0 text-muted">*No credit card required</p>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                  <div className="card border-0 shadow rounded ms-lg-4 overflow-hidden">
                      <div className="d-flex p-2 bg-light justify-content-between align-items-center">
                          <div>
                              <Link href="#" className="text-danger"><i className="mdi mdi-circle"></i></Link>
                              <Link href="#" className="text-warning"><i className="mdi mdi-circle"></i></Link>
                              <Link href="#" className="text-success"><i className="mdi mdi-circle"></i></Link>
                          </div>

                          <small className="fw-bold"><i className="mdi mdi-circle-medium text-success"></i> Landrick</small>
                      </div>
                      <div className="bg-light px-2 position-relative">
                          <video className="w-100 rounded" controls autoPlay loop>
                              <source src="/images/video/call.mp4" type="video/mp4"/>
                          </video>

                          <div className="position-absolute top-0 start-0">
                              <div className="mt-2 ms-3">
                                  <span className="badge text-bg-danger">LIVE</span>
                                  <small className="mb-0 text-white title-dark">4 Attendance</small>
                              </div>
                          </div>
                      </div>

                      <div className="p-2 bg-light">
                          <p className="text-muted mb-0"><b>Note:</b> This video is only for demo purposes.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="py-5 border-top">
      <div className="container">
          <div className="row justify-content-center" id="counter">
              <div className="col-12 text-center">
                  <h4>Trusted client by over <span className="text-primary fw-bold"><Counter end={1100}/>+</span> of the world’s</h4>
                  <p className="text-muted mb-0 mx-auto">Trust <span className="text-primary fw-bold">Landrick</span> to host webinars and online meetings</p>
              </div>
          </div>

          <PartnerOne/>

          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="text-center">
                      <ul className="list-unstyled mb-0 h6">
                          <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                          <li className="list-inline-item">5 Star <span className="text-muted">(380 Review received)</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Video communication for any context</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-xl-10">
                  <div className="row">
                    {videoCallFeature.map((item,index)=>{
                      let Icon = item.icon;
                      return(
                        <div className="col-md-6 mt-4 pt-2" key={index}>
                            <div className="d-flex features feature-primary feature-clean p-4 shadow rounded">
                                <div className="icons rounded text-primary text-center rounded d-block">
                                    <Icon className="h3 mb-0"></Icon>
                                </div>
                                <div className="flex-1 content ms-4">
                                    <h5 className="mb-1"><Link href="#" className="text-dark">{item.title}</Link></h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                      )
                    })}
  
                      <div className="col-12 mt-4 pt-2 text-center">
                          <Link href="#" className="text-primary h6">Explore features <FiArrowRight className="fea icon-sm"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="card rounded border-0 overflow-hidden">
                      <div className="row g-0">
                          <div className="col-md-6">
                              <div className="position-relative">
                                  <Link href="#"><Image src="/images/video/01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>

                                  <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                      <div className="mb-3">
                                          <Link href="#" className="btn btn-pills btn-icon btn-danger"><FiPhone className=""/></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-6">
                              <div className="row g-0">
                                {videoAbout.map((item,index)=>{
                                  return(
                                    <div className="col-md-6 col-4" key={index}>
                                        <div className="position-relative">
                                            <Link href="#"><Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
        
                                            <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                <div className="mb-3">
                                                    <Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon btn-primary"><FiMessageCircle className=""/></Link>
                                                </div>
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

              <div className="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Get the group together</h4>
                      <p className="text-muted">Keep the fun times rolling with your weekly game nights over group calling. Available for 50 friends at a time and works on Android phones, iPhones, iPads and tablets. You can also join a group call with just a link.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Let's Chat Now <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-4">Some of our happy customers</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>
            <ClientOne/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="section-title me-lg-5">
                        <h4 className="title mb-4">Keep calls private with end-to-end encryption</h4>
                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                        <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2">
                    <Image src="/images/video/cta.png" width={0} height={0} sizes='100vw' style={{width:'100%',height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h4 className="title mb-4">Get started with <span className="text-primary fw-bold">Landrick</span> for free</h4>
                        <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        
                        <div className="mt-4">
                            <Link href="#" className="btn btn-primary m-1 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                            <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><RiGooglePlayLine className="me-1"/>Play Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
