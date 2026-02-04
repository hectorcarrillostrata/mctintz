import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import CarTab from '../components/tab/car-tab'
import ClientSingleTwo from '../components/client/client-single-two'
import AboutOne from '../components/about/about-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { carFeature } from '../data/feature'
import { carServices } from '../data/services'

import { FiMapPin, FiChevronRight } from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'
import { RiGooglePlayLine } from 'react-icons/ri'

export default function CarRiding() {
  return (
    <>
    <Navbar/> 
    <section className="bg-half-170 d-table w-100">
      <div className="container">
          <div className="row align-items-center">
              <CarTab/>
              
              <div className="col-lg-7 offset-lg-1 col-md-7 order-1 order-md-2">
                  <div className="title-heading mt-4">
                      <h1 className="display-4 fw-normal mb-3">Unbeatable Price & Expert Services</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary mt-2 me-2 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                          <Link href="#" className="btn btn-outline-primary mt-2 d-inline-flex align-items-center"><RiGooglePlayLine className="me-1"/> Play Store</Link>
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
                      <h4 className="title mb-4">Find Your Better Rides</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {carFeature.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
                    <div className="features feature-primary text-center">
                        <div className="ride-image">
                            <Image src={item.image} width={198} height={198} className="avatar avatar-large shadow" alt=""/>
                        </div>
                        <div className="content mt-5 pt-3">
                            <h5><Link href="#" className="text-dark title-2">{item.title}</Link></h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
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
          <div className="card bg-light rounded border-0 overflow-hidden">
              <div className="row g-0 align-items-center">
                  <div className="col-md-6 mt-2 mt-sm-0 order-2 order-md-1">
                      <div className="card-body section-title p-lg-5">
                          <h2 className="mb-4 fw-normal">Request a ride now</h2>
                          <form>
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Choose Starting Point</label>
                                          <div className="form-icon position-relative">
                                              <FiMapPin className="fea icon-sm icons text-success"/>
                                              <input name="name" id="location1" type="text" className="form-control ps-5" placeholder="Choose starting point..."/>                                            
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Choose Your Destination</label>
                                          <div className="form-icon position-relative">
                                              <FiMapPin className="fea icon-sm icons text-danger"/>
                                              <input name="name" id="location2" type="text" className="form-control ps-5" placeholder="Choose your destination..."/>                                            
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <Link href="#" className="btn btn-primary">Request Now <FiChevronRight className=""/></Link>
                          </form>
                      </div>
                  </div>

                  <div className="col-md-6 order-1 order-md-2">
                      <div className="map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} allowFullScreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">We've Provided More Services Too</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {carServices.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
                    <div className="features feature-primary text-center">
                        <div className="image position-relative d-inline-block">
                            <Image src={item.image} width={65} height={65} className="avatar avatar-small" alt=""/>
                        </div>

                        <div className="content mt-4">
                            <h5 className="title-2">{item.title}</h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">What our customer says!</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientSingleTwo/>
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
                      <h4 className="title mb-4">Have Question ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            <AboutOne/>
          </div>

          <div className="row mt-5 pt-lg-3 justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title mb-4">Download Our App Now !</h4>
                      <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="mt-4 pt-2">
                          <div className="text-center subcribe-form">
                              <form className="mb-4">
                                  <input name="number" id="number" type="number" className="form-control rounded-pill" placeholder="Your Cell Number. :" required="" aria-describedby="cellnumber"/>
                                  <button className="btn btn-pills btn-primary submitBnt" type="submit" id="cellnumber">Send App Link</button>
                              </form>
                          </div>

                          <p className="text-muted">Or</p>
                          
                          <Link href="#" className="btn btn-primary mt-2 me-2 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                          <Link href="#" className="btn btn-outline-primary mt-2 d-inline-flex align-items-center"><RiGooglePlayLine className="me-2"/> Play Store</Link>
                      </div>
                  </div>
              </div>
          </div>
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
