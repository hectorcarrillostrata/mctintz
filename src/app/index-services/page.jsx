import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import Schedule from '../components/get-in-touch/schedule'
import PartnersSlider from '../components/partner/partners-slider'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import Counter from '../components/counter'

import { serviceFeature } from '../data/feature'

import {FiChevronRight} from 'react-icons/fi'

export default function Services() {
  return (
    <>
     <Navbar/> 
    <section className="bg-half-170 d-table w-100" id="home">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                  <div className="title-heading mt-4">
                      <h1 className="heading mb-3">Build Anything <br/>For Your Project</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="/page-services" className="btn btn-primary m-1">Our Services</Link>
                          <VideoOne/>
                          <span className="fw-bold text-uppercase small align-middle ms-2">Watch Now</span>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <Image src="/images/illustrator/services.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="row">
            {serviceFeature.map((item,index)=>{
              let Icon = item.icon
             return(
                <div className="col-md-4 col-12" key={index}>
                  <div className="features feature-primary text-center">
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
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Get Notified About Importent Email</h4>
                      <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                      <Link href="#" className="btn btn-outline-primary d-inline-flex align-items-center">Start Now <FiChevronRight className="ms-1"/></Link>
                  </div>
              </div>

              <div className="col-md-6 order-1 order-md-2">
                  <Image src="/images/laptop.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center" id="counter">
              <div className="col-md-4 mt-4 pt-2">
                  <div className="counter-box text-center px-lg-4">
                      <h2 className="mb-0 text-primary display-4"><Counter end={97}/>%</h2>
                      <h5 className="counter-head">Happy Client</h5>
                      <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 pt-2">
                  <div className="counter-box text-center px-lg-4">
                      <h2 className="mb-0 text-primary display-4"><Counter end={15}/>+</h2>
                      <h5 className="counter-head">Awards</h5>
                      <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 pt-2">
                  <div className="counter-box text-center px-lg-4">
                      <h2 className="mb-0 text-primary display-4"><Counter end={93}/>%</h2>
                      <h5 className="counter-head">Project Complete</h5>
                      <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <Image src="/images/illustrator/analyze_report_4.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="me-md-4" alt=""/>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Clean And Modern Code</h4>
                      <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                      <Link href="#" className="btn btn-outline-primary d-inline-flex align-items-center ">Start Now <FiChevronRight className="ms-1"/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="mt-100 mt-60">
        <PartnersSlider/>
      </div>

      <div className="container mt-100 mt-60">
          <Schedule title="Subscribe for our Latest Newsletter"/>
      </div>    
    </section>

    <FooterLight/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
