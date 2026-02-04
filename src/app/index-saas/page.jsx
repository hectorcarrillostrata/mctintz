import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import ClientOne from '../components/client/client-one'
import GetInTouchOne from '../components/get-in-touch/get-in-touch-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import PartnerOne from '../components/partner/partner-one'

import {FiChevronRight} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { featureOne } from '../data/feature'

export default function Saas() {
  return (
    <>
    <Navbar app={true}/>

    <section className="bg-home d-flex align-items-center" style={{backgroundImage:'url("/images/saas/home-shape.png")', backgroundPosition:'center', height:'auto'}} id="home">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading margin-top-100">
                      <h1 className="heading mb-3">Build fast, released quickly.</h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#about" className="btn btn-primary">Start Free Trial <FiChevronRight/></Link>
                      </div>
                  </div>

                  <div className="home-dashboard">
                      <Image src="/images/saas/home.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="" className="img-fluid"/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-light mt-0 mt-md-5">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Trusted Clients</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
            {featureOne.slice(3,6).map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 col-12 mt-5 mt-sm-0" key={index}>
                    <div className="features feature-primary">
                        <div className="image position-relative d-inline-block">
                            <Icon className="h2 text-primary"></Icon>
                        </div>

                        <div className="content mt-4">
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
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid shadow rounded" alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Get Notified About Importent Email</h4>
                      <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <Image src="/images/illustrator/app_development_SVG.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Whats Our Clients Said About <span className="text-primary">Landrick</span> Project</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container pb-lg-4 mb-md-5 mb-4 mt-100 mt-60">
          <GetInTouchOne/>
      </div>
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-footer">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
