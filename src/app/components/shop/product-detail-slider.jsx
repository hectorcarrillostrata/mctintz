'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function ProductDetailSlider() {
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
    let image = [
        "/images/shop/product/single-2.jpg","/images/shop/product/single-3.jpg","/images/shop/product/single-4.jpg","/images/shop/product/single-5.jpg","/images/shop/product/single-6.jpg"
    ]
    return (
        <div className="col-md-5">
            <div className="tiny-single-item">
                <TinySlider settings={settings}>
                    {image.map((item,index)=>{
                        return(
                            <div className="tiny-slide" key={index}><Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="img-fluid rounded" alt=""/></div>
                        )
                    })}
                </TinySlider>
            </div>
        </div>
    )
}
