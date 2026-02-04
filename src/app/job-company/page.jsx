import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import JobNavbar from '../components/navbar/job-navbar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { LuLink } from 'react-icons/lu'
import { FiMapPin, FiDollarSign, FiUsers, FiChevronRight } from 'react-icons/fi'

import { jobdata } from '../data/job'


export default function JobCompany() {
  return (
    <>
    <JobNavbar navlight={true}/> 
    <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/job/bg.png')"}}>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-5 col-12">
                  <div className="job-profile position-relative">
                      <div className="card rounded shadow">
                          <div className="text-center py-5 border-bottom">
                              <Image src="/images/job/Circleci.svg" width={110} height={110} className="avatar avatar-medium mx-auto rounded-circle d-block" alt=""/>
                              <h5 className="mt-3 mb-0">CircleCi</h5>
                              <p className="text-muted mb-0">Internet Services</p>
                          </div>

                          <div className="p-4">
                              <h5>Company Details :</h5>
                              <ul className="list-unstyled my-4">
                                  <li className="h6 mb-2"><FiMapPin className="fea icon-sm text-warning me-3"/><span className="text-muted">Location :</span> San Francisco</li>
                                  <li className="h6 mb-2"><LuLink className="fea icon-sm text-warning me-3"/><span className="text-muted">Comapny :</span> circleci.com</li>
                                  <li className="h6 mb-2"><FiDollarSign className="fea icon-sm text-warning me-3"/><span className="text-muted">Revenue :</span> $ 5M / Annual</li>
                                  <li className="h6 mb-2"><FiUsers className="fea icon-sm text-warning me-3"/><span className="text-muted">No. of employees :</span> 200</li>
                              </ul>
                              <div className="d-grid">
                                  <Link href="#" data-bs-toggle="modal" data-bs-target="#ApplyNow" className="btn btn-primary">Apply Now</Link>
                              </div>
                          </div>
                      </div>

                      <div className="map mt-4 pt-2">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9459036900826!2d-122.39420768440696!3d37.79130751898054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806516341641%3A0x3f1e44c262252836!2sCircleCI!5e0!3m2!1sen!2sin!4v1575034257139!5m2!1sen!2sin" style={{border:'0'}} className="rounded" allowFullScreen=""></iframe>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="ms-md-4">
                      <h4>About us :</h4>
                      <p className="text-muted">Almost no business is immune from the need for quality software development. The act of building quality software, and shipping it quickly, has become the core engine of value creation in companies across all industries. CircleCI allows teams to rapidly release code they trust by automating the build, test, and delivery process. Thousands of leading companies, including Samsung, Ford Motor Company, Spotify, Lyft, Coinbase, PagerDuty, Stitch Fix, and BuzzFeed rely on CircleCI to accelerate delivery and improve quality.</p>
                      <p className="text-muted">CircleCI was named a Leader in cloud-native continuous integration by Forrester in 2021 and has been named to multiple Best DevOps Tools lists. CircleCI is the first CI/CD tool to become FedRAMP certified and processes more than 30 million builds each month across Linux, macOS, Docker and Windows build environments.</p>
                      <p className="text-muted mb-0">Founded in 2011 and headquartered in San Francisco with a global remote workforce, CircleCI is venture-backed by Scale Venture Partners, Threshold Ventures (formerly DFJ), Baseline Ventures, Top Tier Capital, Industry Ventures, Heavybit, Harrison Metal Capital, Owl Rock Capital Partners, and NextEquity Partners.</p>
                      
                      <h4 className="mt-lg-5 mt-4">Join The Team :</h4>
                      <p className="text-muted mb-0">Started in 2011, we have grown to over 200 employees all over the world. Headquartered in San Francisco, we have offices in London, Tokyo, Toronto, Boston, and Denver, with team members working across 50+ cities and 13 countries.</p>
                      
                      <div className="row">
                        {jobdata.map((item,index)=>{
                          let Icon = item.icon
                          return(
                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                <Link href="/job-detail-two" className="text-dark">
                                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                        <div className="icon text-center rounded-circle me-3">
                                            <Icon className="fea icon-ex-md"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title mb-0">{item.name}</h4>
                                            <p className="text-muted mb-0">{item.location}</p>    
                                        </div>
                                    </div>
                                </Link>
                            </div>
                          )
                        })}
                          <div className="col-12 mt-4 pt-2">
                              <Link href="/job-list-one" className="btn btn-primary">See All Jobs <FiChevronRight className="align-middle"/></Link>
                          </div>
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
