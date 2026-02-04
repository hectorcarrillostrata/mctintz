'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gymImage } from '@/app/data/portfolio'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GymSlider() {

    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)
    
    const slides = gymImage.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index);
        setOpen(true)
    }
  return (
        <div className="row g-0 row-cols-lg-5 row-cols-md-3 row-cols-2 mt-4 pt-2">
            {gymImage.map((item,index)=>{
                return(
                    <div className="col" key={index}>
                        <div className="card rounded-0">
                            <div className="card-body p-0">
                                <Link href="#" scroll={false} onClick={()=>openBox(index)} className="lightbox" title="">
                                    <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </Link>
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

        </div>
  )
}
