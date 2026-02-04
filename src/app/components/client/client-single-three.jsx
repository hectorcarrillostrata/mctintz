'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import { clientData } from '../../data/client'

export default function ClientSingleThree() {
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
    }
  return (
        <div className="tiny-single-item">
            <TinySlider settings={settings}>
                {clientData.map((item,index)=>{
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="d-flex client-testi m-2">
                                <Image src={item.image} width={65} height={65} className="avatar avatar-small client-image rounded shadow" alt=""/>
                                <div className="card flex-1 content p-3 shadow rounded position-relative">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p className="text-muted mt-2">{item.desc}</p>
                                    <h6 className="text-primary">{item.name}<small className="text-muted">{item.possition}</small></h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
  )
}
