import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import EbookSlider from '../components/carousel/ebook-slider'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'
import { ebookFeature } from '../data/feature'

export default function Ebook() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 d-table w-100 bg-light">
      <div className="container">
          <div className="row mt-5 mt-sm-0 align-items-center">
              <div className="col-lg-6 col-md-6">
                  <div className="title-heading me-lg-4">
                      <h4 className="display-4 fw-bold mb-3"> The Most <br/> Comprehensive <br/> Book! </h4>
                      <p className="text-muted para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-soft-primary m-1">Buy Now @ $18</Link>
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="p-5 rounded-md shadow bg-white">
                      <Image src="/images/book/book.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <div className="bg-light p-5 rounded-md shadow me-lg-5">
                      <Image src="/images/book/about.png" width={0} height={0} sizes='100vw' style={{width:'290px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <h4 className="title mb-4">About the Book</h4>
                      <p className="text-muted para-desc">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <ul className="list-unstyled text-muted my-4">
                          <li className="list-inline-item me-lg-5 me-4"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Organize your data</li>
                          <li className="list-inline-item me-lg-5 me-4"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Work with any team</li>
                          <li className="list-inline-item me-lg-5 me-4"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Business analytics</li>
                          <li className="list-inline-item me-lg-5 me-4"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Always in sync</li>
                          <li className="list-inline-item me-lg-5 me-4"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Embedded analytics</li>
                      </ul>
                      <Image src="/images/book/sign.png" width={115} height={29} className="img-fluid" alt=""/>
                      <div className="d-flex align-items-center mt-4">
                          <Image src="/images/client/05.jpg" width={80} height={80} className="avatar avatar-md-md rounded-circle shadow-lg" alt=""/>
                          <div className="flex-1 content ms-3">
                              <h5 className="mb-0">Cristina Murphy</h5>
                              <p className="text-muted mb-0">Auther</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
            {ebookFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="d-flex features feature-primary feature-clean">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h3 mb-0"/>
                        </div>
                        <div className="content ms-3">
                            <h5 className="mb-1"><Link href="#" className="text-dark">{item.title}</Link></h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="rounded py-5 bg-light shadow">
              <div className="container my-lg-5">
                  <div className="row justify-content-center">
                      <div className="col-12 text-center">
                          <div className="section-title mb-4 pb-2">
                              <h4 className="title mb-4">Book Pricing</h4>
                              <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          </div>
                      </div>
                  </div>

                  <div className="row justify-content-center">
                      <div className="col-lg-9">
                          <div className="row">
                              <div className="col-md-4 col-12 mt-4 pt-2">
                                  <div className="card pricing pricing-primary business-rate text-center shadow rounded">
                                      <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                      <div className="card-body">
                                          <h5 className="title mb-4">eBook</h5>
                                          <h2 className="fw-bold">$ 4.99</h2>
                                          
                                          <p className="text-muted mb-0">Explore everything from machine learning and global payments to scaling your team.</p>
                                          <div className="d-grid">
                                              <button className="btn btn-primary">Buy Now</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-md-4 col-12 mt-4 pt-2">
                                  <div className="card pricing pricing-primary business-rate starter-plan text-center shadow rounded">
                                      <div className="card-body">
                                          <h5 className="title text-primary mb-4">Print</h5>
                                          <h2 className="fw-bold">$ 14.99</h2>
                                          
                                          <p className="text-muted mb-0">Explore everything from machine learning and global payments to scaling your team.</p>
                                          <div className="d-grid">
                                              <button className="btn btn-primary">Buy Now</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-md-4 col-12 mt-4 pt-2">
                                  <div className="card pricing pricing-primary business-rate text-center shadow rounded">
                                      <div className="card-body">
                                          <h5 className="title mb-4">PDF</h5>
                                          <h2 className="fw-bold">$ 9.99</h2>
                                          
                                          <p className="text-muted mb-0">Explore everything from machine learning and global payments to scaling your team.</p>
                                          <div className="d-grid">
                                              <button className="btn btn-primary">Buy Now</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Other Books</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>

      <EbookSlider/>
    </section>

    <section className="section bg-primary bg-gradient mt-md-5">
      <div className="container position-relative">
          <div className="row">
              <div className="col-lg-5 col-md-6">
                  <div className="app-subscribe text-center text-md-start">
                      <Image src="/images/book/6.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-md" alt=""/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-center text-md-start">
                      <h1 className="fw-bold text-white title-dark mb-3">Upcoming Book</h1>
                      <p className="text-white-50 para-dark">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      
                      <div className="mt-4 pt-2">
                          <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-warning">Pre-order Now</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
