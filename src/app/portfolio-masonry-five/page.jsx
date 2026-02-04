'use client'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MasonryPortfolio = dynamic(()=>import('../components/portfolio/masonry-portfolio'),{ssr:false})
import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function MasonaryFive() {
  return (
    <>
    <PortfolioNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Work Masonry </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Work</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Masonry</li>
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
    <MasonryPortfolio container="container-fluid" col="col-lg-12" grid={{350: 1, 750: 2, 900: 4, 1024:5}}/>
    <AiFooter/>
    <ScrollToTop/>
    </>
  )
}
