import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import PartnerOne from '../components/partner/partner-one'
import AccordionOne from '../components/accordion/accordion-one'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import Footer from '../components/footer/footer'
import CookiesModal from '../components/cookiesModal'
import ScrollToTop from '../components/scroll-to-top'

import {FiMail, FiArrowRight, FiChevronRight, FiFile, FiCreditCard} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { TbCapture } from 'react-icons/tb'
import { landingThreeFeature,  } from '../data/feature'

export default function LandingThree() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/bg.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="title-heading">
                      <h1 className="heading text-white title-dark mb-4">Powerfull analytics <br/> tools for your business</h1>
                      <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-light d-inline-flex align-items-center"><FiMail className="align-middle me-1"/> Get Started</Link>
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

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="features-absolute">
                      <div className="row">
                        {landingThreeFeature.map((item,index)=>{
                          let Icon = item.icon
                          return(
                              <div className="col-md-6 mt-4 pt-2" key={index}>
                                <div className="d-flex features feature-primary feature-clean p-4 shadow rounded">
                                    <div className="icons rounded text-primary d-block text-center rounded">
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
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                              <div className="card-body p-0">
                                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                  <div className="overlay-work"></div>
                                  <div className="content">
                                      <Link href="#" className="title text-white d-block fw-bold">Web Development</Link>
                                      <small className="text-white-50">IT & Software</small>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-6 col-6">
                          <div className="row">
                              <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Michanical Engineer</Link>
                                              <small className="text-white-50">Engineering</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Chartered Accountant</Link>
                                              <small className="text-white-50">C.A.</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="ms-lg-4">
                      <div className="section-title mb-4 pb-2">
                          <h4 className="title mb-4">About Our Story</h4>
                          <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          <p className="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                      </div>

                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h4 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Fully Responsive</li>
                          <li className="mb-1"><span className="text-primary h4 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Multiple Layouts</li>
                          <li className="mb-1"><span className="text-primary h4 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Suits Your Style</li>
                      </ul>

                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Read More <FiChevronRight className="align-middle"/></Link>
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <Image src="/images/landing/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
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

    <section className="section bg-light">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <h6 className="text-primary">Partners</h6>
                      <h4 className="title mb-4 mb-lg-0">Manage your client <br/> smartly with instappoint</h4>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <p className="text-muted mb-0 mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-4">
          <PartnerOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <div className="section-title text-md-start text-center">
                      <h4 className="title mb-4">You have any questions ?</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <ul className="list-unstyled text-muted mt-4 mb-0">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                  </div>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <AccordionOne/>
              </div>
          </div>

          <GetInTouch/>
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
