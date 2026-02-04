import React from 'react'
import Link from 'next/link'

import JobNavbar from '../components/navbar/job-navbar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiUser, FiMail, FiPhone, FiBook, FiMessageCircle} from 'react-icons/fi'

export default function JobApply() {
  return (
    <>
    <JobNavbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h2 className="title text-white title-dark mb-0"> Job Apply Form </h2>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-job">Careers</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Job Apply</li>
                  </ul>
              </nav>
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
              <div className="col-lg-10 col-md-7">
                  <div className="card custom-form border-0">
                      <div className="card-body">
                          <form className="rounded shadow p-4">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Your Name :<span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input name="name" id="name2" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email :<span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input name="email" id="email2" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                          </div>
                                      </div> 
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Your Phone no. :<span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiPhone className="fea icon-sm icons"/>
                                              <input name="number" id="number2" type="number" className="form-control ps-5" placeholder="Your phone no. :"/>
                                          </div>
                                      </div> 
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Job Title :</label>
                                          <div className="form-icon position-relative">
                                              <FiBook className="fea icon-sm icons"/>
                                              <input name="subject" id="subject2" className="form-control ps-5" placeholder="Title :"/>
                                          </div>
                                      </div>                                                                               
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Types of jobs :</label>
                                          <select className="form-control form-select" id="Sortbylist-Shop">
                                              <option>All Jobs</option>
                                              <option>Full Time</option>
                                              <option>Half Time</option>
                                              <option>Remote</option>
                                              <option>In Office</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Description :</label>
                                          <div className="form-icon position-relative">
                                              <FiMessageCircle className="fea icon-sm icons"/>
                                              <textarea name="comments" id="comments2" rows="4" className="form-control ps-5" placeholder="Describe the job :"></textarea>
                                          </div>
                                      </div>
                                  </div>                                    
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label htmlFor="formFile" className="form-label">Upload Your Cv / Resume :</label>
                                          <input className="form-control" type="file" id="formFile"/>
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
                              </div>
                              <div className="row">
                                  <div className="col-sm-12">
                                      <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Apply Now"/>
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
    </>
  )
}
