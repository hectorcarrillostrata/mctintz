import React from 'react'
import Link from 'next/link'

import CryptoNavbar from '../components/navbar/crypto-navbar'
import FaqTab from '../components/crypto/faq-tab'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function CryptoFaq() {
  return (
    <>
     <CryptoNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/shape02.png')", backgroundPosition:'top left' }}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> FAQs </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-crypto">Crypto</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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

    <FaqTab/>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h4 className="title mb-4">Be the first to know about Crypto news everyday</h4>
                      <p className="para-desc mx-auto text-muted mb-0">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
                  
                      <div className="subcribe-form mt-5">
                          <form>
                              <div className="mb-0">
                                  <input type="email" id="email2" name="email" className="rounded-pill border" required placeholder="Enter your email address"/>
                                  <button type="submit" className="btn btn-pills btn-primary">Notify me</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <NewsletterFooter/>
    <ScrollToTop/>
    </>
  )
}
