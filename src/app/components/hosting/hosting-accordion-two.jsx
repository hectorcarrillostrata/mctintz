'use client'
import React,{useState} from 'react'
import { HostingAccordion2 } from '@/app/data/hosting'

export default function HostingAccordionTwo() {
    let [activeIndex, setActiveIndex] = useState(1)
  return (
        <div className="accordion" id="accordionExample">
            <div className="accordion mt-3" >
                {HostingAccordion2.map((item,index)=>{
                    return(
                        <div className="accordion-item rounded shadow mt-3" key={index}>
                        <h2 className="accordion-header">
                            <button onClick={()=>setActiveIndex(item.id)} className={`accordion-button border-0 bg-light ${activeIndex === item.id ? '':'collapsed'}`}>
                                {item.title}
                            </button>
                        </h2>
                        <div className={`accordion-collapse border-0 collapse ${activeIndex === item.id ? 'show' :''}`}>
                            <div className="accordion-body text-muted">
                            {item.desc}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
  )
}
