import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import TravelSlider from '../components/carousel/travel-slider'
import ClientOne from '../components/client/client-one'
import AccordionOne from '../components/accordion/accordion-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiArrowDown, FiMapPin, FiMail, FiArrowRight,FiHeart, FiMessageCircle, FiChevronRight, FiCalendar} from 'react-icons/fi'
import { LuUser } from 'react-icons/lu'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { travelFeature } from '../data/feature'

export default function Travel() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/travel/bg.jpg')", backgroundPosition:"center"}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                  <div className="title-heading mt-4">
                      <h1 className="display-4 fw-bold text-white title-dark mb-3">Booking tour <br/> made easy</h1>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-icon btn-pills btn-lg btn-light"><FiArrowDown className="icons"/></Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card shadow rounded border-0 ms-lg-5">
                      <div className="card-body">
                          <h5 className="card-title">You can start search here</h5>

                          <form className="login-form">
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Destination</label>
                                          <div className="form-icon position-relative">
                                              <FiMapPin className="fea icon-sm icons"/>
                                              <input type="text" className="form-control ps-5" placeholder="Whare" name="s" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label"> Check in : </label>
                                          <input name="date" type="text" className="form-control start" placeholder="Select date :"/>
                                      </div>
                                  </div>
  
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label"> Check out : </label>
                                          <input name="date" type="text" className="form-control end" placeholder="Select date :"/>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email</label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
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
                                      <div className="d-grid">
                                          <button className="btn btn-primary">Search Now</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
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
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Benefit for Traveller</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {travelFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-4 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span className="h2 mb-3 icon-color">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
                        </div>
                        <span className="big-icon text-center">
                            <Icon className=""/>
                        </span>
                    </div>
                </div>
              )
            })}

              <div className="col-lg-12 text-center col-md-4 mt-4 pt-2">
                  <Link href="#" className="btn btn-primary">See more <FiArrowRight className="fea icon-sm"/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-end mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h6 className="text-primary">Find Out Most</h6>
                      <h4 className="title mb-4">Popular Destination</h4>
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
          <TravelSlider/>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title fw-bold mb-4">Everyone Needs Travel. <br/> Want to Break Free for a While</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                      <div className="position-relative">
                          <Image src="/images/travel/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top" alt=""/>
                          <div className="overlay rounded-top"></div>
                      </div>
                      <div className="card-body content">
                          <h5><Link href="#" className="card-title title text-dark">Conversations, Feedback, Recognition</Link></h5>
                          <div className="post-meta d-flex justify-content-between mt-3">
                              <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                  <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                              </ul>
                              <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                          </div>
                      </div>
                      <div className="author">
                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                          <small className="date"><FiCalendar className="me-1"/> 25th June 2021</small>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">Experience Luxury & <br/> Find Your Base</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Search Destination <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <Image src="/images/travel/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow-md" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">100% Money back <br/> Guarantee if You Cancel</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                  </div>
                  <AccordionOne/>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/travel/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow-md" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">We have More than 500 <br/> Selected Destination</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <a href="#" className="mt-3 h6 text-primary">Search Destination <FiChevronRight className=""/></a>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Whats Our Clients Said About <span className="text-primary">Landrick</span> Project</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>
    
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
