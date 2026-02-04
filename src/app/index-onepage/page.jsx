import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import OnePageNavbar from '../components/navbar/one-page-navbar'
import SassModal from '../components/modal/sass-modal'
import PartnerOne from '../components/partner/partner-one'
import ClientOne from '../components/client/client-one'
import PricingTwo from '../components/pricing/pricing-two'
import MapModal from '../components/map-modal'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { featureOne } from '../data/feature'
import { teamOne, teamSocial } from '../data/team'

import { FiChevronRight, FiUser, FiMail, FiMessageCircle, FiPhone, FiMapPin } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function OnePage() {
  return (
    <>
    <OnePageNavbar/>

    <section className="bg-home bg-light d-flex align-items-center" style={{backgroundImage:"url('/images/onepage/bg.png')", height:'auto'}} id="home">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-9 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading margin-top-100">
                      <h1 className="heading mb-3">Website Load Faster, <br/> and Grow Your <span className="text-primary">SEO</span></h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="text-center subcribe-form mt-4 pt-2">
                          <form>
                              <div className="mb-0">
                                  <input type="email" id="email3" name="email" className="shadow rounded-pill" required="" placeholder="Email Address"/>
                                  <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                              </div>
                          </form>
                      </div>
                  </div>

                  <div className="home-dashboard onepage-hero">
                      <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="" className="img-fluid rounded"/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pb-0" id="service">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Great Features</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureOne.map((item,index)=>{
              let Icon = item.icon
              return(
                  <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
                      <div className="features feature-primary">
                          <div className="image position-relative d-inline-block">
                              <Icon className=" h2 text-primary"/>
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
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/software/mobile01.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Seamless Operation via Smart SEO</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled mb-0 text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="text-primary p-1 px-2 shadow rounded">Read More <FiChevronRight className="#"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <SassModal/>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12">
                  <div className="position-relative" style={{zIndex:'1'}}>
                      <Image src="/images/saas/classic01.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                      <div className="play-icon">
                            <Link href="#!"  className="play-btn lightbox border-0">
                                <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                            </Link>
                        </div>
                      {/* <VideoCenter/> */}
                  </div>
              </div>
          </div>
      </div>
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section bg-light" id="testimonial">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Testimonial</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container pt-5">
          <PartnerOne/>
      </div>
    </section>

    <section className="section" id="pricing">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Pricing</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PricingTwo/>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Team Member</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center rounded border-0">
                        <div className="card-body">
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
                            <div className="content pt-3">
                                <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                <small className="designation text-muted">{item.designation}</small>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section pb-0" id="contact">
      <div className="container">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Get In Touch !</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 pt-2 order-2 order-md-1">
                  <div className="card rounded shadow border-0">
                      <div className="card-body">
                          <div className="custom-form">
                              <form>
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiUser className="fea icon-sm icons"/>
                                                  <input name="name" id="name2" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMail className="fea icon-sm icons"/>
                                                  <input name="email" id="email2" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                              </div>
                                          </div> 
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="mb-3">
                                              <label className="form-label">Comments</label>
                                              <div className="form-icon position-relative">
                                                  <FiMessageCircle className="fea icon-sm icons"/>
                                                  <textarea name="comments" id="comments2" rows="4" className="form-control ps-5" placeholder="Your Message :"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-12 text-center">
                                          <div className="d-grid">
                                              <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Send Message"/>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 order-1 order-md-2">
                  <div className="title-heading ms-lg-4">
                      <h4 className="mb-4">Contact Details</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="card border-0 bg-transparent">
                          <div className="card-body p-0">
                              <div className="contact-detail d-flex align-items-center mt-3">
                                  <div className="icon">
                                      <FiMail className="fea icon-m-md text-dark me-3"/>
                                  </div>
                                  <div className="content overflow-hidden d-block">
                                      <h6 className="fw-bold mb-0">Email</h6>
                                      <Link href="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                                  </div>  
                              </div>
                          </div>
                      </div>

                      <div className="card border-0 bg-transparent">
                          <div className="card-body p-0">
                              <div className="contact-detail d-flex align-items-center mt-3">
                                  <div className="icon">
                                      <FiPhone className="fea icon-m-md text-dark me-3"/>
                                  </div>
                                  <div className="content overflow-hidden d-block">
                                      <h6 className="fw-bold mb-0">Phone</h6>
                                      <a href="tel:+152534-468-854" className="text-primary">+152 534-468-854</a>
                                  </div>  
                              </div>
                          </div>
                      </div>

                      <div className="card border-0 bg-transparent">
                          <div className="card-body p-0">
                              <div className="contact-detail d-flex align-items-center mt-3">
                                  <div className="icon">
                                      <FiMapPin className="fea icon-m-md text-dark me-3"/>
                                  </div>
                                  <div className="content overflow-hidden d-block">
                                      <h6 className="fw-bold mb-0">Location</h6>
                                      <MapModal/>
                                  </div>  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} allowFullScreen></iframe>
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
