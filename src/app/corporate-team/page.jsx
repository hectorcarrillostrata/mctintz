import React from 'react'
import CorporateNavbar from '../components/navbar/corporate-navbar'
import Link from 'next/link'
import Image from 'next/image'

import { FiFile, FiCreditCard } from 'react-icons/fi'
import { MdOutlineCenterFocusWeak } from 'react-icons/md'
import { teamSocial, teamTwo } from '../data/team'
import ClientOne from '../components/client/client-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function CorporateServices() {
  return (
    <>
    <CorporateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/corporate/pages.jpg')", backgroundPosition:"top"}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark"> Team </h2>
                      <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div> 
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-corporate">Business</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Team</li>
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
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/landing/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-lg" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-md-start text-center ms-lg-4">
                      <h4 className="title mb-4">Collaborate with your <br/> team anytime and anywhare.</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <div className="d-flex align-items-center text-start mt-4 pt-2">
                          <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                              <MdOutlineCenterFocusWeak className="#"/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Find Better Leads</Link>
                          </div>
                      </div>

                      <div className="d-flex align-items-center text-start mt-4">
                          <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                              <FiFile className="#"/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Set Instant Metting</Link>
                          </div>
                      </div>

                      <div className="d-flex align-items-center text-start mt-4">
                          <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                              <FiCreditCard className=""/>
                          </div>
                          <div className="flex-1">
                              <Link href="#" className="text-dark h6">Get Paid Seemlessly</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Team</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamTwo.map((item,index)=>{
              return(
                  <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                      <div className="card team team-primary text-center border-0">
                          <div className="position-relative">
                              <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                              <ul className="list-unstyled mb-0 team-icon">
                                {teamSocial.map((item,index)=>{
                                  let Icon = item
                                  return(
                                      <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                  )
                                })}
                              </ul>
                          </div>
                          <div className="card-body py-3 px-0 content">
                              <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                              <small className="designation text-muted">{item.designation}</small>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Clients Said</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>
    <ContactFooter/>
    <ScrollToTop/>
    </>
  )
}
