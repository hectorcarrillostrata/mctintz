import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import FurnitureSlider from '../components/carousel/furniture-slider'

import FurnitureCta from '../components/cta/furniture-cta'
import FurnitureMasonary from '../components/masonary-image/furniture-masonary'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { furnitureBlog } from '../data/blogData'
import { furnitureFeature } from '../data/feature'
import {FiArrowUpRight, FiArrowRight, FiShoppingCart, FiHeart, FiMessageCircle, FiChevronRight} from 'react-icons/fi'
import { LuUser } from 'react-icons/lu'
import { MdOutlineCalendarMonth } from 'react-icons/md' 

export default function Furniture() {
  return (
    <>
     <Navbar navlight={true}/> 
     <FurnitureSlider/>

    <section className="section pb-0">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Top Categories</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row mt-4">
              <div className="col-md-6 p-2">
                  <div className="features feature-primary feature-clean position-relative overflow-hidden rounded-md">
                      <Image src="/images/furniture/fea1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                      <div className="bg-overlay bg-linear-gradient-2"></div>
                      <div className="position-absolute bottom-0 end-0 start-0 m-4 mt-0">
                          <Link href="" className="d-flex justify-content-between align-items-center">
                              <span>
                                  <span className="d-block title text-white title-dark fs-5 fw-semibold">Bedroom</span>
                                  <span className="fs-6 text-white-50 d-block">110 Items</span>
                              </span>
                              
                              <FiArrowUpRight className="text-white title-dark fs-4"/>
                          </Link>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6">
                  <div className="row">
                      <div className="col-6">
                          <div className="row">
                              <div className="col-12 p-2">
                                  <div className="features feature-primary feature-clean position-relative overflow-hidden rounded-md">
                                      <Image src="/images/furniture/fea2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="bg-overlay bg-linear-gradient-2"></div>
                                      <div className="position-absolute bottom-0 end-0 start-0 m-2 m-md-4 mt-0">
                                          <Link href="" className="d-flex justify-content-between align-items-center">
                                              <span>
                                                  <span className="d-block title text-white title-dark fs-5 fw-semibold">Kitchen</span>
                                                  <span className="fs-6 text-white-50 d-block">110 Items</span>
                                              </span>
                                              
                                              <FiArrowUpRight className="text-white title-dark fs-4"/>
                                          </Link>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 p-2">
                                  <div className="features feature-primary feature-clean position-relative overflow-hidden rounded-md">
                                      <Image src="/images/furniture/fea3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="bg-overlay bg-linear-gradient-2"></div>
                                      <div className="position-absolute bottom-0 end-0 start-0 m-2 m-md-4 mt-0">
                                          <Link href="" className="d-flex justify-content-between align-items-center">
                                              <span>
                                                  <span className="d-block title text-white title-dark fs-5 fw-semibold">Office</span>
                                                  <span className="fs-6 text-white-50 d-block">110 Items</span>
                                              </span>
                                              
                                              <FiArrowUpRight className="text-white title-dark fs-4"/>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-6">
                          <div className="row">
                              <div className="col-12 p-2">
                                  <div className="features feature-primary feature-clean position-relative overflow-hidden rounded-md">
                                      <Image src="/images/furniture/fea4.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="img-fluid" alt=""/>
                                      <div className="bg-overlay bg-linear-gradient-2"></div>
                                      <div className="position-absolute bottom-0 end-0 start-0 m-2 m-md-4 mt-0">
                                          <Link href="" className="d-flex justify-content-between align-items-center">
                                              <span>
                                                  <span className="d-block title text-white title-dark fs-5 fw-semibold">Living Room</span>
                                                  <span className="fs-6 text-white-50 d-block">110 Items</span>
                                              </span>
                                              
                                              <FiArrowUpRight className="text-white title-dark fs-4"/>
                                          </Link>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-12 p-2">
                                  <div className="features feature-primary feature-clean position-relative overflow-hidden rounded-md">
                                      <Image src="/images/furniture/fea5.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="bg-overlay bg-linear-gradient-2"></div>
                                      <div className="position-absolute bottom-0 end-0 start-0 m-2 m-md-4 mt-0">
                                          <Link href="" className="d-flex justify-content-between align-items-center">
                                              <span>
                                                  <span className="d-block title text-white title-dark fs-5 fw-semibold">Dining Hall</span>
                                                  <span className="fs-6 text-white-50 d-block">110 Items</span>
                                              </span>
                                              
                                              <FiArrowUpRight className="text-white title-dark fs-4"/>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12 mt-4">
                  <div className="text-center">
                      <Link href="" className="btn btn-link primary fw-semibold mb-0">See More Categories <span className="h5 mb-0 ms-1"><FiArrowRight  className="align-middle"/></span></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Best Solutions for Your Home</h4>
                      <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {furnitureFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary explore-feature border-0 rounded text-center">
                        <div className="card-body">
                            <div className="icons rounded-circle shadow-lg d-inline-block">
                                <Icon className="fea h4 mb-0"/>
                            </div>
                            <div className="content mt-3">
                                <Link href="#" className="title text-dark fw-semibold">{item.title}</Link>
                                <p className="text-muted mt-2">{item.desc}</p>
                                <Link href="#" className="btn btn-link primary fw-semibold mb-0">Read More <FiArrowRight className=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
      <FurnitureCta/>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <div className="features-absolute">
                      <div className="row align-items-end">
                          <div className="col-md-3 col-6">
                              <Image src="/images/furniture/cta1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow" alt=""/>
                          </div>
                          
                          <div className="col-md-3 col-6">
                              <Image src="/images/furniture/cta2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:'auto'}} className="img-fluid rounded-md shadow" alt=""/>
                          </div>
                          
                          <div className="col-md-6 col-12">
                              <div className="section-title bg-white-color p-4 rounded-md text-md-start text-center">
                                  <h2 className="fw-bold mb-3">We Provide You The <br/> Best Experience</h2>
                                  <Link href="#!" className="btn btn-link primary text-muted title-dark fw-semibold"><FiShoppingCart className=""/> Shop Now</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <FurnitureMasonary/>
      </div>

      <div className="container mt-100 mt-60">
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
            {furnitureBlog.map((item,index)=>{
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
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                            <small className="date"><MdOutlineCalendarMonth className="#"/> {item.date}</small>
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
