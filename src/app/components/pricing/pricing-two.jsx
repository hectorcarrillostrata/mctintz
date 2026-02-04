import React from 'react'
import Link from 'next/link'
import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function PricingTwo() {
  return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="card pricing pricing-primary business-rate shadow bg-light rounded">
                    <div className="card-body">
                        <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                        <div className="d-flex mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">0</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
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
                <div className="card pricing pricing-primary business-rate shadow rounded">
                    <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                    <div className="card-body">
                        <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                        <div className="d-flex mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">39</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
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
                <div className="card pricing pricing-primary business-rate shadow bg-light rounded">
                    <div className="card-body">
                        <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                        <div className="d-flex mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">59</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
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
                <div className="card pricing pricing-primary business-rate shadow bg-light rounded">
                    <div className="card-body">
                        <h6 className="title name fw-bold text-uppercase mb-4">Ultimate</h6>
                        <div className="d-flex mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">79</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
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
  )
}
