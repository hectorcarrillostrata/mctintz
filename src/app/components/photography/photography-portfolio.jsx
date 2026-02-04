'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { photographyImage } from '../../data/photography'

import {FiCamera, FiArrowRight} from 'react-icons/fi'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PhotographyPortfolio() {
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

     const slides = photographyImage.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }

  return (
        <div className="row justify-content-center">
            <div className="col-lg-10 mt-4 pt-2">
                <div className="row g-3" id="grid">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry gutter="15px">
                            {photographyImage.map((item,index)=>{
                                return(
                                    <div className="picture-item" key={index}>
                                        <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                            <div className="card-body p-0">
                                                <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                                <div className="overlay"></div>
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
                        </Masonry>
                    </ResponsiveMasonry>
                    
                </div>

                <div className="text-center mt-4">
                    <Link href="/photography-portfolio" className="text-primary">See More <FiArrowRight/></Link>
                </div>
            </div>
        </div>
  )
}
