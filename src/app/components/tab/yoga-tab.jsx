'use client'
import Image from 'next/image'
import { yogaSchedule1,yogaSchedule2,yogaSchedule3,yogaSchedule4,yogaSchedule5,yogaSchedule6 } from '../../data/data'
import Link from 'next/link'
import React, { useState } from 'react'

export default function YogaTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column mb-0 sticky-bar">
                    <li className="nav-item">
                        <Link href="#" scroll={false} className={`nav-link rounded shadow ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Monday</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded shadow ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Tuesday</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded shadow ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Wednesday</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded shadow ${activeTab === 4 ? 'active' : ''}`} onClick={()=>setActiveTab(4)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Thursday</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded shadow ${activeTab === 5 ? 'active' : ''}`} onClick={()=>setActiveTab(5)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Friday</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-2">
                        <Link href="#" scroll={false} className={`nav-link rounded shadow ${activeTab === 6 ? 'active' : ''}`} onClick={()=>setActiveTab(6)}>
                            <div className="text-center py-1">
                                <h6 className="mb-0">Saturday</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 pt-2">
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <tbody>
                                    {yogaSchedule1.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="p-4 fw-semibold" style={{maxWidth:'100px'}} >{item.time}</td>
                                                <td className="p-4" style={{minWidth:'300px'}}>
                                                    <div className="d-flex">
                                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block fs-6">{item.title}</h6>
                                                            <small className="text-muted">{item.desc}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <tbody>
                                    {yogaSchedule2.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="p-4 fw-semibold" style={{maxWidth:'100px'}}>{item.time}</td>
                                                <td className="p-4" style={{minWidth:'300px'}}>
                                                    <div className="d-flex">
                                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block fs-6">{item.title}</h6>
                                                            <small className="text-muted">{item.desc}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <tbody>
                                    {yogaSchedule3.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="p-4 fw-semibold" style={{maxWidth:'100px'}}>{item.time}</td>
                                                <td className="p-4" style={{minWidth:'300px'}}>
                                                    <div className="d-flex">
                                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block fs-6">{item.title}</h6>
                                                            <small className="text-muted">{item.desc}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`}>
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <tbody>
                                    {yogaSchedule4.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="p-4 fw-semibold" style={{maxWidth:'100px'}}>{item.time}</td>
                                                <td className="p-4" style={{minWidth:'300px'}}>
                                                    <div className="d-flex">
                                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block fs-6">{item.title}</h6>
                                                            <small className="text-muted">{item.desc}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade ${activeTab === 5 ? 'show active' : ''}`}>
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <tbody>
                                    {yogaSchedule5.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="p-4 fw-semibold" style={{maxWidth:'100px'}}>{item.time}</td>
                                                <td className="p-4" style={{minWidth:'300px'}}>
                                                    <div className="d-flex">
                                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block fs-6">{item.title}</h6>
                                                            <small className="text-muted">{item.desc}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className={`tab-pane fade ${activeTab === 6 ? 'show active' : ''}`}>
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <tbody>
                                    {yogaSchedule6.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="p-4 fw-semibold" style={{maxWidth:'100px'}}>{item.time}</td>
                                                <td className="p-4" style={{minWidth:'300px'}}>
                                                    <div className="d-flex">
                                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <div className="ms-3">
                                                            <h6 className="text-dark mb-0 d-block fs-6">{item.title}</h6>
                                                            <small className="text-muted">{item.desc}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
