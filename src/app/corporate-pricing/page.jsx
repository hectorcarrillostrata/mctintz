import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CorporateNavbar from '../components/navbar/corporate-navbar'
import PartnerOne from '../components/partner/partner-one'
import Counter from '../components/counter'
import PricingTwo from '../components/pricing/pricing-two'
import ClientOne from '../components/client/client-one'
import BlogOne from '../components/blog/blog-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function CorporatePricing() {
  return (
    <>
    <CorporateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/corporate/pages.jpg')" , backgroundPosition:"top"}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark"> Business Price </h2>
                      <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-corporate">Business</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Pricing</li>
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
          <div className="row align-items-center" id="counter">
              <div className="col-md-6">
                  <Image src="/images/company/about2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-lg-4">
                      <div className="d-flex mb-4">
                          <span className="text-primary h1 mb-0"><span className="counter-value display-1 fw-bold"><Counter end={15}/></span>+</span>
                          <span className="h6 align-self-end ms-2">Years <br/> Experience</span>
                      </div>
                      <div className="section-title">
                          <h4 className="title mb-4">Who we are ?</h4>
                          <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                          <Link href="#" className="btn btn-primary mt-3">Contact us</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-4">
          <PartnerOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h6 className="text-primary">Work Process</h6>
                      <h4 className="title mb-4">How do we works ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PricingTwo/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Clients Said</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <h6 className="text-primary">Blog</h6>
                      <h4 className="title mb-4 mb-lg-0">Reads Our Latest <br/> News & Blog</h4>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <p className="text-muted mb-0 mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <BlogOne/>
      </div>
    </section>
    <ContactFooter/>
    <ScrollToTop/>
    </>
  )
}
