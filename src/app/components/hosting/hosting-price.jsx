'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function HostingPrice() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Our Hosting Rates</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>
    </div>

    <div className="row align-items-center">
        <div className="col-12 mt-4 pt-2">
            <div className="text-center">
                <ul className="nav nav-pills rounded-pill justify-content-center d-inline-block border py-1 px-2">
                    <li className="nav-item d-inline-block">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link px-3 rounded-pill monthly ${activeTab === 1 ? 'active' : ''}`}>Monthly</Link>
                    </li>
                    <li className="nav-item d-inline-block">
                        <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link px-3 rounded-pill yearly ${activeTab === 2 ? 'active' : ''}`}>Yearly <span className="badge rounded-pill bg-success">15% Off </span></Link>
                    </li>
                </ul>
            </div>

            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 1 ? 'active show' : ''}`}>    
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card pricing pricing-primary bg-light rounded">
                                <div className="card-body py-5">
                                    <h6 className="title text-uppercase fw-bold mb-4">Cloud Hosting</h6>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>
        
                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>2 GB Memory</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card pricing pricing-primary starter-plan shadow rounded">
                                <div className="card-body py-5">
                                    <h6 className="title text-uppercase fw-bold text-primary mb-4">Dedicated Hosting</h6>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>
                                    
                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>4 GB Memory</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card pricing pricing-primary bg-light rounded">
                                <div className="card-body py-5">
                                    <h6 className="title text-uppercase fw-bold mb-4">VPS Hosting</h6>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>
        
                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>8 GB Memory</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card pricing pricing-primary bg-light rounded">
                                <div className="card-body py-5">
                                    <h6 className="title text-uppercase fw-bold mb-4">Shared Hosting</h6>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">79</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>
        
                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>16 GB Memory</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                        <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`tab-pane fade ${activeTab === 2 ? 'active show' : ''}`}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing pricing-primary bg-light py-5 p-4 rounded">
                                <h6 className="title text-uppercase fw-bold mb-4">Cloud Hosting</h6>
                                <div className="d-flex mb-4">
                                    <span className="h4 mb-0 mt-2">$</span>
                                    <span className="price h1 mb-0">0</span>
                                    <span className="h4 align-self-end mb-1">/year</span>
                                </div>
    
                                <ul className="list-unstyled mb-0 ps-0">
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>2 GB Memory</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                </ul>
                                <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing pricing-primary starter-plan shadow py-5 p-4 rounded">
                                <h6 className="title text-uppercase fw-bold text-primary mb-4">Dedicated Hosting</h6>
                                <div className="d-flex mb-4">
                                    <span className="h4 mb-0 mt-2">$</span>
                                    <span className="price h1 mb-0">29</span>
                                    <span className="h4 align-self-end mb-1">/year</span>
                                </div>
                                
                                <ul className="list-unstyled mb-0 ps-0">
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>4 GB Memory</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                </ul>
                                <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing pricing-primary bg-light py-5 p-4 rounded">
                                <h6 className="title text-uppercase fw-bold mb-4">VPS Hosting</h6>
                                <div className="d-flex mb-4">
                                    <span className="h4 mb-0 mt-2">$</span>
                                    <span className="price h1 mb-0">39</span>
                                    <span className="h4 align-self-end mb-1">/year</span>
                                </div>
    
                                <ul className="list-unstyled mb-0 ps-0">
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>8 GB Memory</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                </ul>
                                <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="pricing pricing-primary bg-light py-5 p-4 rounded">
                                <h6 className="title text-uppercase fw-bold mb-4">Shared Hosting</h6>
                                <div className="d-flex mb-4">
                                    <span className="h4 mb-0 mt-2">$</span>
                                    <span className="price h1 mb-0">49</span>
                                    <span className="h4 align-self-end mb-1">/year</span>
                                </div>
    
                                <ul className="list-unstyled mb-0 ps-0">
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>16 GB Memory</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>10 Free Optimization</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>24/7 support</li>
                                    <li className="text-muted mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Content Optimization</li>
                                </ul>
                                <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
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
