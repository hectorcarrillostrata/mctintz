import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CryptoNavbar from '../components/navbar/crypto-navbar'
import CryptoVision from '../components/crypto/crypto-vision'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

import { cryptoServices, cryptotrader } from '../data/crypto'
import {FiArrowRight, FiChevronRight} from 'react-icons/fi'

export default function CryptoService() {
  return (
    <>
    <CryptoNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/shape02.png')", backgroundPosition:'top left'}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Services </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-crypto">Crypto</Link></li>
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
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Become a crypto trader in seconds</h4>
                        <p className="text-muted para-desc mx-auto mb-0">We've got everything you need to start trading.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="row justify-content-center">
                        {cryptotrader.map((item,index)=>{
                        return(
                            <div className="col-md-6 mt-4 pt-2" key={index}>
                                <div className="feature feature-primary position-relative ps-4 py-4 pe-5 shadow rounded overflow-hidden">
                                    <div className="me-md-5">
                                        <Link href="#" className="title h5 text-dark">{item.title}</Link>
                                        <p className="text-muted mb-3 mt-4">{item.desc}</p>
                                        <Link href="#" className="text-primary">{item.btn}<FiArrowRight className=""/></Link>
                                    </div>
                                    <div className="position-absolute top-50 start-100 translate-middle">
                                        <Image src={item.image} width={140} height={140} className="avatar avatar-large opacity-2" alt=""/>
                                    </div>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Services</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                {cryptoServices.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-center rounded mx-auto">
                                    <Icon className="h3 mb-0"/>
                                </div>
                                <div className="card-body p-0 mt-4">                                            
                                    <Link href="#" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2">{item.desc}</p>
                                    <Link href="#" className="read-more">Read More <FiChevronRight className=""/></Link>
                                    <Icon className="full-img"/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

      <div className="container mt-100 mt-60">
          <CryptoVision/>
      </div>
    </section>
    
    <NewsletterFooter/>
    <ScrollToTop/>
    </>
  )
}
