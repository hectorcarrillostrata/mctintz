'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import { clientData } from '../../data/client'
import Image from 'next/image';

export default function ClientSingle({textWhite}) {
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
                    <div className="tiny-slide client-testi text-center" key={index}>
                        <p className={` ${textWhite ? 'text-white-50 para-dark h6 fst-italic' : 'text-muted h6 fst-italic'}`}>{item.desc2}</p>
                        <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow mt-4" alt=""/>
                        <ul className="list-unstyled mb-0 mt-3">
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                        </ul>
                        <h6 className={textWhite ? 'text-white' : 'text-primary'}>{item.name} <small className="text-muted">{item.possition}</small></h6>
                    </div>
                )
            })}
        </TinySlider>
    </div>
  )
}
