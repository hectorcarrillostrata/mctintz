'use client'
import React from 'react'

import { Parallax } from 'react-parallax';

export default function YogaCta() {
  return (
    <>
        <section className="section bg-cta jarallax position-relative"  id="cta">
            <Parallax
                bgImage='/images/yoga/bg02.jpg'
                bgImageAlt=""
                strength={400}
                style={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',}}
            >
            </Parallax>
            <div className="bg-overlay bg-dark opacity-5"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-dark text-white mb-4">Yoga is the journey of the self <br/> through the self</h4>
                            <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div className="mt-4 pt-2">
                                <a href="#" className="btn btn-primary">Join The Classes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}
