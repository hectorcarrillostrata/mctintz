'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiKey } from 'react-icons/fi'
import { FaRegFileAlt } from 'react-icons/fa'

export default function HospitalModal({footerTop}) {
    let [show, setShow] = useState(false)
  return (
    <>
    {footerTop === true ? (
        <Link href="#" scroll={false} className="btn btn-primary me-2 me-lg-2 me-md-0 my-2" onClick={()=>setShow(!show)}><FaRegFileAlt/> Book An Appointment</Link>
    ) : (
        <Link href="#" scroll={false} className="btn btn-pills btn-soft-success mt-4" onClick={()=>setShow(!show)}>Request</Link>
    )}
    

    <Modal show={show} onHide={()=>setShow(!show)} size='lg' centered="center">
        <Modal.Body className='p-0'>
            <div className="container-fluid px-0 position-relative">
                <div className="row align-items-center g-0 ">
                    <div className="col-lg-6 col-md-5 d-none d-md-block">
                        <Image src="/images/medical/cta.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 col-md-7">
                        <form className="login-form p-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiUser className="fea icon-sm icons"/>
                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiKey className="fea icon-sm icons"/>
                                            <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="d-flex justify-content-between">
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <p className="forgot-pass mb-0"><Link href="/auth-re-password" className="text-dark fw-bold">Forgot password ?</Link></p>
                                    </div>
                                </div>

                                <div className="col-lg-12 mb-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Sign in</button>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link href="/auth-signup" className="text-dark fw-bold">Sign Up</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>

    </>
  )
}
