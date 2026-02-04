'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {FiUser, FiMail, FiKey} from 'react-icons/fi'

export default function CarTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="col-lg-4 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="bg-white shadow rounded position-relative overflow-hidden">
                <div className="text-center">
                    <ul className="nav nav-pills bg-light nav-justified flex-sm-row mb-0">
                        <li className="nav-item">
                            <Link href="#" className={`nav-link py-2 rounded-0 ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                                <div className="text-center py-2">
                                    <h6 className="mb-0">User</h6>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link href="#" className={`nav-link py-2 rounded-0 ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                                <div className="text-center py-2">
                                    <h6 className="mb-0">Driver</h6>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className={`card border-0 tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <form className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">                                               
                                        <label className="form-label">First name <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiUser className="fea icon-sm icons"/>
                                            <input type="text" className="form-control ps-5" placeholder="First Name" name="s" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiMail className="fea icon-sm icons"/>
                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiKey className="fea icon-sm icons"/>
                                            <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="user-check"/>
                                            <label className="form-check-label" htmlFor="user-check">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div className={`card border-0 tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                        <form className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">                                               
                                        <label className="form-label">First name <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiUser className="fea icon-sm icons"/>
                                            <input type="text" className="form-control ps-5" placeholder="First Name" name="s" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiMail className="fea icon-sm icons"/>
                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiKey className="fea icon-sm icons"/>
                                            <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="driver-check"/>
                                            <label className="form-check-label" htmlFor="driver-check">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}
