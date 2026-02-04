import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import JobNavbar from '../components/navbar/job-navbar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { featureJob } from '../data/job'

import {FiMapPin, FiClock} from 'react-icons/fi'
import { MdBookmarkBorder} from 'react-icons/md'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

export default function JobListThree() {
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
              <div className="col-lg-12 col-12">
                  <div className="row align-items-center">
                      <div className="col-lg-9 col-md-8">
                          <div className="section-title">
                              <span className="text-muted me-3">Showing 1 - 15 out of 452</span>
                          </div>
                      </div>
  
                      <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                          <div className="form custom-form">
                              <select className="form-select form-control" aria-label="Default select example" id="Sortbylist-job">
                                  <option>All Jobs</option>
                                  <option>Full Time</option>
                                  <option>Part Time</option>
                                  <option>Remote</option>
                                  <option>Work From Home</option>
                              </select>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                    {featureJob.map((item,index)=>{
                      return(
                        <div className="col-12 mt-4 pt-2" key={index}>
                            <div className="job-box job-primary d-md-flex align-items-center border-0 shadow rounded p-4 position-relative">
                                <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm" alt=""/>
    
                                <div className="ms-md-4 mt-4 mt-sm-0">
                                    <Link href={`/job-detail-one/${item.id}`} className="title text-dark h5">{item.name}</Link>
    
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><FiMapPin className="icons mb-1"/> <Link href="#" className="text-dark">{item.company}</Link>, {item.location}</li>
                                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><FiClock className="icons mb-1"/> 8hr/ Day</li>
                                        <li className="d-lg-inline text-muted h6 mb-0"><LiaFileInvoiceDollarSolid className="icons mb-1"/> 30k-35k</li>
                                    </ul>
    
                                    <div className="mt-2">
                                        <span className={`badge ${item.jobtime=== 'FullTime' ? 'bg-soft-success' : ''} ${item.jobtime=== 'Remote' ? 'bg-soft-danger' : ''} ${item.jobtime=== 'PartTime' ? 'bg-soft-primary' : ''}`} style={{margin:"0 2px"}}>{item.jobtime}</span>
                                        <span className="badge bg-soft-warning" style={{margin:"0 2px"}}>Office</span>
                                    </div>
                                </div>
    
                                <div className="position-absolute top-0 end-0 mt-3 me-3">
                                    <Link href="#" className="btn btn-icon btn-pills btn-soft"><MdBookmarkBorder className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                      )
                    })}

                      <div className="col-12 mt-4 pt-2">
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
