import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import VideoOne from '../components/video/video-one'
import BlogOne from '../components/blog/blog-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import Counter from '../components/counter'

import { featureTwo } from '../data/feature'
import { teamOne, teamSocial } from '../data/team'
import { itCounter, progressData } from '../data/data'

import { FiArrowRight, FiChevronRight, FiAirplay} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline, MdImageSearch } from 'react-icons/md'
import { RiPresentationLine } from 'react-icons/ri'

export default function ItSolution() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 pb-0 bg-primary d-table w-100" style={{backgroundImage:"url('/images/bg2.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                  <div className="title-heading mb-md-5 pb-md-5">
                      <h5 className="text-white-50">We are creative</h5>
                      <h4 className="heading text-white mb-3 title-dark"> Best IT Solution <br/> Company </h4>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-light">Get Started</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-5 mt-sm-0">
                  <Image src="/images/hero1.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div> 
    </section>
    <section className="py-4 bg-light">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">What we do ?</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {featureTwo.map((item,index)=>{
              let Icon = item.icon
              return(
                  <div className="col-lg-3 col-md-4 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span className="h1 icon-color">
                            <Icon />
                        </span>
                        <div className="card-body p-0 content">
                            <h5 className='py-1'>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
                        </div>
                        <span className="big-icon text-center">
                            <Icon />
                        </span>
                    </div>
                  </div>
              )
            })}

              <div className="col-lg-12 text-center col-md-4 mt-4 pt-2">
                  <Link href="#" className="btn btn-primary">See more <FiArrowRight className="fea icon-sm"/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                          <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                              <div className="card-body p-0">
                                  <Image src="/images/course/online/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                  <div className="overlay-work"></div>
                                  <div className="content">
                                      <Link href="#" className="title text-white d-block fw-bold">Web Development</Link>
                                      <small className="text-white-50">IT & Software</small>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-6 col-6">
                          <div className="row">
                              <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Michanical Engineer</Link>
                                              <small className="text-white-50">Engineering</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                  <div className="card work-container work-primary work-modern overflow-hidden rounded border-0 shadow-md">
                                      <div className="card-body p-0">
                                          <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                          <div className="overlay-work"></div>
                                          <div className="content">
                                              <Link href="#" className="title text-white d-block fw-bold">Chartered Accountant</Link>
                                              <small className="text-white-50">C.A.</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="ms-lg-4">
                      <div className="section-title mb-4 pb-2">
                          <h4 className="title mb-4">About Our Story</h4>
                          <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          <p className="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                      </div>

                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h4 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Fully Responsive</li>
                          <li className="mb-1"><span className="text-primary h4 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Multiple Layouts</li>
                          <li className="mb-1"><span className="text-primary h4 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Suits Your Style</li>
                      </ul>

                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Read More <FiChevronRight className="align-middle"></FiChevronRight></Link>
                          <VideoOne/>
                          <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="p-4 pt-0 rounded shadow bg-primary bg-gradient position-relative" style={{zIndex:'1'}}>
              <div className="row">
                {progressData.map((item,index)=>{
                  return(
                    <div className="col-md-6 col-12 mt-4" key={index}>
                        <div className="progress-box">
                            <h6 className="title text-white">{item.title}</h6>
                            <div className="progress title-bg-dark" style={{height:'10px', padding:'3px'}}>
                                <div className="progress-bar position-relative bg-black" style={{width:item.value}}>
                                    <div className="progress-value d-block text-white-50 h6">{item.value}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                  )
                })}
              </div>
          </div>

          <div className="row mt-4 pt-2 position-relative" id="counter" style={{zIndex:'1'}}>
            {itCounter.map((item,index)=>{
              return(
                <div className="col-md-3 col-6 mt-4 pt-2" key={index}>
                    <div className="counter-box text-center">
                        <Image src={item.image} width={65} height={65} className="avatar avatar-small" alt=""/>
                        <h2 className="mb-0 mt-4"><Counter end={item.target}/>{item.value}</h2>
                        <h6 className="counter-head text-muted">{item.title}</h6>
                    </div>
                </div>
              )
            })}
          </div>
          <div className="feature-posts-placeholder bg-light"></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h6 className="text-primary">Work Process</h6>
                      <h4 className="title mb-4">How do we works ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                      <div className="icons rounded text-center mx-auto">
                          <RiPresentationLine className="h3 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Discussion</h5>
                          <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                      <div className="icons rounded text-center mx-auto">
                          <FiAirplay className="h3 mb-0"></FiAirplay>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Strategy & Testing</h5>
                          <p className="text-muted mb-0">Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                      <div className="icons rounded text-center mx-auto">
                          <MdImageSearch className="h3 mb-0"></MdImageSearch>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Reporting</h5>
                          <p className="text-muted mb-0">Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Mind Power</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item, index) =>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
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
                            <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                            <small className="designation text-muted">{item.designation}</small>
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
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <h6 className="text-primary">Blog</h6>
                      <h4 className="title mb-4 mb-lg-0">Reads Our Latest <br/> News & Blog</h4>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <p className="text-muted mb-0 mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <BlogOne/>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
