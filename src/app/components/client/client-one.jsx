'use client'
import React from 'react'
import dynamic from 'next/dynamic'

import { clientData } from '../../data/client'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';
import Image from 'next/image'

export default function ClientOne() {
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
            <div className="row justify-content-center">
                <div className="col-lg-12 mt-4">
                    <div className="tiny-three-item">
                        <TinySlider settings={settings}>
                            {clientData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="d-flex client-testi m-1">
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
                                                <h6 className="text-primary">{item.name}<small className="text-muted ps-1">{item.possition}</small></h6>
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
