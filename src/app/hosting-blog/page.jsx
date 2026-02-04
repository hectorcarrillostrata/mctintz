import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HostingNavbar from '../components/navbar/hosting-navbar'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import { hostingBlog } from '../data/hosting'
import {FiHeart, FiMessageCircle, FiChevronRight} from 'react-icons/fi'

export default function HostingBlog() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hosting/pages.png')"}}>
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h4 className="title text-white title-dark mb-4"> Blogs </h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-hosting">Hosting</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blogs & News</li>
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
            {hostingBlog.map((item,index) =>{
              return(
                  <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2" key={index}>
                      <div className="card blog blog-primary shadow border-0 rounded overflow-hidden">
                          <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                          <div className="card-body content">
                              <Link href={`/hosting-blog-detail/${item.id}`} className="title text-dark h5">{item.title}</Link>

                              <p className="text-muted mt-3">{item.desc}</p>

                              <div className="post-meta d-flex justify-content-between mt-3">
                                  <ul className="list-unstyled mb-0">
                                      <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                  </ul>
                                  <Link href={`/hosting-blog-detail/${item.id}`} className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              )
            })}

              <div className="col-12">
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
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
