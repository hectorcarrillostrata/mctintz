import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import PartnerOne from '../components/partner/partner-one'
import DegitalAgencyTab from '../components/tab/degital-agency-tab'
import ClientSingle from '../components/client/client-single'
import AboutOne from '../components/about/about-one'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import PricingTabTwo from '../components/pricing/pricing-tab-two'

import { degitalAgencyFeature } from '../data/feature'

import { RiGooglePlayLine } from 'react-icons/ri'
import { FiArrowRight, FiChevronRight, FiPhone, FiSmartphone } from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function DigitalAgency() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/digital/home-bg.png')", backgroundPosition:'center'}} id="home">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="title-heading mt-4">
                      <div className="alert alert-light alert-pills shadow text-dark" role="alert">
                          <span className="badge rounded-pill bg-danger me-1">v5.0.0</span>
                          <span className="content"> Build <span className="text-primary">anything</span> you want - Landrick.</span>
                      </div>
                      <h1 className="heading mb-3">A <span className="text-primary">Digital</span> Product <br/> Marketing Agency</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-pills btn-primary m-1">Get Started</Link>
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <Image src="/images/digital/seo.gif" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="py-4 border-bottom border-top">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section overflow-hidden">
      <div className="container">
          <div className="row">
            {degitalAgencyFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                  <div className="col-lg-4 col-md-6 col-12 mt-4" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean rounded p-4">
                        <div className="rounded icons text-center mx-auto">
                            <Icon className="h3 mb-0"/>
                        </div>

                        <div className="card-body p-0 mt-4">
                            <Link href="#" className="title h5 text-dark">{item.title}</Link>
                            <p className="text-muted mt-3 mb-0">{item.desc}</p>
                            <div className="mt-2">
                                <Link href="#" className="read-more">Read More <FiArrowRight className="fea icon-sm"/></Link>
                            </div>
                        </div>
                    </div>
                  </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <Image src="/images/digital/about.png" width={0} height={0} sizes='100vw' style={{width:'478px', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <h4 className="title mb-4">We provide best SEO service</h4>
                      <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented &amp; Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1">Read More <FiChevronRight className=""/></Link>
                          <VideoOne/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <DegitalAgencyTab/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <Image src="/images/illustrator/app.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                  <div className="section-title">
                      <h4 className="title mb-4">A marketing agency that <br/> helps you succeed</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <Link href="#" className="btn btn-primary">Find More <FiArrowRight className="fea icon-sm"/></Link>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-light" style={{backgroundImage:"url('/images/digital/testi.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <ClientSingle/>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Our Pricing Plans</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PricingTabTwo/>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">Frequently Asked Questions</h4>
                <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>                        </div>
            </div>
        </div>

        <AboutOne/>

          <div className="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-4 justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                  <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                  <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  <Link href="/page-contact-two" className="btn btn-primary mt-4"><FiPhone/> Contact us</Link>
              </div>
            </div>
          </div>
      </div>
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section border-bottom bg-light">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12 order-1 order-md-2">
                  <Image src="/images/illustrator/user_interface.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
              </div>

              <div className="col-lg-7 col-md-7 col-12 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <h4 className="title mb-4">Available for your <br/> Smartphones</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="my-4">
                          <Link href="#" className="btn btn-lg btn-dark mt-2 me-2 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                          <Link href="#" className="btn btn-lg btn-dark mt-2 d-inline-flex align-items-center"><RiGooglePlayLine className="me-1"/> Play Store</Link>
                      </div>

                      <div className="d-inline-block">
                          <div className="pt-4 d-flex align-items-center border-top">
                              <FiSmartphone className="fea icon-md me-2 text-primary"/>
                              <div className="content">
                                  <h6 className="mb-0">Install app now on your cellphones</h6>
                                  <Link href="#" className="text-primary">Learn More <FiChevronRight className="align-middle"/></Link> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <FooterLight/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
