import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoCenter from '../components/video/video-center'
import ConstructionTab from '../components/tab/construction-tab'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { constructionFeature } from '../data/feature'
import { partnerData } from '../data/partner'
import { constructionTeam, teamSocial } from '../data/team'
import { constructionBlog } from '../data/blogData'

import {FiArrowRight, FiHeart, FiMessageCircle, FiUser, FiCalendar} from 'react-icons/fi'

export default function Construction() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/construction/bg.jpg')",backgroundPosition:'center'}}>
      <div className="bg-overlay" style={{opacity:'0.65'}}></div>
      <div className="container">
          <div className="row mt-5 mt-md-4">
              <div className="col-12">
                  <div className="title-heading">
                      <h4 className="display-4 mb-4 fw-bold text-white title-dark">Start building <br/> your dream home</h4>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Get Started</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="card features-absolute rounded shadow">
                      <div className="row">
                          <div className="col-lg-8 col-md-12 my-4">
                              <div className="row">
                                {constructionFeature.map((item,index)=>{
                                  let Icon = item.icon
                                  return(
                                    <div className="col-md-6 col-12" key={index}>
                                        <div className="d-flex features feature-primary p-4">
                                            <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                                                <Icon className="align-middle h4 mb-0"/>
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

                          <div className="col-lg-4 d-none d-lg-block position-relative">
                              <Image src="/images/construction/serveices.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block construction-img" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12 mt-4 pt-2 text-center">
                  <p className="text-muted mb-0">Our list of services does not end here. <a href="#" className="text-primary h6">Click here</a>, and We’ll come up with more solution for you!</p>
              </div>
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12">
                  <div className="position-relative">
                      <Image src="/images/construction/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                      <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="ms-lg-5 ms-md-4">
                      <div className="section-title">
                          <span className="badge rounded-pill bg-soft-primary">About us</span>
                          <h4 className="title mt-3 mb-4">We are the leader <br/> in the <span className="text-primary">Landrick</span></h4>
                          <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          <p className="text-muted para-desc mx-auto mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                          <div className="mt-4">
                              <Link href="#" className="btn btn-primary">Learn More</Link>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-4 col-md-3">
                  <h6 className="text-muted mb-0">Trusted by over 2,000 of the world's leading construction companies</h6>
              </div>

              <div className="col-lg-8 col-md-9 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="rounded shadow bg-light p-4">
                      <div className="row justify-content-center">
                        {partnerData.slice(0, 4).map((item,index)=>{
                          return(
                            <div className="col-lg-3 col-md-3 col-6 text-center py-4" key={index}>
                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'auto', height:'25px'}} className="avatar avatar-ex-sm" alt=""/>
                            </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>

        <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-lg-4 col-md-6">
                  <div className="section-title sticky-bar position-sticky">
                      <span className="badge rounded-pill bg-soft-primary">Projects</span>
                      <h4 className="title mt-3 mb-4">Our latest projects <br/> check now dears</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="mt-4 d-none d-md-block">
                          <Link href="#" className="btn btn-soft-primary">See More <FiArrowRight className="fea icon-sm"/></Link>
                      </div>
                  </div>
              </div>

              <ConstructionTab/>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Expert Team Members</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {constructionTeam.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((item,index)=>{
                                let Icon = item
                                return(
                                  <li className="list-inline-item" style={{margin:'0 2px'}} key={index}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
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
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <span className="badge rounded-pill bg-soft-primary">Blogs & News</span>
                      <h4 className="title mt-3 mb-4">Latest News & Articals</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {constructionBlog.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary rounded border-0 shadow">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt=""/>
                            <div className="overlay rounded-top"></div>
                        </div>
                        <div className="card-body content">
                            <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                            <div className="post-meta d-flex justify-content-between mt-3">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                </ul>
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiArrowRight className="align-middle"/></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><FiUser className="#"/> Calvin Carlo</small>
                            <small className="date"><FiCalendar className="me-1"/> {item.date}</small>
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
