'use client'
import React from 'react'
import { Parallax } from 'react-parallax';

export default function PhotographyCta() {
  return (
    <div className="row">
        <div className="bg-half-260 rounded jarallax" data-jarallax data-speed="0.5" style={{backgroundPosition:'center'}}>
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
                <h4 className="title text-white title-dark mb-4">Jack Jeffrey</h4>
            </div>
        </div>
    </div>
  )
}
