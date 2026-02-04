import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoCenter from '../components/video/video-center'
import YogaCta from '../components/cta/yoga-cta'
import YogaTab from '../components/tab/yoga-tab'
import YogaSlider from '../components/masonary-image/yoga-slider'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiArrowRight, FiChevronRight} from 'react-icons/fi'
import { meditationFeature, yogaFeature } from '../data/data'
import { teamSocial, yogaTeam } from '../data/team'

export default function Yoga() {
  return (
    <>
    <Navbar navlight={true}/> 

    <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/yoga/bg.jpg')" , backgroundPosition:'bottom'}}>
      <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="text-white title-dark">Body & Mind</h5>
                      <h4 className="display-4 mb-4 fw-bold text-white title-dark">Fitness Classes for Every Goal</h4>
                      <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Join The Classes</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="row g-3 align-items-center">
                      <div className="col-lg-7 col-6">
                          <Image src="/images/yoga/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md" alt=""/>
                      </div>
                      
                      <div className="col-lg-5 col-6">
                          <div className="row g-3">
                              <div className="col-lg-12 col-md-12">
                                  <Image src="/images/yoga/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md" alt=""/>
                              </div>

                              <div className="col-lg-12 col-md-12">
                                  <div className="avatar avatar-md-md bg-soft-primary rounded-md"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h6 className="text-primary fw-normal mb-2">Yoga Class</h6>
                      <h4 className="title mb-4">The Landrick Yoga <br/> & Meditation</h4>
                      <p className="text-muted para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  
                      <div className="mt-4">
                          <Link href="#!" className="btn btn-link primary fw-semibold">Learn More <FiArrowRight className="#"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Meditation Therapies</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {meditationFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                    <div className="col-md-4 col-12 mt-4 pt-2" key={index}>
                      <div className="features feature-primary feature-clean position-relative">
                          <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-md img-fluid" alt=""/>
                          <div className="bg-overlay bg-linear-gradient-2 rounded-md"></div>
                          <div className="position-absolute bottom-0 text-center end-0 start-0 mb-4">
                              <Icon className="fea icon-md d-block mx-auto text-white title-dark mb-3"></Icon>
                              <Link href="" className="h5 text-white title-dark">{item.title}</Link>
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
                      <h4 className="title mb-4">How It Work ?</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {yogaFeature.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean px-3">
                        <div className="icons text-center mx-auto">
                            <i className="avatar avatar-md-md rounded-md"><Image src={item.image} width={45} height={45} className="avatar avatar-md-sm" alt=""/></i>
                        </div>
                        <div className="content mt-4">
                            <h5 className="fw-semibold">{item.title}</h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="card rounded shadow border-0 bg-primary overflow-hidden">
              <div className="row g-0 align-items-center">
                  <div className="col-md-6">
                      <div className="position-relative">
                          <Image src="/images/yoga/cta.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                          <VideoCenter/>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card-body section-title p-lg-5">
                          <h4 className="title text-white title-dark mb-4">Check out some of our <br/> Yoga Poses Videos.</h4>
                          <p className="text-white-50 para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <YogaCta/>
    <section className="section">
      <div className="container">
          <div className="row align-items-end mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h4 className="title mb-4">Yoga Schedule</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                  <div className="text-center text-md-end">
                      <Link href="#" className="text-primary h6">See More <FiChevronRight className="align-middle"/></Link>
                  </div>
              </div>
          </div>

          <YogaTab/>
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
            {yogaTeam.map((item,index)=>{
                return(
                    <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card team team-primary text-center border-0">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                                <ul className="list-unstyled mb-0 team-icon">
                                    {teamSocial.map((item,index)=>{
                                        let Icon = item
                                        return(
                                            <li className="list-inline-item" style={{margin:'0 2px'}} key={index}><Link href="" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="card-body py-3 px-0 content">
                                <h5 className="mb-0"><Link href="" className="name text-dark">{item.name}</Link></h5>
                                <small className="designation text-muted">{item.designation}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
      </div>
    </section>

    <div className="container-fluid">
        <YogaSlider/>
    </div>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
