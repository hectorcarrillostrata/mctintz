'use client'
import React from 'react'

import { Parallax } from 'react-parallax';

export default function RestaurantCtaTwo() {
  return (
        <section className="bg-half-170 jarallax position-relative ">
            <Parallax
                bgImage='/images/restaurant/bg5.jpg'
                bgImageAlt=""
                strength={400}
                style={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',}}
            >
            </Parallax>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                <h5 className="text-muted title-dark-50">Our Menu</h5>
                <h4 className="title text-white title-dark mb-4">Choose your mixture & order now!</h4>
            </div>
        </section>
  )
}
