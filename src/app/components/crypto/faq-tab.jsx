'use client'
import React, { useState } from 'react'
import AccordionOne from '../accordion/accordion-one'
import Link from 'next/link'

export default function FaqTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="card section-title p-4 shadow rounded border-0">
                            <ul className="nav nav-pills nav-justified flex-column bg-transparent mb-0">
                                <li className="nav-item">
                                    <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link rounded shadow ${activeTab === 1 ? 'active': ''}`}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">About Landrick</h6>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item mt-3">
                                    <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link rounded shadow ${activeTab === 2 ? 'active': ''}`}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Accounts</h6>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item mt-3">
                                    <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link rounded shadow ${activeTab === 3 ? 'active': ''}`}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Transactions</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className="nav-item mt-3">
                                    <Link href="#" scroll={false} onClick={()=>setActiveTab(4)} className={`nav-link rounded shadow ${activeTab === 4 ? 'active': ''}`}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Cryptocurrency Withdrawals</h6>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="tab-content">
                            <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                                <div className="section-title" id="tech">
                                    <h5>About Landrick</h5>
                                </div>
        
                                <AccordionOne/>
                            </div>
                            
                            <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                                <div className="section-title" id="general">
                                    <h5>Accounts</h5>
                                </div>
        
                                <AccordionOne/>
                            </div>

                            <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                                <div className="section-title" id="payment">
                                    <h5>Transactions</h5>
                                </div>
        
                                <AccordionOne/>
                            </div>

                            <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`}>
                                <div className="section-title" id="support">
                                    <h5>Cryptocurrency Withdrawals</h5>
                                </div>
        
                                <AccordionOne/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
