import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import EventHero from '../components/hero-section/event-hero'
import PartnerOne from '../components/partner/partner-one'
import EventTab from '../components/tab/event-tab'
import EventCta from '../components/cta/event-cta'
import ClientSingle from '../components/client/client-single'
import Schedule from '../components/get-in-touch/schedule'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { teamOne, teamSocial } from '../data/team'
import { eventBlog } from '../data/blogData'
import {FiChevronRight, FiHeart, FiMessageCircle, } from 'react-icons/fi'
import {LuUser, LuCalendarDays} from 'react-icons/lu'

export default function Event() {
  return (
    <>
     <Navbar navlight={true}/> 
     <EventHero/>

      <div className="position-relative">
        <div className="shape overflow-hidden">
            <div className="text-center p-4">
                <h5 className="mb-0 text-white title-dark">Next Event : 15th March, 2023</h5>
            </div>
        </div>
      </div>

      <section className="section border-top">
        <div className="container">
            <div className="card rounded shadow border-0 bg-light overflow-hidden">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <Image src="/images/event/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body section-title p-md-5">
                            <h4 className="title mb-4">Business Startup Conference</h4>
                            <p className="text-muted para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-outline-primary">Read More <FiChevronRight className=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <h4 className="title mb-4">Our Speakers</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {teamOne.map((item,index)=>{
                return(
                    <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card team team-primary text-center rounded border-0">
                            <div className="card-body">
                                <div className="position-relative">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                                    <ul className="list-unstyled mb-0 team-icon">
                                      {teamSocial.map((item,index)=>{
                                        let Icon = item
                                        return(
                                          <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                        )
                                      })}
                                    </ul>
                                </div>
                                <div className="content pt-3">
                                    <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                    <small className="designation text-muted">Speaker</small>
                                </div>
                            </div>
                        </div>
                    </div>  
                )
              })}
            </div>
        </div>

        <div className="container mt-100 mt-50">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Event Sponsors</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>
            <PartnerOne/>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-color-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
      </div>

      <EventTab/>
      <EventCta/>

      <section className="section" id="tickets">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Our Tickets Rates</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-4 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan bg-light text-center border-0 rounded">
                        <div className="card-body py-5">
                            <Image src="/images/icon/ticket1.svg" width={50} height={50} className="mb-4" alt=""/>
                            <h6 className="title text-uppercase fw-bold mb-4">1 Day Tickets</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">09</span>
                                <span className="h4 align-self-end mb-1">/Day</span>
                            </div>

                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Buy Tickets</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan text-center border-0 shadow rounded">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                        <div className="card-body py-5">
                            <Image src="/images/icon/ticket2.svg" width={50} height={50} className="mb-4" alt=""/>
                            <h6 className="title text-uppercase fw-bold mb-4">Full Tickets</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">24</span>
                                <span className="h4 align-self-end mb-1">/Full</span>
                            </div>
                            
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Buy Tickets</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan bg-light text-center border-0 rounded">
                        <div className="card-body py-5">
                            <Image src="/images/icon/ticket3.svg" width={50} height={50} className="mb-4" alt=""/>
                            <h6 className="title text-uppercase fw-bold mb-4">Couple Tickets</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">16</span>
                                <span className="h4 align-self-end mb-1">/Day</span>
                            </div>
                            
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Buy Tickets</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Events Review</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-9 mt-4 pt-2 text-center">
                    <ClientSingle/>
                </div>
            </div>
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
                        <h4 className="title mb-4">Event Blog & Latest News</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {eventBlog.map((item,index)=>{
                return(
                  <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                      <div className="card blog blog-primary rounded border-0 shadow">
                          <div className="position-relative">
                              <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt=""/>
                              <div className="overlay rounded-top"></div>
                          </div>
                          <div className="card-body content">
                              <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                              <div className="post-meta d-flex justify-content-between mt-3">
                                  <ul className="list-unstyled mb-0">
                                      <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                  </ul>
                                  <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                              </div>
                          </div>
                          <div className="author">
                              <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                              <small className="date"><LuCalendarDays className=""/> {item.date}</small>
                          </div>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <Schedule title="Sign up for our Newsletter"/>
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
      <ScrollToTop/>
      <CookiesModal/>
    </>
  )
}
