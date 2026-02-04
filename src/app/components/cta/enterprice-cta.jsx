'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import { clientData } from '../../data/client'
import Image from 'next/image';

export default function EnterpriceCta() {
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
        <section className="section" style={{backgroundImage:"url('/images/3.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row py-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                {clientData.map((item,index)=>{
                                    return(
                                        <div className="tiny-slide client-testi text-center" key={index}>
                                            <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                            <p className="text-white-50 para-dark h5 fw-normal fst-italic mt-4">{item.desc}</p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 className="text-white">{item.name}</h6>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
