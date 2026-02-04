import React from 'react'
import JobNavbar from '../components/navbar/job-navbar'
import Link from 'next/link'
import { companyList } from '../data/job'
import Image from 'next/image'
import { LuLink } from 'react-icons/lu'
import {FiMapPin, FiDollarSign, FiUsers, FiChevronRight} from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function JobCompanyList() {
  return (
    <>
    <JobNavbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title text-white title-dark mb-0"> All Companies </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-job">Careers</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Companies</li>
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
          <div className="row align-items-center">
              <div className="col-lg-9 col-md-8">
                  <div className="section-title">
                      <h6 className="mb-0">Showing 1 – 8 of 10 results</h6>
                  </div>
              </div>

              <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="form custom-form">
                      <div className="mb-0">
                          <select className="form-select form-control" aria-label="Default select example" id="Sortbylist-job">
                              <option>All Companies</option>
                              <option>Popular</option>
                              <option>Newest</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">
            {companyList.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="job-box job-primary company-list card border-0 rounded shadow">
                        <div className="text-center py-5 border-bottom">
                            <Image src={item.image} width={65} height={65} className="avatar avatar-small mx-auto rounded-circle d-block mb-3" alt=""/>
                            <Link href={`/job-company/${item.id}`} className="text-dark h5 name">{item.name}</Link>
                            <p className="text-muted mt-1 mb-0">Internet Services</p>
                        </div>

                        <div className="p-4">
                            <h5>Company Details :</h5>
                            <ul className="list-unstyled mb-4">
                                <li className="h6"><FiMapPin className="feather feather-map-pin fea icon-sm text-warning me-2"/><span className="text-muted">Location :</span> San Francisco</li>

                                <li className="h6"><LuLink className="feather feather-map-pin fea icon-sm text-warning me-2"/><span className="text-muted">Comapny :</span> circleci.com</li>

                                <li className="h6"><FiDollarSign className="feather feather-map-pin fea icon-sm text-warning me-2"/><span className="text-muted">Revenue :</span> $ 5M / Annual</li>

                                <li className="h6"><FiUsers className="feather feather-map-pin fea icon-sm text-warning me-2"/><span className="text-muted">No. of employees :</span> 200</li>
                            </ul>
                            <div className="d-grid">
                                <Link href="/job-company" className="btn btn-soft-primary">View Detail <FiChevronRight className="align-middle"/></Link>
                            </div>
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
    </section>

    <Footer/>
    <ScrollToTop/>
    </>
  )
}
