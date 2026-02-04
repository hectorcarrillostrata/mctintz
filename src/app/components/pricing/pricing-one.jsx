import React from 'react'
import Link from 'next/link'
import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function PricingOne({title}) {
  return (
    <div className="container">
        <div className="row mt-lg-4 align-items-center">
            <div className="col-lg-5 col-md-12 text-center text-lg-start">
                <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                    <h4 className="title mb-4">{title ? title : 'Our Comfortable Rates'}</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary mt-4">Buy Now <span className="badge rounded-pill bg-danger ms-2">v5.0.0</span></Link>
                </div>
            </div>

            <div className="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="ms-lg-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 px-md-0">
                            <div className="card pricing pricing-primary starter-plan shadow rounded">
                                <div className="card-body py-5">
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
                                        <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
                                    </ul>
                                    <Link href="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0">
                            <div className="card pricing pricing-primary bg-light shadow rounded border-0">
                                <div className="card-body py-5">
                                    <h6 className="title name fw-bold text-uppercase mb-4">Professional</h6>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 ps-0">
                                        <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Full Access</li>
                                        <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Source Files</li>
                                        <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Free Appointments</li>
                                        <li className="h6 text-muted mb-1"><span className="icon h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Enhanced Security</li>
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
