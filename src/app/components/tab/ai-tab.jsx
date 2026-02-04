'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AiTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 mt-4 pt-2 text-center">
                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow">
                        <li className="nav-item">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`}>
                                <div className="text-start py-2">
                                    <h6 className="mb-2">Drag and drop</h6>
                                    <p className="mb-0">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`}>
                                <div className="text-start py-2">
                                    <h6 className="mb-2">Improve your Talent</h6>
                                    <p className="mb-0">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`}>
                                <div className="text-start py-2">
                                    <h6 className="mb-2">Go for Live</h6>
                                    <p className="mb-0">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 mt-4 pt-2">
                    <div className="tab-content">
                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                            <div className="p-4 pb-0 rounded shadow bg-soft-primary">
                                <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-top img-fluid mx-auto d-block" alt=""/>
                            </div>
                        </div>
                        
                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                            <div className="p-4 pb-0 rounded shadow bg-soft-primary">
                                <Image src="/images/saas/classic03.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-top img-fluid mx-auto d-block" alt=""/>
                            </div>                      
                        </div>

                        <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                            <div className="p-4 pb-0 rounded shadow bg-soft-primary">
                                <Image src="/images/saas/classic04.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded-top img-fluid mx-auto d-block" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
