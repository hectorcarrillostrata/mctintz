import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import Image from 'next/image'
import VideoCenter from '../components/video/video-center'
import AnimationBusiness from '../components/text-animation/animation-business'
import { LuStore } from 'react-icons/lu'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { featureOne } from '../data/feature'
import BusinessCta from '../components/cta/business-cta'
import PricingThree from '../components/pricing/pricing-three'
import Counter from '../components/counter'
import BlogOne from '../components/blog/blog-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function Business() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 border-bottom d-table w-100" id="home">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                  <div className="title-heading mt-4">
                      <div className="alert alert-pills shadow text-dark" role="alert">
                          <span className="badge rounded-pill bg-danger me-1">v5.0.0</span>
                          <span className="content"> Build <span className="text-primary">anything</span> you want - Landrick.</span>
                      </div>
                      <AnimationBusiness/>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-outline-primary rounded d-inline-flex align-items-center"><LuStore className="me-1"/> Make Your Shop</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative">
                      <Image src="/images/busi01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                      <VideoCenter/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">What We Do ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureOne.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
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
    </section>
    <BusinessCta/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Choose Simple Pricing</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PricingThree/>
      </div>
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="section-title">
                      <h4 className="title mb-4">See everything about your <span className="text-primary">Landrick</span> Business</h4>
                      <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="row ms-lg-5" id="counter">
                      <div className="col-md-6 col-12">
                          <div className="row">
                              <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card counter-box border-0 bg-light bg-gradient shadow text-center rounded">
                                      <div className="card-body py-5">
                                          <h2 className="mb-0"><Counter end={97}/>%</h2>
                                          <h5 className="counter-head mb-0">Happy Client</h5>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 mt-4 pt-2">
                                  <div className="card counter-box border-0 bg-primary bg-gradient shadow text-center rounded">
                                      <div className="card-body py-5">
                                          <h2 className="text-white mb-0"><Counter end={15}/>+</h2>
                                          <h5 className="counter-head mb-0 text-white">Awards</h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 col-12">
                          <div className="row pt-lg-4 mt-lg-4">
                              <div className="col-12 mt-4 pt-2">
                                  <div className="card counter-box border-0 bg-success bg-gradient shadow text-center rounded">
                                      <div className="card-body py-5">
                                          <h2 className="text-white mb-0"><Counter end={2}/>K</h2>
                                          <h5 className="counter-head mb-0 text-white">Job Placement</h5>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-12 mt-4 pt-2">
                                  <div className="card counter-box border-0 bg-light bg-gradient shadow text-center rounded">
                                      <div className="card-body py-5">
                                          <h2 className="mb-0"><Counter end={98}/>%</h2>
                                          <h5 className="counter-head mb-0">Project Complete</h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
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

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title mb-4">See everything about your employee at one place.</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary mt-2 me-2">Get Started Now</Link>
                          <Link href="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
