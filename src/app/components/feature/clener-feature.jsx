import { clenerServices } from '@/app/data/services'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function ClenerFeature() {
  return (
    <div className="row">
        {clenerServices.map((item,index)=>{
            return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className={`card features feature-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-0  ${item.active ? 'bg-primary' : 'shadow'}`}>
                        <span className={`display-5 mb-4  ${item.active ? 'text-white-50' : 'icon-color'}`}>
                            <i className={item.icon}></i>
                        </span>
                        <div className="card-body p-0 content">
                            <h5 className={item.active ? 'text-white' : ''}>{item.title}</h5>
                            <p className={`para  ${item.active ? 'text-white-50' : 'text-muted'}`}>It is a long established fact that a reader will be of a page reader will be of at its layout.</p>

                            <div className="">
                                <Link href="" className={`readmore fw-semibold ${item.active ? 'text-white' : 'text-muted'}`}>Read More <FiArrowRight className=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
