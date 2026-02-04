'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'



export default function FormTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="text-center features-absolute">
            <ul className="nav nav-pills bg-light shadow border-bottom flex-column flex-sm-row d-md-inline-flex nav-justified mb-0 rounded-top position-relative overflow-hidden" id="pills-tab" role="tablist">
                <li className="nav-item m-1">
                    <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link py-2 px-5 rounded ${activeTab === 1 ? 'active' : ''}`}>
                        <div className="text-center">
                            <h6 className="mb-0">Buy</h6>
                        </div>
                    </Link>
                </li>
                
                <li className="nav-item m-1">
                    <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link py-2 px-5 rounded ${activeTab === 2 ? 'active' : ''}`}>
                        <div className="text-center">
                            <h6 className="mb-0">Sold</h6>
                        </div>
                    </Link>
                </li>

                <li className="nav-item m-1">
                    <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link py-2 px-5 rounded ${activeTab === 3 ? 'active' : ''}`}>
                        <div className="text-center">
                            <h6 className="mb-0">Rent</h6>
                        </div>
                    </Link>
                </li>
            </ul>
            
            <div className="tab-content bg-white rounded-bottom shadow" id="pills-tabContent">
                <div className={`card border-0 tab-pane fade ${activeTab === 1 ? 'show active' : ''} `}>
                    <form className="card-body text-start">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Search :</label>
                                    <div className="form-icon position-relative">
                                        <FiSearch className="fea icon-sm icons"/>
                                        <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Search your home :"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Select Categories:</label>
                                    <select className="form-control form-select" id="buy-properties">
                                        <option>Houses</option>
                                        <option>Apartment</option>
                                        <option>Offices</option>
                                        <option>Townhome</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Min Price :</label>
                                    <select className="form-control form-select" id="buy-min-price">
                                        <option>Min Price</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>3000</option>
                                        <option>4000</option>
                                        <option>5000</option>
                                        <option>6000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Max Price :</label>
                                    <select className="form-control form-select" id="buy-max-price">
                                        <option>Max Price</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>3000</option>
                                        <option>4000</option>
                                        <option>5000</option>
                                        <option>6000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <Link href="#" className="btn btn-primary w-100">Search now</Link>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={`card border-0 tab-pane fade ${activeTab === 2 ? 'show active' : ''} `}>
                    <form className="card-body text-start">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Search :</label>
                                    <div className="form-icon position-relative">
                                        <FiSearch className="fea icon-sm icons"/>
                                        <input name="name" id="name1" type="text" className="form-control ps-5" placeholder="Search your home :"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Select Categories:</label>
                                    <select className="form-control form-select" id="buy-properties2">
                                        <option>Houses</option>
                                        <option>Apartment</option>
                                        <option>Offices</option>
                                        <option>Townhome</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Min Price :</label>
                                    <select className="form-control form-select" id="buy-min-price2">
                                        <option>Min Price</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>3000</option>
                                        <option>4000</option>
                                        <option>5000</option>
                                        <option>6000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Max Price :</label>
                                    <select className="form-control form-select" id="buy-max-price2">
                                        <option>Max Price</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>3000</option>
                                        <option>4000</option>
                                        <option>5000</option>
                                        <option>6000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <Link href="#" className="btn btn-primary w-100">Search now</Link>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={`card border-0 tab-pane fade ${activeTab === 3 ? 'show active' : ''} `}>
                    <form className="card-body text-start">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Search :</label>
                                    <div className="form-icon position-relative">
                                        <FiSearch className="fea icon-sm icons"/>
                                        <input name="name" id="name2" type="text" className="form-control ps-5" placeholder="Search your home :"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Select Categories:</label>
                                    <select className="form-control form-select" id="buy-properties3">
                                        <option>Houses</option>
                                        <option>Apartment</option>
                                        <option>Offices</option>
                                        <option>Townhome</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Min Price :</label>
                                    <select className="form-control form-select" id="buy-min-price3">
                                        <option>Min Price</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>3000</option>
                                        <option>4000</option>
                                        <option>5000</option>
                                        <option>6000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mb-3 text-start">
                                    <label className="form-label">Max Price :</label>
                                    <select className="form-control form-select" id="buy-max-price3">
                                        <option>Max Price</option>
                                        <option>500</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                        <option>3000</option>
                                        <option>4000</option>
                                        <option>5000</option>
                                        <option>6000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <Link href="#" className="btn btn-primary w-100">Search now</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
