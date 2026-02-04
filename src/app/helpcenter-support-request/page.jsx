import React from 'react'
import Link from 'next/link'
import HelpcenterNavbar from '../components/navbar/helpcenter-navbar'
import HelpcenterFooterTop from '../components/get-in-touch/helpcenter-footer-top'
import SmallFooter from '../components/footer/small-footer'
import ScrollToTop from '../components/scroll-to-top'

import { FiMail, FiBook, FiMessageCircle} from 'react-icons/fi'
import { LuUser } from 'react-icons/lu'

export default function HelpcenterSupportReq() {
  return (
    <>
     <HelpcenterNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Submit your Support Request </h4>
                  </div>
              </div>
          </div>

          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/helpcenter-overview">Help Center</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Support</li>
                  </ul>
              </nav>
          </div>
      </div> 
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-7 col-12">
                  <div className="rounded p-4 shadow">
                      <div className="row">
                          <div className="col-12">
                              <form>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <LuUser className="fea icon-sm icons"/>
                                                  <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMail className="fea icon-sm icons"/>
                                              <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                              </div>
                                          </div> 
                                      </div>
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Subject</label>
                                              <div className="form-icon position-relative">
                                                  <FiBook className="fea icon-sm icons"/>
                                                  <input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Comments</label>
                                              <div className="form-icon position-relative">
                                                  <FiMessageCircle className="fea icon-sm icons"/>
                                                  <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Your Message :"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-12">
                                          <input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Request"/>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <HelpcenterFooterTop/>
    </section>
    <SmallFooter/>
    <ScrollToTop/>
    </>
  )
}
