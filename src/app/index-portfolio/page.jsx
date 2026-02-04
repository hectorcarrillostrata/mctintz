import React from 'react'
import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import PortfolioOne from '../components/portfolio/portfolio-one'
import PortfolioFooterTop from '../components/portfolio/portfolio-footer-top'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function Portfilo() {
  return (
    <>
    <PortfolioNavbar/>

    <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/work/bg-portfolio.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center mt-5 pt-4">
                      <h1 className="display-1 fw-bold mb-3">Minimal Portfolio</h1>
                      <p className="para-desc mx-auto h6">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
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
      <PortfolioOne/>
      <PortfolioFooterTop/>
    </section>
    <AiFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
