'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {FiChevronRight} from 'react-icons/fi'

export default function AboutTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Web Developing</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Database Analysis</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Server Security</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 4 ? 'active' : ''}`} onClick={()=>setActiveTab(4)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Web Designing</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 pt-2">
                <div className="tab-content">
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 1 ? 'show active' : ''}`}>
                        <Image src="/images/work/7.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        <div className="mt-4">
                            <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <Link href="#" className="text-primary">See More <FiChevronRight className="align-middle"/></Link>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 2 ? 'show active' : ''}`}>
                        <Image src="/images/work/8.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        <div className="mt-4">
                            <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <Link href="#" className="text-primary">See More <FiChevronRight className="align-middle"/></Link>
                        </div>
                    </div>

                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 3 ? 'show active' : ''}`}>
                        <Image src="/images/work/9.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        <div className="mt-4">
                            <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <Link href="#" className="text-primary">See More <FiChevronRight className="align-middle"/></Link>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 4 ? 'show active' : ''}`}>
                        <Image src="/images/work/12.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        <div className="mt-4">
                            <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <Link href="#" className="text-primary">See More <FiChevronRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
