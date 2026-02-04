'use client'
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import Link from 'next/link';

export default function RestaurantSlider() {
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
            <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/restaurant/bg1.jpg')"}}>
                <div className="bg-overlay bg-linear-gradient-4"></div>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="text-primary fw-semibold mb-3">Make A Order</h5>
                                <h4 className="display-4 mb-4 fw-bold text-white title-dark">The Best Food For The <br/> Best Moments</h4>
                                <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#" className="btn btn-primary">Book Now</Link>
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
            <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/restaurant/bg2.jpg')"}}>
                <div className="bg-overlay bg-linear-gradient-4"></div>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="text-primary fw-semibold mb-3">Make A Order</h5>
                                <h4 className="display-4 mb-4 fw-bold text-white title-dark">The Best Food For The <br/> Best Moments</h4>
                                <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#" className="btn btn-primary">Book Now</Link>
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
            <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/restaurant/bg3.jpg')"}}>
                <div className="bg-overlay bg-linear-gradient-4"></div>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="text-primary fw-semibold mb-3">Make A Order</h5>
                                <h4 className="display-4 mb-4 fw-bold text-white title-dark">The Best Food For The <br/> Best Moments</h4>
                                <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#" className="btn btn-primary">Book Now</Link>
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
