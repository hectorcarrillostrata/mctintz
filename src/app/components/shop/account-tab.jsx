'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { RiLogoutCircleRLine } from 'react-icons/ri'
import { FiArrowDownCircle, FiMapPin, FiArrowRight, FiEdit, FiUser, FiUserCheck, FiMail, FiKey } from 'react-icons/fi'
import { MdFormatListBulleted } from 'react-icons/md'
import { LuUser } from 'react-icons/lu'
import { GrDashboard } from 'react-icons/gr'

export default function AccountTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <section className="section">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <Image src="/images/client/05.jpg" width={80} height={80} className="avatar avatar-md-md rounded-circle" alt=""/>
                            <div className="ms-3">
                                <h6 className="text-muted mb-0">Hello,</h6>
                                <h5 className="mb-0">Cally Joseph</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <p className="text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mt-4 pt-2">
                        <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0">
                            <li className="nav-item">
                                <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><GrDashboard className="h5 align-middle me-2 mb-0"/> Dashboard</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><MdFormatListBulleted className="h5 align-middle me-2 mb-0"/> Orders</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><FiArrowDownCircle className="h5 align-middle me-2 mb-0"/> Downloads</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link href="#" scroll={false} onClick={()=>setActiveTab(4)} className={`nav-link rounded ${activeTab === 4 ? 'active' : ''}`}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><FiMapPin className="h5 align-middle me-2 mb-0"/> Addresses</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link href="#" scroll={false} onClick={()=>setActiveTab(5)} className={`nav-link rounded ${activeTab === 5 ? 'active' : ''}`}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><LuUser className="h5 align-middle me-2 mb-0"/> Account Details</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link className="nav-link rounded" role="tab" href="/auth-login" aria-selected="false">
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><RiLogoutCircleRLine className="h5 align-middle me-2 mb-0"/> Logout</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-8 col-12 mt-4 pt-2">
                        <div className="tab-content">
                            <div className={`tab-pane fade shadow rounded p-4 ${activeTab === 1 ? 'active show' : ''}`}>
                                <h6 className="text-muted">Hello <span className="text-dark">cally_joseph</span> (not <span className="text-dark">cally_joseph</span>? <Link href="#" className="text-danger">Log out</Link>)</h6>

                                <h6 className="text-muted mb-0">From your account dashboard you can view your <Link href="#" className="text-danger">recent orders</Link>, manage your <Link href="#" className="text-danger">shipping and billing addresses</Link>, and <Link href="#" className="text-danger">edit your password and account details</Link>.</h6>
                            </div>

                            <div className={`tab-pane fade shadow rounded p-4 ${activeTab === 2 ? 'active show' : ''}`}>
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center table-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-bottom">Order no.</th>
                                                <th scope="col" className="border-bottom">Date</th>
                                                <th scope="col" className="border-bottom">Status</th>
                                                <th scope="col" className="border-bottom">Total</th>
                                                <th scope="col" className="border-bottom">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">7107</th>
                                                <td>1st November 2021</td>
                                                <td className="text-success">Delivered</td>
                                                <td>$ 320 <span className="text-muted">for 2items</span></td>
                                                <td><Link href="#" className="text-primary">View <FiArrowRight /></Link></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">8007</th>
                                                <td>4th November 2021</td>
                                                <td className="text-muted">Processing</td>
                                                <td>$ 800 <span className="text-muted">for 1item</span></td>
                                                <td><Link href="#" className="text-primary">View <FiArrowRight /></Link></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">8008</th>
                                                <td>4th November 2021</td>
                                                <td className="text-danger">Canceled</td>
                                                <td>$ 800 <span className="text-muted">for 1item</span></td>
                                                <td><Link href="#" className="text-primary">View <FiArrowRight /></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className={`tab-pane fade shadow rounded p-4 ${activeTab === 3 ? 'active show' : ''}`}>
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center table-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-bottom">Product Name</th>
                                                <th scope="col" className="border-bottom">Description</th>
                                                <th scope="col" className="border-bottom">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Quick heal</th>
                                                <td className="text-muted">It is said that song composers of the past <br/> used dummy texts as lyrics when writing <br/> melodies in order to have a 'ready-made' <br/> text to sing with the melody.</td>
                                                <td className="text-success">Downloaded</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className={`tab-pane fade shadow rounded p-4 ${activeTab === 4 ? 'active show' : ''}`}>
                                <h6 className="text-muted mb-0">The following addresses will be used on the checkout page by default.</h6>

                                <div className="row">
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="d-flex align-items-center mb-4 justify-content-between">
                                            <h5 className="mb-0">Billing Address:</h5>
                                            <Link href="#" className="text-primary h5 mb-0"><FiEdit className="align-middle"/></Link>
                                        </div>
                                        <div className="pt-4 border-top">
                                            <p className="h6">Cally Joseph</p>
                                            <p className="h6 text-muted">C/54 Northwest Freeway, </p>
                                            <p className="h6 text-muted">Suite 558,</p>
                                            <p className="h6 text-muted">Houston, USA 485</p>
                                            <p className="h6 text-muted mb-0">+123 897 5468</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="d-flex align-items-center mb-4 justify-content-between">
                                            <h5 className="mb-0">Shipping Address:</h5>
                                            <Link href="#" className="text-primary h5 mb-0"><FiEdit className="align-middle"/></Link>
                                        </div>
                                        <div className="pt-4 border-top">
                                            <p className="h6">Cally Joseph</p>
                                            <p className="h6 text-muted">C/54 Northwest Freeway, </p>
                                            <p className="h6 text-muted">Suite 558,</p>
                                            <p className="h6 text-muted">Houston, USA 485</p>
                                            <p className="h6 text-muted mb-0">+123 897 5468</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade shadow rounded p-4 ${activeTab === 5 ? 'active show' : ''}`}>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">First Name</label>
                                                <div className="form-icon position-relative">
                                                    <FiUser className="fea icon-sm icons"/>
                                                    <input name="name" id="first-name" type="text" className="form-control ps-5" defaultValue="Cally"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Last Name</label>
                                                <div className="form-icon position-relative">
                                                    <FiUserCheck className="fea icon-sm icons"/>
                                                    <input name="name" id="last-name" type="text" className="form-control ps-5" defaultValue="Joseph"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email</label>
                                                <div className="form-icon position-relative">
                                                    <FiMail className="fea icon-sm icons"/>
                                                    <input name="email" id="email" type="email" className="form-control ps-5" defaultValue="callyjoseph@gmail.com"/>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Display Name</label>
                                                <div className="form-icon position-relative">
                                                    <FiUserCheck className="fea icon-sm icons"/>
                                                    <input name="name" id="display-name" type="text" className="form-control ps-5" defaultValue="cally_joseph"/>
                                                </div>
                                            </div> 
                                        </div>

                                        <div className="col-lg-12 mt-2 mb-0">
                                            <button className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </div>
                                </form>

                                <h5 className="mt-4">Change password :</h5>
                                <form>
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Old password :</label>
                                                <div className="form-icon position-relative">
                                                    <FiKey className="fea icon-sm icons"/>
                                                    <input type="password" className="form-control ps-5" placeholder="Old password" required=""/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">New password :</label>
                                                <div className="form-icon position-relative">
                                                    <FiKey className="fea icon-sm icons"/>
                                                    <input type="password" className="form-control ps-5" placeholder="New password" required=""/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Re-type New password :</label>
                                                <div className="form-icon position-relative">
                                                    <FiKey className="fea icon-sm icons"/>
                                                    <input type="password" className="form-control ps-5" placeholder="Re-type New password" required=""/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-12 mt-2 mb-0">
                                            <button className="btn btn-primary">Save Password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
