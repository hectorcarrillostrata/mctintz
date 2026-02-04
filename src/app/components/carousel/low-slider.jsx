'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { lowAbout } from '../../data/feature'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function LowSlider() {
    const settings = {
        container: '.tiny-six-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 6
            },

            767: {
                items: 3
            },

            320: {
                items: 1
            },
        },
      };
  return (
        <div className="row">
            <div className="col-md-12 mt-4 pt-2">
                <div className="tiny-six-item">
                    <TinySlider settings={settings}>
                        {lowAbout.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="features feature-primary feature-clean position-relative overflow-hidden rounded-md mx-2">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="bg-overlay bg-linear-gradient-2"></div>
                                        <div className="position-absolute bottom-0 end-0 start-0 mx-4 mb-4">
                                            <Link href="" className="fs-5 title fw-semibold text-white title-dark">{item.name}</Link>
                                            <p className="text-white-50 mb-0">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
  )
}
