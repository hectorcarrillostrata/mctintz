import React from 'react'
import JobNavbar from '../components/navbar/job-navbar'
import Link from 'next/link'
import { candidate } from '../data/job'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { LuGraduationCap } from 'react-icons/lu'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function JobCandidateList() {
  return (
    <>
    <JobNavbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title text-white title-dark mb-0"> Candidates </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-job">Careers</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Candidates</li>
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
                              <option>Default</option>
                              <option>Newest</option>
                              <option>Oldest</option>
                              <option>Random</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">
            {candidate.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="job-box job-primary candidate-list card rounded border-0 shadow">
                        <div className="card-body">
                            <ul className="list-unstyled align-items-center">
                                <li className="list-inline-item float-end"><Link href="#" className="text-muted like"><i className="mdi mdi-heart h5 mb-0"></i></Link></li>
                                <li className="list-inline-item"><span className="badge rounded-pill bg-soft-success">{item.tag}</span></li>
                            </ul>

                            <div className="content text-center">
                                <Image src={item.image} width={80} height={80} className="avatar avatar-md-md shadow-md rounded-circle" alt=""/>
                                <ul className="list-unstyled mb-1 mt-2">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <Link href={`/job-candidate/${item.id}`} className="text-dark h5 name">{item.name}</Link>
                                <p className="text-muted my-1">{item.position}</p>

                                <span className="text-muted"><LuGraduationCap className="h4 mb-0 me-2 icons"/>Experience <span className="text-success">{item.experience}</span></span>
                                
                                <ul className="list-unstyled mt-3">
                                  {item.feature.map((el,index)=>{
                                    return(
                                      <li className="list-inline-item m-2" key={index}><Link href="#" className="rounded bg-light py-1 px-2 text-muted small">{el}</Link></li>
                                    )
                                  })}
                                </ul>
                                <div className="d-grid">
                                    <Link href={`/job-candidate/${item.id}`} className="btn btn-soft-primary">Read More <FiChevronRight className="align-middle"/></Link>
                                </div>
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
