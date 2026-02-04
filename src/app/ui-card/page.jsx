import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiChevronRight} from 'react-icons/fi'

export default function Card() {
  return (
    <>
    <Navbar/> 
    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Cards </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="index.html">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Cards</li>
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
                                  <h5 className="title mb-0"> Cards </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted pb-2">Vertical Card<br/> 
                                      <div className="text-muted mb-2 pb-2">Ex. 
                                          <pre><code className="text-danger">
                                                &lt;div className="card shadow rounded border-0 overflow-hidden"&gt;<br/>
                                                &nbsp;&nbsp; &lt;Image src="/images/blog/01.jpg" className="img-fluid" alt=""&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;div className="card-body"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h5 className="card-title"&gt;Saas & Software : Landrick&lt;/h5&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted"&gt;Due to its widespread use as filler text for layouts, non-readability is of great importance&lt;/p&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" className="text-primary"&gt;Read More &lt;FiChevronRight className="align-middle"&gt;&lt;/FiChevronRight&gt;&lt;/Link&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &lt;/div&gt;
                                                </code></pre>
                                      </div>
                                    </h6>

                                  <div className="row">
                                      <div className="col-lg-6 col-12 mt-4 pt-2">
                                          <div className="card shadow rounded border-0 overflow-hidden">
                                              <Image src="/images/blog/01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                              <div className="card-body">
                                                  <h5 className="card-title">Saas & Software : Landrick</h5>
                                                  <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                                                  <Link href="#" className="text-primary">Read More <FiChevronRight className="align-middle"/></Link>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-6 col-12 mt-4 pt-2">
                                          <div className="card shadow rounded border-0 overflow-hidden">
                                              <div className="card-body">
                                                  <h5 className="card-title">Saas & Software : Landrick</h5>
                                                  <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                                                  <Link href="#" className="text-primary">Read More <FiChevronRight className="align-middle"/></Link>
                                              </div>
                                              <Image src="/images/blog/01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="mt-4 pt-4 border-top">
                                      <h6 className="text-muted pb-2">Horizontal Card<br/> 
                                          <div className="text-muted mb-2 pb-2">Ex. 
                                              <pre><code className="text-danger">
                                                  &lt;div className="card shadow rounded border-0 overflow-hidden"&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&lt;div className="row g-0"&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="col-md-5"&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &lt;Image src="/images/work/14.jpg" className="img-fluid" alt="..."&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="col-md-7"&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="card-body"&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 className="card-title"&gt;Saas & Software : Landrick&lt;/h5&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="card-text"&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="card-text"&gt;&lt;small className="text-muted"&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                  &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                   &lt;/div&gt;
                                                
                                                  </code></pre>
                                      </div>
                                    </h6>
                                  </div>
                                  <div className="row">
                                      <div className="col-lg-12 mt-4 pt-2">
                                          <div className="card shadow rounded border-0 overflow-hidden">
                                              <div className="row g-0">
                                                  <div className="col-md-5">
                                                      <Image src="/images/work/14.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="..."/>
                                                  </div>
                                                  <div className="col-md-7">
                                                      <div className="card-body">
                                                          <h5 className="card-title">Saas & Software : Landrick</h5>
                                                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
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
