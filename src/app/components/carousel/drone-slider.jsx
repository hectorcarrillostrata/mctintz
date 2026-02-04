'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { droneImage } from '../../data/data'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function DroneSlider() {
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
    <div className="row align-items-center">
        <div className="col-md-6">
            <div className="tiny-single-item">
                <TinySlider settings={settings}>
                    {droneImage.map((item,index)=>{
                        return(
                            <div className="tiny-slide" key={index}>
                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                            </div>
                        )
                    })}   
                </TinySlider>                         
            </div>
        </div>

        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-md-4">
                <h4 className="title mb-4">DJI Spark Drone</h4>
                <div className="d-flex justify-content-between my-4">
                    <h4 className="mb-0"><b>$ 1800</b></h4>
                    <div className="text-warning">
                        <span className="mdi mdi-star"></span>
                        <span className="mdi mdi-star"></span>
                        <span className="mdi mdi-star"></span>
                        <span className="mdi mdi-star"></span>
                        <span className="mdi mdi-star-half"></span>
                        <span className="text-muted ps-2">23 Reviews</span>
                    </div>
                </div>
                <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                <ul className="list-unstyled text-muted">
                    <li><i className="mdi mdi-check me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                    <li><i className="mdi mdi-check me-2"></i>Create your own skin to match your brand</li>
                    <li><i className="mdi mdi-check me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                    <li><i className="mdi mdi-check me-2"></i>Create your own skin to match your brand</li>
                </ul>
                <div className="mt-4">
                    <Link href="#" className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
