import React from 'react'
import Image from 'next/image'

import ShopNavbar from '../components/navbar/shop-navbar'
import ShopFooter from '../components/footer/shop-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function ShopBlogDetail() {
  return (
    <>
     <ShopNavbar/> 

    <section className="bg-half d-table w-100 bg-light">
      <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-lg-8">
                  <div className="section-title">
                      <span className="badge text-bg-primary" style={{margin:'0 2px'}}>Shop</span>
                      <span className="badge text-bg-primary" style={{margin:'0 2px'}}>Men</span>
                      <h4 className="title fw-medium mb-4 mt-2">The best ways to change your summer wardrobe into autumn wardrobe</h4>
                      <p className="text-muted mb-5">It enables peer-to-peer exchange of value in the digital realm through the use of a decentralized protocol, cryptography, and a mechanism to achieve global consensus on the state of a periodically updated public transaction ledger called a 'blockchain.'</p>
                  
                      <Image src="/images/blog/04.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>

                      <h5 className="my-4">Blockchain's origin, early growth, and evolution</h5>

                      <p className="text-muted">The paper detailed methods for "allowing any two willing parties to transact directly with each other without the need for a trusted third party." The technologies deployed solved the 'double spend' problem, enabling scarcity in the digital environment for the first time.</p>
                      <p className="text-muted">The listed author of the paper is Satoshi Nakamoto, a presumed pseudonym for a person or group who's true identity remains a mystery. Nakamoto released the first open-source Landrick software client on January 9th, 2009, and anyone who installed the client could begin using Landrick.</p>
                      <p className="text-muted">Initial growth of the Landrick network was driven primarily by its utility as a novel method for transacting value in the digital world. Early proponents were, by and large, 'cypherpunks' - individuals who advocated the use of strong cryptography and privacy-enhancing technologies as a route to social and political change. However, speculation as to the future value of Landrick soon became a significant driver of adoption.</p>
                      <p className="text-muted">The price of Landrick and the number of Landrick users rose in waves over the following decade. As regulators in major economies provided clarity on the legality of Landrick and other cryptocurrencies, a large number of Landrick exchanges established banking connections, making it easy to convert local currency to and from Landrick. Other businesses established robust custodial services, making it easier for institutional investors to gain exposure to the asset as a growing number of high-profile investors signaled their interest.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <ShopFooter/>
    <ScrollToTop/>
    </>
  )
}
