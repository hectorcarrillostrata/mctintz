import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CryptoNavbar from '../components/navbar/crypto-navbar'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

import { LuWallet, LuMailCheck, LuWebcam} from 'react-icons/lu'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { FiTrendingUp } from 'react-icons/fi'

export default function CryptoAbout() {
  return (
    <>
     <CryptoNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/shape02.png')", backgroundPosition:'top left'}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> About us </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-crypto">Crypto</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
              <div className="col-md-6">
                  <div className="position-relative me-lg-5">
                      <Image src="/images/crypto/revenue.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <span className="badge bg-soft-primary rounded">About</span>
                      <h4 className="title mb-3 mt-2">Our Story</h4>

                      <p className="text-muted">We are building the cryptoeconomy - a more fair, accessible, efficient, and transparent financial system enabled by crypto.</p>

                      <p className="text-muted mb-0">We started in 2021 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-7 order-2 order-md-1">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-3">Build the future of technology</h4>
                      <p className="text-muted">What's the secret to Landrick's success? The answer is obvious: Our people. We are proud to have one of the most talented, hardworking and passionate teams the world has to offer. Interested in joining our team?</p>
                  
                      <ul className="list-unstyled text-muted mb-0">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span><span className="fw-medium">Landrick Wallet.</span>  Your Keys, Your Crypto.</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span><span className="fw-medium">Landrick Earn.</span>  No lock-up period and stable returns.</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span><span className="fw-medium">Landrick Swap.</span>  Swap Landrick coins and earn Triple Yield.</li>
                      </ul>

                      <div className="mt-4">
                          <Link href="#" className="btn btn-soft-primary d-inline-flex align-items-center"><LuWallet className="me-1"/> Go to wallet</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 order-1 order-md-2">
                  <Image src="/images/crypto/bills.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-7 order-1 order-md-2">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-3">Join us</h4>
                      <p className="text-muted mb-0">We’re currently hiring. If our company mission means something to you, you’re invited to join the Bitcoin.com team.</p>

                      <div className="mt-4">
                          <Link href="#" className="btn btn-soft-primary"><FiTrendingUp className=""/> See Positions</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 order-2 order-md-1">
                  <Image src="/images/crypto/profit.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex align-items-center features feature-primary feature-clean shadow rounded p-4">
                      <div className="icons rounded text-center">
                          <LuMailCheck className="h3 mb-0"/>
                      </div>
                      <div className="flex-1 content ms-4">
                          <h5 className="mb-1"><Link href="#" className="text-dark">Get in Touch !</Link></h5>
                          <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                          <div className="mt-2">
                              <Link href="#" className="btn btn-sm btn-soft-primary">Submit a Request</Link>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="d-flex align-items-center features feature-primary feature-clean shadow rounded p-4">
                      <div className="icons rounded text-center">
                          <LuWebcam className="h3 mb-0"/>
                      </div>
                      <div className="flex-1 content ms-4">
                          <h5 className="mb-1"><Link href="#" className="text-dark">Start a Meeting</Link></h5>
                          <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                          <div className="mt-2">
                              <Link href="#" className="btn btn-sm btn-soft-primary">Start Video Chat</Link>
                          </div>
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
