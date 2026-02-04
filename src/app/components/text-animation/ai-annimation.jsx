'use client'
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

export default function AiAnnimation() {
  return (
    <h1 className="heading fw-bold mb-3">The AI Content Plaform <br/> for 
    <TypeAnimation
    sequence={[
        // Same substring at the start will only be typed out once, initially
        'Videos',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Modern Teams',
        1000,
        'Social Media',
        1000,
    ]}
    wrapper="span"
    speed={10}
    repeat={Infinity}
    className="text-primary typewrite ps-1" 
    cursor={false}
    /></h1>
  )
}
