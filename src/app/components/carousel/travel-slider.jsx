'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { travelImage } from '../../data/portfolio'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function TravelSlider() {
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
                        {travelImage.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="popular-tour rounded-md position-relative overflow-hidden mx-2">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="content">
                                            <Link href="#" className="title text-white h4 title-dark">{item.name}</Link>
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
