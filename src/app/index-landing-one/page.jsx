import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import KeyFeature from '../components/feature/key-feature'
import Counter from '../components/counter'
import VideoCenter from '../components/video/video-center'
import ClientSingleThree from '../components/client/client-single-three'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { like } from '../data/counter-data'
import { partnerData } from '../data/partner'
import {FiArrowRight, FiFile, FiCreditCard} from 'react-icons/fi'
import { TbCapture } from 'react-icons/tb'

export default function LandingOne() {
  return (
    <>
    <Navbar navlight={true}/> 

    <section className="bg-half-260 pb-lg-0 pb-md-4 bg-primary d-table w-100">
      <div className="bg-overlay bg-black opacity-8"></div>
      <div className="container">
          <div className="row position-relative" style={{zIndex:'1'}}>
              <div className="col-md-7 col-12 mt-lg-5">
                  <div className="title-heading">
                      <h1 className="heading text-white title-dark mb-4">Bluid your audiance <br/> and sale more</h1>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1">Get Started</Link>
                          <VideoOne/><span className="fw-bold text-uppercase text-white-50 small align-middle ms-2">Watch Now</span>
                      </div>
                  </div>
              </div>

              <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="shape-before">
                      <div className="carousel-cell"><Image src="/images/landing/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md" alt=""/></div>
                      <Image src="/images/shapes/shape1.png" width={278} height={278} className="img-fluid shape-img" alt=""/>
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

    <section className="section">
      <div className="container">
          <div className="row justify-ontent-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Solutions made for you</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <KeyFeature/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <h4 className="title mb-4">Trusted client by over <br/> <span className="text-primary">10000+</span> of the world’s</h4>
                      <p className="text-muted mb-0 mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="row" id="counter">
                      <div className="col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="content text-center">
                              <h1 className="mb-0"><Counter end={10000}/>+</h1>
                              <ul className="list-unstyled mb-0 h5">
                                {like.map((item,index)=>{
                                  let Icon = item
                                  return(
                                    <li className="list-inline-item mb-2" key={index} style={{margin:'0 2px'}}><Icon className="text-danger"/></li>
                                  )
                                })}
                              </ul>
                              <h6>Trusted Users</h6>
                          </div>
                      </div>

                      <div className="col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="content text-center">
                              <h1 className="mb-0"><Counter end={1402}/>+</h1>
                              <ul className="list-unstyled mb-0 h5">
                                  <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                              </ul>
                              <h6>Users Review</h6>
                          </div>
                      </div>
                  </div>

                  <div className="row justify-ontent-center mt-4">
                    {partnerData.slice(0,4).map((item,index)=>{
                      return(
                        <div className="col-lg-3 col-md-3 col-6 text-center py-4" key={index}>
                            <Image src={item} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                        </div>
                      )
                    })}
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="video-solution-cta position-relative" style={{zIndex:'1'}}>
                      <div className="position-relative">
                          <Image src="/images/laptop.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                          <VideoCenter/>
                      </div>
                      <div className="content mt-md-4 pt-md-2">
                          <div className="row justify-content-center">
                              <div className="col-lg-10 text-center">
                                  <div className="row align-items-center">
                                      <div className="col-md-6 mt-4 pt-2">
                                          <div className="section-title text-md-start">
                                              <h6 className="text-white-50">Customers needs</h6>
                                              <h4 className="title text-white mb-0 title-dark">Control Everything <br/> in a single place</h4>
                                          </div>
                                      </div>

                                      <div className="col-md-6 col-12 mt-4 pt-md-2">
                                          <div className="section-title text-md-start">
                                              <p className="text-white-50 para-desc">Start working with <span className="text-white">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                              <Link href="#" className="text-white">Read More <FiArrowRight className="fea icon-sm"/></Link>
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
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-md-start text-center">
                      <h4 className="title mb-4">Collaborate with your <br/> team anytime and anywhare.</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <div className="d-flex align-items-center text-start mt-4 pt-2">
                          <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                              <TbCapture className=""/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Find Better Leads</Link>
                          </div>
                      </div>

                      <div className="d-flex align-items-center text-start mt-4">
                          <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                              <FiFile className=""/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Set Instant Metting</Link>
                          </div>
                      </div>

                      <div className="d-flex align-items-center text-start mt-4">
                          <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                              <FiCreditCard className="uil uil-credit-card-search"/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Get Paid Seemlessly</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <div className="text-end">
                      <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-md-start text-center">
                      <h4 className="title mb-4">Whats our clients said <br/> about landrick project</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <div className="row justify-content-center">
                          <div className="col-lg-12 mt-4">
                              <ClientSingleThree/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title mb-4">See everything about your employee at one place.</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary mt-2 me-2">Get Started Now</Link>
                          <Link href="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
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
