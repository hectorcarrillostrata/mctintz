'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

import { creators } from '../../data/nft'
import {FiArrowRightCircle} from 'react-icons/fi'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function CreatorsSlider() {
    const settings = {
        container: '.tiny-five-item',
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
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            320: {
                items: 2
            },
        },
      };
  return (
            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <div className="tiny-five-item">
                        <TinySlider settings={settings}>
                            {creators.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card nft nft-primary nft-creator border-0 rounded-md shadow m-2">
                                            <div className="card-body p-3">
                                                <div className="pb-3 border-bottom">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="badge bg-soft-primary rounded-pill">No. #{item.id}</span>
                
                                                        <Link href="/nft-explore" className="text-dark h5 mb-0 read-more"><FiArrowRightCircle className="uil uil-arrow-circle-right"/></Link>
                                                    </div>
                                                </div>
                
                                                <div className="content mt-3">
                                                    <div className="position-relative text-center">
                                                        <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded-pill shadow" alt=""/>
                                                        
                                                        <div className="author mt-2">
                                                            <Link href={`/account-profile/${item.id}`} className="text-dark h6 name">{item.name}</Link>
                                                            <small className="d-block fw-bold mt-1">{item.value}<span className="text-muted">ETH</span></small>
                                                        </div>
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
