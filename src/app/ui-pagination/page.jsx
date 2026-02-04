import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Pagination() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Pagination </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Pagination</li>
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
                      <div className="col-12">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Pagination </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <br/>
                                      <pre><code className="text-danger">
                                          &lt;ul className="pagination mb-0"&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" href="#" aria-label="Previous"&gt;Prev&lt;/Link&gt;&lt;/li&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;li className="page-item active"&gt;&lt;Link className="page-link" href="#"&gt;1&lt;/Link&gt;&lt;/li&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" href="#"&gt;2&lt;/Link&gt;&lt;/li&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" href="#"&gt;3&lt;/Link&gt;&lt;/li&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" href="#" aria-label="Next"&gt;Next&lt;/Link&gt;&lt;/li&gt;<br/>
                                          &lt;/ul&gt;<br/>
                                          </code></pre>
                                  </h6>
                                  
                                  <ul className="pagination mb-0">
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
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
