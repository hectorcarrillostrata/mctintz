import React from 'react'
import CryptoNavbar from '../components/navbar/crypto-navbar'
import Link from 'next/link'

import {FiArrowRight} from 'react-icons/fi'
import Image from 'next/image'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function CryptoWhitepaper() {
  return (
    <>
    <CryptoNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/shape02.png')", backgroundPosition:"top left"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Whitepapers </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-crypto">Crypto</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Whitepapers</li>
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
              <div className="col-lg-7 col-md-6">
                  <div className="section-title">
                      <h4 className="mb-4">What Is a White Paper?</h4>
                      <ul className="list-unstyled mb-5">
                          <li className="d-flex text-muted mt-2">
                            <div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>Whitepapers explain the purpose and technology behind a project.</li>

                          <li className="d-flex text-muted mt-2"><div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>They usually provide statistics, diagrams and facts to convince interested investors to purchase the cryptocurrency.</li>
                          
                          <li className="d-flex text-muted mt-2">
                            <div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>
                            Producing a whitepaper is key a step required for a crypto startup to be considered legitimate and professional, as it helps investors understand how a business is different from rivals in the space.</li>
                          
                          <li className="d-flex text-muted mt-2"><div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>Whitepapers differ from litepapers, which tend to be shorter, less technical and easier to understand.</li>
                          
                          <li className="d-flex text-muted mt-2"><div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>One of the most famous cryptocurrency whitepapers is undoubtedly Bitcoin: A Peer-to-Peer Electronic Cash System, which was published by Satoshi Nakamoto in 2008.</li>
                      </ul>


                      <h5 className="mb-4">The Bitcoin whitepaper proposed the following:</h5>

                      <ul className="list-unstyled mb-0">
                          <li className="d-flex text-muted mt-2"><div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>A peer-to-peer (P2P) system for payments across an online network</li>
                          <li className="d-flex text-muted mt-2"><div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>Removing third parties and replacing them with verification (decentralization)</li>
                          <li className="d-flex text-muted mt-2"><div>
                              <FiArrowRight className="text-primary h5 mb-0 me-2"/>
                            </div>Transactions would be irreversible</li>
                          <li className="d-flex text-muted mt-2"><div><FiArrowRight className="text-primary h5 mb-0 me-2"/></div>A P2P distributed timestamp server. This would generate mathematical proof of an order of different transactions.</li>
                      </ul>
                  </div>

                  <div className="mt-4">
                      <Link href="#" className="btn btn-soft-primary">Download</Link>
                  </div>
              </div>

              <div className="col-lg-4 offset-lg-1 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="p-4 shadow rounded bg-black">
                      <Image src="/images/crypto/bills.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                      <h4 className="text-white title-dark mb-3 mt-4">Terms & Conditions</h4>
                      <p className="text-muted mb-0">A document released by a crypto project that gives investors technical information about its concept, and a roadmap for how it plans to grow and succeed.</p>
                  </div>

                  <div className="tagcloud mt-4">
                      <h5 className="mb-4">Related Terms & Conditions</h5>

                      <Link href="#" className="rounded">Circulating Supply</Link>
                      <Link href="#" className="rounded">Currency</Link>
                      <Link href="#" className="rounded">Digital Art</Link>
                      <Link href="#" className="rounded">All-Time-High (ATH)</Link>
                      <Link href="#" className="rounded">Immutable</Link>
                      <Link href="#" className="rounded">Futures</Link>
                      <Link href="#" className="rounded">Contract Account</Link>
                  </div>
              </div>
          </div>
      </div>
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h4 className="title mb-4">Be the first to know about Crypto news everyday</h4>
                      <p className="para-desc mx-auto text-muted mb-0">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
                  
                      <div className="subcribe-form mt-5">
                          <form>
                              <div className="mb-2">
                                  <input type="email" id="email2" name="email" className="rounded-pill border" placeholder="E-mail :"/>
                                  <button type="submit" className="btn btn-pills btn-primary">Notify Me</button>
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
