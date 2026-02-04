'use client'
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

export default function AnimationBusiness() {
  return (
    <h1 className="heading mb-3">Leading Digital Business For
        <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Agency',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Software',
            1000,
            'Technology',
            1000,
            'Studio',
            1000,
            'Webapps',
            1000
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        className="text-primary typewrite ps-1" 
        cursor={false}
        /> Solution</h1>
  )
}
