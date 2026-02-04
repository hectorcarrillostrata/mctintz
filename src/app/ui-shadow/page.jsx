import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Shadow() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Box Shadows </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Shadows</li>
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
                      <div className="col">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Box Shadows </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <br/>
                                      <pre><code className="text-danger">
                                        &lt;div className="shadow-none p-3 mb-5 bg-light rounded"&gt;No shadow&lt;/div&gt;<br/>
                                        &lt;div className="shadow-sm p-3 mb-5 bg-body rounded"&gt;shadow-sm&lt;/div&gt;<br/>
                                        &lt;div className="shadow p-3 mb-5 bg-body rounded"&gt;shadow&lt;/div&gt;<br/>
                                        &lt;div className="shadow-md p-3 mb-5 bg-body rounded"&gt;shadow-md&lt;/div&gt;<br/>
                                        &lt;div className="shadow-lg p-3 mb-5 bg-body rounded"&gt;shadow-lg&lt;/div&gt;<br/>
                                        </code></pre>
                                  </h6>

                                  <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
                                  <div className="shadow-sm p-3 mb-5 bg-body rounded">shadow-sm</div>
                                  <div className="shadow p-3 mb-5 bg-body rounded">shadow</div>
                                  <div className="shadow-md p-3 mb-5 bg-body rounded">shadow-md</div>
                                  <div className="shadow-lg p-3 mb-5 bg-body rounded">shadow-lg</div>
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
