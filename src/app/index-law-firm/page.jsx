import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import LowSlider from '../components/carousel/low-slider'
import Counter from '../components/counter'
import ClientFour from '../components/client/client-four'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { lowFeature } from '../data/feature'
import { lowCounter } from '../data/counter-data'
import { teamOne, teamSocial } from '../data/team'
import { lowBlog } from '../data/blogData'

import { FiArrowRight, FiHeart, FiMessageCircle, FiChevronRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline, MdOutlineCalendarMonth } from 'react-icons/md'
import { LuUser } from 'react-icons/lu'

export default function LowFirm() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-100 pb-0 d-table w-100 lawyer-wrapper" style={{backgroundImage:"url('/images/lawyer/bg.jpg')" , backgroundPosition:"center"}}>
      <div className="bg-overlay bg-black" style={{opacity:'0.9'}}></div>
      <div className="bg-overlay bg-linear-gradient-primary" style={{opacity:'0.7'}}></div>
      <div className="container position-relative" style={{zIndex:'2'}}>
          <div className="row align-items-center pt-5 pt-sm-0 mt-5 mt-sm-0">
              <div className="col-md-6">
                  <div className="title-heading">
                      <h4 className="heading heading-lg fw-bold text-white mb-3 title-dark"> We are Specialise <br/> In All <span className="text-primary">Criminal & Civil</span> Laws. </h4>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <a href="#" className="btn btn-lg btn-primary">Get In Touch</a>
                      </div>
                  </div>
              </div>

              <div className="col-md-6 mt-md-5">
                  <Image src="/images/lawyer/avatar.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <div className="features-absolute">
                      <div className="row">
                        {lowFeature.map((item,index)=>{
                          let Icon = item.icon
                          return(
                            <div className="col-lg-2 col-md-4 col-6 mt-4" key={index}>
                                <div className="card features feature-primary feature-clean px-3 py-4 shadow h-100">
                                    <div className="icon text-center rounded-circle text-primary mb-3">
                                        <Icon className="fea icon-ex-md"/>
                                    </div>
                                    <Link href="" className="title text-dark h4 mb-0">{item.title}</Link>
                                </div>
                            </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5">
                  <div className="row">
                      <div className="col-12"><Image src="/images/lawyer/b1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="img-fluid rounded shadow" alt=""/></div>
                      <div className="col-12 mt-4"><Image src="/images/lawyer/b2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/></div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h5 className="text-primary">About Us</h5>
                      <h4 className="title mt-2 mb-4">Preserving Relationships <br/> Are The Basis Of Success.</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <ul className="list-unstyled text-muted">
                          <li className="mt-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mt-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mt-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>

                      <div className="d-flex align-items-center mt-3">
                          <Image src="/images/client/05.jpg" width={65} height={65} className="avatar avatar-small rounded-pill shadow-md" alt=""/>
                          <div className="flex-1 ms-3">
                              <h5 className="text-dark mb-0">Cristina Murphy</h5>
                              <p className="text-muted mb-0">C.E.O.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-end mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h5 className="text-primary">What We Do?</h5>
                      <h4 className="title mt-2 mb-4">Our Case Studies</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                  <div className="text-center text-md-end">
                      <Link href="#" className="text-primary h6">See More <FiArrowRight className="fea icon-sm"/></Link>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid">
          <LowSlider/>
      </div>
    </section>

    <section className="section bg-cta" style={{backgroundImage:"url('/images/lawyer/bg2.jpg')"}} id="cta">
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row justify-content-center pb-5">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title title-dark text-white mb-4">Speak With Our Expert <br/> Lawyers Today!</h4>
                      <p className="text-white-50 para-dark para-desc mx-auto mb-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <Link href="" className="btn btn-primary">Free Consultation</Link>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container mt-4">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <div className="features-absolute card shadow px-4 py-5">
                      <div className="row justify-content-center">
                        {lowCounter.map((item,index)=>{
                          return(
                            <div className="col-md-3 col-6" key={index}>
                                <div className="text-center">
                                    <h6 className="mb-0 text-primary">{item.name}</h6>
                                    <h2 className="mb-0 display-6 mt-2 fw-bold"><Counter end={item.target}/>{item.title}</h2>
                                </div>
                            </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Client's Testimonial</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <ClientFour/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Best Lawyer Team</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center bg-transparent border-0">
                        <div className="card-body p-0">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle" alt=""/>
                                <ul className="list-unstyled mb-0 team-icon">
                                  {teamSocial.map((item,index)=>{
                                    let Icon = item
                                    return(
                                      <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                    )
                                  })}
                                </ul>
                            </div>
                            <div className="content pt-3 pb-3">
                                <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                <small className="designation text-muted">Advocate</small>
                            </div>                                
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

          <div className="row">
            {lowBlog.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary rounded border-0 shadow">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt=""/>
                            <div className="overlay rounded-top"></div>
                        </div>
                        <div className="card-body content">
                            <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                            <div className="post-meta d-flex justify-content-between mt-3">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                </ul>
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                            <small className="date"><MdOutlineCalendarMonth className=""/> 25th June 2021</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>

    </>
  )
}
