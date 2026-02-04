import React from 'react'
import Link from 'next/link'

import HostingNavbar from '../components/navbar/hosting-navbar'
import ScrollToTop from '../components/scroll-to-top'
import ContactFooter from '../components/footer/contact-footer'

import { hostingServiceTwo } from '../data/hosting'
import {FiChevronRight} from 'react-icons/fi'

export default function HostingServices() {
  return (
    <>
    <HostingNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hosting/pages.png')"}}>
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h4 className="title text-white title-dark mb-4"> Services </h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-hosting">Hosting</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            {hostingServiceTwo.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="card features feature-primary explore-feature border-0 rounded text-center">
                        <div className="card-body">
                            <span className="icons rounded-circle shadow-lg d-inline-block h4">
                                <Icon className=""/>
                            </span>
                            <div className="content mt-3">
                                <h5 className="mb-3"><Link href="" className="title text-dark">{item.title}</Link></h5>
                                <p className="text-muted mb-3">{item.desc}</p>
                                <Link href="" className="read-more">Read More <FiChevronRight className="fea icon-sm"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
