import React from 'react'

import {FiX, FiCheck} from 'react-icons/fi'

export default function HostingPricingPlan() {
  return (
    <>
        <div className="row mt-4 pt-2">
            <div className="col-12">
                <div className="table-responsive bg-white shadow rounded">
                    <table className="table mb-0 table-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">&nbsp;</th>
                                <th className="text-center p-4 border-bottom" style={{minWidth:'200px', maxWidth:'200px'}}>
                                    <div className="h4">Starter</div>
                                    <p className="text-muted fw-normal mt-3 mb-0">We offers a <strong>free month</strong> of service for new customers.</p>
                                    <div className="d-flex justify-content-center mt-3">
                                        <span className="h6 text-muted mb-0 mt-2">$</span>
                                        <span className="price text-primary h1 mb-0">4.99</span>
                                        <span className="h6 text-muted align-self-end mb-1">/mo</span>
                                    </div>
                                </th>
                                <th className="text-center p-4 border-bottom" style={{minWidth:'200px', maxWidth:'200px'}}>
                                    <div className="h4">Business</div>
                                    <p className="text-muted fw-normal mt-3 mb-0">We offers a <strong>free 14 days</strong> of service for new customers.</p>
                                    <div className="d-flex justify-content-center mt-3">
                                        <span className="h6 text-muted mb-0 mt-2">$</span>
                                        <span className="price text-primary h1 mb-0">9.99</span>
                                        <span className="h6 text-muted align-self-end mb-1">/mo</span>
                                    </div>
                                </th>
                                <th className="text-center p-4 border-bottom" style={{minWidth:'200px', maxWidth:'200px'}}>
                                    <div className="h4">Enterprise</div>
                                    <p className="text-muted fw-normal mt-3 mb-0">We offers a <strong>free 7 days</strong> of service for new customers.</p>
                                    <div className="d-flex justify-content-center mt-3">
                                        <span className="h6 text-muted mb-0 mt-2">$</span>
                                        <span className="price text-primary h1 mb-0">14.99</span>
                                        <span className="h6 text-muted align-self-end mb-1">/mo</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="h6 p-3">Space</td>
                                <td className="text-center p-3">1 GB</td>
                                <td className="text-center p-3">5 GB</td>
                                <td className="text-center p-3">20 GB</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">Bandwidth</td>
                                <td className="text-center p-3">10 GB</td>
                                <td className="text-center p-3">100 GB</td>
                                <td className="text-center p-3">500 GB</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">Email Accounts</td>
                                <td className="text-center p-3">100</td>
                                <td className="text-center p-3">1000</td>
                                <td className="text-center p-3">5000</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">MySQL Accounts</td>
                                <td className="text-center p-3">100</td>
                                <td className="text-center p-3">1000</td>
                                <td className="text-center p-3">5000</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">Processor</td>
                                <td className="text-center p-3">3Core</td>
                                <td className="text-center p-3">5Core</td>
                                <td className="text-center p-3">7Core</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">CPUs</td>
                                <td className="text-center p-3">3.2GHz CPU</td>
                                <td className="text-center p-3">2x3.2GHz CPU</td>
                                <td className="text-center p-3">4x3.2GHz CPU</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">Cpanel</td>
                                <td className="text-center p-3">WHM</td>
                                <td className="text-center p-3">WHM</td>
                                <td className="text-center p-3">WHM</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">Support</td>
                                <td className="text-center p-3">Free Setup</td>
                                <td className="text-center p-3">24/7 Hour</td>
                                <td className="text-center p-3">24/7 Hour</td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">SSH Access</td>
                                <td className="text-center p-3"><FiX className="fea icon-sm text-danger"/></td>
                                <td className="text-center p-3"><FiX className="fea icon-sm text-danger"/></td>
                                <td className="text-center p-3"><FiCheck className="fea icon-sm text-success"/></td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">SMTP Management</td>
                                <td className="text-center p-3"><FiX className="fea icon-sm text-danger"/></td>
                                <td className="text-center p-3"><FiX className="fea icon-sm text-danger"/></td>
                                <td className="text-center p-3"><FiCheck className="fea icon-sm text-success"/></td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">FTP Access</td>
                                <td className="text-center p-3"><FiX className="fea icon-sm text-danger"/></td>
                                <td className="text-center p-3"><FiCheck className="fea icon-sm text-success"/></td>
                                <td className="text-center p-3"><FiCheck className="fea icon-sm text-success"/></td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">Google Adwords Credit</td>
                                <td className="text-center p-3"><FiX className="fea icon-sm text-danger"/></td>
                                <td className="text-center p-3"><FiCheck className="fea icon-sm text-success"/></td>
                                <td className="text-center p-3"><FiCheck className="fea icon-sm text-success"/></td>
                            </tr>
                            <tr>
                                <td className="h6 p-3">&nbsp;</td>
                                <td className="text-center p-3"><a href="#" className="btn btn-primary">Start Now</a></td>
                                <td className="text-center p-3"><a href="#" className="btn btn-primary">Buy Now</a></td>
                                <td className="text-center p-3"><a href="#" className="btn btn-primary">Buy Now</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </>
  )
}
