'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function DeveloperTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="row justify-content-center">
            <div className="col-lg-8 col-mg-10 mt-4 pt-2">
                <div className="nav-bg p-4 rounded shadow">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-soft-light">
                                <li className="nav-item">
                                    <Link className={`nav-link nav-link-alt rounded ${activeTab === 1 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(1)}>
                                        <div className="text-center">
                                            <h5 className="title fw-normal mb-0">npm</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`nav-link nav-link-alt rounded ${activeTab === 2 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(2)}>
                                        <div className="text-center">
                                            <h5 className="title fw-normal mb-0">nuget</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`nav-link nav-link-alt rounded ${activeTab === 3 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(3)}>
                                        <div className="text-center">
                                            <h5 className="title fw-normal mb-0">spm</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`nav-link nav-link-alt rounded ${activeTab === 4 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(4)}>
                                        <div className="text-center">
                                            <h5 className="title fw-normal mb-0">github</h5>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-2">
                            <div className="tab-content">
                                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                                    <p className="text-muted fw-bold mb-0"><span className="text-success">$</span> npm install <span className="text-success">-g</span> claps.js</p>
                                </div>
                                
                                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                                    <p className="text-muted fw-bold mb-0">coming soon ...</p>                       
                                </div>
    
                                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                                    <p className="text-muted fw-bold mb-0">coming soon ...</p>                       
                                </div>
    
                                <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`}>
                                    <p className="text-muted fw-bold mb-0">coming soon ...</p>                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="list-unstyled text-muted mb-0 mt-3">
                    <li className="list-inline-item me-lg-5 me-4"><span className="text-success h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Organize your data</li>
                    <li className="list-inline-item me-lg-5 me-4"><span className="text-success h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Work with any team</li>
                </ul>
            </div>
        </div>
  )
}
