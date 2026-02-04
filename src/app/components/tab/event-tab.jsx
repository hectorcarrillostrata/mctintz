'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { eventOne, eventThree, eventTwo } from '@/app/data/data'

export default function EventTab() {
    let [activeTab, setAciveTab] = useState(1)
  return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Event Schedules</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-2 justify-content-center">
                    <div className="col-lg-8 col-md-12 text-center">
                        <ul className="nav nav-pills bg-light rounded nav-justified flex-column flex-sm-row shadow">
                            <li className="nav-item">
                                <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setAciveTab(1)}>
                                    <div className="text-center py-2">
                                        <h6 className="mb-0">First Day</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setAciveTab(2)}>
                                    <div className="text-center py-2">
                                        <h6 className="mb-0">Second Day</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setAciveTab(3)}>
                                    <div className="text-center py-2">
                                        <h6 className="mb-0">Third Day</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="pills-tabContent">
                            <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                                <div className="row">
                                    {eventOne.map((item,index)=>{
                                        return(
                                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                                <div className="card event-schedule event-primary rounded border">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <ul className="date text-center me-3 mb-0 list-unstyled">
                                                                <li className="day fw-bold mb-2">{item.date}</li>
                                                                <li className="month fw-bold">{item.month}</li>
                                                            </ul>
                                                            <div className="flex-1 content">
                                                                <h4><Link href="#" className="text-dark title">{item.title}</Link></h4>
                                                                <p className="text-muted location-time"><span className="text-dark h6">Address:</span>{item.address}<span className="text-danger">{item.country}</span> <br/> <span className="text-dark h6">Time:</span>{item.time}</p>
                                                                <Link href="#" className="btn btn-soft-primary btn-sm">Buy Ticket</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                                <div className="row">
                                    {eventTwo.map((item,index)=>{
                                        return(
                                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                                <div className="card event-schedule event-primary rounded border">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <ul className="date text-center me-3 mb-0 list-unstyled">
                                                                <li className="day fw-bold mb-2">{item.date}</li>
                                                                <li className="month fw-bold">{item.month}</li>
                                                            </ul>
                                                            <div className="flex-1 content">
                                                                <h4><Link href="#" className="text-dark title">{item.title}</Link></h4>
                                                                <p className="text-muted location-time"><span className="text-dark h6">Address:</span>{item.address}<span className="text-danger">{item.country}</span> <br/> <span className="text-dark h6">Time:</span>{item.time}</p>
                                                                <Link href="#" className="btn btn-soft-primary btn-sm">Buy Ticket</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>                          
                            </div>

                            <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                                <div className="row">
                                    {eventThree.map((item,index)=>{
                                        return(
                                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                                <div className="card event-schedule event-primary rounded border">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <ul className="date text-center me-3 mb-0 list-unstyled">
                                                                <li className="day fw-bold mb-2">{item.date}</li>
                                                                <li className="month fw-bold">{item.month}</li>
                                                            </ul>
                                                            <div className="flex-1 content">
                                                                <h4><Link href="#" className="text-dark title">{item.title}</Link></h4>
                                                                <p className="text-muted location-time"><span className="text-dark h6">Address:</span>{item.address}<span className="text-danger">{item.country}</span> <br/> <span className="text-dark h6">Time:</span>{item.time}</p>
                                                                <Link href="#" className="btn btn-soft-primary btn-sm">Buy Ticket</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
