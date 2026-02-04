import React from 'react'
import Image from 'next/image'

import JobNavbar from '../components/navbar/job-navbar'
import JobInformationOne from '../components/job/job-information-one'
import JobDescription from '../components/job/job-description'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function JobDetailTwo() {
  return (
    <>
    <JobNavbar/> 

    <section className="bg-half d-table w-100 bg-light">            
      <div className="container">
          <div className="row">    
              <div className="col-lg-8 col-md-7 col-12">
                  <div className="d-md-flex align-items-center">
                      <Image src="/images/job/Gradle.svg" width={80} height={80} className="avatar avatar-large p-4 bg-white shadow-md rounded-pill" alt=""/>
                      
                      <div className="ms-md-4 mt-4 mt-sm-0">
                          <h4 className="title mb-3"> Back-End Developer </h4>
                          <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                          <ul className="list-unstyled mb-0">
                              <li className="list-inline-item mb-0 text-primary me-3"><i className="mdi mdi-map-marker text-warning me-2"></i>Beijing, China</li>
                              <li className="list-inline-item mb-0 text-primary"><i className="mdi mdi-office-building text-warning me-2"></i>Gradle</li>
                          </ul>
                      </div>
                  </div>

                  <div className="mt-4 mt-md-5">
                      <JobDescription/>
                  </div>
              </div>
              <JobInformationOne col="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"/>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
