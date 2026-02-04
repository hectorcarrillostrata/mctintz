import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import CasesFilter from '../components/cases-filter'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function PageCases() {
  return (
    <>
    <Navbar navlight={true}/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/2.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title text-white title-dark mb-0"> All Cases </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Cases</li>
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
        <CasesFilter/>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
