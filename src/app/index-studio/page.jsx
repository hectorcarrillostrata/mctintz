import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import WorkplaceModal from '../components/get-in-touch/workplace-modal'
import Footer from '../components/footer/footer'
import CookiesModal from '../components/cookiesModal'
import ScrollToTop from '../components/scroll-to-top'

import {FiPhone, FiBook, FiChevronRight, FiChevronsRight} from 'react-icons/fi'
import { studioFeature } from '../data/feature'
import {classicPortfolio} from '../data/portfolio'

export default function Studio() {
  return (
    <>
     <Navbar bgWhite={true}/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/3.jpg')"}} id="home">
      <div className="container">
          <div className="row position-relative align-items-center pt-4">
              <div className="col-lg-7 offset-lg-5">
                  <div className="card title-heading studio-home rounded shadow mt-5">
                      <h1 className="heading mb-3">Present Your Work With <span className="text-primary">Landrick</span> Studio</h1>
                      <p className="para-desc text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="/page-contact-one" className="btn btn-primary mt-2 me-2 d-inline-flex align-items-center"><FiPhone className="me-1"></FiPhone> Get Started</Link>
                          <Link href="/documentation" className="btn btn-outline-primary mt-2 d-inline-flex align-items-center"><FiBook className="me-1"/> Documentation</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="py-4 bg-light">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Work Process</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          
          <div className="row">
            {studioFeature.map((item,index) =>{
              return(
                  <div className="col-md-4 mt-4 pt-2" key={index}>
                      <div className="card work-process border-0 rounded shadow">
                          <div className="card-body">
                              <h4 className="title">{item.title}</h4>
                              <p className="text-muted para">{item.desc}</p>
                              <Link href="#" className="text-primary">Read more <FiChevronRight /></Link>
                              <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                                  <li className="step h1 mb-0 fw-bold">{item.stape}</li>
                                  <li className="step-icon"><FiChevronsRight className="h1 mb-0"/></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 pt-50">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Latest Projects</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {classicPortfolio.slice(0,8).map((item, index)=>{
              return(
                <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card border-0 work-container work-primary work-classic">
                        <div className="card-body p-0">
                            <Link href="/portfolio-detail-one"><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded work-image" alt=""/></Link>
                            <div className="content pt-3">
                                <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-dark title">{item.name}</Link></h5>
                                <h6 className="text-muted tag mb-0">{item.title}</h6>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>

          <div className="row justify-content-center">
              <div className="col-12 text-center mt-4 pt-2">
                  <Link href="/portfolio-modern-three" className="btn btn-primary">See More <FiChevronRight className="align-middle"></FiChevronRight></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <WorkplaceModal/>
      </div>
    </section>
    <Footer/>
    <CookiesModal/>
    <ScrollToTop/>
    </>
  )
}
