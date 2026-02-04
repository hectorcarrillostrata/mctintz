import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CorporateNavbar from '../components/navbar/corporate-navbar'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import { corporateBlog } from '../data/blogData'

import {FiChevronRight} from 'react-icons/fi'

export default function CorporateBlog() {
  return (
    <>
    <CorporateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundPosition:"top", backgroundImage:"url('/images/corporate/pages.jpg')"}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark"> Blogs </h2>
                      <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-corporate">Business</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
            {corporateBlog.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2" key={index}>
                    <div className="card border-0 blog blog-primary shadow overflow-hidden">
                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                        <div className="content card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li className="text-muted">{item.date}</li>
                                <li className="text-muted"><Link href="#" className="badge bg-soft-primary">{item.tag}</Link></li>
                            </ul>

                            <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>

                            <div className="post-meta d-flex justify-content-between mt-3">
                                <Link href={`/corporate-blog-detail/${item.id}`} className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
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
    <ContactFooter/>
    <ScrollToTop/>
    </>
  )
}
