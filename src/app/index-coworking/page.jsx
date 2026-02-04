import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import CoWorkingCarousel from '../components/carousel/co-working-carousel'
import PartnerOne from '../components/partner/partner-one'
import CoWorkingCta from '../components/cta/co-working-cta'
import CoworkingPrice from '../components/pricing/coworking-price'
import ClientOne from '../components/client/client-one'
import BlogOne from '../components/blog/blog-one'
import VideoOne from '../components/video/video-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { coWorkFeature } from '../data/feature'

import {FiUser, FiPhone, FiMail} from 'react-icons/fi'

export default function Coworking() {
  return (
    <>
    <Navbar navlight={true}/> 

    <CoWorkingCarousel/>

    <section className="py-5 border-bottom border-top">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <h5>Trusted client by over 10,000+ of the world's</h5>
              </div>
          </div>
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12">
                  <Image src="/images/coworking/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">About Our Community</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick Space</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                      <Link href="#" className="btn btn-primary mt-3">Join now</Link>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Your Comfort is Our Priority</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {coWorkFeature.map((item,index)=>{
              let Icon = item.icon;
              return(
                <div className="col-lg-3 col-md-4 col-6 mt-4 pt-2" key={index}>
                    <div className="features feature-primary text-center pt-3 pb-3">
                        <Icon className="h2 color"></Icon>
                        <div className="content mt-3">
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section">
      <CoWorkingCta/>
      <CoworkingPrice/>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Trusted Co-workers</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Latest News & Events</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <BlogOne/>
      </div>
    </section>

    <section className="section" style={{backgroundImage:"url('/images/coworking/bg04.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-8 col-md-7">
                  <div className="section-title me-lg-4">
                      <h4 className="title title-dark text-light mb-4">We are Built for Business – Explore Us Today !</h4>
                      <p className="text-white-50 para-dark para-desc mb-0">Start working with <span className="text-success fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary m-1">Install Now</Link>
                          <VideoOne/>
                          <span className="fw-bold text-uppercase small text-light title-dark align-middle ms-1">Watch Now</span>
                      </div>
                  </div>
              </div>

              <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card rounded shadow border-0">
                      <div className="card-body">
                          <h5 className="text-center">Become A Member</h5>

                          <form>
                              <div className="row mt-4">
                                  <div className="col-lg-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Name : <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input name="name" id="name3" type="text" className="form-control ps-5" placeholder="Name" required=""/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email : <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input type="email" id="email3" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Phone no.: <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiPhone className="fea icon-sm icons"/>
                                              <input name="number" id="number" type="number" className="form-control ps-5" placeholder="Phone no. :" required=""/>
                                          </div>
                                      </div> 
                                  </div>

                                  <div className="col-lg-12 mb-0">
                                      <div className="d-grid">
                                          <button className="btn btn-primary">Started now</button>
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
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
