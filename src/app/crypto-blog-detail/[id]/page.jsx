import React, { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CryptoNavbar from '../../components/navbar/crypto-navbar'
import NewsletterFooter from '../../components/footer/newsletter-footer'
import ScrollToTop from '../../components/scroll-to-top'
import { blogData } from '../../data/crypto'

export default function CryptoBlogDetail({params}) {
    let {id} = use(params)
    let data = blogData.find((item)=> item.id === parseInt(id))
  return (
    <>
    <CryptoNavbar/> 

    <section className="bg-half-170 d-table w-100 bg-light">
      <div className="container">
          <div className="row mt-5">
              <div className="col-lg-8 col-md-7">
                  <div className="section-title me-lg-5">
                      <h4 className="title fw-medium mb-4">{data?.title}</h4>
                      <p className="text-muted mb-5">It enables peer-to-peer exchange of value in the digital realm through the use of a decentralized protocol, cryptography, and a mechanism to achieve global consensus on the state of a periodically updated public transaction ledger called a 'blockchain.'</p>
                  
                      <Image src={data?.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>

                      <h5 className="my-4">Blockchain's origin, early growth, and evolution</h5>

                      <p className="text-muted">The paper detailed methods for "allowing any two willing parties to transact directly with each other without the need for a trusted third party." The technologies deployed solved the 'double spend' problem, enabling scarcity in the digital environment for the first time.</p>
                      <p className="text-muted">The listed author of the paper is Satoshi Nakamoto, a presumed pseudonym for a person or group who's true identity remains a mystery. Nakamoto released the first open-source Landrick software client on January 9th, 2009, and anyone who installed the client could begin using Landrick.</p>
                      <p className="text-muted">Initial growth of the Landrick network was driven primarily by its utility as a novel method for transacting value in the digital world. Early proponents were, by and large, 'cypherpunks' - individuals who advocated the use of strong cryptography and privacy-enhancing technologies as a route to social and political change. However, speculation as to the future value of Landrick soon became a significant driver of adoption.</p>
                      <p className="text-muted">The price of Landrick and the number of Landrick users rose in waves over the following decade. As regulators in major economies provided clarity on the legality of Landrick and other cryptocurrencies, a large number of Landrick exchanges established banking connections, making it easy to convert local currency to and from Landrick. Other businesses established robust custodial services, making it easier for institutional investors to gain exposure to the asset as a growing number of high-profile investors signaled their interest.</p>
                  </div>
              </div>

              <div className="col-lg-4 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card p-4 text-center rounded shadow border-0 sticky-bar">
                      <Image src="/images/logo-icon.png" width={65} height={65} className="avatar avatar-small d-block mx-auto" alt=""/>

                      <h5 className="mt-4">Buy as little as $30 worth to get started</h5>

                      <Image src="/images/crypto/bills.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                      <Link href="#" className="btn btn-primary">Buy Now</Link>

                      <h6 className="text-muted mb-0 mt-3">Choose from Bitcoin, Bitcoin Cash, Ethereum, and more...</h6>
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
