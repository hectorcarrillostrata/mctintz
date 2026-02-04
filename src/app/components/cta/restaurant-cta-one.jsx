'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { Parallax } from 'react-parallax';

import {FiArrowRight} from 'react-icons/fi'

export default function RestaurantCtaOne() {
  return (
        <section className="jarallax position-relative" >
             <Parallax
                bgImage='/images/restaurant/bg4.jpg'
                bgImageAlt=""
                strength={400}
                style={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',}}
            >
            </Parallax>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-7 col-6 px-0">
                        <div className="card rounded-0">
                            <div className="row align-items-center g-0">
                                <div className="col-md-6">
                                    <Image src="/images/restaurant/f17.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </div>

                                <div className="col-md-6">
                                    <div className="section-title text-center px-3 py-4 p-md-4">
                                        <h4 className="title">Our Chef's <br/> Secrets</h4>
                                        <Link href="" className="btn btn-link primary fw-semibold text-muted mb-0">Learn More <span className="h5 mb-0 ms-1"><FiArrowRight className="align-middle"/></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center g-0">
                                <div className="col-md-6 order-md-1 order-2">
                                    <div className="section-title text-center px-3 py-4 p-md-4">
                                        <h4 className="title">View Full <br/> Menus</h4>
                                        <Link href="" className="btn btn-link primary fw-semibold text-muted mb-0">Menu <span className="h5 mb-0 ms-1"><FiArrowRight className="align-middle"/></span></Link>
                                    </div>
                                </div>

                                <div className="col-md-6 order-md-2 order-1">
                                    <Image src="/images/restaurant/f18.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
