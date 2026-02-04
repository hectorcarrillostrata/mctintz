import { partnerData } from '@/app/data/partner'
import Image from 'next/image'
import React from 'react'

export default function PartnerOne() {
  return (
    <div className="row justify-content-center">
        {partnerData.map((item,index)=>{
            return(
                <div className="col-lg-2 col-md-2 col-6 text-center py-4" key={index}>
                    <Image src={item} width={75} height={25} className="avatar avatar-ex-sm" alt=""/>
                </div>
            )
        })}
    </div>
  )
}
