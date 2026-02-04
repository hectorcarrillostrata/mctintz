'use client'
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

export default function AnimationText() {
  return (
    <h1 className="heading mb-3">Job Vacancies for 
    <TypeAnimation
    sequence={[
        // Same substring at the start will only be typed out once, initially
        'Freelancer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Developer',
        1000,
        'Designer',
        1000,
        'UX Developer',
        1000,
        'ios Developer',
        1000,
    ]}
    wrapper="span"
    speed={10}
    repeat={Infinity}
    className="text-primary typewrite ms-2" 
    cursor={false}
    />
    </h1>
  )
}
