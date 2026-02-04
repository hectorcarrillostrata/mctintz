'use client'
import React from 'react'
import Link from 'next/link';

import { Carousel } from 'react-responsive-carousel';
import '../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

export default function HeroSlider() {
  return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false} transitionTime={1000} interval={5000}>
            <div className="bg-home slider-rtl-2 d-flex align-items-center" style={{backgroundImage:"url('/images/shop/bg2.jpg')", backgroundPosition:"center"}}>
                <div className="bg-overlay bg-overlay-white opacity-5"></div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-md-7">
                            <div className="title-heading mt-4 text-start">                                    
                                <h1 className="display-4 fw-bold mb-3 text-black">New Accessories <br/> Collections</h1>
                                <p className="para-desc text-black">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4">
                                    <Link href="#" className="btn btn-soft-primary">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-home slider-rtl-1 d-flex align-items-center" style={{backgroundImage:"url('/images/shop/bg1.jpg')", backgroundPosition:"center"}}>
                <div className="bg-overlay bg-overlay-white opacity-5"></div>
                <div className="container">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-7 col-md-7">
                            <div className="title-heading mt-4 text-start">
                                <h1 className="display-4 fw-bold mb-3 text-black">Headphones <br/> Speaker</h1>
                                <p className="para-desc text-black">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4">
                                    <Link href="#" className="btn btn-soft-primary">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-home slider-rtl-3 d-flex align-items-center" style={{backgroundImage:"url('/images/shop/bg3.jpg')", backgroundPosition:"center"}}>
                <div className="bg-overlay bg-overlay-white opacity-5"></div>
                <div className="container">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-7 col-md-7">
                            <div className="title-heading mt-4 text-start">
                                <h1 className="display-4 fw-bold mb-3 text-black">Modern Furniture, <br/> Armchair</h1>
                                <p className="para-desc text-black">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                                <div className="mt-4">
                                    <Link href="#" className="btn btn-soft-primary">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
  )
}
