import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoCenter from '../components/video/video-center'
import GymSlider from '../components/masonary-image/gym-slider'
import GymTab from '../components/tab/gym-tab'
import GymCta from '../components/cta/gym-cta'
import ClientOne from '../components/client/client-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { gymTeam, teamSocial } from '../data/team'
import { gymBlog } from '../data/blogData'
import { yogaFeature } from '../data/feature'

import {FiArrowRight, FiHeart, FiMessageCircle, FiChevronRight, FiUser, FiCalendar} from 'react-icons/fi'

export default function Gym() {
  return (
    <>
    <Navbar navlight={true}/> 
    <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/gym/bg.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-gradient-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="text-primary fw-bold">Muscles Flexed Since 2010</h5>
                      <h4 className="heading heading-lg mb-4 fw-bold text-white title-dark">Shape Your Ideal Body</h4>
                      <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Start Today</Link>
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
                      <Image src="/images/gym/about01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-md shadow img-fluid" alt=""/>
                      <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Introducing Landrick, <br/> A Fitness Center</h4>

                      <p className="text-muted">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency.</p>
                      <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                  
                      <div className="mt-4">
                          <Link href="" className="btn btn-pills btn-primary">Join Now</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col">
                  <div className="section-title text-center mb-4 pb-2">
                      <h2 className="title mb-4">Take a Sneak Peek Inside</h2>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid px-0">
          <GymSlider/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Training Programs We Offer For You</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {yogaFeature.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className={`card features feature-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-0 ${item.active === true ? 'bg-primary' : ''}`}>
                        <span className={`display-4 mb-4 ${item.active === true ? 'text-white-50' : 'icon-color'}`}>
                            <i className={item.icon}></i>
                        </span>
                        <div className="card-body p-0 content">
                            <h5 className={item.active === true ? 'text-white' : ''}>{item.title}</h5>
                            <p className={`para ${item.active === true ? 'text-white-50' : 'text-muted'}`}>{item.desc}</p>

                            <div className="">
                                <Link href="" className={`readmore fw-semibold ${item.active === true ? 'text-white' : 'text-muted'}`}>Join Now <FiArrowRight className=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col">
                  <div className="section-title text-center mb-4 pb-2">
                      <h2 className="title mb-4">Gym Schedule</h2>
                      <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                  </div>
              </div>
          </div>

          <GymTab/>
      </div>
    </section>

    <GymCta/>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title text-center mb-4 pb-2">
                      <h2 className="title mb-4">Gym Trainer</h2>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {gymTeam.map((item,index) =>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center bg-transparent border-0">
                        <div className="card-body p-0">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-pill" alt=""/>
                                <ul className="list-unstyled mb-0 team-icon">
                                  {teamSocial.map((item,index)=>{
                                    let Icon = item
                                    return(
                                      <li className="list-inline-item" style={{margin:'0 2px'}} key={index}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                    )
                                  })}
                                </ul>
                            </div>
                            <div className="content pt-3 pb-3">
                                <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                <small className="designation text-muted">{item.designation}</small>
                            </div>                                
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col">
                  <div className="section-title text-center mb-4 pb-2">
                      <h2 className="title mb-4">Trusted by Our Customers</h2>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      
          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title text-center mb-4 pb-2">
                      <h2 className="title mb-4">Latest Gym Blog & News</h2>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {gymBlog.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary rounded border-0 shadow">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt=""/>
                            <div className="overlay rounded-top"></div>
                        </div>
                        <div className="card-body content">
                            <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                            <div className="post-meta d-flex justify-content-between mt-2">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                </ul>
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><FiUser className=""></FiUser> Calvin Carlo</small>
                            <small className="date"><FiCalendar className=""/> {item.date}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
