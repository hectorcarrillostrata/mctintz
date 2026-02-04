import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import BlogOne from '../components/blog/blog-one'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function DetailTwo() {
  return (
    <>
    <PortfolioNavbar/> 
    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title"> New Trends in SEO </h4>
                      <ul className="list-unstyled mt-4 mb-0">
                          <li className="list-inline-item h6 user text-muted me-2"> <span className="text-dark">Client :</span> Calvin Carlo</li>
                          <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Date :</span> 13 Sep, 2026</li>
                      </ul>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Work</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Work Detail</li>
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
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="sticky-bar">
                      <div className="row me-lg-4">
                          <div className="col-lg-12">
                              <div className="work-details">
                                  <h4 className="title mb-3 border-bottom pb-3">Project Name :</h4>
                                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                                  <p className="text-muted mb-0">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                              </div>
                          </div>
                          
                          <div className="col-lg-7 mt-4 pt-2">
                              <div className="card work-details rounded bg-light border-0">
                                  <div className="card-body">
                                      <h5 className="card-title border-bottom pb-3 mb-3">Project Info :</h5>
                                      <dl className="row mb-0">
                                          <dt className="col-md-4 col-5">Client :</dt>
                                          <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                                          <dt className="col-md-4 col-5">Category :</dt>
                                          <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                                          <dt className="col-md-4 col-5">Date :</dt>
                                          <dd className="col-md-8 col-7 text-muted">13th Sep, 2026</dd>

                                          <dt className="col-md-4 col-5">Website :</dt>
                                          <dd className="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                                          <dt className="col-md-4 col-5">Location :</dt>
                                          <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                      </dl>  
                                  </div>                     
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <div className="port-images sticky-sidebar">
                      <Image src="/images/work/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded" alt=""/>
                      <Image src="/images/work/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded mt-4" alt=""/>
                      <Image src="/images/work/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded mt-4" alt=""/>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0">
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                      <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                  </ul>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-3">Latest News &amp; Blog</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                  </div>
              </div>
          </div>
          <BlogOne/>
      </div>
    </section>
    <AiFooter/>
    <ScrollToTop/>
    </>
  )
}
