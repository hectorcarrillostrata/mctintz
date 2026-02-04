import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiStar} from 'react-icons/fi'

export default function History() {
  return (
    <>
     <Navbar/> 
    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Company Story </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Company</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">History</li>
                  </ul>
              </nav>
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

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <div className="main-icon rounded-pill text-primary text-center mt-4 pt-2">
                      <FiStar className="fea icon-md-sm"/>
                  </div>
                  <div className="timeline-page pt-2 position-relative">
                      <div className="timeline-item mt-4">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">2002</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="card event event-description-right rounded shadow border-0 overflow-hidden float-start">
                                      <Image src="/images/blog/01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="card-body">
                                          <h5 className="mb-0 text-capitalize">Founding</h5>
                                          <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
      
                      <div className="timeline-item mt-4">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                  <div className="card event event-description-left rounded shadow border-0 overflow-hidden float-start">
                                      <Image src="/images/blog/02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="card-body">
                                          <h5 className="mb-0 text-capitalize">Partnership</h5>
                                          <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                  <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-start">2006</div>
                              </div>
                          </div>
                      </div>
  
                      <div className="timeline-item mt-4">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">2012</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="card event event-description-right rounded shadow border-0 overflow-hidden float-start">
                                      <Image src="/images/blog/03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="card-body">
                                          <h5 className="mb-0 text-capitalize">Secuirty</h5>
                                          <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
      
                      <div className="timeline-item mt-4">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                  <div className="card event event-description-left rounded shadow border-0 overflow-hidden float-start">
                                      <Image src="/images/blog/04.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="card-body">
                                          <h5 className="mb-0 text-capitalize">Branch</h5>
                                          <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                  <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-start">2013</div>
                              </div>
                          </div>
                      </div>
  
                      <div className="timeline-item mt-4">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">2016</div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="card event event-description-right rounded shadow border-0 overflow-hidden float-start">
                                      <Image src="/images/blog/05.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="card-body">
                                          <h5 className="mb-0 text-capitalize">Global</h5>
                                          <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
      
                      <div className="timeline-item mt-4">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                  <div className="card event event-description-left rounded shadow border-0 overflow-hidden float-start">
                                      <Image src="/images/blog/06.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="card-body">
                                          <h5 className="mb-0 text-capitalize">Branches</h5>
                                          <p className="mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                  <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-start">2018</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
