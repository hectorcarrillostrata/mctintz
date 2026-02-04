'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { furnitureData,furnitureImage } from '../../data/portfolio'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {FiCamera} from 'react-icons/fi'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function FurnitureMasonary() {
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = furnitureImage.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }

  return (
    <div id="grid" className="row mt-5 pt-3">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
            <Masonry gutter="10px">
                {furnitureData.map((item,index)=>{
                    return(
                        <div className="" key={index}>
                            <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                <div className="card-body p-0">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="overlay-work"></div>
                                    <div className="content">
                                        <h5 className="mb-1"><Link href="/portfolio-detail-one" className="text-white title">{item.name}</Link></h5>
                                        <h6 className="text-white-50 tag mt-1 mb-0">{item.title}</h6>
                                    </div>
                                    <div className="icons text-center">
                                        <Link href="#" scroll={false} onClick={()=>openBox(index)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={activeIndex} 
                />
                
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
