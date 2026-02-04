'use client'
import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { partnerSlider } from '../../data/partner'

const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });
import 'tiny-slider/dist/tiny-slider.css';

export default function PartnersSlider() {
const settings = {
    container: '.tiny-three-item',
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
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
    };
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                    <h6>We believe in building each other and hence</h6>
                    <h4 className="title mb-4">Work with some amazing partners</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 mt-4">
                <div className="tiny-three-item">
                    <TinySlider settings={settings}>
                        {partnerSlider.map((item,index)=>{
                            return(
                                <div className="tiny-slide text-center" key={index}>
                                    <div className="client-testi rounded shadow m-2 p-4">
                                        <Image src={item.image} width={75} height={24} className="img-fluid avatar avatar-ex-sm mx-auto" alt=""/>
                                        <p className="text-muted mt-4">{item.desc}</p>
                                        <h6 className="text-primary">{item.name}</h6>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
    </div>
  )
}
