import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import Counter from '../components/counter'
import ClientFour from '../components/client/client-four'
import MobileApp from '../components/mobile-app'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import VideoTopStart from '../components/video/video-top-start'
import PartnerOne from '../components/partner/partner-one'
import AccordionOne from '../components/accordion/accordion-one'

import { FiTrendingUp, FiChevronRight} from 'react-icons/fi'
import { LuCircleDollarSign } from 'react-icons/lu'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { keyFeature } from '../data/feature'

export default function MordernApp() {
  return (
    <>
    <span className="modern-app-round top-50 start-50 translate-middle"></span>
    <Navbar app={true}/> 
    <section className="bg-half d-table w-100 overflow-hidden">
      <div className="container position-relative">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                  <div className="title-heading">
                      <span className="badge text-bg-primary rounded-pill mb-2">Modern Apps</span>
                      <h1 className="heading fw-bold mb-3">Increasing the <br/> value of your life<span className="typewrite" data-period="4000" data-type='[ "..." ]'></span></h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="#">
                              <Image src="/images/app/app.png" className="m-1" width={168} height={50} alt=""/>
                          </Link>
                          
                          <Link href="#">
                              <Image src="/images/app/playstore.png" className="m-1" width={168} height={50} alt=""/>
                          </Link>
                          <ul className="list-unstyled h5 text-warning mb-0 mt-2">
                              <li className="list-inline-item mb-0 align-middle"><i className="mdi mdi-star"></i></li>
                              <li className="list-inline-item mb-0 align-middle"><i className="mdi mdi-star"></i></li>
                              <li className="list-inline-item mb-0 align-middle"><i className="mdi mdi-star"></i></li>
                              <li className="list-inline-item mb-0 align-middle"><i className="mdi mdi-star"></i></li>
                              <li className="list-inline-item mb-0 align-middle"><i className="mdi mdi-star-half"></i></li>
                              <li className="list-inline-item mb-0 align-middle text-muted fs-6">150+ ratings</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="modern-app-bg-shape position-relative">
                      <Image src="/images/app/classic01.png" width={
                        
                        0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}} className="img-fluid mover mx-auto d-block" alt=""/>
                      
                      <div className="modern-app-absolute-left">
                          <div className="card">
                              <div className="features feature-primary d-flex justify-content-between align-items-center rounded shadow p-3">
                                  <div className="d-flex align-items-center">
                                      <div className="icon bg-soft-primary text-center rounded-pill">
                                          <LuCircleDollarSign className="fs-4 mb-0"></LuCircleDollarSign>
                                      </div>
                                      <div className="flex-1 ms-3">
                                          <h6 className="mb-0 text-muted">Revenue</h6>
                                          <p className="fs-5 text-dark fw-bold mb-0">$<Counter end={48575}/></p>
                                      </div>
                                  </div>

                                  <span className="text-success ms-4"><FiTrendingUp /> 3.84%</span>
                              </div>
                          </div>
                      </div>

                      <div className="modern-app-absolute-right">
                          <div className="card rounded shadow">
                              <div className="p-3">
                                  <div className="d-flex align-items-center">
                                      <Image src="/images/client/05.jpg" width={65} height={65} className="avatar avatar-small rounded-pill shadow-md" alt=""/>
                                      <div className="flex-1 ms-2">
                                          <h6 className="text-dark mb-0">Cristina Murphy</h6>
                                          <p className="text-muted small mb-0">C.E.O.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="position-absolute top-0 start-50 translate-middle z-index-m-1">
                          <Image src="/images/shapes/dots.svg" width={144} height={130} className="avatar avatar-xl-large" alt=""/>
                      </div>

                      <div className="position-absolute top-0 start-0 translate-middle">
                          <p className="avatar avatar-small bg-primary rounded-md mb-0 spin-anything" style={{opacity:'0.05'}}></p>
                      </div>
                      
                      <div className="position-absolute top-100 start-100 translate-middle">
                          <p className="avatar avatar-small bg-primary rounded-pill mb-0 zoom-in-out" style={{opacity:'0.05'}}></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <div className="container">
      <PartnerOne/>
    </div>

    <section className="section overflow-hidden`">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="modern-app-bg-shape position-relative">
                      <div className="px-4">
                          <Image src="/images/portrait-girl.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mover mx-auto d-block rounded-md shadow" alt=""/>
                      </div>

                      <div className="modern-saas-absolute-right wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                          <div className="card rounded shadow">
                              <div className="p-3">
                                  <h5>Manage Your Software</h5>

                                  <div className="progress-box mt-2">
                                      <h6 className="title fw-normal text-muted">Work in dashboard</h6>
                                      <div className="progress">
                                          <div className="progress-bar position-relative bg-primary" style={{width:'84%'}}>
                                              <div className="progress-value d-block text-muted h6 mt-1">84%</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <VideoTopStart/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="uil uil-check-circle align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="uil uil-check-circle align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 order-md-2 order-3">
                  <div className="modern-app-bg-shape position-relative">
                      <div className="row align-items-center">
                          <div className="col-lg-6 col-6">
                              <div className="row">
                                  <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                      <div className="card overflow-hidden rounded border-0 shadow-md">
                                          <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      </div>
                                  </div>
                                  
                                  <div className="col-lg-12 col-md-12 mt-4">
                                      <div className="card overflow-hidden rounded border-0 shadow-md">
                                          <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                              <div className="card overflow-hidden rounded border-0 shadow-md">
                                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0 order-md-1 order-2">
                  <div className="me-lg-5">
                      <div className="section-title mb-4 pb-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                          <h4 className="title mb-4">Frequently Asked Questions</h4>
                          <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      </div>
                      <AccordionOne/>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">App Features</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-8 mt-4 text-center">
                  <Image src="/images/app/feature.png" width={0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}} className="img-fluid px-lg-0 px-md-5 px-4" alt=""/>
              </div>

              <div className="col-lg-8 col-md-6">
                  <div className="row">
                    {keyFeature.slice(0, 6).map((item, index)=>{
                      let Icon = item.icon
                      return(
                        <div className="col-lg-6 mt-4 pt-2" key={index}>
                            <div className="d-flex features feature-primary">
                                <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                                    <Icon className="fea icon-ex-md"></Icon>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title">{item.title}</h4>
                                    <p className="text-muted para mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                      )
                    })}
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">What Our Users Say</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientFour bg={false}/>
      </div>                        

      <div className="container mt-100 mt-60">
          <MobileApp/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
