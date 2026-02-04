'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import ClientOne from '../components/client/client-one'
import CustomerTab from '../components/tab/customer-tab'
import Footer from '../components/footer/footer'
import CookiesModal from '../components/cookiesModal'
import ScrollToTop from '../components/scroll-to-top'

import { customerFeature } from '../data/feature'

import { FiUser, FiMail, FiGlobe, FiBook, FiMessageCircle } from 'react-icons/fi'

export default function Customer() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="title-heading text-center mt-5 pt-3">
                      <div className="alert alert-light alert-pills text-dark" role="alert">
                          <span className="badge rounded-pill bg-success me-1">Support</span>
                          <span className="content"> Customer Support 24/7</span>
                      </div>
                      <h1 className="heading mb-3">How Can We Help You ?</h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
                  <div className="subcribe-form mt-4 pt-2">
                      <form>
                          <div className="mb-0">
                              <input type="text" id="help" name="name" className="form-control shadow rounded-pill" required="" placeholder="Search the help center"/>
                              <button type="submit" className="btn btn-pills btn-primary">Search</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div> 
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <span className="badge rounded-pill bg-success">Features</span>
                      <h4 className="title my-4">Communication Resources</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {customerFeature.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card categories category-primary text-center rounded border-0">
                        <div className="card-body">
                            <Image src={item.image} width={65} height={65} className="avatar avatar-small mb-3" alt=""/>
                            <h5><Link href="#" className="title text-dark">{item.title}</Link></h5>
                            <p className="text-muted mb-0 mt-3">{item.desc}</p>
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
                      <h4 className="title mb-4">Need to CRM Support</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <CustomerTab/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Customer's Review</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Submit A Ticket</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row align-items-center">
              <div className="col-lg-6 col-md-5 col-12 mt-4 pt-2">
                  <div className="">
                      <Image src="/images/customer/customer.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-lg-6 col-md-7 col-12 mt-4 pt-2">
                  <div className="card rounded shadow border-0 ms-lg-4">
                      <div className="card-body p-4">
                          <form>
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Your Name :</label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                          </div>
                                      </div>
                                  </div>
  
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email :</label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                          </div>
                                      </div> 
                                  </div> 
  
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Reasons / Categories :</label>
                                          <select className="form-control form-select" id="Sortbylist-Shop">
                                              <option>Categories</option>
                                              <option>General Question</option>
                                              <option>Bugs</option>
                                              <option>Remote</option>
                                          </select>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Subject :</label>
                                          <div className="form-icon position-relative">
                                              <FiBook className="fea icon-sm icons"/>
                                              <input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Url :</label>
                                          <div className="form-icon position-relative">
                                              <FiGlobe className="fea icon-sm icons"></FiGlobe>
                                              <input name="url" id="url" type="url" className="form-control ps-5" placeholder="Url :"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Description :</label>
                                          <div className="form-icon position-relative">
                                              <FiMessageCircle className="fea icon-sm icons"/>
                                              <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Describe your problem :"></textarea>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                              <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div className="row">
                                  <div className="col-sm-12">
                                      <input type="submit" id="submit" name="send" className="btn btn-primary" value="Submit"/>
                                  </div>
                              </div>
                          </form>
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
