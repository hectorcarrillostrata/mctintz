'use client'
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import Link from 'next/link';

export default function LogistickSlider() {
  return (
  <section className="home-slider position-relative">
    <Swiper
      modules={[Autoplay,EffectFade]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:3000,
        disableOnInteraction: false,
      }}
      effect='fade'
    >
      <SwiperSlide>
        <div>
          <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url('images/logistics/01.jpg')`}}>
              <div className="bg-overlay"></div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col">
                          <div className="title-heading position-relative mt-4 text-center" style={{zIndex:'1'}}>
                              <h1 className="fw-bold display-4 text-white title-dark mb-3">Logistic Solutions <br/>Around the World</h1>
                              <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                              <div className="mt-4 pt-2">
                                  <Link href="#!" className="btn btn-primary">Learn More</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url('images/logistics/02.jpg')`}}>
              <div className="bg-overlay"></div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col">
                          <div className="title-heading position-relative mt-4 text-center" style={{zIndex:'1'}}>
                              <h1 className="fw-bold display-4 text-white title-dark mb-3">We Make Your <br/> Logistic Simple</h1>
                              <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                              <div className="mt-4 pt-2">
                                  <Link href="#!" className="btn btn-primary">Learn More</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url('images/logistics/03.jpg')`}}>
              <div className="bg-overlay"></div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col">
                          <div className="title-heading position-relative mt-4 text-center" style={{zIndex:'1'}}>
                              <h1 className="fw-bold display-4 text-white title-dark mb-3">Flexible Logistics <br/>& Cargo for Business</h1>
                              <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                              <div className="mt-4 pt-2">
                                  <Link href="#!" className="btn btn-primary">Learn More</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
  )
}
