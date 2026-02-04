import React from 'react'
import Link from 'next/link'

import { helpAbout } from '../data/helpcenter'

import HelpcenterNavbar from '../components/navbar/helpcenter-navbar'
import AccordionOne from '../components/accordion/accordion-one'
import HelpcenterFooterTop from '../components/get-in-touch/helpcenter-footer-top'
import SmallFooter from '../components/footer/small-footer'

export default function HelpcenterOverview() {
  return (
    <>
    <HelpcenterNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title"> Hello! <br/> How can we help you? </h4>

                      <div className="subcribe-form mt-4 pt-2">
                          <form>
                              <div className="mb-0">
                                  <input type="text" id="help" name="name" className="border shadow rounded-pill" required="" placeholder="Search your questions or topic..."/>
                                  <button type="submit" className="btn btn-pills btn-primary">Search</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/helpcenter-overview">Help Center</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Overview</li>
                  </ul>
              </nav>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="mb-4">Find the help you need</h4>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
            {helpAbout.map((item,index)=>{
              let Icon = item.icon
              return(
                  <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                      <div className="card features feature-primary explore-feature border-0 rounded text-center">
                          <div className="card-body">
                              <div className="icons rounded-circle shadow-lg d-inline-block mb-2 h3">
                                  <Icon className=""/>
                              </div>
                              <div className="content mt-4">
                                  <Link href="/helpcenter-faqs" className="title h5 text-dark">{item.title}</Link>
                                  <p className="text-muted mt-3 mb-0">{item.desc}</p>
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
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="mb-4">Get Started</h4>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-9 mt-4 pt-2">
                  <AccordionOne/>
              </div>
          </div>
      </div>

      <HelpcenterFooterTop/>
    </section>
    <SmallFooter/>
    </>
  )
}
