import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import JobNavbar from '../components/navbar/job-navbar'
import AnimationText from '../components/job/animation-text'
import ClientFour from '../components/client/client-four'
import PartnerOne from '../components/partner/partner-one'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import JobForm from '../components/job/job-form'

import { candidate, featureJob, jobCategories } from '../data/job'
import { teamSocial } from '../data/team'

import {FiChevronRight} from 'react-icons/fi'

export default function IndexJob() {
  return (
    <>
    <JobNavbar/> 

    <section className="bg-half-170 pb-0 bg-light d-table w-100">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="title-heading text-center mt-4 mt-md-5 pt-md-5">
                      <div className="alert alert-light alert-pills text-dark" role="alert">
                          <span className="badge rounded-pill bg-success me-1">Start</span>
                          <span className="content"> Fill job <a href="job-apply.html" className="text-primary">application</a> now !</span>
                      </div>
                      <AnimationText/>
                      <p className="para-desc mx-auto text-muted">Huge community of designers and developers ready for your project.</p>
                      <JobForm/>
                      <p className="text-muted mb-0 mt-4"><span className="text-dark">Keywords :</span> Web Developer, Web Designer, Php Developer, IOS Developer, etc...</p>
                  </div>
              </div>

              <div className="col-12 mt-4 pt-3">
                  <Image src="/images/job/home.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
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
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Popular Categories</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {jobCategories.map((item,index)=>{
              return(
                  <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                      <div className="card categories category-primary overflow-hidden rounded shadow border-0">
                          <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                          <div className="card-body">
                              <ul className="list-unstyled d-flex justify-content-between mb-0">
                                  <li><Link href="#" className="title h6 text-dark">{item.title}</Link></li>
                                  <li className="h6 mb-0 jobs">{item.job}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Featured Jobs</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureJob.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <Link href={`/job-detail-one/${item.id}`}>
                        <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                            <Image src={item.image} width={25} height={25} className="avatar avatar-ex-sm" alt=""/>
                            <div className="flex-1 ms-3">
                                <h4 className="title mb-0 text-dark">{item.name}</h4>
                                <p className="text-muted mb-0">{item.location}</p>    
                            </div>
                        </div>
                    </Link>
                </div>
              )
            })}

              <div className="col-12 text-center mt-4 pt-2">
                  <Link href="/job-list-one" className="btn btn-primary">See All Jobs <FiChevronRight className="align-middle"/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Expert Candidates</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {candidate.slice(0,4).map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="card-body">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                                <ul className="list-unstyled mb-0 team-icon">
                                  {teamSocial.map((el, index)=>{
                                    let Icon = el
                                    return(
                                      <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                    )
                                  })}
                                </ul>
                            </div>
                            <div className="content pt-3 pb-3">
                                <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                <small className="designation text-muted">{item.position}</small>
                                <h6 className="text-muted fw-normal">{item.value}</h6>
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
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Candidates Review</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientFour/>
      </div>
      <div className="container pt-5">
          <PartnerOne/>
      </div>
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <FooterLight/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
