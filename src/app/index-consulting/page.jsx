import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import ClientOne from '../components/client/client-one'
import VideoCenter from '../components/video/video-center'
import BlogOne from '../components/blog/blog-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { consultingFeature } from '../data/feature'
import { teamOne, teamSocial } from '../data/team'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'
import { FiChevronRight} from 'react-icons/fi'

export default function Consulting() {
  return (
    <>
    <Navbar bgWhite={true}/> 

    <section className="bg-consulting d-flex align-items-center" style={{backgroundImage:"url('/images/consulting/bg.jpg')", backgroundPosition:'top'}}>
      <div className="container z-1">
          <div className="row">
              <div className="col-md-6 background">
                  <div className="title-heading pe-lg-5 pe-md-4">
                      <span className="badge text-bg-primary mb-2">Consulting</span>
                      <h1 className="heading fw-bold mb-3 mb-md-5 pb-md-5">Build a Sustainable Future for Your Establishment</h1>
                      <p className="para-desc text-muted pt-md-5">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  
                      <div className="mt-4">
                          <Link href="" className="btn btn-primary">Consultation</Link>
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-2">Watch Now</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="bg-primary">
      <div className="container px-0">
          <div className="row g-0 align-items-center">
            {consultingFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-6" key={index}>
                    <div className="card rounded-0 px-4 py-5 bg-primary position-relative overflow-hidden border-0">
                        <span className="h2 text-white">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5 className="text-white">{item.title}</h5>
                            <p className="para text-white-50 mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="about-left">
                      <div className="position-relative shadow p-2 rounded bg-white-color img-one">
                          <Image src="/images/work/about/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                      </div>

                      <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white-color">
                          <Image src="/images/work/about/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-3" alt=""/>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Ready to apply? <br/> Here's what you need</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                      </ul>

                      <Link href="#" className="btn btn-primary">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Expert advisory tailored <br/> for maximum returns</h4>
                      <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                      </ul>
                      <Link href="" className="btn btn-primary">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                  <div className="about-right">
                      <div className="position-relative shadow p-2 rounded bg-white-color img-one">
                          <Image src="/images/work/about/4.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                      </div>

                      <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white-color">
                          <Image src="/images/work/about/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-3" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="about-left">
                      <div className="position-relative shadow p-2 rounded bg-white-color img-one">
                          <Image src="/images/work/about/8.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                      </div>

                      <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white-color">
                          <Image src="/images/work/about/5.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-3" alt=""/>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Strategic planning <br/> for optimal growth</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                      </ul>

                      <Link href="" className="btn btn-primary">Learn More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Customer Success Stories</h4>
                      <p className="text-muted mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="video-solution-cta position-relative" style={{zIndex:'1'}}>
                      <div className="position-relative">
                          <Image src="/images/cta-bg.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
                          <VideoCenter/> 
                      </div>
                      <div className="content mt-md-4 pt-md-2">
                          <div className="row justify-content-center">
                              <div className="col-lg-10 text-center">
                                  <div className="row align-items-center">
                                      <div className="col-md-6 mt-4 pt-2">
                                          <div className="section-title text-md-start">
                                              <h6 className="text-white-50">Team</h6>
                                              <h4 className="title text-white title-dark mb-0">Meet Experience <br/> Team Member</h4>
                                          </div>
                                      </div>

                                      <div className="col-md-6 col-12 mt-4 pt-md-2">
                                          <div className="section-title text-md-start">
                                              <p className="text-white-50 para-desc">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                              <Link href="#" className="text-white title-dark">Read More <FiChevronRight className="align-middle"/></Link>
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
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Get to Know Our Amazing Team</h4>
                      <p className="text-muted mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((item,index)=>{
                                let Icon = item
                                return(
                                  <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                )
                              })}
                            </ul>
                        </div>
                        <div className="card-body py-3 px-0 content">
                            <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                            <small className="designation text-muted">{item.designation}</small>
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
