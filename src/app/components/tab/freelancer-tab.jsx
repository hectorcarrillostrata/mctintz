'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { TbArrowsExchange2 } from 'react-icons/tb'
import { FiChevronRight, FiClock } from 'react-icons/fi'
import { BsPostcard } from 'react-icons/bs'
import { MdOutlineEventNote } from 'react-icons/md'
import { RiFolderCheckLine } from 'react-icons/ri'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

export default function FreelancerTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-md-4 mt-4 pt-2">
                    <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                        <li className="nav-item">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`}>
                                <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                    <h6 className="mb-0 "><BsPostcard className="me-2 h5 mb-0"/> Proposals</h6>
                                    <FiChevronRight className=""/>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item mt-2">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`}>
                                <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                    <h6 className="mb-0"><MdOutlineEventNote className="mb-0 me-2 h5"/> Contracts</h6>
                                    <FiChevronRight className=""/>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item mt-2">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`}>
                                <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                    <h6 className="mb-0"><RiFolderCheckLine className="mb-0 me-2 h5"/> Client CRM</h6>
                                    <FiChevronRight className=""/>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item mt-2">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(4)} className={`nav-link rounded ${activeTab === 4 ? 'active' : ''}`}>
                                <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                    <h6 className="mb-0"><FiClock className="mb-0 me-2 h5"></FiClock> Time Tracking</h6>
                                    <FiChevronRight className=""/>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item mt-2">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(5)} className={`nav-link rounded ${activeTab === 5 ? 'active' : ''}`}>
                                <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                    <h6 className="mb-0"><LiaFileInvoiceDollarSolid className="mb-0 me-2 h5"/> Invoices</h6>
                                    <FiChevronRight className=""/>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item mt-2">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(6)} className={`nav-link rounded ${activeTab === 6 ? 'active' : ''}`}>
                                <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                    <h6 className="mb-0"><TbArrowsExchange2 className="mb-0 me-2 h5"/> Task Tracking</h6>
                                    <FiChevronRight className=""/>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-8 col-12 mt-4 pt-2">
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 1 ? 'show active' : ''}`}>
                            <h4 className="mb-4">Win More Work</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                            <div className="mt-4">
                                <Link href="#" className="text-primary h6">Explore Proposals <FiChevronRight className="align-middle"/></Link>
                            </div>

                            <div className="mt-4">
                                <Image src="/images/freelancer/proposals.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        
                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 2 ? 'show active' : ''}`}>
                            <h4 className="mb-4">Protect Your Business</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                            <div className="mt-4">
                                <Link href="#" className="text-primary h6">Explore Proposals <FiChevronRight className="align-middle"/></Link>
                            </div>

                            <div className="mt-4">
                                <Image src="/images/freelancer/contract.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 3 ? 'show active' : ''}`}>
                            <h4 className="mb-4">Stay Organized</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                            <div className="mt-4">
                                <Link href="#" className="text-primary h6">Explore Proposals <FiChevronRight className="align-middle"/></Link>
                            </div>

                            <div className="mt-4">
                                <Image src="/images/freelancer/crm.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        
                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 4 ? 'show active' : ''}`}>
                            <h4 className="mb-4">Keep It Simple</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                            <div className="mt-4">
                                <Link href="#" className="text-primary h6">Explore Time Tracking <FiChevronRight className="align-middle"/></Link>
                            </div>

                            <div className="mt-4">
                                <Image src="/images/freelancer/time.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        
                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 5 ? 'show active' : ''}`}>
                            <h4 className="mb-4">Get Paid Faster</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                            <div className="mt-4">
                                <Link href="#" className="text-primary h6">Explore Invoice <FiChevronRight className="align-middle"/></Link>
                            </div>

                            <div className="mt-4">
                                <Image src="/images/freelancer/invoice.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        
                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 6 ? 'show active' : ''}`}>
                            <h4 className="mb-4">Be More Effective</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                            <div className="mt-4">
                                <Link href="#" className="text-primary h6">Explore Task Tracking <FiChevronRight className="align-middle"/></Link>
                            </div>

                            <div className="mt-4">
                                <Image src="/images/freelancer/task.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
