'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import { FiCamera } from 'react-icons/fi'


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PropertyDetailImage() {
    let images = [
        "/images/real/property/single/1.jpg","/images/real/property/single/2.jpg","/images/real/property/single/3.jpg","/images/real/property/single/4.jpg","/images/real/property/single/5.jpg"
    ]

    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const slides = images.map((image) => ({ src: image }));

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }
  return (
    <section className="bg-top-74 d-table w-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-1">
                    <div className="work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                        <Image src="/images/real/property/single/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        <div className="overlay-work"></div>
                        <div className="icons text-center">
                            <Link href="#" onClick={() => handleCLick(0)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                        </div>
                    </div>
                </div>

                
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 p-1">
                                    <div className="work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                        <Image src="/images/real/property/single/2.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                        <div className="overlay-work"></div>
                                        <div className="icons text-center">
                                            <Link href="#" onClick={() => handleCLick(1)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 p-1">
                                    <div className="work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                        <Image src="/images/real/property/single/3.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                        <div className="overlay-work"></div>
                                        <div className="icons text-center">
                                            <Link href="#" onClick={() => handleCLick(2)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 p-1">
                                    <div className="work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                        <Image src="/images/real/property/single/4.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                        <div className="overlay-work"></div>
                                        <div className="icons text-center">
                                            <Link href="#" onClick={() => handleCLick(3)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 p-1">
                                    <div className="work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                        <Image src="/images/real/property/single/5.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                        <div className="overlay-work"></div>
                                        <div className="icons text-center">
                                            <Link href="#" onClick={() => handleCLick(4)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <Lightbox
            open={isOpen}
            close={() => setOpen(false)}
            slides={slides}
            index={photoIndex} 
        />
    </section>
  )
}
