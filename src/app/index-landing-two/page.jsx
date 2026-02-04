import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import BlogOne from '../components/blog/blog-one'
import Rate from '../components/rate'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { featureThree } from '../data/feature'
import {FiChevronRight, FiFile, FiCreditCard} from 'react-icons/fi'
import { TbCapture } from 'react-icons/tb'

export default function LandingTwo() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 d-table w-100">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <div className="title-heading mt-4">
                      <h1 className="display-4 fw-bold mb-3">Powerfull landing <br/> for your website</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>

                  <div className="subcribe-form mt-4 pt-2">
                      <form>
                          <input type="email" id="email" name="email" className="border shadow rounded-pill" required placeholder="Email Address"/>
                          <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                      </form>
                  </div>
                  
                  <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <Link
                       href="#" className="text-primary">Terms And Condition</Link></label>
                  </div>
              </div>

              <div className="col-md-6">
                  <Image src="/images/illustrator/Creativity-bro.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
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

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h6 className="text-primary">Features</h6>
                      <h4 className="title mb-4">Explore awesome features</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureThree.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h3 mb-0 mx-auto"></Icon>
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

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/landing/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-md-start text-center ms-lg-4">
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
                              <FiCreditCard className=""/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Get Paid Seemlessly</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                  <div className="sticky-bar">
                      <div className="section-title text-lg-start text-center mb-4 mb-lg-0 pb-2 pb-lg-0">
                          <h6 className="text-primary">Reviews</h6>
                          <h4 className="title mb-4">People love us</h4>
                          <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8 col-12">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="d-flex client-testi">
                                      <Image src="/images/client/01.jpg" width={65} height={65} className="avatar avatar-small client-image rounded shadow" alt=""/>
                                      <div className="card flex-1 content p-3 shadow rounded position-relative">
                                          <Rate/>
                                          <p className="text-muted mt-2">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
                                          <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="d-flex client-testi">
                                      <Image src="/images/client/02.jpg" width={65} height={65} className="avatar avatar-small client-image rounded shadow" alt=""/>
                                      <div className="card flex-1 content p-3 shadow rounded position-relative">
                                          <Rate/>
                                          <p className="text-muted mt-2">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                          <h6 className="text-primary">- Barbara McIntosh <small className="text-muted">M.D</small></h6>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="d-flex client-testi">
                                      <Image src="/images/client/03.jpg" width={65} height={65} className="avatar avatar-small client-image rounded shadow" alt=""/>
                                      <div className="card flex-1 content p-3 shadow rounded position-relative">
                                          <Rate/>
                                          <p className="text-muted mt-2">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                          <h6 className="text-primary">- Carl Oliver <small className="text-muted">P.A</small></h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                  <div className="d-flex client-testi">
                                      <Image src="/images/client/04.jpg" width={65} height={65} className="avatar avatar-small client-image rounded shadow" alt=""/>
                                      <div className="card flex-1 content p-3 shadow rounded position-relative">
                                          <Rate/>
                                          <p className="text-muted mt-2">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
                                          <h6 className="text-primary">- Christa Smith <small className="text-muted">Manager</small></h6>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="d-flex client-testi">
                                      <Image src="/images/client/05.jpg" width={65} height={65} className="avatar avatar-small client-image rounded shadow" alt=""/>
                                      <div className="card flex-1 content p-3 shadow rounded position-relative">
                                          <Rate/>
                                          <p className="text-muted mt-2">" There is now an abundance of readable dummy texts. These are usually used when a text is required. "</p>
                                          <h6 className="text-primary">- Dean Tolle <small className="text-muted">Developer</small></h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
