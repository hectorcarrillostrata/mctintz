'use client'
import React from 'react'
import CountUp from 'react-countup';

export default function Counter({end}) {
  return (
    <CountUp className="counter-value" end={end}></CountUp>
  )
}
