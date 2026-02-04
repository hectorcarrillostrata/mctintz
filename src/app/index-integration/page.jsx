import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import AppFooter from '../components/footer/app-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { integrationFeature, integrationFeatureTwo } from '../data/feature'
import {FiArrowRight, FiArrowRightCircle } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function Integration() {
  return (
    <>
    <Navbar navlight={true}/> 

    <section className="bg-home bg-primary d-flex align-items-center" style={{backgroundImage:"url('/images/integration/bg.png')", backgroundPosition:'center', height:'auto'}} id="home">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading">
                      <span className="badge rounded-pill bg-success">Integration</span>
                      <h4 className="heading text-white title-dark my-3">The future is too <br/> <b>Interesting</b> and to be <b>Predictable</b>.</h4>
                      <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                  </div>

                  <div className="text-center subcribe-form mt-4 pt-2">
                      <form>
                          <input type="url" id="url" className="border bg-white rounded-lg" style={{opacity:'0.85'}} required placeholder="https://shreethemes.in"/>
                          <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                      </form>
                  </div>

                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                          <div className="home-dashboard">
                              <Image src="/images/integration/hero.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <div className="position-relative">
        <div className="shape integration-hero overflow-hidden text-light"></div>
    </div>

    <section className="mt-5 pt-md-5">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="row">
                    {integrationFeature.map((item,index)=>{
                      let Icon = item.icon
                      return(
                        <div className="col-md-6 mt-4 pt-2" key={index}>
                          <div className="d-flex features feature-primary feature-clean core-feature rounded shadow p-4">
                              <div className="rounded icons text-center mx-auto">
                                  <Icon className="h3 mb-0"/>
                              </div>
                              <div className="flex-1 ms-4">
                                  <Link href="#" className="title text-dark h5">Compliance</Link>
                                  <p className="text-muted mt-2 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                              </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="col-12 mt-4 pt-2 text-center">
                    <Link href="#" className="text-primary h6">Explore features <FiArrowRight className="fea icon-sm"/></Link>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/integration/interactiondesign-amico.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Integrate with monitoring & alerting tools</h4>
                      
                      <h5><FiArrowRightCircle className="text-primary me-1"/> Monitoring tool integrations</h5>
                      <p className="text-muted para-desc ms-4 ps-2">Integrate Statuspage with DataDog, New Relic, Librato or Pingdom to update your page as soon as an issue is detected.</p>
                      <h5><FiArrowRightCircle className="text-primary me-1"/> Alerting tool integrations</h5>
                      <p className="text-muted para-desc ms-4 ps-2">Integrate Statuspage with Opsgenie, PagerDuty, VictorOps, or xMatters to update status directly from your alerting app.</p>
                      <h5><FiArrowRightCircle className="text-primary me-1"/> Automation via API or email</h5>
                      <p className="text-muted para-desc ms-4 ps-2">Use our REST API to programmatically update your status page by writing your own integration, or automatically update the status of components by triggering en email with a subject line containing the words “UP” or “DOWN”.</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
            {integrationFeatureTwo.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0" key={index}>
                  <Link href="#">
                      <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                          <Image src={item.image} width={24} height={24} className="avatar avatar-ex-sm" alt=""/>
                          <div className="flex-1 ms-3">
                              <h4 className="title mb-0 text-dark">{item.title}</h4>
                              <p className="text-muted mb-0">{item.name}</p>    
                          </div>
                      </div>
                  </Link>
              </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <Image src="/images/integration/1.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Deliver your websites <br/> faster, and better.</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Read More <FiArrowRight className="fea icon-sm"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <AppFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
