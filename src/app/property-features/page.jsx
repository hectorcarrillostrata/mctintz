import React from 'react'
import Link from 'next/link'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import ClientOne from '../components/client/client-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { propertyFeatures } from '../data/real-estate'

export default function PropertyFeature() {
  return (
    <>
    <RealEstateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-black opacity-7"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark mb-0"> Services / Features </h2>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-real-estate">Real Estate</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Features</li>
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
            {propertyFeatures.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean rounded p-4">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h4 mb-0"/>
                        </div>

                        <div className="card-body p-0 mt-4">
                            <Link href="#" className="title h5 text-dark">{item.title}</Link>
                            <p className="text-muted mt-3 mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">What Our Client Say ?</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <GetInTouch/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
