'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { sucessRoadMap } from '@/app/data/crypto'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function SucessSlider() {

    const settings = {
        container: '.roadmaps',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: false,
        speed: 400,
        gutter: 12,
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
            <div className="row">
              <div className="col-12 mt-4 pt-2">
                  <div className="roadmaps tiny-timeline">
                    <TinySlider settings={settings}>
                        {sucessRoadMap.map((item,index)=>{
                            let Icon = item.icon
                            return(
                                <div className="tiny-slide text-center" key={index}>
                                    {item.active === false && 
                                        <div className="card features feature-primary pt-4 border-0 item-box">
                                            <div className="icon text-center text-primary rounded-pill mx-auto mb-3 fs-5">
                                                <Icon className=""/>
                                            </div>
                                            <p className="text-muted mb-0">{item.date}</p>
                                            <h6 className="mb-0 mt-1">{item.title}</h6>
                                        </div>
                                    }
                                    {item.active === true && 
                                        <div className="card features p-4 border-0 bg-primary item-box">
                                            <div className="icon text-center text-white title-dark rounded-pill mx-auto mb-3 fs-5">
                                                <Icon className=""/>
                                            </div>
                                            <p className="text-white-50 mb-0">{item.date}</p>
                                            <h6 className="text-white-50 mb-0 mt-1">{item.title}</h6>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </TinySlider>
                  </div>
              </div>
          </div>
  )
}
