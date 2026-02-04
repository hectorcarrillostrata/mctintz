'use client'
import Link from 'next/link'
import React,{useState} from 'react'

import { FiUser, FiMail, FiKey} from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import Image from 'next/image'

export default function SassModal() {
    let [show, setShow] = useState(false)
  return (
    <>
    <div className="container mt-100 mt-60">
        <div className="p-4 rounded bg-light shadow">
            <div className="row align-items-center">
                <div className="col-sm-7">
                    <div className="text-sm-start">
                        <h5 className="mb-0">Start building beautiful block-based websites.</h5>
                    </div>
                </div>

                <div className="col-sm-5 mt-4 mt-sm-0">
                    <div className="text-sm-end">
                        <Link href="#" scroll={false} className="btn btn-outline-primary" onClick={()=>setShow(!show)}>Free Trial <span className="badge rounded-pill bg-danger ms-2">v5.0.0</span> </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className={`modal fade show ${show ? 'd-block' : 'd-none'}`} style={{backgroundColor:'#0009'}}>
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded shadow border-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">14 Days Free Trial</h5>
                    <button type="button" className="btn btn-icon btn-close"onClick={()=>setShow(!show)} ><MdOutlineClose className="fs-4 text-dark"/></button>
                </div>
                <div className="modal-body">
                    <div className="feature-form">
                        <Image src="/images/illustrator/Mobile_notification_SVG.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>

                        <div className="content mt-4 pt-2">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Name : <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiUser className="fea icon-sm icons"/>
                                                <input type="text" className="form-control ps-5" placeholder="Name" name="name" required=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Email : <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiMail className="fea icon-sm icons"/>
                                                <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
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
        </div>
    </div> 
    </>
  )
}
