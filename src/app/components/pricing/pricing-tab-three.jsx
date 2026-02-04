'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function PricingTabThree() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <div className="container">
        <div className="row align-items-end mb-4 pb-2">
            <div className="col-md-8">
                <div className="section-title text-center text-md-start">
                    <h4 className="title mb-4">Choose the best <br/> one for you</h4>
                    <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0">
                <div className="text-center text-md-end">
                    <ul className="nav nav-pills rounded-lg justify-content-center d-inline-block shadow py-1 px-2 mb-0">
                        <li className="nav-item d-inline-block">
                            <Link className={`nav-link px-3 rounded-lg monthly ${activeTab === 1 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(1)} >Monthly</Link>
                        </li>
                        <li className="nav-item d-inline-block">
                            <Link className={`nav-link px-3 rounded-lg yearly ${activeTab === 2 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(2)} >Yearly</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">0</span>
                                            <span className="h5 align-self-end mb-1"> /mo</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow border-0 rounded">
                                    <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">29</span>
                                            <span className="h5 align-self-end mb-1"> /mo</span>
                                        </div>
        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">45</span>
                                            <span className="h5 align-self-end mb-1"> /mo</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Try It Now</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Ultimate</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">69</span>
                                            <span className="h5 align-self-end mb-1"> /mo</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Installment</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Started Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>    
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">0</span>
                                            <span className="h5 align-self-end mb-1"> /year</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow border-0 rounded">
                                    <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">39</span>
                                            <span className="h5 align-self-end mb-1"> /year</span>
                                        </div>
        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">59</span>
                                            <span className="h5 align-self-end mb-1"> /year</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Try It Now</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Ultimate</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h6 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">79</span>
                                            <span className="h5 align-self-end mb-1"> /year</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Installment</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Started Now</Link>
                                    </div>
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
