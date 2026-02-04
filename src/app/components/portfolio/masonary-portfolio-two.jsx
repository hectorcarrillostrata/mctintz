'use client'
import React from 'react'
import Image from 'next/image'
import { aboutImage } from '../../data/portfolio'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function MasonaryPortfolioTwo() {
  return (
        <div className="container mt-100 mt-60">
            <div id="grid" className="row mt-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
            >
                <Masonry gutter="14px">
                    {aboutImage.map((item,index)=>{
                        return(
                            <div className="" key={index}>
                                <div className="card border-0 position-relative d-block shadow overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <Image src={item} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
               
            </div>
        </div>
  )
}
