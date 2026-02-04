import React from 'react'
import Link from 'next/link'

import VideoNavbar from '../components/navbar/video-navbar'

import {FiArrowRight} from 'react-icons/fi'

export default function Video() {
  return (
    <>
     <VideoNavbar/> 

    <section className="bg-video-studio d-flex align-items-center"  id="home">
      <div className="bg-video-wrapper">
          {/* <iframe src="https://player.vimeo.com/video/248868311?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe> */}
          <iframe src="https://www.youtube.com/embed/gJpXlRkW6Fw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe>
      </div>
      <div className="bg-overlay bg-black" style={{opacity:'0.2'}}></div>
      <div className="container-fluid">
          <div className="position-absolute bottom-0 start-0 end-0 pb-8">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="d-block">
                              <div className="d-flex justify-content-between">
                                  <h5 className="text-white text-xl font-semibold">Videos for Ads</h5>
                                  <Link href="/video-portfolio" className="text-white">See Videos <FiArrowRight className=""/></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    </>
  )
}
