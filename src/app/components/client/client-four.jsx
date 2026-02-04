'use client'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'

import { clientData } from '../../data/client'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientFour({bg}) {
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
        <div className="row">
            <div className="col-12">
                <div className="tiny-three-item">
                    <TinySlider settings={settings}>
                        {clientData.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className={`card border-0 text-center ${bg === false ? 'bg-transparent ' : ''}`}>
                                        <div className="card-body">
                                            <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                            <p className="text-muted mt-4">{item.desc}</p>
                                            <h6 className="text-primary">{item.name}</h6>
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
