'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import { clientData } from '../../data/client'
import Image from 'next/image';

export default function ClientTwo() {
    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      };
  return (
    <div className="tiny-single-item">
        <TinySlider settings={settings}>
            {clientData.map((item,index)=>{
                return(
                    <div className="tiny-slide" key={index}>
                        <div className="client-testi">
                            <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded-circle shadow" alt=""/>
                            <p className="text-muted mt-4">{item.desc}</p>
                            <h6 className="text-primary">{item.name}</h6>
                        </div>
                    </div>
                )
            })}
        </TinySlider>
    </div>
  )
}
