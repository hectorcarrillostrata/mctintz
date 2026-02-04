import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import HospitalModal from '../components/modal/hospital-modal'
import VideoModal from '../components/video-modal'
import HospitalTab from '../components/tab/hospital-tab'
import PartnerOne from '../components/partner/partner-one'
import Counter from '../components/counter'
import ClientOne from '../components/client/client-one'
import HospitalFooter from '../components/footer/hospital-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { FiArrowRight,  FiClock , FiMapPin } from 'react-icons/fi'
import { LuNewspaper } from 'react-icons/lu'
import { LiaUserNurseSolid } from 'react-icons/lia'
import { doctorTeam, teamSocial } from '../data/team'

export default function Hospital() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 d-table w-100 home-wrapper overflow-hidden">
      <div className="container">
          <div className="row mt-5 align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="title-heading">
                      <span className="badge rounded-pill bg-soft-primary"><b>Medical</b></span>
                      <h4 className="heading my-3">We Take Care <br/> of Your <span className="text-primary">Health</span></h4>
                      <p className="para-desc text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      
                      <div className="mt-3">
                          <Link href="#" className="btn btn-primary me-2 mt-2">Find Doctors</Link>
                          <Link href="#" className="btn btn-soft-primary mt-2">Book an Appointment</Link>
                      </div>

                      <p className="text-muted mb-0 mt-3">Don't have an account yet? <Link href="#" className="text-primary ms-2 h6 mb-0">Signup <FiArrowRight className="fea icon-sm"/></Link></p>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-lg-4">
                      <Image src="/images/illustrator/doctors-cuate.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>
          </div>
      </div> 
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                  <div className="card features feature-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-0">
                      <span className="h2 icon-color">
                          <LuNewspaper/>
                      </span>
                      <div className="card-body p-0 content">
                          <h5 className='py-1'>Appointment</h5>
                          <p className="para text-muted mb-0">It is a long established fact that a reader layout.</p>

                          <HospitalModal/>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card features feature-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-0">
                      <span className="h2 icon-color">
                          <FiClock/>
                      </span>
                      <div className="card-body p-0 content">
                          <h5 className='py-1'>Opening Hour</h5>
                          
                          <h6 className="mb-0">Monday - Friday</h6>
                          <p className="para text-muted">7AM to 11 PM</p>

                          <h6 className="mb-0">Address:</h6>
                          <p className="para text-muted mb-0">C/54 Northwest Freeway</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="card features feature-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-0">
                      <span className="h1 icon-color">
                          <LiaUserNurseSolid/>
                      </span>
                      <div className="card-body p-0 content">
                          <h5 className='py-1'>Find Doctors</h5>
                          <p className="para text-muted mb-0">It is a long established fact that a reader layout.</p>

                          <Link href="#" className="btn btn-pills btn-soft-success mt-4">Doctors</Link>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="card features feature-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-0">
                      <span className="h2 icon-color">
                          <FiMapPin/>
                      </span>
                      <div className="card-body p-0 content">
                          <h5 className='py-1'>Find Locations</h5>
                          <p className="para text-muted mb-0">It is a long established fact that a reader layout.</p>

                          <Link href="#" className="btn btn-pills btn-soft-success mt-4">Locations</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="position-relative">
                      <Image src="/images/medical/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block shadow rounded" alt=""/>
                      <VideoModal/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <span className="badge rounded-pill bg-soft-primary">About us</span>
                      <h4 className="title mt-3 mb-4">A great place to receive care</h4>
                      <p className="text-muted para-desc">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>
                      <p className="text-muted para-desc mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>

                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">More Services</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-end mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h6 className="text-primary">Services</h6>
                      <h4 className="title mb-4">Our Medical Services</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
                  <div className="text-center text-md-end">
                      <Link href="#" className="text-primary h6">See More <FiArrowRight className="fea icon-sm"/></Link>
                  </div>
              </div>
          </div>

          <HospitalTab/>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="position-relative" style={{zIndex:'1'}}>
              <div className="card rounded shadow p-4 mb-4">
                  <div className="row" id="counter">
                      <div className="col-md-4">
                          <div className="counter-box text-center">
                              <h1 className="mb-0 mt-3"><Counter end={99}/>.00%</h1>
                              <h5 className="counter-head mb-1">Positive feedback</h5>
                              <p className="text-muted mb-0">From Doctors</p>
                          </div>
                      </div>
  
                      <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                          <div className="counter-box text-center">
                              <h1 className="mb-0 mt-3"><Counter end={25}/>+</h1>
                              <h5 className="counter-head mb-1">Experienced Clinics</h5>
                              <p className="text-muted mb-0">High Qualified</p>
                          </div>
                      </div>
  
                      <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                          <div className="counter-box text-center">
                              <h1 className="mb-0 mt-3"><Counter end={1100}/>+</h1>
                              <h5 className="counter-head mb-1">Questions & Answers</h5>
                              <p className="text-muted mb-0">Your Questions</p>
                          </div>
                      </div>
                  </div>
              </div>

              <PartnerOne/>
          </div>
          <div className="feature-posts-placeholder bg-primary bg-gradient"></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Qualified Doctors</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {doctorTeam.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0 p-4 shadow">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((item,index)=>{
                                let Icon = item
                                return(
                                  <li className="list-inline-item" style={{margin:'0 2px'}} key={index}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"></Icon></Link></li>
                                )
                              })}
                            </ul>
                        </div>
                        <div className="card-body py-3 px-0 content">
                            <h5 className="mb-0"><Link href="#" className="name text-dark">Ronny Jofra</Link></h5>
                            <small className="designation text-muted">Cardiologist</small>
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
                      <h4 className="title mb-4">What Our Patients Says</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>
    <HospitalFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
