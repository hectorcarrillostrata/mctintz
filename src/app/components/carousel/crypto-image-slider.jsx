'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { cryptoImage } from '../../data/data'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function CryptoImageSlider() {
    const settings = {
        container: '.tiny-four-item',
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
                items: 4
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
        <section className="mt-5 pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tiny-four-item">
                            <TinySlider settings={settings}>
                                {cryptoImage.map((item,index)=>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <Link href="#" className="customer-testi">
                                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                            </Link>
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
