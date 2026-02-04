'use client'
import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import '../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

export default function ReactCarousel({children}) {
  return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false} transitionTime={2000}>
          {children}
        </Carousel>
  )
}
