'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { yogaImage } from '@/app/data/portfolio'

import {FiInstagram} from 'react-icons/fi'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function YogaSlider() {
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = yogaImage.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }

    const settings = {
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 12
            },

            992: {
                items: 9
            },

            767: {
                items: 6
            },

            320: {
                items: 2
            },
        },
      };
  return (
        <div className="row">
            <div className="col-12 px-0">
                <div className="tiny-ten-item">
                    <TinySlider settings={settings}>
                        {yogaImage.map((item,index)=>{
                            return(
                            <div className="tiny-slide" key={index}>
                                <div className="work-container work-primary work-modern position-relative d-block client-testi rounded-0 overflow-hidden">
                                    <div className="card-img position-relative">
                                        <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="card-overlay"></div>
        
                                        <div className="icons text-center">
                                            <Link href="#" scroll={false} onClick={()=>openBox(index)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiInstagram className=""/></Link>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </TinySlider>
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={activeIndex} 
                />

                <div className="position-absolute top-50 start-50 translate-middle d-md-block d-none">
                    <Link href="#" className="btn btn-sm btn-primary text-uppercase">Follow Now</Link>
                </div>
            </div>
        </div>
  )
}
