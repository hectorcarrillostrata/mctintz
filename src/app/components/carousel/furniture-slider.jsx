'use client'
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import {FiShoppingCart} from 'react-icons/fi'

import Link from 'next/link';

export default function FurnitureSlider() {
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
            <div className="bg-home zoom-image d-flex align-items-center">
                <div className="bg-overlay image-wrap" style={{backgroundImage:"url('/images/furniture/bg1.jpg')"}}></div>
                <div className="bg-overlay opacity-5"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-heading position-relative mt-5" style={{zIndex:'1'}}>
                                <h1 className="fw-bold display-4 mb-3 text-white title-dark">Luxurious <br/>Furniture</h1>
                                <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#!" className="btn btn-primary d-inline-flex align-items-center"><FiShoppingCart className="me-1"/> Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-home zoom-image d-flex align-items-center">
                <div className="bg-overlay image-wrap" style={{backgroundImage:"url('/images/furniture/bg2.jpg')"}}></div>
                <div className="bg-overlay opacity-5"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-heading position-relative mt-5" style={{zIndex:'1'}}>
                                <h1 className="fw-bold display-4 mb-3 text-white title-dark">Modern Interior <br/> For House</h1>
                                <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#!" className="btn btn-primary d-inline-flex align-items-center"><FiShoppingCart className="me-1"/> Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-home zoom-image d-flex align-items-center">
                <div className="bg-overlay image-wrap" style={{backgroundImage:"url('/images/furniture/bg3.jpg')"}}></div>
                <div className="bg-overlay opacity-5"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-heading position-relative mt-5" style={{zIndex:'1'}}>
                                <h1 className="fw-bold display-4 mb-3 text-white title-dark">Make Your Living Room <br/>Comfortable</h1>
                                <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4 pt-2">
                                    <Link href="#!" className="btn btn-primary d-inline-flex align-items-center"><FiShoppingCart className="me-1"/> Shop Now</Link>
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
