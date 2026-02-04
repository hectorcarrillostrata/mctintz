'use client'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'

import { clientData } from '../../data/client'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientFive() {
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
                                    <div className="card client-testi m-2 text-center rounded shadow border-0">
                                        <div className="card-body">
                                            <p className="text-muted h6 fst-italic">{item.desc}</p>
                                            <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt=""/>
                                            <ul className="list-unstyled mb-0 mt-3">
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 className="text-primary">{item.name}<small className="text-muted">{item.possition}</small></h6>
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
