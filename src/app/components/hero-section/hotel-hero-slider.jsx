'use client'
import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import VideoOne from '../video/video-one';

import { FiHome } from 'react-icons/fi'
import { BsBriefcase } from 'react-icons/bs'

export default function HotelHeroSlider() {
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
                <div className="bg-home bg-animation-left d-flex align-items-center" style={{backgroundImage:"url('/images/hotel/bg01.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="title-heading position-relative mt-4" style={{zIndex:'1'}}>
                                    <h1 className="heading mb-3">Enjoy Better Holidays With Landrick Resort</h1>
                                    <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-2">Watch Now</span>
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
                <div className="bg-home bg-animation-left d-flex align-items-center" style={{backgroundImage:"url('/images/hotel/bg02.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="title-heading position-relative mt-4" style={{zIndex:'1'}}>
                                    <h1 className="heading mb-3">Enjoy The World of Relaxation</h1>
                                    <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link href="/page-aboutus" className="btn btn-primary d-inline-flex align-items-center"><BsBriefcase className="me-1"/> Aboutus</Link>
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
                <div className="bg-home bg-animation-left d-flex align-items-center" style={{backgroundImage:"url('/images/hotel/bg03.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="title-heading position-relative mt-4" style={{zIndex:'1'}}>
                                    <h1 className="heading mb-3">Welcome Landrick <br/> A Stunning Hotel</h1>
                                    <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link href="#bookroom" className="btn btn-primary d-inline-flex align-items-center"><FiHome className='me-1'/> Book now</Link>
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
