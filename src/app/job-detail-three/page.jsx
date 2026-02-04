import React from 'react'
import Image from 'next/image'
import JobNavbar from '../components/navbar/job-navbar'
import JobDescription from '../components/job/job-description'
import JobInformationTwo from '../components/job/job-information-two'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function JobDetailThree() {
  return (
    <>
    <JobNavbar/> 

    <section className="bg-half d-table w-100">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow rounded p-4 sticky-bar">
                      <Image src="/images/job/Gradle.svg" width={80} height={80} className="avatar avatar-medium p-4 bg-white shadow-md rounded-pill" alt=""/>
                      
                      <div className="mt-4">
                          <h4 className="title mb-3"> Back-End Developer </h4>
                          <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                          <ul className="list-unstyled mb-0">
                              <li className="list-inline-item mb-0 text-primary me-3"><i className="mdi mdi-map-marker text-warning me-2"></i>Beijing, China</li>
                              <li className="list-inline-item mb-0 text-primary"><i className="mdi mdi-office-building text-warning me-2"></i>Gradle</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8">
                  <JobInformationTwo/>

                  <div className="mt-4">
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
