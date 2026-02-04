'use client'
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import Link from 'next/link';

export default function CorporateHeroSlider() {
  return (
    <section className="home-slider position-relative">
        <Swiper
        modules={[Autoplay,]}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
            delay:3000,
            disableOnInteraction: false,
        }}
        >
            <SwiperSlide>
                <div>
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/corporate/1.jpg')"}}>
                    <div className="bg-overlay"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="display-5 text-white title-dark fw-bold mb-4">Discover the world of <br/> business</h1>
                                        <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                        
                                        <div className="mt-4 pt-2">
                                            <Link href="#" className="btn btn-primary">Contact us</Link>
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
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/corporate/2.jpg')"}}>
                    <div className="bg-overlay"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="display-5 text-white title-dark fw-bold mb-4">Meet our brand <br/> new solution</h1>
                                        <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                        
                                        <div className="mt-4 pt-2">
                                            <a href="#" className="btn btn-primary">Get Started</a>
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
