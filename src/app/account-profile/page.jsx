import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import AccountingTab from '../components/account/accounting-tab'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import UserDetail from '../components/account/user-detail'

import { experience } from '../data/account'
import { blogData } from '../data/blogData'

import { LuUser, LuCalendarDays } from 'react-icons/lu'
import { FiMail, FiGlobe, FiBookmark, FiItalic, FiGift, FiMapPin, FiPhone,FiHeart, FiMessageCircle, FiChevronRight } from 'react-icons/fi'


export default function AccountProfile() {
  return (
    <>
     <Navbar navlight={true}/> 

    <UserDetail/>
    <section className="section mt-60">
      <div className="container mt-lg-3">
          <div className="row">
              <AccountingTab/>

              <div className="col-lg-8 col-12">
                  <div className="border-bottom pb-4">
                      <h5>Krista Joseph</h5>
                      <p className="text-muted mb-0">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                  </div>
                  
                  <div className="border-bottom pb-4">
                      <div className="row">
                          <div className="col-md-6 mt-4">
                              <h5>Personal Details :</h5>
                              <div className="mt-4">
                                  <div className="d-flex align-items-center">
                                      <FiMail className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Email :</h6>
                                          <Link href="#" className="text-muted">kristajoseph0203@mail.com</Link>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center mt-4">
                                      <FiBookmark className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Skills :</h6>
                                          <Link href="#" className="text-muted">html</Link>, <Link href="#" className="text-muted">css</Link>, <Link href="#" className="text-muted">js</Link>, <Link href="#" className="text-muted">mysql</Link>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center mt-4">
                                      <FiItalic className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Language :</h6>
                                          <Link href="#" className="text-muted">English</Link>, <Link href="#" className="text-muted">Japanese</Link>, <Link href="#" className="text-muted">Chinese</Link>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center mt-4">
                                      <FiGlobe className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Website :</h6>
                                          <Link href="#" className="text-muted">www.kristajoseph.com</Link>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center mt-4">
                                      <FiGift className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Birthday :</h6>
                                          <p className="text-muted mb-0">2nd March, 1996</p>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center mt-4">
                                      <FiMapPin className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Location :</h6>
                                          <Link href="#" className="text-muted">Beijing, China</Link>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center mt-4">
                                      <FiPhone className="fea icon-ex-md text-muted me-3"/>
                                      <div className="flex-1">
                                          <h6 className="text-primary mb-0">Cell No :</h6>
                                          <Link href="#" className="text-muted">(+12) 1254-56-4896</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-6 mt-4 pt-2 pt-sm-0">
                              <h5>Experience :</h5>
                              {experience.map((item,index)=>{
                                return(
                                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4" key={index}>
                                        <Image src={item.image} width={24} height={24} className="avatar avatar-ex-sm" alt=""/>
                                        <div className="flex-1 content ms-3">
                                            <h4 className="title mb-0">{item.title}</h4>
                                            <p className="text-muted mb-0">{item.experience}</p>
                                            <p className="text-muted mb-0"><Link href="#" className="read-more">{item.name}</Link>{item.location}</p>    
                                        </div>
                                    </div>
                                )
                              })}
                          </div>
                      </div>
                  </div>

                  <h5 className="mt-4 mb-0">Posts & News :</h5>
                  <div className="row">
                    {blogData.slice(0,2).map((item,index)=>{
                      return(
                        <div className="col-md-6 mt-4 pt-2" key={index}>
                            <div className="card blog blog-primary rounded border-0 shadow">
                                <div className="position-relative">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt="..."/>
                                    <div className="overlay rounded-top"></div>
                                </div>
                                <div className="card-body content">
                                    <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                                    <div className="post-meta d-flex justify-content-between mt-3">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                </ul>
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                            <small className="date"><LuCalendarDays className="me-1"/>{item.date}</small>
                        </div>
                            </div>
                        </div>
                      )
                    })}

                      <div className="col-12 mt-4 pt-2">
                          <Link href="/blog-grid" className="btn btn-primary">See More <FiChevronRight className="align-middle"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
