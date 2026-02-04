import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import JobNavbar from '../components/navbar/job-navbar'
import JobInformationOne from '../components/job/job-information-one'
import JobDescription from '../components/job/job-description'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function JobDetailOne() {
  return (
    <>
    <JobNavbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <Image src="/images/job/Gradle.svg" width={80} height={80} className="avatar avatar-md-md rounded-pill bg-white p-3" alt=""/>
                      <h4 className="title text-white title-dark mt-4 mb-3"> Back-End Developer </h4>
                      <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <ul className="list-unstyled mb-0">
                          <li className="list-inline-item text-white-50 me-3"><i className="mdi mdi-map-marker text-warning me-2"></i>Beijing, China</li>
                          <li className="list-inline-item text-white-50"><i className="mdi mdi-office-building text-warning me-2"></i>Gradle</li>
                      </ul>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-job">Careers</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Job Details</li>
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
              <JobInformationOne col="col-lg-4 col-md-5 col-12"/>

              <div className="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="ms-lg-4">
                      <JobDescription/>
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
