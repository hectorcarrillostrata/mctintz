import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import TaskTab from '../components/tab/task-tab'
import Footer from '../components/footer/footer'
import AboutOne from '../components/about/about-one'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import TaskPricing from '../components/pricing/task-pricing'

import { taskFeature } from '../data/feature'

import { FiArrowRightCircle, FiChevronRight, FiArrowRight, FiClock, FiCalendar} from 'react-icons/fi'
import { GrSchedules } from 'react-icons/gr'
import { LuListMinus } from 'react-icons/lu'
import { PiPresentationChart } from 'react-icons/pi'
import { LuCalendarDays } from 'react-icons/lu'
import { RiPresentationLine } from 'react-icons/ri'

export default function TaskManagement() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-home d-flex align-items-center bg-animation-left task-management-home" style={{height:'auto'}} id="home">
      <div className="container position-relative" style={{zIndex:'1'}}>
          <div className="row justify-content-center">
              <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading margin-top-100">
                      <h1 className="heading text-white title-dark mb-3">A Better Way to Manage your Schedule</h1>
                      <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
                  <div className="text-center subcribe-form mt-4 pt-2">
                      <form>
                          <div className="mb-0">
                              <input type="email" id="email" name="email" className="border rounded-pill" required placeholder="Email Address"/>
                              <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                          </div>
                      </form>
                  </div>

                  <div className="row justify-content-center">
                      <div className="col-lg-10 text-center">
                          <div className="home-dashboard">
                              <Image src="/images/task/laptop.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section mt-0 mt-md-5">
      <div className="container">
          <div className="row">
            {taskFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 col-12 mt-5" key={index}>
                    <div className="features feature-primary text-center">
                        <div className="image position-relative d-inline-block">
                            <Icon className="h2 text-primary"/>
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
              <div className="col-lg-6 col-md-6">
                  <Image src="/images/task/timeline.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid shadow rounded-md" alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h1 className="text-primary"><GrSchedules className="mb-3"/></h1>
                      <h4 className="title mb-4">Track your timeline</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className='mb-1'><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Digital Marketing Solutions for Tomorrow</li>
                          <li className='mb-1'><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                  <Image src="/images/task/task.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                  <div className="section-title me-lg-5">
                      <h1 className="text-primary"><LuListMinus className="mb-3"/></h1>
                      <h4 className="title mb-4">Plans and Collaborate <br/> your content</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className='mb-1'><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Digital Marketing Solutions for Tomorrow</li>
                          <li className='mb-1'><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Discover what makes <span className="text-primary">Task manager</span> great.</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <TaskTab/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                  <div className="sticky-bar">
                      <div className="section-title text-lg-start text-center mb-4 mb-lg-0 pb-2 pb-lg-0">
                          <h4 className="title mb-4">Great Features</h4>
                          <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8 col-12">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                                      <span className="h2 mb-3 icon-color">
                                          <PiPresentationChart className=""/>
                                      </span>
                                      <div className="card-body p-0 content">
                                          <h5>Task Planning</h5>
                                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                                      <span className="h2 mb-3 icon-color">
                                          <LuCalendarDays className=""/>
                                      </span>
                                      <div className="card-body p-0 content">
                                          <h5>Task Scheduling</h5>
                                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                                      <span className="h2 mb-3 icon-color">
                                          <FiClock className=""/>
                                      </span>
                                      <div className="card-body p-0 content">
                                          <h5>Task Tracking</h5>
                                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                                      <span className="h2 mb-3 icon-color">
                                          <FiCalendar className=""/>
                                      </span>
                                      <div className="card-body p-0 content">
                                          <h5>Calendar</h5>
                                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                                      <span className="h2 mb-3 icon-color">
                                          <RiPresentationLine className=""/>
                                      </span>
                                      <div className="card-body p-0 content">
                                          <h5>Collaboration</h5>
                                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2 text-center text-md-start">
                                  <Link href="#" className="btn btn-primary">See more <FiArrowRight className="fea icon-sm"/></Link>
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
                      <h4 className="title mb-4">Let’s get some real price done here.</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <TaskPricing/>
      </div>

      <div className="container mt-100 mt-60">
          <AboutOne/>

          <div className="row mt-5 pt-4 justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                      <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <Link href="/page-contact-two" className="btn btn-primary mt-4"><i className="mdi mdi-phone"></i> Contact us</Link>
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
