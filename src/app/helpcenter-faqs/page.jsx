'use client'
import React from 'react'
import HelpcenterNavbar from '../components/navbar/helpcenter-navbar'
import Link from 'next/link'
import {Link as Link1} from 'react-scroll'
import AccordionOne from '../components/accordion/accordion-one'
import HelpcenterFooterTop from '../components/get-in-touch/helpcenter-footer-top'
import SmallFooter from '../components/footer/small-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function HelpcenterFaq() {
  return (
    <>
    <HelpcenterNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Frequently Asked Questions </h4>
                  </div>
              </div>
          </div>

          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/helpcenter-overview">Help Center</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                  </ul>
              </nav>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                  <div className="rounded shadow p-4 sticky-bar">
                      <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                          <li className="navbar-item p-0"><Link1 to="tech" activeClass="active" spy={true} className="h6 text-dark navbar-link">Buying Questions</Link1></li>
                          <li className="navbar-item mt-3 p-0"><Link1 to="general" activeClass="active" spy={true} className="h6 text-dark navbar-link">General Questions</Link1></li>
                          <li className="navbar-item mt-3 p-0"><Link1 to="payment" activeClass="active" spy={true} className="h6 text-dark navbar-link">Payments Questions</Link1></li>
                          <li className="navbar-item mt-3 p-0"><Link1 to="support" activeClass="active" spy={true} className="h6 text-dark navbar-link">Support Questions</Link1></li>
                      </ul>
                  </div>
              </div>

              <div className="col-lg-8 col-md-7 col-12">
                  <div className="section-title" id="tech">
                      <h4 className='mb-4'>Buying Product</h4>
                      <AccordionOne/>
                  </div>


                  <div className="section-title mt-5" id="general">
                      <h4 className='mb-4'>General Questions</h4>
                      <AccordionOne/>
                  </div>

                  <div className="section-title mt-5" id="payment">
                      <h4 className='mb-4'>Payments Questions</h4>
                      <AccordionOne/>
                  </div>

                  <div className="section-title mt-5" id="support">
                      <h4 className='mb-4'>Support Questions</h4>
                      <AccordionOne/>
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
