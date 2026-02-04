import React, { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import JobNavbar from '../../components/navbar/job-navbar'
import ContactBtn from '../../components/job/contact-btn'
import Footer from '../../components/footer/footer'
import ScrollToTop from '../../components/scroll-to-top'

import { FiMail, FiGift, FiHome, FiMapPin, FiGlobe,FiServer, FiPhone } from 'react-icons/fi'
import { LuPrinter, LuUserCheck } from 'react-icons/lu'

import { candidate, jobSkills, jobSocial } from '../../data/job'
import { classicPortfolio } from '../../data/portfolio'

export default function JobCandidate({params}) {
    let {id} = use(params)
    let data = candidate.find((item)=>item.id === parseInt(id))
  return (
    <>
     <JobNavbar navlight={true}/> 
     <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}></section>

      <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-12">
                    <div className="card job-profile shadow border-0">
                        <div className="text-center py-5 border-bottom rounded-top">
                            <Image src={data?.image} width={110} height={110} className="avatar avatar-medium mx-auto rounded-circle shadow d-block" alt=""/>
                            <h5 className="mt-3 mb-0">{data?.name}</h5>
                            <p className="text-muted mb-0">{data?.position}</p>
                        </div>                               
                        <div className="card-body">
                            <h5 className="card-title mb-3">Personal Details :</h5>
                                                                
                            <ul className="list-unstyled">
                                <li className="h6 mb-3"><FiMail className="fea icon-sm text-warning me-3"/><span className="text-muted">Email :</span>{data?.email}</li>
                                <li className="h6 mb-3"><FiGift className="fea icon-sm text-warning me-3"/><span className="text-muted">D.O.B. :</span> 13th Sep, 1994</li>
                                <li className="h6 mb-3"><FiHome className="fea icon-sm text-warning me-3"/><span className="text-muted">Address :</span> 15 Razy street</li>
                                <li className="h6 mb-3"><FiMapPin className="fea icon-sm text-warning me-3"/><span className="text-muted">City :</span> London</li>
                                <li className="h6 mb-3"><FiGlobe className="fea icon-sm text-warning me-3"/><span className="text-muted">Country :</span> UK</li>
                                <li className="h6 mb-3"><FiServer className="fea icon-sm text-warning me-3"/><span className="text-muted">Postal Code :</span> 521452</li>
                                <li className="h6 mb-3"><FiPhone className="fea icon-sm text-warning me-3"/><span className="text-muted">Mobile :</span> (+125) 1542-8452</li>
                                
                                <li>
                                    <ul className="list-unstyled social-icon social mb-0 mt-4">
                                      {jobSocial.map((item,index)=>{
                                        let Icon = item
                                        return(
                                          <li className="list-inline-item" key={index} style={{margin:"0 2px"}}><Link href="#" className="rounded"><Icon className="fea icon-sm fea-social"/></Link></li>
                                        )
                                      })}
                                    </ul>
                                </li>
                            </ul>
                            <ContactBtn/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="ms-lg-4">
                        <h4>About us :</h4>
                        <p className="text-muted">Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p className="text-muted mb-0">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>
                        
                        <h4 className="mt-lg-5 mt-4">Skills :</h4>
                        {jobSkills.map((item,index)=>{
                          return(
                            <div className="progress-box mt-4" key={index}>
                                <h6 className="title text-muted">{item.name}</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}>
                                        <div className="progress-value d-block text-muted h6">{item.progress}</div>
                                    </div>
                                </div>
                            </div>
                          )
                        })}

                        <h4 className="mt-lg-5 mt-4">Experience :</h4>
                        <div className="row">
                            <div className="col-lg-12 mt-4 pt-2">
                                <div className="d-flex">
                                    <div className="company-logo text-muted h6 me-3 text-center">
                                        <Image src="/images/job/Codepen.svg" width={45} height={45} className="avatar avatar-md-sm mx-auto d-block mb-2" alt=""/>2017-18
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="title mb-0">Back-end Developer</h5>
                                        <small className="text-muted company-university">Codepen - CHINA</small>
                                        <p className="text-muted mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 mt-4 pt-2">
                                <div className="d-flex">
                                    <div className="company-logo text-muted h6 me-3 text-center">
                                        <Image src="/images/job/Circleci.svg" width={45} height={45} className="avatar avatar-md-sm mx-auto d-block mb-2" alt=""/>2014-17
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="title mb-0">Senior Web Designer</h5>
                                        <small className="text-muted company-university">CircleCi - SAN FRANCISCO</small>
                                        <p className="text-muted mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-lg-5 mt-4">Projects :</h4>
                        <div className="row">
                          {classicPortfolio.slice(0,4).map((item,index)=>{
                            return(
                              <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                                  <div className="card border-0 work-container work-primary work-classic">
                                      <div className="card-body p-0">
                                          <Link href="/portfolio-detail-one">
                                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded work-image" alt=""/>
                                          </Link>
                                          <div className="content pt-3">
                                              <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-dark title">{item.name}</Link></h5>
                                              <h6 className="text-muted tag mb-0">{item.title}</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            )
                          })}
                        </div>

                        <div className="mt-4 pt-2">
                            <Link href="#" className="btn btn-primary me-2"><LuUserCheck className=""/> Hire me</Link>
                            <Link href="#" className="btn btn-outline-primary"><LuPrinter className="#"/> Print CV</Link>
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
