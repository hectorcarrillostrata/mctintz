import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import {FiChevronRight} from 'react-icons/fi'
import CtaTwo from '../components/cta/cta-two'
import KeyFeature from '../components/feature/key-feature'
import ClientOne from '../components/client/client-one'
import BlogOne from '../components/blog/blog-one'
import Footer from '../components/footer/footer'
import CookiesModal from '../components/cookiesModal'
import ScrollToTop from '../components/scroll-to-top'

import { featureOne } from '../data/feature'


export default function IndexAgency() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-7 order-1 order-md-2">
                  <div className="title-heading mt-4 ms-lg-5 ps-lg-5">
                      <h1 className="heading mb-3">We are Startup Creative <span className="text-primary">Landrick</span> Agency</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1">Learn More <i className="uil uil-angle-right-b"></i></Link>
                          <VideoOne/>
                          <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <Image src="/images/illustrator/working_with_computer.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
            {featureOne.slice(0,3).map((item,index)=>{
              let Icon = item.icon
              return(
                  <div className="col-md-4 col-12 mt-5" key={index}>
                    <div className="features feature-primary text-center">
                        <div className="image position-relative d-inline-block">
                            <Icon className="h2 text-primary"></Icon>
                        </div>

                        <div className="content mt-4">
                            <h5>Management & Marketing</h5>
                            <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.</p>
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
                  <Image src="/images/saas/2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-3">
                      <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className="align-middle"></FiChevronRight></Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <CtaTwo/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Template Key Features</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <KeyFeature/>
      </div>
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Client Reviews</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Latest News</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <BlogOne/>
      </div>
    </section>
    <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <Footer/>
    <CookiesModal/>
    <ScrollToTop/>
    </>
  )
}
