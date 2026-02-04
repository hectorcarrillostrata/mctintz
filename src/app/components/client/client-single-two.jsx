'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { clientData } from '../../data/client'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientSingleTwo() {
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
  return (
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8 col-12">
                    <div className="tiny-single-item">
                        <TinySlider settings={settings}>
                            {clientData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card client-testi rounded bg-light overflow-hidden border-0 m-2">
                                            <div className="row align-items-center g-0">
                                                <div className="col-md-5">
                                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                </div> 

                                                <div className="col-md-7">
                                                    <div className="card-body">
                                                        <h6 className="text-primary fw-bold">{item.name} <small className="text-muted d-block my-2">Driver</small></h6>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        </ul>
                                                        <p className="text-muted h6 mb-0 fst-italic">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
  )
}
