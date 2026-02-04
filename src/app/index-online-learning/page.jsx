'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoCenter from '../components/video/video-center'
import PartnerOne from '../components/partner/partner-one'
import BlogOne from '../components/blog/blog-one'
import ClientOne from '../components/client/client-one'
import VideoOne from '../components/video/video-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiSearch, FiArrowRight, FiMapPin, FiChevronRight, FiBookOpen, FiClock, FiEye, FiUser, FiMail, FiPhone} from 'react-icons/fi'

import { onlineLearningFeature } from '../data/feature'
import { learningService } from '../data/services'
import { courseDataTwo } from '../data/data'
import { instructor } from '../data/team'

export default function OnlineLearning() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170">
      <div className="container">
          <div className="row mt-5">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-7 col-md-6 col-12">
                          <div className="title-heading me-lg-4">
                              <div className="alert bg-primary alert-pills shadow" role="alert">
                                  <span className="content"> Are you ready to learn online ?</span>
                              </div>
                              
                              <h1 className="heading mb-3">Start Online Learning <br/> With <span className="text-primary">: Landrick</span></h1>
                              <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                              <div className="subcribe-form mt-4 pt-2">
                                  <form className="m-0">
                                      <div className="">
                                          <input type="text" id="course" name="name" className="rounded shadow" placeholder="Search your course"/>
                                          <button type="submit" className="btn btn-primary">Search <FiSearch className="fea icon-sm"/></button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                          <div className="position-relative">
                              <Image src="/images/course/online/hero.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                              <VideoCenter/>
                          </div>
                      </div>
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
                      <h4 className="title mb-4">Get a choice of your course</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {onlineLearningFeature.map((item, index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary explore-feature border-0 rounded text-center">
                        <div className="card-body py-5">
                            <div className="icons rounded-circle shadow-lg d-inline-block">
                                <Icon className="fea h4 mb-0"/>
                            </div>
                            <div className="content mt-3">
                                <h5><Link href="" className="title text-dark">{item.title}</Link></h5>
                                <Link href="" className="text-muted small">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}

              <div className="col-12">
                  <div className="text-center mt-4 pt-2">
                      <Link href="" className="btn btn-primary">See More Courses <FiArrowRight className="align-middle"/></Link>
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
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-lg">
                              <div className="card-body p-0">
                                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
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
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-lg">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%'}} className="img-fluid" alt=""/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Michanical Engineer</Link>
                                              <small className="text-white-50">Engineering</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-lg">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
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

                      <h5>Our Branches :</h5>

                      <div className="row">
                          <div className="col-md-6 col-12 mt-4">
                              <div className="d-flex align-items-center">
                                  <FiMapPin className="text-muted h4"/>
                                  <div className="content ms-2">
                                      <h5 className="mb-0"><Link href="#" className="video-play-icon text-primary">U.S.A.</Link></h5>
                                      <p className="text-muted mb-0">Long Street, WS, US</p>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="col-md-6 col-12 mt-4">
                              <div className="d-flex align-items-center">
                                  <FiMapPin className="text-muted h4"/>
                                  <div className="content ms-2">
                                      <h5 className="mb-0"><Link href="#" className="video-play-icon text-primary">China</Link></h5>
                                      <p className="text-muted mb-0">Wuhan, China</p>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="col-md-6 col-12 mt-4">
                              <div className="d-flex align-items-center">
                                  <FiMapPin className="text-muted h4"/>
                                  <div className="content ms-2">
                                      <h5 className="mb-0"><Link href="#" className="video-play-icon text-primary">India</Link></h5>
                                      <p className="text-muted mb-0">Channai, India</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Read More <FiChevronRight className="align-middle"/></Link>
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
            {learningService.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="d-flex features feature-primary feature-clean">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h3 mb-0"/>
                        </div>
                        <div className="flex-1 content ms-3">
                            <h5 className="mb-1"><Link href="#" className="text-dark">{item.title}</Link></h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Popular Courses</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {courseDataTwo.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top" alt=""/>
                            <div className="overlay"></div>
                            <div className="teacher d-flex align-items-center">
                                <Image src={item.clientImage} width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                <div className="ms-2">
                                    <h6 className="mb-0"><Link href="#" className="user">{item.clientName}</Link></h6>
                                    <p className="small my-0 profession">{item.possition}</p>
                                </div>
                            </div>
                            <div className="course-fee bg-white text-center shadow-lg rounded-circle">
                                <h6 className="text-primary fw-bold fee">{item.amount}</h6>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="shape overflow-hidden text-color-white">
                                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="card-body content">
                            <h6><Link href="/course-detail" className="text-primary">{item.tag}</Link></h6>
                            <Link href="/course-detail" className="title text-dark h5">{item.title}</Link>
                            <p className="text-muted mt-2">{item.desc}</p>
                            <Link href="/course-detail" className="text-primary">Read More <FiChevronRight className="align-middle"/></Link>
                            <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                                <li className="text-muted small d-flex align-items-center"><FiBookOpen className="text-info me-1"/> {item.lectures}</li>
                                <li className="text-muted small ms-3 d-flex align-items-center"><FiClock className="text-warning me-1"/> {item.time}</li>
                                <li className="text-muted small ms-3 d-flex align-items-center"><FiEye className="text-primary me-1"/>{item.view}</li>
                            </ul>
                        </div>
                    </div> 
                </div>
              )
            })}
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="rounded py-md-5" style={{backgroundImage:"url('/images/course/online/cta.jpg')", backgroundPosition:'center'}}>
              <div className="row py-5">
                  <div className="container">
                      <div className="row align-items-center px-3 px-sm-0">
                          <div className="col-lg-8 col-md-6 col-12">
                              <div className="section-title">
                                  <h4 className="display-5 h1 text-white title-dark mb-4">Register Now !</h4>
                                  <p className="text-white-50 para-desc">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                  <div className="mt-4">
                                      <Link href="#" className="btn btn-primary">Admission Now</Link>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                              <div className="card shadow rounded border-0">
                                  <div className="card-body">
                                      <h4 className="card-title">Register Now</h4>
      
                                      <form className="login-form">
                                          <div className="row">
                                              <div className="col-md-12">
                                                  <div className="mb-3">
                                                      <label className="form-label">Your Name :<span className="text-danger">*</span></label>
                                                      <div className="form-icon position-relative">
                                                          <FiUser className="fea icon-sm icons"/>
                                                          <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-12">
                                                  <div className="mb-3">
                                                      <label className="form-label">Your Email :<span className="text-danger">*</span></label>
                                                      <div className="form-icon position-relative">
                                                          <FiMail className="fea icon-sm icons"/>
                                                          <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                                      </div>
                                                  </div> 
                                              </div>
                                              <div className="col-md-12">
                                                  <div className="mb-3">
                                                      <label className="form-label">Your Phone no. :<span className="text-danger">*</span></label>
                                                      <div className="form-icon position-relative">
                                                          <FiPhone className="fea icon-sm icons"></FiPhone>
                                                          <input name="number" id="number" type="number" className="form-control ps-5" placeholder="Your phone no. :"/>
                                                      </div>
                                                  </div> 
                                              </div>
                                              <div className="col-md-12">
                                                  <div className="mb-3">
                                                      <div className="form-check">
                                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                          <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-12">
                                                  <button className="btn btn-primary w-100">Register Now</button>
                                              </div>
                                          </div>
                                      </form>
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
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Instructor</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {instructor.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="d-flex align-items-center">
                        <Image src={item.image} width={110} height={110} className="avatar avatar-medium rounded-circle img-thumbnail" alt=""/>
                        <div className="flex-1 content ms-3">
                            <h5 className="mb-0"><Link href="#" className="text-dark">{item.name}</Link></h5>
                            <small className="position text-muted">{item.title}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">What Students Say ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
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
