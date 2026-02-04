import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import CourseSlider from '../components/carousel/course-slider'
import CourseCta from '../components/cta/course-cta'
import Counter from '../components/counter'
import ClientOne from '../components/client/client-one'
import Schedule from '../components/get-in-touch/schedule'
import PartnerOne from '../components/partner/partner-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiChevronRight, FiArrowRightCircle, FiUser, FiMail, FiPhone} from 'react-icons/fi'
import { LuUser,LuGraduationCap, } from 'react-icons/lu'
import { MdOutlineCollectionsBookmark } from 'react-icons/md'

import { courseData } from '../data/data'
import { teamOne, teamSocial } from '../data/team'
import { courseCounter } from '../data/counter-data'
import { courseFeature } from '../data/feature'

export default function Course() {
  return (
    <>
     <Navbar navlight={true}/>

    <CourseSlider/>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="features-absolute">
                      <div className="row">
                        {courseFeature.map((item,index)=>{
                          let Icon = item.icon
                          return(
                            <div className="col-md-4 mt-4 pt-2" key={index}>
                              <div className="card border-0 text-center features feature-primary feature-clean course-feature p-4 overflow-hidden shadow">
                                  <div className="rounded icons text-center mx-auto">
                                      <Icon className=" h3 mb-0"/>
                                  </div>
                                  <div className="card-body p-0 mt-4">                                            
                                      <Link href="#" className="title h5 text-dark">{item.title}</Link>
                                      <p className="text-muted mt-2">{item.desc}</p>
                                      <Link href="#" className="text-primary read-more">Read More <FiChevronRight className="align-middle"/></Link>
                                      <Icon className="full-img"/>
                                  </div>
                              </div>
                            </div> 
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12">
                  <Image src="/images/course/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid shadow rounded" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">Our Story : <span className="text-primary">Landrick Education</span></h4>
                      <p className="text-muted">Start Course with <span className="text-primary fw-bold">Landrick Education</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                      <ul className="list-unstyled mb-0 text-muted">
                          <li className='mb-2'><FiArrowRightCircle className="text-primary h5 mb-0 align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                          <li className='mb-2'><FiArrowRightCircle className="text-primary h5 mb-0 align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                          <li className='mb-2'><FiArrowRightCircle className="text-primary h5 mb-0 align-middle me-2"/>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="btn btn-outline-primary mt-3">Admission Now</Link>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <CourseCta/>

    <section className="section" id="courses">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Explore Popular Courses</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {courseData.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary overflow-hidden rounded shadow border-0">
                        <div className="position-relative d-block overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-top mx-auto" alt=""/>
                            <div className="overlay"></div>
                            <Link href="/course-detail" className="h6 preview bottom-0 end-0 me-4 mb-3">Preview Now <FiChevronRight className="align-middle"/></Link>
                        </div>

                        <div className="card-body content">
                            <Link href="/course-detail" className="title text-dark h5">{item.title}</Link>
                            <div className="rating mt-2">
                              {item.rate === '1 Star' && (
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item">{item.rate} ({item.review} <LuUser className="text-muted small"></LuUser>)</li>
                                </ul>
                              )}
                              {item.rate === '2 Star' && (
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item">{item.rate} ({item.review} <LuUser className="text-muted small"></LuUser>)</li>
                                </ul>
                              )}
                              {item.rate === '3 Star' && (
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item">{item.rate} ({item.review} <LuUser className="text-muted small"></LuUser>)</li>
                                </ul>
                              )}
                              {item.rate === '4 Star' && (
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star-outline h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item">{item.rate} ({item.review} <LuUser className="text-muted small"></LuUser>)</li>
                                </ul>
                              )}
                              {item.rate === '5 Star' && (
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item"><i className="mdi mdi-star h6 mb-0 text-warning"></i></li>
                                  <li className="list-inline-item">{item.rate} ({item.review} <LuUser className="text-muted small"></LuUser>)</li>
                                </ul>
                              )}
                            </div>
                            <div className="fees d-flex justify-content-between">
                                <ul className="list-unstyled mb-0 numbers">
                                    <li className='d-flex align-items-center'><LuGraduationCap className="text-muted me-1"/> 30 Students</li>
                                    <li className='d-flex align-items-center'><MdOutlineCollectionsBookmark className="text-muted me-1"/> 5 Lession</li>
                                </ul>
                                <h4><span className="h6">$</span>{item.amount}</h4>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}

              <div className="col-12 mt-4 pt-2 text-center">
                  <Link href="#" className="btn btn-primary">See More Courses <FiChevronRight className="align-middle"/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60" id="instructors">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Instructors</h4>
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
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'} } className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
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
                                    <h5 className="mb-0"><Link href="#" className="name text-dark">Ronny Jofra</Link></h5>
                                    <small className="designation text-muted">UI Designers</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
      </div>
    </section>

    <section className="section bg-cta" style={{backgroundImage:"url('/images/course/bg03.jpg')", backgroundPosition:"center"}} id="admission">
        <div className="bg-overlay"></div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-7 col-12">
                    <div className="section-title">
                        <h4 className="title text-white mb-4">Admission Now</h4>
                        <p className="para-desc para-dark mb-0 text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                    </div>
                    <div className="row" id="counter">
                        {courseCounter.map((item,index)=>{
                            let Icon = item.icon
                            return(
                                <div className="col-md-3 col-6 mt-4 pt-2" key={index}>
                                    <div className="counter-box">
                                        <Icon className="text-white-50 h2"></Icon>
                                        <h2 className="mb-0 text-white mt-2"><Counter end={item.value}/>{item.title2}</h2>
                                        <h6 className="counter-head text-white-50">{item.title}</h6>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="card border-0 rounded">
                        <div className="card-body">
                            <form>
                                <h4>7 Days Free Trial</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Name : <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiUser className="fea icon-sm icons"/>
                                                <input type="text" className="form-control ps-5" placeholder="Name" name="name" required=""/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Email : <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiMail className="fea icon-sm icons"/>
                                                <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Phone : <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiPhone className="fea icon-sm icons"></FiPhone>
                                                <input type="number" id="number" className="form-control ps-5" placeholder="phone" required=""/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-lg-12 mt-2 mb-0">
                                        <div className="d-grid">
                                            <button className="btn btn-primary">Register Now</button>
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

    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">What Students Say ?</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <ClientOne/>
        </div>
        
        <div className="container mt-100 mt-60">
            <Schedule title="Sign up for our Newsletter"/>
        </div>
    </section>

    <section className="py-4 bg-light">
        <div className="container">
            <PartnerOne/>
        </div>
    </section>

    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>

    </>
  )
}
