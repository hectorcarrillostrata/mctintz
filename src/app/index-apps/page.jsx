import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import AppTab from '../components/tab/app-tab'
import PricingThree from '../components/pricing/pricing-three'
import ClientFour from '../components/client/client-four'
import GetApp from '../components/get-in-touch/get-app'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { keyFeature } from '../data/feature'

import { RiGooglePlayLine } from 'react-icons/ri'
import { FaApple } from 'react-icons/fa'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { FiChevronRight } from 'react-icons/fi'

export default function Apps() {
  return (
    <>
     <Navbar app={true}/> 
      <section className="bg-half-170 d-table w-100" id="home">
        <div className="container">
            <div className="row mt-5 align-items-center">
                <div className="col-lg-6 col-md-7">
                    <div className="title-heading">
                        <h1 className="heading mb-3">Manage all of you stuff using <span className="text-primary">Landrick.</span> app</h1>
                        <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                        <div className="mt-4">
                            <Link href="#" className="btn btn-primary mt-2 me-2 d-inline-flex align-items-center"><FaApple className='me-1'/> App Store</Link>
                            <Link href="#" className="btn btn-outline-primary mt-2 d-inline-flex align-items-center"><RiGooglePlayLine className='me-1'/> Play Store</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="text-md-end text-center ms-lg-4">
                        <Image src="/images/app/home.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
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
                        <h4 className="title mb-4">App Features</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-8">
                    <div className="row mt-4 pt-2">
                      {keyFeature.slice(0,6).map((item, index)=>{
                        let Icon = item.icon
                        return(
                          <div className="col-md-6 col-12" key={index}>
                              <div className="d-flex features feature-primary pt-4 pb-4">
                                  <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                                      <Icon className="fea icon-ex-md"></Icon>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="title">{item.title}</h4>
                                      <p className="text-muted para mb-0">{item.desc}</p>
                                  </div>
                              </div>
                          </div>
                        )
                      })}
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12 mt-4 pt-2 text-center text-md-end">
                    <Image src="/images/app/feature.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
      </section>

      <section className="section pt-0 bg-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">How Can We Help You ?</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 mt-4 pt-2">
                    <Image src="/images/app/1.png" width={0} height={0} sizes='100vw' style={{width:'400px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                </div>

                <div className="col-lg-7 col-md-6 mt-4 pt-2">
                    <div className="section-title ms-lg-5">
                        <h4 className="title mb-4">Best <span className="text-primary">Landrick</span> App Partner For Your Life</h4>
                        <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                        <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4"><span className="text-primary">Landrick</span> App Showcase</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <AppTab/>
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
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Choose The Pricing Plan</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <PricingThree/>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
            <ClientFour/>

            <GetApp/>
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
