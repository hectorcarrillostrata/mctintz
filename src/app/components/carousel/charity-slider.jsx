'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { charityImage } from '../../data/data'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {FiCamera} from 'react-icons/fi'

export default function CharitySlider() {
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = charityImage.map((image) => ({ src: image }));

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
    <div className="container">
          <div className="row">
              <div className="col-md-12 mt-4 pt-2">
                  <div className="tiny-four-item">
                    <TinySlider settings={settings}>
                        {charityImage.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 work-container work-primary work-creative position-relative d-block overflow-hidden rounded mx-2">
                                        <div className="card-body p-0">
                                            <div className="position-relative overflow-hidden">
                                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                <div className="overlay-grid"></div>
                                            </div>
                                            <div className="icons text-center p-4">
                                                <Link href="#" scroll={false} onClick={()=>openBox(index)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
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
              </div>
          </div>
      </div>
  )
}
