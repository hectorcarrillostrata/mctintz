import Link from 'next/link'
import React from 'react'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { FiArrowRight } from 'react-icons/fi'
import { MdLightbulbOutline } from 'react-icons/md'
import { TbAward } from 'react-icons/tb'


export default function TaskPricing() {
  return (
        <div className="row align-items-end">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="pricing pricing-primary text-center rounded overflow-hidden shadow">
                    <div className="price-header border-bottom pt-5 pb-5">
                        <h1 className="icon"><MdLightbulbOutline className=""/></h1>
                        <h5 className="price-title">Starter</h5>
                        <p className="mb-0 text-muted">Suitable for Starter</p>
                    </div>
                    <div className="border-bottom py-4">
                        <h2 className="fw-bold">$ 0.00</h2>
                        <h6 className="text-muted mb-0 fw-normal">Billed monthly per user</h6>
                        <Link href="#" className="btn btn-primary mt-4">Start Free</Link>                                     
                    </div>
                    <div className="pricing-features text-start p-4">
                        <h5>What's included:</h5>
                        <ul className="feature list-unstyled mb-0">
                            <li className="text-muted"><FiArrowRight className="fea icon-sm text-dark me-2"/>Full Access</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Source Files</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Free Installment</li>
                        </ul>
                    </div>    
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="pricing pricing-primary text-center rounded overflow-hidden shadow-lg">
                    <div className="price-header border-bottom bg-primary pt-5 pb-5">
                        <h1 className="text-white-50"><TbAward className=""/></h1>
                        <h5 className="price-title text-white">Standerd</h5>
                        <p className="mb-0 text-white-50">Suitable for Collaborating Team</p>
                    </div>
                    <div className="border-bottom py-5">
                        <h2 className="fw-bold">$ 19.00</h2>
                        <h6 className="text-muted mb-0 fw-normal">Billed monthly per user</h6>
                        <Link href="#" className="btn btn-primary mt-4">Start Standerd</Link>                                     
                    </div>
                    <div className="pricing-features text-start p-4">
                        <h5>What's included:</h5>
                        <ul className="feature list-unstyled mb-0">
                            <li className="text-muted"><FiArrowRight className="fea icon-sm icon me-2"/>Full Access</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm icon me-2"/>Enhanced Security</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm icon me-2"/>Source Files</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm icon me-2"/>1 Domain Free</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm icon me-2"/>Free Appointments</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm icon me-2"/>Free Installment</li>
                        </ul>
                    </div>    
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="pricing pricing-primary text-center rounded overflow-hidden shadow">
                    <div className="price-header border-bottom pt-5 pb-5">
                        <h1 className="icon"><BiBriefcaseAlt2 className=""/></h1>
                        <h5 className="price-title">Premium</h5>
                        <p className="mb-0 text-muted">Suitable for Premium</p>
                    </div>
                    <div className="border-bottom py-4">
                        <h2 className="fw-bold">$ 9.00</h2>
                        <h6 className="text-muted mb-0 fw-normal">Billed monthly per user</h6>
                        <Link href="#" className="btn btn-primary mt-4">Start Premium</Link>                                     
                    </div>
                    <div className="pricing-features text-start p-4">
                        <h5>What's included:</h5>
                        <ul className="feature list-unstyled mb-0">
                            <li className="text-muted"><FiArrowRight className="fea icon-sm text-dark me-2"/>Full Access</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Source Files</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-dark me-2"/>Free Installment</li>
                        </ul>
                    </div>    
                </div>
            </div>
        </div>
  )
}
