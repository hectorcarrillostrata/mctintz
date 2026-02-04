'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function PricingTabTwo() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <div className="row justify-content-center">
        <div className="col-12 mt-4 pt-2">
            <div className="text-center">
                <ul className="nav nav-pills rounded-pill justify-content-center d-inline-block border">
                    <li className="nav-item d-inline-block">
                        <Link href="#" scroll={false} className={`nav-link px-3 py-2 rounded-pill monthly ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Monthly</Link>
                    </li>
                    <li className="nav-item d-inline-block">
                        <Link href="#" scroll={false} className={`nav-link px-3 py-2 rounded-pill yearly ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Yearly <span className="badge rounded-pill bg-danger ms-1">10% Off </span></Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className="col-lg-7 col-md-12 text-center">
            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 1 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 mt-4 pt-4 ps-md-0 pe-md-0">
                            <div className="card pricing pricing-primary starter-plan text-center shadow rounded ">
                                <div className="card-body py-5">
                                    <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
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

                        <div className="col-md-6 col-12 mt-4 pt-2 pt-md-4 ps-md-0 pe-md-0">
                            <div className="card pricing pricing-primary bg-light text-center shadow rounded ">
                                <div className="card-body py-5">
                                    <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
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

                <div className={`tab-pane fade ${activeTab === 2 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 mt-4 pt-4 ps-md-0 pe-md-0">
                            <div className="card pricing pricing-primary starter-plan text-center shadow rounded ">
                                <div className="card-body py-5">
                                    <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">9</span>
                                        <span className="h4 align-self-end mb-1">/year</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                    </ul>
                                    <a href="#" className="btn btn-primary mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-4 pt-2 pt-md-4 ps-md-0 pe-md-0">
                            <div className="card pricing pricing-primary bg-light text-center shadow rounded ">
                                <div className="card-body py-5">
                                    <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">49</span>
                                        <span className="h4 align-self-end mb-1">/year</span>
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
