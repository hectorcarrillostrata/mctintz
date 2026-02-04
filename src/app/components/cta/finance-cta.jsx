'use client'
import React from 'react'

import { Parallax } from 'react-parallax';
import OutlineVideo from '../video/outline-video';

export default function FinanceCta() {
  return (
        <section className="section bg-cta jarallax relative" id="cta">
            <Parallax
                bgImage='/images/finance/cta.jpg'
                bgImageAlt=""
                strength={400}
                style={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',}}
            >
            </Parallax>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                            <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <OutlineVideo/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
