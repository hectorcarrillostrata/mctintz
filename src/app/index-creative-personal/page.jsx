import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PersonalHero from '../components/hero-section/personal-hero'
import PartnerOne from '../components/partner/partner-one'
import VideoCenter from '../components/video/video-center'
import PersonalProject from '../components/portfolio/personal-project'
import PersonalCta from '../components/cta/personal-cta'
import MapModal from '../components/map-modal'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { personalAbout } from '../data/data'
import { personalFeature } from '../data/feature'

import {FiArrowDown, FiArrowRight, FiPhone, FiMapPin, FiMail} from 'react-icons/fi'

export default function CreativePersonal() {
  return (
    <>
     <Navbar/> 
     <PersonalHero/>

    <div className="position-relative">
      <div className="position-absolute top-100 start-50 translate-middle z-index-1">
          <Link href="#" className="btn btn-icon btn-pills btn-lg btn-light"><FiArrowDown className="icons"/></Link>
      </div>
    </div>

    <div className="container pt-5">
      <PartnerOne/>
    </div>

    <section className="section" id="about">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="position-relative">
                      <Image src="/images/personal/hero.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-pill shadow img-fluid" alt=""/>
                      
                      <VideoCenter/>

                      <div className="position-absolute top-0 start-0 z-index-m-1">
                          <Image src="/images/shapes/dots.svg" width={144} height={130} className="avatar avatar-xl-large" alt=""/>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="ms-lg-5">
                      <div className="section-title">
                          <span className="badge rounded-pill bg-soft-primary">About Me</span>
                          <h4 className="title mt-2 mb-4">Better Design <br/> Better Experience</h4>
                          <p className="para-desc text-muted pb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                      </div>
                      {personalAbout.slice(0,3).map((item,index)=>{
                        return(
                          <div className="progress-box mt-4" key={index}>
                              <h6 className="title fw-normal text-muted">{item.title}</h6>
                              <div className="progress">
                                  <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}>
                                      <div className="progress-value d-block text-muted h6">{item.progress}</div>
                                  </div>
                              </div>
                          </div>
                        )
                      })}
                  </div>
              </div>
          </div>
      </div>
    </section>


    <section className="section bg-light" id="features">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">What do i offer ?</h4>
                      <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {personalFeature.map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                            <div className="icons rounded text-center mx-auto">
                                <Icon className="h3 mb-0"/>
                            </div>
                            <div className="content mt-4">
                                <h5>{item.title}</h5>
                                <p className="text-muted mt-3">{item.desc}</p>

                                <Link href="" className="link">Read more <FiArrowRight className=""/></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
      </div>
    </section>

    <section className="section" id="experience">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <div className="position-relative">
                            <h4 className="title mb-4">Work Experience</h4>
                        </div>
                        <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <div className="timeline-page position-relative">
                        <div className="timeline-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="duration date-label-left position-relative text-md-end">
                                        <Image src="/images/client/shree-logo.png" width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                        <h5 className="my-2">Self Employed</h5>
                                        <small className="text-muted mb-0">2019-21</small>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                    <div className="event event-description-right float-left text-start">
                                        <h6 className="title mb-1 text-capitalize">UX / UI Designer</h6>
                                        <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="timeline-item mt-5 pt-2">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                    <div className="event event-description-left float-left text-end">
                                        <h6 className="title mb-1 text-capitalize">Sr. UX / UI Designer</h6>
                                        <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                    <div className="duration duration-right position-relative">
                                        <Image src="/images/client/google-logo.png" width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                        <h5 className="my-2">Google Tech.</h5>
                                        <small className="text-muted mb-0">2018-19</small>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="timeline-item mt-5 pt-2">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                    <div className="duration date-label-left position-relative text-md-end">
                                        <Image src="/images/client/lenovo-logo.png" width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                        <h5 className="my-2">Lenovo Ltd.</h5>
                                        <small className="text-muted mb-0">2016-18</small>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                    <div className="event event-description-right float-left text-start">
                                        <h6 className="title mb-1 text-capitalize">Jr. UX / UI Designer</h6>
                                        <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="timeline-item mt-5 pt-2">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                    <div className="event event-description-left float-left text-end">
                                        <h6 className="title mb-1 text-capitalize">Front-end Web Designer</h6>
                                        <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                    <div className="duration duration-right position-relative">
                                        <Image src="/images/client/circle-logo.png" width={36} height={36} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                        <h5 className="my-2">Circle CI</h5>
                                        <small className="text-muted mb-0">2015-16</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <PersonalCta/>
    
    <PersonalProject/>

    <section className="section" id="contact">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-4">Get In Touch!</h4>
                        <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2">
                    <div className="card rounded shadow">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                        </div> 
                                    </div>
    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Subject</label>
                                            <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                        </div>
                                    </div>
    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2">
                    <div className="ms-lg-4">
                        <div className="d-flex features feature-primary feature-clean">
                            <div className="icons text-center rounded mx-auto">
                                <FiPhone className="d-block h4 mb-0"/>
                            </div>

                            <div className="flex-1 ms-3">
                                <h5 className="mb-2">Phone</h5>
                                <p className="text-muted mb-2">Start working with Landrick that can provide everything</p>
                                <Link href="tel:+152534-468-854" className="link">+152 534-468-854</Link>
                            </div>
                        </div>

                        <div className="d-flex features feature-primary feature-clean mt-4">
                            <div className="icons text-center rounded mx-auto">
                                <FiMail className="d-block h4 mb-0"/>
                            </div>

                            <div className="flex-1 ms-3">
                                <h5 className="mb-2">Email</h5>
                                <p className="text-muted mb-2">Start working with Landrick that can provide everything</p>
                                <Link href="mailto:contact@example.com" className="link">contact@example.com</Link>
                            </div>
                        </div>

                        <div className="d-flex features feature-primary feature-clean mt-4">
                            <div className="icons text-center rounded mx-auto">
                                <FiMapPin className="d-block h4 mb-0"/>
                            </div>

                            <div className="flex-1 ms-3">
                                <h5 className="mb-2">Location</h5>
                                <p className="text-muted mb-2">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                                <MapModal/>
                            </div>
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
