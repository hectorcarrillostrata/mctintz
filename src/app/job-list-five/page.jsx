import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import JobNavbar from '../components/navbar/job-navbar'
import JobSidebar from '../components/job/job-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { featureJob } from '../data/job'

import {FiMapPin, FiCheck} from 'react-icons/fi'

export default function JobListFive() {
  return (
    <>
    <JobNavbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h2 className="title text-white title-dark mb-0"> Jobs / Careers </h2>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-job">Careers</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Jobs</li>
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
              <JobSidebar/>
              <div className="col-lg-8 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="row">
                    {featureJob.map((item,index)=>{
                      return(
                        <div className="col-lg-6 col-12 mb-4 pb-2" key={index}>
                          <div className="card job-box job-primary rounded shadow border-0 overflow-hidden">
                            <div className="border-bottom">
                                <div className="position-relative">
                                    <Image src={item.bgImg} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </div>
                                <div className="mb-0 position"><Link href={`/job-detail-two/${item.id}`} className="text-dark h5">{item.name}</Link>
                                    <ul className="list-unstyled h6 mb-0 text-warning">
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                                <ul className="list-unstyled head mb-0">
                                    <li className={`badge rounded-pill ${item.jobtime === 'FullTime' ? 'bg-success' : ''} ${item.jobtime === 'PartTime' ? 'bg-warning' : ''} ${item.jobtime === 'Remote' ? 'bg-danger' : ''}`}>{item.jobtime}</li>
                                </ul>
                            </div>
                            
                            <div className="card-body content position-relative">
                                <div className="firm-logo rounded-circle shadow bg-light text-center">
                                    <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                                </div>
                                <div className="company-detail text-center mt-3">
                                    <h5 className="mb-0"><Link href="/job-company" className="text-dark company-name">{item.company}</Link></h5>
                                    <p className="text-muted"><Link href="#" className="text-muted"><FiMapPin className="fea icon-sm mb-1"/> {item.location}</Link></p>
                                </div>
                                <ul className="job-facts list-unstyled">
                                    <li className="list-inline-item text-muted"><FiCheck className="fea icon-sm text-success me-1"/> 2 Year Expirence</li>
                                    <li className="list-inline-item text-muted"><FiCheck className="fea icon-sm text-success me-1"/> Working Hours- 6hr</li>
                                    <li className="list-inline-item text-muted"><FiCheck className="fea icon-sm text-success me-1"/> Information strategy</li>
                                </ul>
                                <div className="d-grid">
                                    <Link href={`/job-detail-two/${item.id}`} className="btn btn-soft-primary">Apply Now</Link>
                                </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="row">
                      <div className="col-12">
                          <ul className="pagination justify-content-center mb-0">
                              <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                              <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                              <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                              <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                              <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                          </ul>
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
