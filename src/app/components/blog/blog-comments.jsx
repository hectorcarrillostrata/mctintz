import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FiMessageCircle, FiUser, FiMail} from 'react-icons/fi'

export default function BlogComments() {
  return (
    <>
    <h5 className="mt-4">Comments :</h5>

    <ul className="media-list list-unstyled mb-0">
        <li className="mt-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <Link className="pe-3" href="#">
                        <Image src="/images/client/01.jpg" width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                    </Link>
                    <div className="flex-1 commentor-detail">
                        <h6 className="mb-0"><Link href="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                        <small className="text-muted">13th March, 2026 at 01:00 pm</small>
                    </div>
                </div>
                <Link href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
            </div>
            <div className="mt-3">
                <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
            </div>
        </li>

        <li className="mt-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <Link className="pe-3" href="#">
                        <Image src="/images/client/02.jpg" width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                    </Link>
                    <div className="flex-1 commentor-detail">
                        <h6 className="mb-0"><Link href="#" className="media-heading text-dark">Tammy Camacho</Link></h6>
                        <small className="text-muted">5th May, 2026 at 10:00 am</small>
                    </div>
                </div>
                <Link href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
            </div>
            <div className="mt-3">
                <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
            </div>
        </li>
        
        <li className="mt-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <Link className="pe-3" href="#">
                        <Image src="/images/client/03.jpg" width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                    </Link>
                    <div className="flex-1 commentor-detail">
                        <h6 className="mb-0"><Link href="#" className="media-heading text-dark">Tammy Camacho</Link></h6>
                        <small className="text-muted">19th June, 2026 at 09:00 am</small>
                    </div>
                </div>
                <Link href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
            </div>
            <div className="mt-3">
                <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
            </div>

            <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                <li className="mt-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link className="pe-3" href="#">
                                <Image src="/images/client/01.jpg" width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                            </Link>
                            <div className="flex-1 commentor-detail">
                                <h6 className="mb-0"><Link href="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                <small className="text-muted">20th June, 2026 at 01:25 pm</small>
                            </div>
                        </div>
                        <Link href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                    </div>
                </li>
            </ul>
        </li>
    </ul>

    <h5 className="mt-5">Leave A Comment :</h5>

    <form className="mt-3">
        <div className="row">
            <div className="col-md-12">
                <div className="mb-3">
                    <label className="form-label">Your Comment</label>
                    <div className="form-icon position-relative">
                        <FiMessageCircle className="fea icon-sm icons"/>
                        <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control ps-5" required=""></textarea>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="mb-3">
                    <label className="form-label">Name <span className="text-danger">*</span></label>
                    <div className="form-icon position-relative">
                        <FiUser className="fea icon-sm icons"/>
                        <input id="name2" name="name" type="text" placeholder="Name" className="form-control ps-5" required=""/>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="mb-3">
                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                    <div className="form-icon position-relative">
                        <FiMail className="fea icon-sm icons"/>
                        <input id="email2" type="email" placeholder="Email" name="email" className="form-control ps-5" required=""/>
                    </div>
                </div>
            </div>

            <div className="col-md-12">
                <div className="send d-grid">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </div>
        </div>
    </form> 
    </>
  )
}
