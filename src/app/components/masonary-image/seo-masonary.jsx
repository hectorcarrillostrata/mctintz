'use client'
import Image from 'next/image'
import React from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function SeoMasonary() {

    let ImageData = ['/images/seo/8.png', '/images/seo/6.png', '/images/seo/4.png', '/images/seo/7.png','/images/seo/5.png','/images/seo/3.png','/images/seo/1.png','/images/seo/2.png']

  return (
    <div id="grid" className="row">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry>
                {ImageData.map((item, index)=>{
                    return(
                        <div className="spacing picture-item" key={index}>
                            <Image src={item} className="img-fluid shadow seo-hero-widget rounded-md" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
                        </div>
                    )
                })}

            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
