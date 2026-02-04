'use client'
import React from 'react'
import Link from 'next/link'
import { Link as Link1 } from 'react-scroll'

import HostingNavbar from '../components/navbar/hosting-navbar'
import HostingAccordion from '../components/hosting/hosting-accordion'
import HostingAccordionTwo from '../components/hosting/hosting-accordion-two'
import AccordionOne from '../components/accordion/accordion-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function HostingFaq() {
  return (
  <>
  <HostingNavbar/> 

  <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hosting/pages.png')"}}>
    <div className="bg-overlay bg-gradient-primary opacity-9"></div>
    <div className="container">
        <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
                <div className="pages-heading title-heading">
                    <h4 className="title text-white title-dark mb-4"> Question & Answer </h4>
                    <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                </div>
            </div>
        </div>
        
        <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                    <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                    <li className="breadcrumb-item"><Link href="/index-hosting">Hosting</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
        <div className="row">
            <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                <div className="rounded-md shadow p-4 sticky-bar">
                    <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                      <li className="navbar-item p-0"><Link1 to="tech" activeClass="active" spy={true} className="h6 text-dark navbar-link">Technical Questions</Link1></li>
                      <li className="navbar-item mt-3 p-0"><Link1 to="general" activeClass="active" spy={true} className="h6 text-dark navbar-link">General Questions</Link1></li>
                      <li className="navbar-item mt-3 p-0"><Link1 to="payment" activeClass="active" spy={true} className="h6 text-dark navbar-link">Payments Questions</Link1></li>
                  </ul>
                </div>
            </div>

            <div className="col-lg-8 col-md-7 col-12">
                <div className="section-title" id="tech">
                    <h4 className='mb-4'>Technical Questions</h4>
                    <HostingAccordion/>
                </div>

                <div className="section-title mt-5" id="general">
                    <h4 className='mb-4'>General Questions</h4>
                    <HostingAccordionTwo/>
                </div>

                <div className="section-title mt-5" id="payment">
                    <h4 className='mb-4'>Payments Questions</h4>
                    <AccordionOne/>
                </div>
            </div>
        </div>
    </div>
  </section>

  <ContactFooter full={true}/>

  <ScrollToTop/>
  </>
  )
}
