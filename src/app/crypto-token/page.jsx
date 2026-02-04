import React from 'react'
import CryptoNavbar from '../components/navbar/crypto-navbar'
import TokenHero from '../components/crypto/token-hero'
import { tokenAbout } from '../data/crypto'
import SucessSlider from '../components/crypto/sucess-slider'
import Image from 'next/image'
import Counter from '../components/counter'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'
import CryptoVision from '../components/crypto/crypto-vision'

export default function CryptoToken() {
  return (
    <>
     <CryptoNavbar navlight={true}/> 
     <TokenHero/>
    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-3">It's easier than you think</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
            {tokenAbout.map((item,index)=>{
              let Icon = item.icon
              return(
                  <div className="col-md-4 col-12 mt-4" key={index}>
                      <div className="card border-0 text-center features feature-primary feature-clean p-4">
                          <div className="icons text-center mx-auto rounded">
                              <Icon className="h3 mb-0"/>
                          </div>

                          <div className="card-body p-0 mt-4">
                              <h5>{item.title}</h5>
                              <p className="text-muted mb-0">{item.desc}</p>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Success Roadmap</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <SucessSlider/>
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
