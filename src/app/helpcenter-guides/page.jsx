import React from 'react'
import Link from 'next/link'

import HelpcenterNavbar from '../components/navbar/helpcenter-navbar'
import HelpcenterFooterTop from '../components/get-in-touch/helpcenter-footer-top'
import SmallFooter from '../components/footer/small-footer'

import { supportData } from '../data/helpcenter'
import ScrollToTop from '../components/scroll-to-top'

export default function HelpcenterGuides() {
  return (
    <>
     <HelpcenterNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Guides & Support </h4>
                  </div>
              </div>
          </div>

          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/helpcenter-overview">Help Center</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Guides</li>
                  </ul>
              </nav>
          </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
          <div className="row">
            {supportData.map((item,index)=>{
              return(
                  <div className="col-lg-4 col-md-6 col-12 mt-4" key={index}>
                      <h5>{item.title}</h5>
                      <ul className="list-unstyled mt-4 mb-0">
                        {item.feature.map((item,index)=>{
                          return(
                            <li className="mt-2" key={index}><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>{item}</Link></li>
                          )
                        })}
                      </ul>
                  </div>
              )
            })}
          </div>
      </div>
      <HelpcenterFooterTop/>
    </section>
    <SmallFooter/>
    <ScrollToTop/>
    </>
  )
}
