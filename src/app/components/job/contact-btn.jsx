'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {FiX, FiMail, FiUser, FiBook, FiMessageCircle} from 'react-icons/fi'

export default function ContactBtn() {
    let [show, setShow] = useState(false)
  return (
    <>
        <div className="d-grid">
            <Link href="#" scroll={false} onClick={()=>setShow(!show)} className="btn btn-primary"><FiMail className="align-middle mb-1"/> Contact Me</Link>
        </div>

        <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{backgroundColor:'#00000099'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content rounded shadow border-0">
                    <div className="modal-header">
                        <h5 className="modal-title">Contact Me </h5>
                        <button type="button" className="btn btn-icon btn-close" onClick={()=>setShow(!show)}><FiX className="fs-4 text-dark"/></button>
                    </div>
                    <div className="modal-body p-4">
                        <div className="custom-form mt-3">
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiUser className="fea icon-sm icons"/>
                                                <input name="name" id="name2" type="text" className="form-control ps-5" placeholder="Name :"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiMail className="fea icon-sm icons"/>
                                                <input name="email" id="email2" type="email" className="form-control ps-5" placeholder="Email :"/>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Subject</label>
                                            <div className="form-icon position-relative">
                                                <FiBook className="fea icon-sm icons"/>
                                                <input name="subject" id="subject2" className="form-control ps-5" placeholder="subject :"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <div className="form-icon position-relative">
                                                <FiMessageCircle className="fea icon-sm icons clearfix"/>
                                                <textarea name="comments" id="comments2" rows="4" className="form-control ps-5" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit2" name="send" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
