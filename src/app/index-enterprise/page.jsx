import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import EnterpriceCta from '../components/cta/enterprice-cta'
import PricingTwo from '../components/pricing/pricing-two'
import BlogOne from '../components/blog/blog-one'
import Schedule from '../components/get-in-touch/schedule'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiMail,  FiChevronRight, FiUser, FiKey} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

import { featureOne } from '../data/feature'

export default function Enterprice() {
  return (
    <>
     <Navbar navlight={true}/> 
    <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/enterprise.png')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="title-heading text-center mt-4">
                      <h1 className="display-4 title-dark fw-bold text-white mb-3">Starting in Strong Way</h1>
                      <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary d-inline-flex align-items-center"><FiMail className="me-1"/> Get Started</Link>
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
                      <h4 className="title mb-4">What We Do ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureOne.map((item,index)=>{
              let Icon = item.icon
                return(
                  <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
                      <div className="features feature-primary text-center">
                          <div className="image position-relative d-inline-block">
                              <Icon className="uil uil-edit-alt h2 text-primary"></Icon>
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
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <h4 className="title mb-4">Speed up your development <br/> with <span className="text-primary">Landrick.</span></h4>
                      <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className="align-middle"/></Link>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <div className="card rounded border-0 shadow ms-lg-5">
                      <div className="card-body">
                          <Image src="/images/illustrator/Mobile_notification_SVG.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>

                          <div className="content mt-4 pt-2">
                              <form>
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="mb-3">
                                              <label className="form-label">Name : <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiUser className="fea icon-sm icons"/>
                                                  <input type="text" className="form-control ps-5" placeholder="Name" name="name" required=""/>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="mb-3">
                                              <label className="form-label">Email : <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMail className="fea icon-sm icons"/>
                                                  <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="mb-3">
                                              <label className="form-label">Password : <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiKey className="fea icon-sm icons"></FiKey>
                                                  <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-12 mt-2 mb-0">
                                          <div className="d-grid">
                                              <button className="btn btn-primary">Download</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>                                    
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <EnterpriceCta/>
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
                      <h4 className="title mb-4">Charge your creative inspiration</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <PricingTwo/>
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

      <div className="container mt-100 mt-60">
          <Schedule title="Schedule a demo with us"/>
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
