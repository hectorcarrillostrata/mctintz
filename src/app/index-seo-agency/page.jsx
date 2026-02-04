import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import SeoMasonary from '../components/masonary-image/seo-masonary'
import PricingTab from '../components/pricing/pricing-tab'
import Footer from '../components/footer/footer'
import ClientOne from '../components/client/client-one'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { seoFeature } from '../data/feature'

import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function SeoAgency() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-260 bg-light d-table w-100" style={{backgroundImage:"url('/images/seo/bg.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="title-heading">
                      <span className="badge rounded-pill bg-soft-primary"><b>Best SEO Service</b></span>
                      <h4 className="heading my-4">An expert search engine optimization</h4>
                      <p className="para-desc mx-auto text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-pills btn-primary m-1">Get Started</Link>
                          <Link href="#" className="btn btn-pills btn-soft-primary m-1">Learn More</Link>
                      </div>
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
              <div className="col-lg-11">
                  <div className="features-absolute">
                      <SeoMasonary/>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                    <span className="badge rounded-pill bg-soft-primary">Work Process</span>
                    <h4 className="title mt-3 mb-4">How it works ?</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row">
          {seoFeature.map((item,index)=>{
            let Icon = item.icon;
            return(
                <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
                  <div className="features feature-primary text-center">
                      <div className="image position-relative d-inline-block">
                          <Icon className="h2 text-primary"/>
                      </div>

                      <div className="content mt-4">
                          <h5>{item.title}</h5>
                          <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                  </div>
                </div>
            )
          })}

            <div className="col-12 mt-5 text-center">
                <Link href="#" className="btn btn-pills btn-primary">See More</Link>
            </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="me-lg-5">
                    <Image src="/images/illustrator/big-launch.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>

            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title">
                    <h4 className="title mb-4">We help you increase <br/> sales by improving SEO</h4>
                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                    <ul className="list-unstyled text-muted">
                        <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                    </ul>
                    <Link href="#" className="mt-3 h6 text-primary">See more solutions <FiChevronRight className=""/></Link>
                </div>
            </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-md-6 order-1 order-md-2">
                  <div className="ms-lg-5">
                      <Image src="/images/illustrator/maintenance.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title">
                      <h4 className="title mb-4">Advantages of SEO & <br/> Marketing strategy</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-pills btn-soft-primary">Know more</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="bg-primary rounded shadow py-5" style={{backgroundImage:"url('/images/seo/cta.png')", backgroundPosition:'center'}}>
              <div className="container my-md-5">
                  <div className="row">
                      <div className="col-12 text-center">
                          <div className="section-title">
                              <h4 className="title text-white title-dark mb-4">Check your website SEO</h4>
                              <p className="text-white-50 para-desc mb-0 mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                              <div className="subcribe-form mt-4 pt-2">
                                  <form>
                                      <div className="mb-0">
                                          <input type="url" id="url" className="rounded-pill bg-white-50 border" required placeholder="https://shreethemes.in"/>
                                          <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <PricingTab/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Client's Review</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
