import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function DetailFour() {
  return (
    <>
     <PortfolioNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title"> New Trends in SEO </h4>
                      <ul className="list-unstyled mt-4 mb-0">
                          <li className="list-inline-item h6 user text-muted me-2"> <span className="text-dark">Client :</span> Calvin Carlo</li>
                          <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Date :</span>13th Sep 2023</li>
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
              <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                  <div className="work-detail">
                      <h4 className="title mb-3">Introduction of Project :</h4>
                      <p className="description text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                      <p className="description text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                      
                      <div className="row">
                          <div className="col-lg-6 mt-4 pt-2">
                              <Image src="/images/work/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                          </div>
                          
                          <div className="col-lg-6 mt-4 pt-2">
                              <Image src="/images/work/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%'}} className="img-fluid rounded" alt=""/>
                          </div>
                      </div>

                      <blockquote className="blockquote text-center mt-4 mb-0 p-md-4">
                          <span className="h3 text-muted"><i className="mdi mdi-format-quote-open"></i></span>
                          <p className="text-muted mb-0 h5 fw-normal fst-italic"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                          <span className="h3 text-muted"><i className="mdi mdi-format-quote-open"></i></span>
                      </blockquote> 
                      <p className="description text-muted mt-4 mt-sm-0 mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                  </div>
              </div>

              <div className="col-lg-4 col-md-6 order-1 order-md-2">
                  <div className="sticky-bar work-detail p-4 rounded shadow">
                      <h4 className="title pb-3 border-bottom">Project Info :</h4>

                      <ul className="list-unstyled mb-0">
                          <li className="mt-3">
                              <b>Client :</b>
                              <span>Calvin Carlo</span>
                          </li>
                          <li className="mt-3">
                              <b>Category :</b>
                              <span>Web Design</span>
                          </li>
                          <li className="mt-3">
                              <b>Date :</b>
                              <span>13th Sep 2023</span>
                          </li>
                          <li className="mt-3">
                              <b>Website :</b>
                              <span>www.yourdomain.com</span>
                          </li>
                          <li className="mt-3">
                              <b>Location :</b>
                              <span>3/2/64 Mongus Street, UK</span>
                          </li>
                      </ul>   
                  </div>
              </div>
          </div>
      </div>
    </section>
    <AiFooter/>
    <ScrollToTop/>
    </>
  )
}
