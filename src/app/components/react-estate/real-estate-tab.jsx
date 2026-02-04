'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function RealEstateTab() {
  let [activeTab, setActiveTab] = useState(1)
  return (
      <div className="container mt-100 mt-60">
        <div className="row">
            <div className="col-md-4">
                <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                    <li className="nav-item">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Pre Approval Letter</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Schedule a Showing</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} >
                            <div className="text-center py-1">
                                <h6 className="mb-0">Submit an Offer</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(4)} className={`nav-link rounded ${activeTab === 4 ? 'active' : ''}`}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Property Inspection</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(5)} className={`nav-link rounded ${activeTab === 5 ? 'active' : ''}`}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Appraisal</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(6)} className={`nav-link rounded ${activeTab === 6 ? 'active' : ''}`}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Closing Deal</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 mt-md-0 pt-2 pt-md-0">
                <div className="tab-content">
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 1 ? 'show active' : ''}`}>
                        <Image src="/images/illustrator/Agent_Monochromatic.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        <div className="mt-4">
                            <h5>Pre Approval Letter</h5>
                            <p className="text-muted mb-0">Most buyers think the first step is finding their dream house, but the truth is finding the funding is the first step. Landrick streamlines the Loan Pre-Approval process with our ecosystem of Premier Partners or simply upload your own Pre-Approval letter.</p>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 2 ? 'show active' : ''}`}>
                        <Image src="/images/illustrator/presentation_Flatline.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        <div className="mt-4">
                            <h5>Schedule a Showing</h5>
                            <p className="text-muted mb-0">Landrick allows a buyer to schedule an instant showing and gain a private viewing without the need for multiple parties to be involved. You pick the time that works for you!</p>
                        </div>
                    </div>

                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 3 ? 'show active' : ''}`}>
                        <Image src="/images/illustrator/session_Flatline.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        <div className="mt-4">
                            <h5>Submit an Offer</h5>
                            <p className="text-muted mb-0">Landrick walks a buyer through the purchase agreement process making the paperwork appear effortless. With our custom workflows and progress analytics, you will always know where your purchase stands. No more phone tag and unreturned emails!</p>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 4 ? 'show active' : ''}`}>
                        <Image src="/images/illustrator/Startup_Flatline.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        <div className="mt-4">
                            <h5>Property Inspection</h5>
                            <p className="text-muted mb-0">No one wants to buy a lemon. Book an inspection with a licensed inspector, then submit the repair requests all via the Landrick platform.</p>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 5 ? 'show active' : ''}`}>
                        <Image src="/images/illustrator/team_Flatline.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        <div className="mt-4">
                            <h5>Appraisal</h5>
                            <p className="text-muted mb-0">Landrick monitors the appraisal process ensuring the home you are purchasing meets or exceeds the price you are paying.</p>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade p-4 rounded shadow ${activeTab === 6 ? 'show active' : ''}`}>
                        <Image src="/images/illustrator/Team_meeting_Two.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        <div className="mt-4">
                            <h5>Closing Deal</h5>
                            <p className="text-muted mb-0">Finally the closing packet is sent to the Title office, and the day has come… You have Landrick the home of your dreams!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}
