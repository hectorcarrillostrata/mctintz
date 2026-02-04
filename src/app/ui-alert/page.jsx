import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import UiSidebar from '../components/ui/ui-sidebar'
import { alert, iconAlert } from '../data/ui-data'
import DismissAlert from '../components/ui/dismiss-alert'

import {FiChevronRight} from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function UiAlert() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Alerts </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Alerts</li>
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
                                  <h5 className="title mb-0"> Alert </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-primary" role="alert"&gt; A simple primary alert—check it out! &lt;/div&gt;</code></h6>
                                  {alert.map((item,index)=>{
                                    return(
                                      <div className={`alert ${item.style}`} role="alert" key={index}>{item.title}</div>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Alert with Icons </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert bg-soft-primary fw-medium" role="alert"&gt; &lt;MdInfoOutline className="fs-5 align-middle me-1"&gt;&lt;/MdInfoOutline&gt; An example alert with an icon &lt;/div&gt;</code></h6>
                                  {iconAlert.map((item,index)=>{
                                    let Icon = item.icon
                                    return(
                                      <div className={`alert fw-medium ${item.style}`} role="alert" key={index}><Icon className="fs-5 align-middle me-1"></Icon> An example alert with an icon</div>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Alert Links </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-primary" role="alert"&gt; A simple primary alert with &lt;Link href="#" className="alert-link"&gt;&lt;/Link&gt;. &lt;/div&gt;</code></h6>
                                  {alert.map((item,index)=>{
                                    return(
                                      <div className={`alert ${item.style}`} role="alert" key={index}>{item.title} <Link href="#" className="alert-link">an link</Link>.</div>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Additional Content </h5>
                              </div>

                              <div className="p-4">
                                  <div className="alert alert-success mb-0" role="alert">
                                      <h4 className="alert-heading">Well done!</h4>
                                      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                      <p className="mb-0 border-top pt-3">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Dismissing Alert </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                      <code className="text-danger">
                                          &lt;div className="alert alert-success alert-dismissible fade show" role="alert"&gt; <br/>&nbsp; 
                                          &lt;strong&gt;Well done!&lt;/strong&gt; You successfully read this important alert message. <br/>&nbsp;    
                                          &lt;button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt; &lt;/button&gt;<br/>
                                          &lt;/div&gt; 
                                      </code>
                                  </h6>
                                      
                                  <DismissAlert/>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Advanced Alert </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <br/>
                                      <code className="text-danger">&lt;div className="alert alert-primary alert-pills" role="alert"&gt; <br/>&nbsp;&nbsp;
                                          &lt;span className="badge rounded-pill bg-danger"&gt; New &lt;/span&gt; <br/>&nbsp;&nbsp;
                                          &lt;span className="alert-content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br/>
                                          &lt;/div&gt;
                                      </code>
                                  </h6>

                                  <div className="d-block">
                                      <div className="alert alert-primary alert-pills" role="alert">
                                          <span className="badge rounded-pill bg-info me-1">New</span>
                                          <span className="content"> A Modern primary alert—check it out! <FiChevronRight className=""/></span>
                                      </div>
                                  </div>

                                  <div className="d-block">
                                      <div className="alert alert-danger alert-pills mb-0" role="alert">
                                          <span className="badge rounded-pill bg-success me-1"> New </span>
                                          <span className="content"> A Modern danger alert—check it out! <FiChevronRight className=""/> </span> 
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Advanced Outline Alert </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                      <code className="text-danger">
                                          &lt;div className="alert alert-outline-primary alert-pills" role="alert"&gt; <br/>&nbsp;&nbsp;
                                          &lt;span className="badge rounded-pill bg-danger"&gt; New &lt;/span&gt; <br/>&nbsp;&nbsp;
                                          &lt;span className="alert-content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br/>
                                          &lt;/div&gt;
                                      </code>
                                  </h6>

                                  <div className="d-block">
                                      <div className="alert alert-outline-primary alert-pills" role="alert">
                                          <span className="badge rounded-pill bg-primary me-1">New</span>
                                          <span className="content"> A Modern primary alert—check it out! <FiChevronRight className=""/></span>
                                      </div>
                                  </div>

                                  <div className="d-block">
                                      <div className="alert alert-outline-danger alert-pills mb-0" role="alert">
                                          <span className="badge rounded-pill bg-danger me-1"> New </span>
                                          <span className="content"> A Modern danger alert—check it out! <FiChevronRight className=""/> </span> 
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
