import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HostingNavbar from '../components/navbar/hosting-navbar'
import AboutOne from '../components/about/about-one'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import { hostingFeature } from '../data/hosting'
import { teamOne, teamSocial } from '../data/team'

import {FiArrowRightCircle} from 'react-icons/fi'

export default function HostingAboutus() {
  return (
    <>
    <HostingNavbar/> 
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hosting/pages.png')"}}>
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h4 className="title text-white title-dark mb-4"> Company Story </h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-hosting">Hosting</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">About us</li>
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
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                  <div className="me-lg-4">
                      <Image src="/images/hosting/2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title">
                      <h6 className="text-primary">Company Story</h6>
                      <h4 className="title mb-4">Landrick Hosting</h4>
                      <p className="text-muted para-desc">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                      <p className="text-muted para-desc mb-0">Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                      
                      <div className="mt-4">
                          <Link href="#" className="btn btn-soft-primary">Get Started <i className="mdi mdi-arrow-right"></i></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Why choose Hosting ?</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {hostingFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span className="h1 icon-color">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>SSD storage</h5>
                            <p className="para text-muted mb-0">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>
                        </div>
                        <div className="position-absolute top-0 end-0">
                            <Icon className="display-1 opacity-05"/>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="rounded-md bg-primary py-5 px-4">
              <div className="row py-md-5 py-4">
                  <div className="container">
                      <div className="row justify-content-center align-items-center">
                          <div className="col-lg-6 col-md-6 col-12">
                              <div className="section-title">
                                  <h6 className="text-white title-dark mb-3">Powered by SSD</h6>
                                  <h2 className="text-white title-dark mb-0">100% Faster Solid State Drive Server</h2>
                              </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                              <ul className="list-unstyled mb-0 ms-lg-5">
                                  <li className="text-white-50 my-2"><FiArrowRightCircle className="fea icon-ex-md me-1"/> Ultrafast Data Read/Write Speeds</li>
                                  <li className="text-white-50 my-2"><FiArrowRightCircle className="fea icon-ex-md me-1"/> Enterprise Grade Hardware</li>
                                  <li className="text-white-50 my-2"><FiArrowRightCircle className="fea icon-ex-md me-1"/> Highest Data Protection Reliability</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Team Members</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((el,index)=>{
                                let Icon = el
                                return(
                                  <li className="list-inline-item" key={index}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon  className="icons"/></Link></li>
                                )
                              })}
                            </ul>
                        </div>
                        <div className="card-body py-3 px-0 content">
                            <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                            <small className="designation text-muted">{item.designation}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row align-items-center mb-5 pb-2">
              <div className="col-md-6">
                  <div className="section-title">
                      <h4 className="title mb-md-0 mb-4">Frequently asked <br/> questions</h4>
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="section-title">
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          
          <AboutOne/>

          <GetInTouch/>
      </div>
    </section>

    <section className="py-md-4 py-5 bg-primary">
      <div className="container">
          <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
                  <h4 className="text-white title-dark mb-0">Start Building Your Website Today!</h4>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 text-center">
                  <div className="d-flex justify-content-center">
                      <span className="h6 text-white-50 mb-0 mt-2">$</span>
                      <span className="price text-white h1 mb-0">9.99</span>
                      <span className="h6 text-white-50 align-self-end mb-1">/month</span>
                  </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 text-center text-md-end">
                  <Link href="#" className="btn btn-warning">Get Started</Link>
              </div>
          </div>
      </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
