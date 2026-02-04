import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import ClientOne from '../components/client/client-one'
import Counter from '../components/counter'
import BlogOne from '../components/blog/blog-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { FiUser, FiMail, FiPhone, FiChevronRight} from 'react-icons/fi'
import { BsBullseye } from 'react-icons/bs'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

import { itFeature, keyFeature } from '../data/feature'
import { counter } from '../data/data'

export default function ItSolutionTwo() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 d-table w-100 it-home" style={{backgroundImage:"url('/images/it/bg1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-12">
                  <div className="title-heading">
                      <h6 className="text-white-50">IT Software & Design</h6>
                      <h1 className="fw-bold text-white title-dark mt-2 mb-3">Advanced Innovative <br/> IT Solutions.</h1>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1 d-inline-flex align-items-center "><FiPhone className="me-1"/> Get in touch</Link>
                          <VideoOne/>
                          <small className="fw-bold text-uppercase text-white-50 align-middle ms-1">Watch Now</small>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card shadow rounded border-0 ms-lg-5">
                      <div className="card-body">
                          <h5 className="card-title fw-bold">Register Your Appointment</h5>
                          <h6>We here to help you 24/7 with experts</h6>

                          <form className="login-form">
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">First name <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input type="text" className="form-control ps-5" placeholder="First Name" name="s" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Phone no. <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiPhone className="fea icon-sm icons"/>
                                              <input type="number" name="number" className="form-control ps-5" placeholder="Phone no." required=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="form-check mb-3">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                              I Accept <Link href="#" className="text-primary">Terms And Condition</Link>
                                          </label>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="d-grid">
                                          <button className="btn btn-primary">Register</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
    </section>

    <section className="py-4 bg-light">
      <div className="container">
          <div className="row justify-content-center">
            {itFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                    <div className="d-flex features feature-primary pt-4 pb-4">
                        <div className="icon text-center rounded-circle text-primary me-3 h5 mb-0">
                            <Icon className=" text-primary"></Icon>
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
    </section>

    <section className="section">
      <div className="container">
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
                                      <Image src="/images/course/online/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="img-fluid" alt=""/>
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
              <div className="section-title">
                  <span className="badge bg-soft-primary rounded-pill fw-bold">About us</span>
                  <h4 className="title mb-4 mt-3">IT Solutions for You Business</h4>
                  <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  <p className="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
              </div>

              <div className="d-flex mt-4 pt-2">
                  <BsBullseye className="h5 text-primary"/>
                  <div className="flex-1 ms-2">
                      <h5>Engaging Group Discussion​</h5>
                      <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                  </div>
              </div>

              <div className="d-flex mt-4 pt-2">
                  <MdOutlineDashboardCustomize className="h5 text-primary"/>
                  <div className="flex-1 ms-2">
                      <h5>Software Engineering​</h5>
                      <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                  </div>
              </div>

              <div className="mt-4 pt-2">
                  <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1 d-inline-flex align-items-center">Read More <FiChevronRight className="align-middle ms-1"></FiChevronRight></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">We Provide IT & Business Solutions</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row">
          {keyFeature.map((item,index)=>{
            let Icon = item.icon
            return(
              <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                  <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded-pill shadow">
                      <div className="icon text-center rounded-circle me-3">
                          <Icon className="fea icon-ex-md"/>
                      </div>
                      <div className="flex-1">
                          <h4 className="title mb-0">{item.title2}</h4>
                      </div>
                  </div>
              </div>
            )
          })}
            
            <div className="col-12 mt-4 pt-2 text-center">
                <Link href="#" className="btn btn-primary d-inline-flex align-items-center">See More <FiChevronRight className="ms-1"/></Link>
            </div>
        </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="video-solution-cta position-relative" style={{zIndex:'1'}}>
                      <div className="position-relative py-5 rounded" style={{backgroundImage:"url('/images/it/cta.jpg')", backgroundPosition:'top'}}>
                          <div className="bg-overlay rounded bg-primary bg-gradient" style={{opacity:'0.8'}}></div>
                          <div className="row">
                            {counter.map((item,index)=>{
                              let Icon = item.icon
                              return(
                                <div className="col-lg-3 col-6 my-4" key={index}>
                                    <div className="counter-box text-center px-lg-4">
                                        <Icon className="text-white-50 h2"></Icon>
                                        <h1 className="mb-0 text-white py-1"><Counter end={item.value}/>+</h1>
                                        <h6 className="counter-head text-white-50">{item.title}</h6>
                                    </div>
                                </div>
                              )
                            })}
                          </div>
                      </div>
                      <div className="content mt-md-5 mt-4">
                          <ClientOne/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="feature-posts-placeholder bg-light"></div>
      </div>
    </section>
    <section className="section">
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
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
