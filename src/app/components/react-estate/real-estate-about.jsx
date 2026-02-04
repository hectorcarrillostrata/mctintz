import Link from 'next/link'
import React from 'react'

import { aboutData } from '../../data/real-estate'
import { FiArrowRight } from 'react-icons/fi'

export default function RealEstateAbout() {
  return (
        <div className="row">
            {aboutData.map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                        <div className="card border-0 text-center features feature-primary feature-clean rounded p-4">
                            <div className="icons text-center mx-auto">
                                <Icon className="rounded h3 mb-0"/>
                            </div>

                            <div className="card-body p-0 mt-4">
                                <Link href="#" className="title h5 text-dark">Map Search</Link>
                                <p className="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                <div className="mt-2">
                                    <Link href="#" className="text-primary">Read More <FiArrowRight className="fea icon-sm"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
