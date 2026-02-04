'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {FiPlus, FiX, FiUser, FiBook} from 'react-icons/fi'

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function ComposeMessage() {
    let [show, setShow] = useState(false)
  return (
    <>
        <div className="d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Messages:</h5>
            <Link href="#" className="btn btn-primary" onClick={()=>setShow(!show)}><FiPlus className="fea icon-sm"/> Compose</Link>
        </div>

        <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{backgroundColor:'#00000099'}}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content rounded shadow border-0">
                    <div className="modal-header border-bottom">
                        <h5 className="modal-title" id="composemail-title">Branded T-Shirts</h5>
                        <button type="button" className="btn btn-icon btn-close" onClick={()=>setShow(!show)}><FiX className=" fs-4 text-dark"/></button>
                    </div>
                    <div className="modal-body p-4">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiUser className="fea icon-sm icons"/>
                                            <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Subject</label>
                                        <div className="form-icon position-relative">
                                            <FiBook className="fea icon-sm icons"/>
                                            <input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"/>
                                        </div>
                                    </div>                                                                               
                                </div>
                                <div className="col-12">
                                    {/* <CKEditor
                                        editor={ ClassicEditor }
                                        data="<p>Hello,<br/><br/> Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation. <br/><br/>Thank you</p>"
                                    /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="border-top p-4">
                        <button type="button" className="btn btn-primary">Send Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
