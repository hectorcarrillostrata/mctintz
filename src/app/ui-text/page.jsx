import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Text() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Text Colors </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Text Colors</li>
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
              <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <h5>Components</h5>
                  <UiSidebar/>
              </div>

              <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                      <div className="col-12" id="text-colors">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Text Color </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="text-primary"&gt; Landrick Saas & Software Template &lt;/div&gt;</code></h6>

                                  <h6 className="text-primary">.text-primary</h6>
                                  <h6 className="text-secondary">.text-secondary</h6>
                                  <h6 className="text-success">.text-success</h6>
                                  <h6 className="text-danger">.text-danger</h6>
                                  <h6 className="text-warning">.text-warning</h6>
                                  <h6 className="text-info">.text-info</h6>
                                  <h6 className="text-light bg-dark">.text-light</h6>
                                  <h6 className="text-white bg-dark">.text-white</h6>
                                  <h6 className="text-white-50 bg-dark">.text-white-50</h6>
                                  <h6 className="text-dark mb-0">.text-dark</h6>
                              </div>
                          </div>
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
