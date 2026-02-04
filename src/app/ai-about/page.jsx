import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import AiNavbar from '../components/navbar/ai-navbar'
import VideoCenter from '../components/video/video-center'
import AiTab from '../components/tab/ai-tab'
import ClientOne from '../components/client/client-one'
import BlogOne from '../components/blog/blog-one'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'
import {FiChevronRight} from 'react-icons/fi'
import { aiTeam } from '../data/ai'

export default function AiAbout() {
  return (
    <>
     <AiNavbar navlight={true}/> 

    <section className="bg-half-170 jarallax" style={{backgroundImage:"url('/images/ai/pages.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="section-title">
                      <h4 className="title text-white title-dark mb-0">About Us</h4>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative p-4 bg-soft-primary rounded shadow">
                      <Image src="/images/ai/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                      <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">Work smarter, <br/> by using AI not manually</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>

                      <Link href="#" className="h6 text-primary">Read More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <AiTab/>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">The Team</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {aiTeam.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="d-flex align-items-center">
                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="avatar avatar-medium rounded-circle img-thumbnail" alt=""/>
                        <div className="content ms-3">
                            <h5 className="mb-0"><Link href="#" className="text-dark">{item.name}</Link></h5>
                            <small className="position text-muted">{item.designation}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">What Our Users Say</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Latest News</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <BlogOne/>
      </div>
    </section>
    <AiFooter/>
    <ScrollToTop/>
    </>
  )
}
