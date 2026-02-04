import React from 'react'
import Link from 'next/link'

import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import ClientOne from '../components/client/client-one'
import PortfolioFooterTop from '../components/portfolio/portfolio-footer-top'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

import { featureTwo } from '../data/feature'

export default function PortfolioService() {
  return (
    <>
    <PortfolioNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> What we do ? </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-portfolio">Portfolio</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            {featureTwo.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-4 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span className="h1 icon-color mb-3">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
                        </div>
                        <span className="big-icon text-center">
                          <Icon className=""/>
                        </span>
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
                      <h4 className="title mb-4">Testimonial</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <PortfolioFooterTop/>
    </section>
    <AiFooter/>
    <ScrollToTop/>
    </>
  )
}
