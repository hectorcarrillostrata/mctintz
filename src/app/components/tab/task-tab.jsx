'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function TaskTab() {
    let [activeTab, setActiveTab] = useState(1);

  return (
        <div className="row align-items-center">
            <div className="col-md-5 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column mb-0">
                    <li className="nav-item bg-light rounded-md">
                        <Link href="#" scroll={false} className={`nav-link rounded-md ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                            <div className="p-3 text-start">
                                <h5 className="title">Management Dashboard</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers.</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item bg-light rounded-md mt-4">
                        <Link href="#" scroll={false} className={`nav-link rounded-md ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                            <div className="p-3 text-start">
                                <h5 className="title">Management Timeline</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers.</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item bg-light rounded-md mt-4">
                        <Link href="#" scroll={false} className={`nav-link rounded-md ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>
                            <div className="p-3 text-start">
                                <h5 className="title">Payment Management</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers.</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item bg-light rounded-md mt-4">
                        <Link href="#" scroll={false} className={`nav-link rounded-md ${activeTab === 4 ? 'active' : ''}`} onClick={()=>setActiveTab(4)}>
                            <div className="p-3 text-start">
                                <h5 className="title">File Integrate</h5>
                                <p className="text-muted tab-para mb-0">Dummy text is text that is used in the publishing industry or by web designers.</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-7 col-12 mt-4 pt-2">
                <div className="tab-content ms-lg-4">
                    <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <Image src="/images/task/apps.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto rounded-md shadow-lg d-block" alt=""/>
                    </div>
                    
                    <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                        <Image src="/images/task/widgets2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto rounded-md shadow-lg d-block" alt=""/>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                        <Image src="/images/task/task.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto rounded-md shadow-lg d-block" alt=""/>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`}>
                        <Image src="/images/task/file.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto rounded-md shadow-lg d-block" alt=""/>
                    </div>
                </div>
            </div>
        </div>
  )
}
