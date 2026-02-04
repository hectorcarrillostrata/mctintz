'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FiChevronRight} from 'react-icons/fi'

export default function CustomerTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 mt-4 pt-2 text-center">
            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-light">
                <li className="nav-item">
                    <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                        <div className="text-center py-2">
                            <h6 className="mb-0">Community</h6>
                        </div>
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                        <div className="text-center py-2">
                            <h6 className="mb-0">Self Service</h6>
                        </div>
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>
                        <div className="text-center py-2">
                            <h6 className="mb-0">Teamwork</h6>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    
    <div className="row">
        <div className="col-12 mt-4 pt-2">
            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="">
                                <Image src="/images/saas/classic04.png" width={0} height={0} sizes='100vw' style={{width:'100vw', height:'auto'}} className="img-fluid mx-auto d-block shadow rounded" alt=""/>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-md-4 ">
                                <h4 className="title mb-4">User Community</h4>
                                <p className="text-muted">CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.</p>
                                <div className="mt-4">
                                    <Link href="#" className="text-primary p-1 px-2 shadow rounded me-3">Read More <FiChevronRight className=""/></Link>
                                    <Link href="#" className="text-warning p-1 px-2 shadow rounded">Blogs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-md-4 ">
                                <h4 className="title mb-4">Self-service Portal</h4>
                                <p className="text-muted">CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.</p>
                                <div className="mt-4">
                                    <Link href="#" className="text-primary p-1 px-2 shadow rounded me-3">Read More <FiChevronRight className=""/></Link>
                                    <Link href="#" className="text-warning p-1 px-2 shadow rounded">Blogs</Link>
                                </div>
                            </div>
                        </div>   

                        <div className="col-md-6 order-1 order-md-2">
                            <div className="">
                                <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100vw', height:'auto'}} className="img-fluid mx-auto d-block shadow rounded" alt=""/>
                            </div>
                        </div>  
                    </div>                           
                </div>

                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="">
                                <Image src="/images/saas/classic03.png" width={0} height={0} sizes='100vw' style={{width:'100vw', height:'auto'}} className="img-fluid mx-auto d-block shadow rounded" alt=""/>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-md-4 ">
                                <h4 className="title mb-4">Proper Teamwork</h4>
                                <p className="text-muted">CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications.</p>
                                <div className="mt-4">
                                    <Link href="#" className="text-primary p-1 px-2 shadow rounded me-3">Read More <FiChevronRight className=""/></Link>
                                    <Link href="#" className="text-warning p-1 px-2 shadow rounded">Blogs</Link>
                                </div>
                            </div>
                        </div>    
                    </div>                            
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}
