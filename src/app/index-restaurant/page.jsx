import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import RestaurantSlider from '../components/hero-section/restaurant-slider'
import RestaurantCtaOne from '../components/cta/restaurant-cta-one'
import RestaurantCtaTwo from '../components/cta/restaurant-cta-two'
import RestaurantCtaThree from '../components/cta/restaurant-cta-three'
import FoodTab from '../components/tab/food-tab'
import ClientOne from '../components/client/client-one'
import FoodSlider from '../components/masonary-image/food-slider'
import FoodFooter from '../components/footer/food-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { restaurantServices } from '../data/services'
import { foodBlog } from '../data/blogData'

import {FiArrowRight, FiHeart, FiMessageCircle, FiUser, FiCalendar, FiChevronRight} from 'react-icons/fi'

export default function Restaurant() {
  return (
    <>
    <Navbar navlight={true}/> 
    <RestaurantSlider/>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/restaurant/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid shadow rounded" alt=""/>
              </div>
              <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <p className="text-muted fs-5 mb-0">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum".</p>
                  
                      <h4 className="title fw-bold my-3">Food is our common ground, <br/> a universal experience.</h4>

                      <p className="text-muted">Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                  
                      <div className="mt-4">
                          <Image src="/images/sign.png" width={128} height={32} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <RestaurantCtaOne/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Best Solutions</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {restaurantServices.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h3 mb-0"></Icon>
                        </div>

                        <div className="card-body">
                            <h5 className="mb-3">Food Meets Style</h5>
                            <p className="text-muted">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                            <div>
                                <Link href="#" className="btn btn-link primary fw-semibold d-inline-flex align-items-center">Read More <FiArrowRight className="ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <RestaurantCtaTwo/>
    <FoodTab/>
    <RestaurantCtaThree/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Client's Review</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Latest News & Articals</h4>
                      <p className="text-muted mx-auto para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {foodBlog.map((item,index)=>{
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
                            <small className="user d-block"><FiUser className="me-1"/> Calvin Carlo</small>
                            <small className="date"><FiCalendar className="me-1"/>{item.date}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <FoodSlider/>
    <FoodFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
