import React from 'react'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import RealEstateAbout from '../components/react-estate/real-estate-about'
import Brokerage from '../components/react-estate/brokerage'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function PropertySell() {
  return (
    <>
    <RealEstateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-black opacity-7"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark mb-0"> Sell Faster. Save Thousands. </h2>
                  </div>
              </div>
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
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">How It Works</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <RealEstateAbout/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Brokerage Calculator</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <Brokerage/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
