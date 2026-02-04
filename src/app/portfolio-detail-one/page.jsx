import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import BlogComments from '../components/blog/blog-comments'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function DetailOne() {
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
                          <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Date :</span> 19th June, 2026</li>
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
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <Image src="/images/work/single.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
              </div>

              <div className="col-md-10 mt-4 pt-2">
                  <div className="bg-light rounded p-4">
                      <p className="text-muted fst-italic mb-0">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language. "</p>
                  </div>

                  <div className="row">
                      <div className="col-md-6 mt-4 pt-2">
                          <Image src="/images/work/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                      </div>

                      <div className="col-md-6 mt-4 pt-2">
                          <Image src="/images/work/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                      </div>
                  </div>

                  <div className="bg-light rounded p-4 mt-4 pt-2">
                      <p className="text-muted fst-italic mb-0">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                      
                      <ul className="list-unstyled text-muted mt-4">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                      </ul>
                  </div>

                  <div className="row align-items-center">
                      <div className="col-lg-6 mt-4 pt-2">
                          <div className="card work-details rounded bg-light border-0">
                              <div className="card-body">
                                  <h5 className="card-title border-bottom pb-3 mb-3">Project Info :</h5>
                                  <dl className="row mb-0">
                                      <dt className="col-md-4 col-5">Client :</dt>
                                      <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                                      <dt className="col-md-4 col-5">Category :</dt>
                                      <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                                      <dt className="col-md-4 col-5">Date :</dt>
                                      <dd className="col-md-8 col-7 text-muted">13 Sep, 2026</dd>

                                      <dt className="col-md-4 col-5">Website :</dt>
                                      <dd className="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                                      <dt className="col-md-4 col-5">Location :</dt>
                                      <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                  </dl>  
                              </div>                     
                          </div>
                      </div>
  
                      <div className="col-lg-6 mt-4 pt-2">
                          <Image src="/images/work/6.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                      </div>
                  </div>

                  <div className="card shadow rounded border-0 mt-4">
                    <div className='card-body'>
                      <BlogComments/>
                    </div>
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
