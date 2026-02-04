'use client'
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

export default function PersonalAnnimation() {
  return (
    <h1 className="display-3 fw-bold mb-3">Here I'm <br/> 
    <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Calvin Carlo',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'UI/UX Designer',
            1000,
            'Web Developer',
            1000,
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        className="text-primary typewrite ps-1" 
        cursor={false}
        />
    <span className="text-primary typewrite" data-period="2000" data-type='[ "Calvin Carlo", "UI/UX Designer", "Web Developer" ]'> <span className="wrap"></span> </span> </h1>
  )
}
