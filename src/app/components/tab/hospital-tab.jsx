'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { hospitalTab } from '../../data/data'

import {FiArrowRight} from 'react-icons/fi'
import Image from 'next/image'

export default function HospitalTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <Link className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} href="#" scroll={false} onClick={()=> setActiveTab(1)}>
                            <div className="text-start py-1 px-2">
                                <h6 className="mb-0">Dental Service</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} href="#" scroll={false} onClick={()=> setActiveTab(2)}>
                            <div className="text-start py-1 px-2">
                                <h6 className="mb-0">Cardiography Service</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} href="#" scroll={false} onClick={()=> setActiveTab(3)}>
                            <div className="text-start py-1 px-2">
                                <h6 className="mb-0">Eye Care Service</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link className={`nav-link rounded ${activeTab === 4 ? 'active' : ''}`} href="#" scroll={false} onClick={()=> setActiveTab(4)}>
                            <div className="text-start py-1 px-2">
                                <h6 className="mb-0">General Checkup</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link className={`nav-link rounded ${activeTab === 5 ? 'active' : ''}`} href="#" scroll={false} onClick={()=> setActiveTab(5)}>
                            <div className="text-start py-1 px-2">
                                <h6 className="mb-0">Medicine Service</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link className={`nav-link rounded ${activeTab === 6 ? 'active' : ''}`} href="#" scroll={false} onClick={()=> setActiveTab(6)}>
                            <div className="text-start py-1 px-2">
                                <h6 className="mb-0">Orthopadic</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 pt-2">
                <div className="tab-content">
                    {hospitalTab.map((item,index)=>{
                        return(
                            <div className={`tab-pane fade p-4 rounded shadow ${activeTab === item.id ? 'show active' : ''}`} key={index}>
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                <div className="mt-4">
                                    <h5>{item.title}</h5>
                                    <p className="text-muted my-3">{item.desc}</p>
                                    <Link href="#" className="text-primary">Learn More <FiArrowRight className="fea icon-sm"/></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}
