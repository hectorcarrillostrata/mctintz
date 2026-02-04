import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../components/navbar/navbar'


import Counter from '../components/counter';

import {FiArrowRight, FiTrendingUp, FiChevronRight, FiShield, FiCpu} from 'react-icons/fi'
import { LuCircleDollarSign } from 'react-icons/lu';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';

import PartnerOne from '../components/partner/partner-one';
import VideoModal from '../components/video-modal';
import ClientThree from '../components/client/client-three';
import ClientOne from '../components/client/client-one';
import AccordionOne from '../components/accordion/accordion-one';
import GetApp from '../components/get-in-touch/get-app';
import Footer from '../components/footer/footer';
import ScrollToTop from '../components/scroll-to-top';
import CookiesModal from '../components/cookiesModal';

export default function MordenSass() {
    return (
    <>
    <Navbar/>

    <section className="bg-home pb-5 pb-sm-0 d-flex align-items-center bg-linear-gradient-primary">
      <div className="container">
          <div className="row mt-5 align-items-center">
              <div className="col-md-6">
                  <div className="title-heading me-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="5s">
                      <h1 className="heading fw-bold mb-3">Easy way to <span className="text-primary">manage</span> <br/> your over <span className="text-primary">work</span></h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="subcribe-form mt-4 py-2">
                          <form className="m-0">
                              <input type="email" id="email" name="email" className="rounded-pill bg-white-50 border" placeholder="support@shreethemes.in"/>
                              <button type="submit" className="btn btn-pills btn-primary">Submit <FiArrowRight /></button>
                          </form>
                      </div>
                      <p className="text-muted mb-0">Looking for help? <Link href="" className="text-primary">Get in touch with us</Link></p>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative ms-lg-5">
                    <div className="bg-half-260 overflow-hidden rounded-md shadow-md jarallax" data-jarallax data-speed="0.5" style={{backgroundImage:"url('/images/saas/modern-hero.jpg')"}}>
                        
                        <div className="py-lg-5 py-md-0 py-5"></div>
                    </div>

                    <div className="modern-saas-absolute-left wow animate__animated animate__fadeInUp" data-wow-delay="10s">
                        <div className="card">
                            <div className="features feature-primary d-flex justify-content-between align-items-center rounded shadow p-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon bg-soft-primary text-center rounded-pill">
                                        <LuCircleDollarSign className="fs-4 mb-0"/>
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

                    <div className="modern-saas-absolute-right wow animate__animated animate__fadeInUp" data-wow-delay="15s">
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

                    <div className="position-absolute top-0 start-0 translate-middle z-index-m-1">
                        <Image src="/images/shapes/dots.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="avatar avatar-xl-large" alt=""/>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <section className="pt-4">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section overflow-hidden">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                      <Image src="/images/logo-icon.png" height={65} width={65} className="avatar avatar-small" alt=""/>
                      <h4 className="title fw-semibold my-4">The best customer relationship <br/> <strong className="text-primary">management</strong> platform</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-12 mt-4 pt-2">
                  <div className="position-relative wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                      <video className="w-100 rounded" controls autoPlay loop>
                          <source src="/images/video.mp4" type="video/mp4"/>
                      </video>
                      <VideoModal/>
                  </div>
              </div>
          </div>
      </div>

      <div className="container pb-5 mb-md-5 mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                      <h4 className="title mb-4">Why Everyone Loves <span className="fw-bold text-primary">Landrick.</span></h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row align-items-center">
              <div className="col-lg-7 mt-4 pt-2">
                  <div className="saas-feature-shape-left position-relative me-lg-5 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                      <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded shadow" alt=""/>
                  </div>
              </div>

              <div className="col-lg-5 mt-4 pt-2">
                  <div className="section-title wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                      <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
                  <div className="section-title wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                      <h1 className="title mb-3">Why Choose us ?</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  
                      <div className="row">
                          <div className="col-12">
                              <div className="d-flex align-items-center pt-4">
                                  <h2><FiShield className="fea icon-m-md text-primary"/></h2>
                                  <div className="ms-3">
                                      <h5>Fully Secured</h5>
                                      <p className="text-muted mb-0">Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-12">
                              <div className="d-flex align-items-center pt-4">
                                  <h2><FiCpu className="fea icon-m-md text-primary"></FiCpu></h2>
                                  <div className="ms-3">
                                      <h5>Best Performance</h5>
                                      <p className="text-muted mb-0">If the fill text is intended to illustrate the characteristics of sometimes.</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-12 pt-4">
                              <Link href="#" className="btn btn-outline-primary">Install Now <FiChevronRight/></Link>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-7 order-1 order-lg-2 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                  <div className="saas-feature-shape-right position-relative ms-lg-5">
                      <Image src="/images/saas/classic03.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded shadow" alt=""/>
                  </div>
              </div>
          </div>
      </div>

      <div className="container pt-4 mt-100 mt-60">
          <ClientThree/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                      <h4 className="title mb-4">Some of our happy customers</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                      <h4 className="title mb-4">Frequently Asked Questions</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          
          <div className="row align-items-center">
              <div className="col-md-6 mt-4 pt-2">
                  <div className="bg-half-260 overflow-hidden rounded-md shadow-md jarallax" data-jarallax data-speed="0.5" style={{backgroundImage:"url('/images/saas/cta.jpg')"}}>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2">
                  <AccordionOne/>
              </div>
          </div>
          <GetApp/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
