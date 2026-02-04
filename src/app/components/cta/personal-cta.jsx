'use client'
import React from 'react'
import Link from 'next/link'

import { Parallax } from 'react-parallax';

import {FiChevronDown} from 'react-icons/fi'

export default function PersonalCta() {
  return (
        <section className="py-5 jarallax position-relative">
            <Parallax
            bgImage='/images/personal/cta.jpg'
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
            <div className="bg-overlay bg-primary-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="text-light title-dark title mb-2">I Am Available For Freelancer Projects.</h4>
                            <p className="text-light title-dark mx-auto mb-0 para-desc">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-warning mouse-down">Hire me <FiChevronDown/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
