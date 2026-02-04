import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import { borderColor, borderSubtractive, borderWidth, borders } from '../data/ui-data'

export default function Border() {
  return (
    <>
    <Navbar/> 
    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Borders </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Borders</li>
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
                                  <h5 className="title mb-0"> Borders </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <br/>
                                      <pre><code className="text-danger">
                                            &lt;span className="border"&gt;&lt;/span&gt;<br/>
                                            &lt;span className="border-top"&gt;&lt;/span&gt;<br/>
                                            &lt;span className="border-end"&gt;&lt;/span&gt;<br/>
                                            &lt;span className="border-bottom"&gt;&lt;/span&gt;<br/>
                                            &lt;span className="border-start"&gt;&lt;/span&gt;<br/>
                                            </code></pre>
                                  </h6>
                                  {borders.map((item,index)=>{
                                    return(
                                      <div className="d-inline-block me-1 mt-2" key={index}>
                                          <p className={`avatar avatar-small bg-light rounded mb-0 ${item}`}></p>
                                      </div>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Border Width </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <br/>
                                      <pre><code className="text-danger">
                                          &lt;span className="border border-1"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-2"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-3"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-4"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-5"&gt;&lt;/span&gt;<br/>
                                          </code></pre>
                                  </h6>
                                  {borderWidth.map((item,index)=>{
                                    return(
                                      <div className="d-inline-block me-1 mt-2" key={index}>
                                          <p className={`avatar avatar-small border bg-light rounded mb-0 ${item}`}></p>
                                      </div>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Border Subtractive </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. 
                                      <pre><code className="text-danger">
                                          &lt;span className="border-0"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-top-0"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-end-0"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-bottom-0"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-start-0"&gt;&lt;/span&gt;<br/>
                                          </code></pre>
                                  </h6>
                                  {borderSubtractive.map((item,index)=>{
                                    return(
                                      <div className="d-inline-block me-1 mt-2" key={index}>
                                          <p className={`avatar avatar-small bg-light rounded mb-0 ${item}`}></p>
                                      </div>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Border Color </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. 
                                      <pre><code className="text-danger">
                                          &lt;span className="border border-primary"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-secondary"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-success"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-danger"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-warning"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-info"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-light"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-dark"&gt;&lt;/span&gt;<br/>
                                          &lt;span className="border border-white"&gt;&lt;/span&gt;<br/>
                                          </code></pre>
                                  </h6>
                                  {borderColor.map((item,index)=>{
                                    return(
                                        <div className="d-inline-block me-1 mt-2" key={index}>
                                            <p className={`avatar avatar-small border rounded mb-0 ${item}`}></p>
                                        </div>
                                    )
                                  })}
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
