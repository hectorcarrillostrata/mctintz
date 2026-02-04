'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function AiPricing({top}) {
    let [value, setvalue] = useState(false)
    
    const changeValue = (e)=>{
        setvalue(e.target.checked);
    }
  return (
    <>


        <div className={`row justify-content-center ${top === false ? 'd-none' : ''}`}>
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">You don't have to choose between cost, time and quality</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="switcher-pricing d-flex justify-content-center align-items-center mb-4 pb-2">
                    <label className="toggler text-muted toggler--is-active" id="filt-monthly">Monthly</label>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" type="checkbox" id="switcher" value="true" onChange={(e)=>changeValue(e)}/>
                    </div>
                    <label className="toggler text-muted" id="filt-yearly">Yearly</label>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                {value === false && 
                    <div id="monthly" className="wrapper-full">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">0</span>
                                            <span className="h4 align-self-end mb-1">/mo</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
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
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">39</span>
                                            <span className="h4 align-self-end mb-1">/mo</span>
                                        </div>
        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
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
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">59</span>
                                            <span className="h4 align-self-end mb-1">/mo</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
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
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">79</span>
                                            <span className="h4 align-self-end mb-1">/mo</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Installment</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Started Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    value === true && 
                    <div id="yearly" className="wrapper-full">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                    <div className="card-body">
                                        <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                                        <div className="d-flex mb-4">
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">10</span>
                                            <span className="h4 align-self-end mb-1">/year</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
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
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">139</span>
                                            <span className="h4 align-self-end mb-1">/year</span>
                                        </div>
        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
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
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">159</span>
                                            <span className="h4 align-self-end mb-1">/year</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
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
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">179</span>
                                            <span className="h4 align-self-end mb-1">/year</span>
                                        </div>
                                        
                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>1 Domain Free</li>
                                            <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Installment</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-4">Started Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
  )
}
