'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function DegitalAgencyTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="row align-items-center">
            <div className="col-md-5">
                <ul className="nav nav-pills nav-justified flex-column rounded">
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                            <div className="p-3 text-start">
                                <h5>Management Tools</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                            <div className="p-3 text-start">
                                <h5>Increase Effectiveness</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>
                            <div className="p-3 text-start">
                                <h5>Data Analysis</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="saas-feature-shape-right position-relative">
                    <div className="tab-content ms-lg-4">
                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                            <Image src="/images/digital/1.png" width={0} height={0} sizes='100vw' style={{width:'617px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                        </div>
                        
                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                            <Image src="/images/digital/2.png" width={0} height={0} sizes='100vw' style={{width:'617px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                        </div>

                        <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                            <Image src="/images/digital/3.png" width={0} height={0} sizes='100vw' style={{width:'418px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
