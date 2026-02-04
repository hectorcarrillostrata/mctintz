import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'

import {FiChevronRight} from 'react-icons/fi'
import {MdOutlineCheckCircleOutline} from 'react-icons/md'
import Image from 'next/image'
import PartnerOne from '../components/partner/partner-one'
import { mailFeature } from '../data/feature'
import VideoOne from '../components/video/video-one'
import ClientOne from '../components/client/client-one'
import MobileApp from '../components/get-in-touch/mobile-app'
import PricingTabThree from '../components/pricing/pricing-tab-three'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function EmailInbox() {
  return (
    <>
    <Navbar/> 
    <section className="bg-home d-flex align-items-center" style={{height:'auto'}} id="home">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading margin-top-100">
                      <h1 className="heading fw-bold mb-3">We Build A Design <br/> For Email Inbox</h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#about" className="btn btn-primary d-inline-flex align-items-center">Start Free Trial <FiChevronRight className="ms-1"/></Link>
                      </div>
                  </div>

                  <div className="row justify-content-center">
                      <div className="col-lg-10">
                          <div className="home-dashboard">
                              <Image src="/images/email/home.png" width={0} height={0} sizes='100vw' alt="" className="img-fluid rounded-md shadow-lg" style={{zIndex:"0",width:'100%', height:'auto'}}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section py-4 bg-light">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section border-bottom">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Features</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {mailFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 mt-5" key={index}>
                    <div className="d-flex features feature-primary feature-clean">
                        <div className="rounded icons text-center mx-auto">
                            <Icon className="h3 mb-0"/>
                        </div>
                        <div className="flex-1 content ms-4">
                            <h5 className="mb-2"><Link href="#" className="text-dark title">{item.title}</Link></h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>

          <div className="row justify-content-center">
              <div className="col-12 mt-5">
                  <div className="text-center">
                      <Link href="#" className="btn btn-primary m-1">Get Started <FiChevronRight className=""/></Link>
                      <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <Image src="/images/laptop.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div> 

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Make your website <br/> growth with next level visitors</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-md-6 order-1 order-md-2">
                  <Image src="/images/illustrator/inbox-cleanup.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>

              <div className="col-md-6 order-2 order-md-1">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Meet our business <br/> partner who work behind the scene</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
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
    </section>

    <section className="section bg-light">
      <PricingTabThree/>

      <div className="container mt-100 mt-60">
          <MobileApp/>
      </div>
    </section>

    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
