'use client'
import React from 'react'

import { Parallax } from 'react-parallax';

export default function PhotoAboutBanner({title}) {
  return (
    <section className="bg-half-170 jarallax" style={{backgroundPosition:'center'}} >
        <Parallax
            bgImage='/images/photography/photographer.jpg'
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
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
            <h6 className="text-muted title-dark-50 mb-0">I'm Jack Jeffrey</h6>
            <h4 className="title text-white title-dark mb-5">{title}</h4>
        </div>
    </section>
  )
}
