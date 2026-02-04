'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function PricingTab() {
    let [activeTab, setActiveTab] = useState(1);
    console.log();
  return (
    <div className="row mt-lg-4 align-items-center">
        <div className="col-lg-5 col-md-12 text-center text-lg-start">
            <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                <h4 className="title mb-4">Our Comfortable Rates</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <ul className="nav nav-pills rounded-pill justify-content-center d-inline-block border py-1 px-2 mt-4">
                    <li className="nav-item d-inline-block">
                        <Link href="#" scroll={false} className={`nav-link px-3 rounded-pill monthly ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Monthly</Link>
                    </li>
                    <li className="nav-item d-inline-block">
                        <Link href="#" scroll={false} className={`nav-link px-3 rounded-pill yearly ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Yearly</Link>
                    </li>
                </ul>    
            </div>
        </div>

        <div className="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="tab-content">
                <div className={`tab-pane fade  ${activeTab === 1 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 px-md-0">
                            <div className="card pricing pricing-primary starter-plan shadow rounded">
                                <div className="card-body py-5">
                                    <h5 className="title fw-bold text-primary mb-4">Basic</h5>
                                    <div className="d-flex mb-4">
                                        <span className="h5 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">39</span>
                                        <span className="h5 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0">
                            <div className="card pricing pricing-primary bg-light shadow rounded">
                                <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                <div className="card-body py-5">
                                    <h5 className="title fw-bold text-primary mb-4">Premium</h5>
                                    <div className="d-flex mb-4">
                                        <span className="h5 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">59</span>
                                        <span className="h5 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Try it now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade  ${activeTab === 2 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 px-md-0">
                            <div className="card pricing pricing-primary starter-plan shadow rounded">
                                <div className="card-body py-5">
                                    <h5 className="title fw-bold text-primary mb-4">Basic</h5>
                                    <div className="d-flex mb-4">
                                        <span className="h5 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">29</span>
                                        <span className="h5 align-self-end mb-1">/year</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0">
                            <div className="card pricing pricing-primary bg-light shadow rounded">
                                <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Popular</span></div>
                                <div className="card-body py-5">
                                    <h5 className="title fw-bold text-primary mb-4">Premium</h5>
                                    <div className="d-flex mb-4">
                                        <span className="h5 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">49</span>
                                        <span className="h5 align-self-end mb-1">/year</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Try it now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
