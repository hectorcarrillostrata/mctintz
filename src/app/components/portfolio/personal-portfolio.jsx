'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { personalPortfolio, personalPortfolioImg } from '../../data/portfolio'
import {FiCamera} from 'react-icons/fi'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PersonalPortfolio() {

    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = personalPortfolioImg.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }
  return (
   
<div className="row">
    {personalPortfolio.map((item,index)=>{
      return(
        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
            <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                <div className="portfolio-box-img position-relative overflow-hidden">
                    <Image className="item-container img-fluid mx-auto" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} src={item.image} alt="1" />
                    <div className="overlay-work"></div>
                    <div className="content">
                        <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-white title">{item.name}</Link></h5>
                        <h6 className="text-white-50 tag mt-1 mb-0">{item.title}</h6>
                    </div>
                    <div className="icons text-center">
                        <Link href="#" scroll={false} onClick={()=>openBox(index)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
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
    })}
  </div>
  )
}
