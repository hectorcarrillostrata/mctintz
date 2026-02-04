'use client'
import React from 'react'

import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';

export default function FinanceHero() {
  return (
    <section className="bg-half-260 d-table w-100 jarallax" >
        <Parallax
            bgImage='/images/finance/bg.jpg'
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
        >
        </Parallax>
        <div className="bg-overlay opacity-6"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="title-heading">
                        <div className="alert alert-light alert-pills text-dark" role="alert">
                            <span className="badge rounded-pill bg-primary me-1">Trusted</span>
                            <span className="content"> Funds held securely and relibly</span>
                        </div>
                        <h1 className="heading fw-bold mb-3">Help your 
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Agency',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Business',
                                1000,
                                'Startups',
                                1000,
                                'Studio',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            className="text-primary text-decoration-underline typewrite ms-1"
                            repeat={Infinity}
                            cursor={false}
                            />
                         <br/> Growth up to high level</h1>
                        <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                        <div className="mt-4 pt-2">
                            <a href="#" className="btn btn-primary">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
