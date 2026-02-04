import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ShopFooter from '../components/footer/shop-footer'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'
import AiFooter from '../components/footer/ai-footer'
import ContactFooter from '../components/footer/contact-footer'
import FooterLight from '../components/footer/footer-light'
import SmallFooter from '../components/footer/small-footer'
import SmallFooterTwo from '../components/footer/small-footer-two'
import BlogFooter from '../components/footer/blog-footer'
import FoodFooter from '../components/footer/food-footer'

export default function Footers() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Footer </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Footer</li>
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
                  <div className="section-title text-center">
                      <h4 className="title mb-0">Footer #1</h4>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <Footer/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h4 className="title mb-0">Footer #2</h4>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <ShopFooter/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h4 className="title mb-0">Footer #3</h4>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <NewsletterFooter/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h4 className="title mb-0">Footer #4</h4>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <AiFooter/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #5</h4>
                </div>
            </div>
        </div>
    </div>
  </section>

  <ContactFooter/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #Light</h4>
                </div>
            </div>
        </div>
    </div>
  </section>

  <FooterLight/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #7</h4>
                </div>
            </div>
        </div>
    </div>
  </section>
  <SmallFooter/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #8</h4>
                </div>
            </div>
        </div>
    </div>
  </section>
  <SmallFooterTwo/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #9</h4>
                </div>
            </div>
        </div>
    </div>
  </section>
  <BlogFooter/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #10</h4>
                </div>
            </div>
        </div>
    </div>
  </section>

  <ContactFooter full={true}/>

  <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-0">Footer #10</h4>
                </div>
            </div>
        </div>
    </div>
  </section>
  <FoodFooter/>

    <ScrollToTop/>
    </>
  )
}
