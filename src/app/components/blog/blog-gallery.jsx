'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { blogGalleryImage } from '../../data/blogData'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {FiCamera} from 'react-icons/fi'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function BlogGallery() {
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = blogGalleryImage.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }

  return (
            <div id="grid" className="row">
                <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                    >
                        <Masonry>
                            {blogGalleryImage.map((item,index)=>{
                                return(
                                    <div className="spacing picture-item" key={index}>
                                        <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                            <div className="card-body p-0">
                                                <Image width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} src={item} className="img-fluid" alt=""/>
                                                <div className="overlay-work"></div>
                                                
                                                <div className="icons text-center">
                                                    <Link href="#" onClick={()=>openBox(index)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                </ResponsiveMasonry>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={activeIndex} 
                />
            </div>
  )
}
