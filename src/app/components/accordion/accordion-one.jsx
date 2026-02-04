'use client'
import { AccordionData } from '../../data/accordian'
import React, { useState } from 'react'

export default function AccordionOne() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="accordion">
            {AccordionData.map((item,index)=>{
                return(
                    <div className="accordion-item rounded shadow mt-3" key={index}>
                        <h2 className="accordion-header">
                            <button onClick={()=>setActiveTab(item.id)} className={`accordion-button border-0 bg-light ${activeTab === item.id ? '':'collapsed'}`}>
                                {item.title}
                            </button>
                        </h2>
                        <div className={`accordion-collapse border-0 collapse ${activeTab === item.id ? 'show' :''}`}>
                            <div className="accordion-body text-muted">
                               {item.desc}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
