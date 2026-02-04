import { webFeature } from '@/app/data/feature'
import React from 'react'

export default function WebFeature() {
  return (
    <div className="row">
        {webFeature.map((item,index)=>{
            const Icon = item.icon
            return(
                <div className="col-lg-3 col-md-4 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                        <span className="h1 icon-color">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
                        </div>
                        <span className="big-icon text-center">
                            <Icon className=""/>
                        </span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
