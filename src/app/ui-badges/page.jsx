import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { badges, softBadges } from '../data/ui-data'

export default function UiBadges() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Badges </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Badges</li>
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
                                  <h5 className="title mb-0"> Badges </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge bg-primary"&gt; primary &lt;/span&gt;</code></h6>
                                  {badges.map((item,index)=>{
                                    return(
                                      <span className={`badge me-2 mt-2 ${item.style}`} key={index}>{item.name}</span>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Pill Badges </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge rounded-pill bg-primary"&gt; primary &lt;/span&gt;</code></h6>
                                  {badges.map((item,index)=>{
                                    return(
                                      <span className={`badge rounded-pill me-2 mt-2 ${item.style}`} key={index}>{item.name}</span>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Soft Badges </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge bg-soft-primary"&gt; primary &lt;/span&gt;</code></h6>
                                  {softBadges.map((item,index)=>{
                                    return(
                                      <span className={`badge me-2 mt-2 ${item.style}`} key={index}>{item.name}</span>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Soft Pill Badges </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge rounded-pill bg-soft-primary"&gt; primary &lt;/span&gt;</code></h6>
                                  {softBadges.map((item,index)=>{
                                    return(
                                      <span className={`badge rounded-pill me-2 mt-2 ${item.style}`} key={index}>{item.name}</span>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Link Badges </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="badge bg-primary"&gt; primary &lt;/Link&gt;</code></h6>
                                  {badges.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`badge badge-link me-2 mt-2 ${item.style}`} key={index}>{item.name}</Link>
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
