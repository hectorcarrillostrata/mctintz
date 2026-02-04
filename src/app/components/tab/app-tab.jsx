'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiChevronRight, FiChevronsRight} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function AppTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 mt-4 pt-2 text-center">
            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow">
                <li className="nav-item">
                    <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} onClick={()=> setActiveTab(1)}>
                        <div className="text-center py-2">
                            <h6 className="mb-0">High Performance</h6>
                        </div>
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} onClick={()=> setActiveTab(2)}>
                        <div className="text-center py-2">
                            <h6 className="mb-0">Creative Design</h6>
                        </div>
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link href="#" scroll={false} className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} onClick={()=> setActiveTab(3)}>
                        <div className="text-center py-2">
                            <h6 className="mb-0">24 / 7 Support</h6>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    
    <div className="row">
        <div className="col-12 mt-4 pt-2">
            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 1 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            {/* <Image src="/images/app/2.png" width={0} height={0} sizes='100vw' style={{width:'400px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/> */}
                            <Image src="/images/app/1.png" width={0} height={0} sizes='100vw' style={{width:'400px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                        </div>

                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <h4 className="title mb-4"><FiChevronsRight className="text-primary"></FiChevronsRight> High Performing Landing App</h4>
                                <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`tab-pane fade ${activeTab === 2 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Image src="/images/app/3.png" width={0} height={0} sizes='100vw' style={{width:'400px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                        </div>

                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <h4 className="title mb-4"><FiChevronsRight className="text-primary"></FiChevronsRight> Creative Design and Clean Code</h4>
                                <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                            </div>
                        </div>     
                    </div>                           
                </div>

                <div className={`tab-pane fade ${activeTab === 3 ? 'active show' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Image src="/images/app/4.png" width={0} height={0} sizes='100vw' style={{width:'400px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                        </div>

                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <h4 className="title mb-4"><FiChevronsRight className="text-primary"></FiChevronsRight> 24 / 7 App Supports and Responsive</h4>
                                <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                            </div>
                        </div>    
                    </div>                            
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
