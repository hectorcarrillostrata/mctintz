import Link from 'next/link'
import React from 'react'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function PricingThree() {
  return (
    <div className="row align-items-center">
        <div className="col-md-4 col-12 mt-4 pt-2">
            <div className="card pricing pricing-primary bg-light py-5 rounded text-center">
                <div className="card-body">
                    <h6 className="title name fw-bold text-uppercase mb-4">Free</h6>
                    <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">0</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Full Access</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Enhanced Security</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Source Files</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>1 Domain Free</li>
                    </ul>
                    <Link href="#" className="btn btn-primary mt-4">Buy Now</Link>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-12 mt-4 pt-2">
            <div className="card pricing pricing-primary starter-plan bg-light py-5 rounded text-center">
                <div className="card-body">
                    <h6 className="title name fw-bold text-uppercase mb-4">Starter</h6>
                    <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">39</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                    </div>
                    
                    <ul className="list-unstyled mb-0 ps-0">
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Full Access</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Source Files</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Free Appointments</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Enhanced Security</li>
                    </ul>
                    <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-12 mt-4 pt-2">
            <div className="card pricing pricing-primary bg-light py-5 rounded text-center">
                <div className="card-body">
                    <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                    <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">59</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Full Access</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Enhanced Security</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>Source Files</li>
                        <li className="h6 text-muted mb-2"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline/></span>1 Domain Free</li>
                    </ul>
                    <Link href="#" className="btn btn-primary mt-4">Try It Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
