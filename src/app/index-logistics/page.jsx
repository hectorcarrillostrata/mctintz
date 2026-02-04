import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import LogistickSlider from '../components/hero-section/logistick-slider';
import VideoCenter from '../components/video/video-center';
import PartnerOne from '../components/partner/partner-one';
import OutlineVideo from '../components/video/outline-video';
import ClientOne from '../components/client/client-one';
import ContactFooter from '../components/footer/contact-footer';
import ScrollToTop from '../components/scroll-to-top';
import CookiesModal from '../components/cookiesModal';

import {FiTruck, FiChevronRight , FiHeart, FiUser, FiCalendar} from 'react-icons/fi'
import { LuWarehouse } from 'react-icons/lu';
import { FaRegComment } from 'react-icons/fa';
import { transportServices } from '../data/services';
import { transportBlog } from '../data/blogData';

export default function Logistics() {
  return (
    <>
    <Navbar navlight={true}/> 

    <LogistickSlider/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="features-absolute">
                      <div className="row g-2">
                          <div className="col-md-6 col-12">
                              <div className="card features feature-primary feature-full-bg rounded shadow p-4 position-relative overflow-hidden border-0">
                                  <span className="h2 icon-color">
                                      <FiTruck className="uil uil-truck"/>
                                  </span>
                                  <div className="card-body p-0 content">
                                      <h5 className="mb-3">Transport Solutions</h5>
                                      <p className="para text-muted mb-3">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>
                                      
                                      <Link href="#" className="readmore text-dark">Read More <FiChevronRight className="align-middle"></FiChevronRight></Link>
                                  </div>
                                  <div className="position-absolute top-0 end-0">
                                      <FiTruck className="uil uil-truck display-1 opacity-05"/>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="col-md-6 col-12">
                              <div className="card features feature-primary feature-full-bg rounded shadow p-4 position-relative overflow-hidden border-0">
                                  <span className="h2 icon-color">
                                      <LuWarehouse className=""></LuWarehouse>
                                  </span>
                                  <div className="card-body p-0 content">
                                      <h5 className="mb-3">Warehousing Solutions</h5>
                                      <p className="para text-muted mb-3">If the distribution of letters and 'words' is random, the reader from making a neutral judgement</p>
                                      
                                      <Link href="#" className="readmore text-dark">Read More <FiChevronRight className="align-middle"></FiChevronRight></Link>
                                  </div>
                                  <div className="position-absolute top-0 end-0">
                                      <LuWarehouse className="display-1 opacity-05"></LuWarehouse>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative">
                      <Image src="/images/logistics/about.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                     <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h6>About us</h6>
                      <h4 className="title mb-4">Powerful Features of <br/> <span className="text-primary">Landrick</span> Logistics</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                      <Link href="#" className="btn btn-primary mt-3">Read More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container">
          <PartnerOne/>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="py-5" style={{backgroundImage:"url('/images/svg-map.svg')"}}>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-12 text-center">
                          <span className="clip-text clip-text-image text-uppercase fw-bold" style={{backgroundImage:"url('/images/logistics/01.jpg')"}}>Landrick.</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Explore Our Services</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {transportServices.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-clean explore-feature p-4 border-0 rounded-md shadow text-center">
                        <div className="icons text-center rounded mx-auto">
                            <Icon className="h3 mb-0 mx-auto"></Icon>
                        </div>

                        <div className="card-body p-0 content">
                            <h5 className="mt-4"><Link href="#" className="title text-dark">{item.title}</Link></h5>
                            <p className="text-muted">{item.desc}</p>

                            <Link href="#" className="read-more">Read More <FiChevronRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section bg-cta" style={{backgroundImage:"url('/images/logistics/cta.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="title-heading">
                      <Image src="/images/logo-light.png" width={134} height={24} alt=""/>
                      <h4 className="heading title-dark text-white my-4">World’s Leading Contract <br/> Logistics Provider</h4>
                      <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                     <OutlineVideo/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Happy Customers</h4>
                      <p className="text-muted mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Latest News</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {transportBlog.map((item,index)=>{
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
                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><FaRegComment className="me-1"></FaRegComment>08</Link></li>
                                </ul>
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"></FiChevronRight></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><FiUser className="me-1"></FiUser> Calvin Carlo</small>
                            <small className="date"><FiCalendar className="me-1"></FiCalendar>{item.date}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <ContactFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
