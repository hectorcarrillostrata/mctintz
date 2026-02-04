'use client'
import React from 'react'
import { Parallax } from 'react-parallax';

export default function FurnitureCta() {
  return (
        <div className="container-fluid mt-100 mt-60 px-md-3 px-0">
            <div className="bg-half-170 rounded-md rounded-md-0 shadow-md position-relative overflow-hidden jarallax">
                <Parallax
                bgImage='/images/furniture/bg4.jpg'
                bgImageAlt="the dog"
                strength={300}
                style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100%',
                    height:'100%',
                    backgroundPosition:"center"
                }}
            >
            </Parallax>
            </div>
        </div>
  )
}
