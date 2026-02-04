'use client'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css';

export default function BlogImageSlider() {
    let images = [
        '/images/blog/slide01.jpg','/images/blog/slide02.jpg','/images/blog/slide03.jpg'
    ]

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
      

    <div className="row">
        <div className="col-12">
            <div className="tiny-single-item">
                <TinySlider settings={settings}>
                    {images.map((item,index)=>{
                        return(
                            <div className="tiny-slide" key={index}>
                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="d-block w-100" alt=""/>
                            </div>
                        )
                    })}
                </TinySlider>
            </div>
        </div>
    </div>
  )
}
