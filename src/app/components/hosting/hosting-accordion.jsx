'use client'
import { hostingAccordion } from '../../data/hosting'
import React, { useState } from 'react'
import {FiArrowRightCircle} from 'react-icons/fi'

export default function HostingAccordion() {
    let [activeIndex, setActiveIndex] = useState(1)
  return (
    <>
        <div className="accordion mt-3" >
            {hostingAccordion.map((item,index)=>{
                return(
                    <div className="accordion-item rounded shadow mt-3" key={index}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className={`accordion-button border-0 bg-light ${activeIndex === item.id ? '' : 'collapsed'}`} onClick={()=>setActiveIndex(item.id)}>
                                {item.title}
                            </button>
                        </h2>
                        <div className={`accordion-collapse border-0 collapse ${activeIndex === item.id ? 'show' : ''}`}>
                            <div className="accordion-body text-muted">
                                <ul className="list-unstyled mb-0">
                                    {item.feature.map((el,index)=>{
                                        return(
                                            <li className="text-muted my-2" key={index}><FiArrowRightCircle className="fea icon-ex-md text-primary me-2"/>{el}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}
