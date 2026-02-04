'use client'
import React from 'react'

import { Parallax } from 'react-parallax';

export default function PhotographyHeroBanner() {
  return (
        <section className="bg-photography d-flex align-items-center">
            <div className="container-fluid">
                <div className="bg-overlay bg-transparent jarallax" style={{ backgroundPosition:'top',}}>
                   <Parallax
                      bgImage='/images/photography/first.jpg'
                      bgImageAlt="the dog"
                      strength={300}
                      style={{
                           position:'absolute',
                          top:0,
                          left:0,
                          width:'100%',
                          height:'100%',
                      }}
                  />
                </div>
                <div className="bg-overlay bg-transparent d-md-block d-none jarallax" style={{ backgroundPosition:'center'}}>
                <Parallax
                      bgImage='/images/photography/hero-text-lg.png'
                      bgImageAlt="the dog"
                      strength={200}
                      style={{
                           position:'absolute',
                          top:0,
                          left:0,
                          width:'100%',
                          height:'100%',
                      }}
                  />
                </div>
                <div className="bg-overlay bg-transparent d-block d-md-none jarallax" style={{backgroundImage:"url('/images/photography/hero-text-sm.png')", backgroundPosition:'center'}}></div>
                <div className="bg-overlay bg-transparent jarallax" data-jarallax  style={{backgroundImage:"url('/images/photography/last.png')", backgroundPosition:'center'}}></div>
            </div>
            <div className="bg-overlay bg-linear-gradient"></div>
        </section>
  )
}
