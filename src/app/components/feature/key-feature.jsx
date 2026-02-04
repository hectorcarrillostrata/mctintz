import React from 'react'
import Link from 'next/link'

import { keyFeature } from '../../data/feature'
import {FiChevronRight} from 'react-icons/fi'

export default function KeyFeature() {
  return (
        <div className="row">
            {keyFeature.map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                        <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                            <div className="icon text-center rounded-circle me-3">
                                <Icon className="fea icon-ex-md"></Icon>
                            </div>
                            <div className="flex-1">
                                <h4 className="title mb-0">{item.title}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
            
            <div className="col-12 mt-4 pt-2 text-center">
                <Link href="#" className="btn btn-primary">See More <FiChevronRight/></Link>
            </div>
        </div>
  )
}
