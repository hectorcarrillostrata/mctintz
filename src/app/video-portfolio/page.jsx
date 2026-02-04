import React from 'react'
import Image from 'next/image'

import VideoNavbar from '../components/navbar/video-navbar'
import PortfolioVideo from '../components/video/portfolio-video'
import SmallFooterTwo from '../components/footer/small-footer-two'

import { classicPortfolio } from '../data/portfolio'
import ScrollToTop from '../components/scroll-to-top'

export default function VideoPortfolio() {
  return (
    <>
    <VideoNavbar/> 
    <section className="bg-half-260" style={{backgroundImage:"url('/images/photography/videographer.jpg')", backgroundPosition:"top"}}>
        <div className="bg-overlay bg-linear-gradient-2"></div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <div className="features-absolute">
                      <div id="grid" className="row">
                        {classicPortfolio.map((item,index)=>{
                          return(
                            <div className="col-md-6 col-12 spacing picture-item" key={index}>
                                <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="overlay-work"></div>
                                            <PortfolioVideo/>
                                    </div>
                                </div>
                            </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <SmallFooterTwo/>
    <ScrollToTop/>
    </>
  )
}
