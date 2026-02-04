'use client'
import React from 'react'

import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';

export default function PersonalHero() {
  return (
        <section className="bg-home personal-hero d-flex align-items-center background-effect overflow-hidden" id="home">
            <div className="container-fluid">
                <div className="bg-overlay bg-soft-primary jarallax" data-jarallax data-speed="0.5" ></div>
                <Parallax
                    bgImage='/images/personal/hero-overlay.png'
                    bgImageAlt="the dog"
                    strength={300}
                    style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        width:'100%',
                        height:'100%',
                        backgroundPosition:'top'
                    }}
                />
                <div className="container position-relative z-index-1">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="title-heading">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 order-2 order-lg-1 mt-4 mt-sm-0">
                                        <div className="rounded personal-hero-para">
                                            <h5 className="mb-3 sub-title">I'm Professional Web Developer</h5>
                                
                                            <p className="para-desc para mb-0">Obviously I'm a Web Designer. Web Developer with over 3 years of experience.</p>
                                        
                                            <div className="mt-4">
                                                <a href="#portfolio" className="btn btn-primary">Hire me</a>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-4 offset-lg-4 col-md-6 order-1 order-lg-1">
                                        <h4 className="display-3 title fw-bold mb-0">James <br/> 
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Thompson!',
                                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                                'Web-designer',
                                            ]}
                                            wrapper="span"
                                            speed={10}
                                            className=""
                                            repeat={Infinity}
                                            cursor={false}
                                            /> </h4>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal-overlay bg-overlay bg-primary-gradient-overlay"></div>
            <ul className="circles p-0 mb-0"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        </section>
  )
}
