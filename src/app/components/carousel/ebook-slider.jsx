'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { ebookList, ebookImg } from '../../data/data'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function EbookSlider() {
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = ebookImg.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }
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
        <div className="container-fluid mb-md-5">
            <div className="row">
                <div className="col-md-12 mt-4 pt-2">
                    <div className="tiny-six-item">
                        <TinySlider settings={settings}>
                            {ebookList.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden my-2 mx-1">
                                            <div className="card-body p-0">
                                                <Link href="#" scroll={false} onClick={()=>openBox(index)} className="lightbox d-inline-block" title="">
                                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid shadow rounded" alt=""/>
                                                </Link>
                                                <div className="content p-3">
                                                    <h5 className="mb-0"><Link href="#" className="text-dark title">{item.name}</Link></h5>
                                                    <h6 className="text-muted tag mb-0">{item.value}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider> 
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={slides}
                            index={activeIndex} 
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}
