'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {FiX, FiUser, FiMail, FiKey} from 'react-icons/fi'
import { LuUserCheck } from 'react-icons/lu'

export default function WorkplaceModal() {
    let [show, setShow] = useState(false)
  return (
    <>
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h4 className="title mb-4">See everything about your workplace</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <div className="mt-3">
                        <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary mt-2 me-2">Buy Now <span className="badge rounded-pill bg-danger ms-2">v5.0.0</span></Link>
                        <Link href="#" scroll={false} onClick={()=>setShow(!show)} className="btn btn-outline-primary mt-2"><LuUserCheck className=""/> Free Trial</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={`modal fade ${show ? 'show d-block' : 'd-none'}`} style={{backgroundColor:"#0009"}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content rounded shadow border-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">15 Days Free Trail</h5>
                        <button type="button" className="btn btn-icon btn-close" onClick={()=>setShow(!show)}><FiX className="fs-4 text-dark"></FiX></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="">
                                        <label className="form-label">Name : <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiUser className="fea icon-sm icons"/>
                                            <input type="text" className="form-control ps-5" placeholder="Name" name="name" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="">
                                        <label className="form-label">Email : <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiMail className="fea icon-sm icons"/>
                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="">
                                        <label className="form-label">Password : <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiKey className="fea icon-sm icons"/>
                                            <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 mt-2 mb-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </form>   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
