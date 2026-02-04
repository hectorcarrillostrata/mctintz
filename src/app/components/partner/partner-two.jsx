import React from 'react'
import Image from 'next/image'
import { partnerTwoData } from '../../data/partner'

export default function PartnerTwo() {
  return (
            <div className="row justify-content-center">
                {partnerTwoData.map((item,index)=>{
                    return(
                        <div className="col-lg-2 col-md-2 col-6 text-center" key={index}>
                            <Image src={item} width={0} height={0} sizes='100vw' style={{width:'auto', height:'25px'}} className="avatar avatar-ex-sm" alt=""/>
                        </div>
                    )
                })}
            </div>
  )
}
