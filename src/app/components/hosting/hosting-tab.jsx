'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { hostingPlan } from '../../data/hosting'
import {FiShoppingCart} from 'react-icons/fi'
import Image from 'next/image'

export default function HostingTab() {
    let [activeTab, setActiveTab] = useState(2)
  return (
    <>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 mt-4 pt-2 text-center">
                <ul className="nav nav-pills nav-justified flex-sm-row rounded px-0 bg-light shadow">
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                            <div className="text-center py-2">
                                <Image src="/images/hosting/india.svg" width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                                <h5 className="title fw-normal mt-3 mb-0">India</h5>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                            <div className="text-center py-2">
                                <Image src="/images/hosting/usa.svg" width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                                <h5 className="title fw-normal mt-3 mb-0">USA</h5>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="col-12 mt-4 pt-2">
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom py-4 px-3" style={{minWidth:"200px"}}>PLANS</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>PROCESSOR</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>RAM</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>DISK</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>BANDWIDTH </th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:"180px"}}>PRICE</th>
                                                <th className="border-bottom text-end py-4 px-3" style={{minWidth:'50px'}}>#</th>
                                            </tr>
                                        </thead>
        
                                        <tbody>
                                            {hostingPlan.slice(0,5).map((item,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td className="h6 p-3">{item.plans}</td>
                                                        <td className="text-center p-3">{item.processor}</td>
                                                        <td className="text-center p-3">{item.ram}</td>
                                                        <td className="text-center p-3">{item.desk}</td>
                                                        <td className="text-center p-3">{item.brandWidth}</td>
                                                        <td className="text-center p-3">{item.price}</td>
                                                        <td className="text-end p-3"><Link href="#" className="btn btn-icon btn-soft-warning"><FiShoppingCart className="icons"/></Link></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom py-4 px-3" style={{minWidth:"200px"}}>PLANS</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>PROCESSOR</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>RAM</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>DISK</th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:'160px'}}>BANDWIDTH </th>
                                                <th className="border-bottom text-center py-4 px-3" style={{minWidth:"180px"}}>PRICE</th>
                                                <th className="border-bottom text-end py-4 px-3" style={{minWidth:'50px'}}>#</th>
                                            </tr>
                                        </thead>
        
                                        <tbody>
                                            {hostingPlan.map((item,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td className="h6 p-3">{item.plans} <span className={`${item.title === 'ST' ? 'text-primary' : ''} ${item.title === 'ELITE' ? 'text-success' : ''} ${item.title === 'BUSINESS' ? 'text-info' : ''} ${item.title === 'PRO' ? 'text-warning' : ''}`}>{item.title}</span></td>
                                                        <td className="text-center p-3">{item.processor}</td>
                                                        <td className="text-center p-3">{item.ram}</td>
                                                        <td className="text-center p-3">{item.desk}</td>
                                                        <td className="text-center p-3">{item.brandWidth}</td>
                                                        <td className="text-center p-3">{item.price}</td>
                                                        <td className="text-end p-3"><Link href="#" className="btn btn-icon btn-soft-warning"><FiShoppingCart className="icons"/></Link></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    
                    <div className="text-center pt-4">
                        <p className="text-muted mb-0">Couldn’t find what you’re looking for ? <Link href="#" className="h6 text-primary">Let us know <i className="mdi mdi-arrow-right"></i></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
