'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiMessageCircle, FiUser, FiMail} from 'react-icons/fi'

export default function ProductDetailTab() {
    let [activeTab, setActiveTab] = useState(1)
  return (
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 rounded position-relative overflow-hidden">
                        <li className="nav-item m-1">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(1)} className={`nav-link py-2 px-5 rounded ${activeTab === 1 ? 'active' : ''}`}>
                                <div className="text-center">
                                    <h6 className="mb-0">Description</h6>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item m-1">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(2)} className={`nav-link py-2 px-5 rounded ${activeTab === 2 ? 'active' : ''}`}>
                                <div className="text-center">
                                    <h6 className="mb-0">Additional Information</h6>
                                </div>
                            </Link>
                        </li>

                        <li className="nav-item m-1">
                            <Link href="#" scroll={false} onClick={()=>setActiveTab(3)} className={`nav-link py-2 px-5 rounded ${activeTab === 3 ? 'active' : ''}`}>
                                <div className="text-center">
                                    <h6 className="mb-0">Review</h6>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    
                    <div className="tab-content mt-5">
                        <div className={`card border-0 tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                            <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                        </div>

                        <div className={`card border-0 tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{width:'100px'}}>Color</td>
                                        <td className="text-muted">Red, White, Black, Orange</td>
                                    </tr>

                                    <tr>
                                        <td>Material</td>
                                        <td className="text-muted">Cotton</td>
                                    </tr>

                                    <tr>
                                        <td>Size</td>
                                        <td className="text-muted">S, M, L, XL, XXL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={`card border-0 tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="media-list list-unstyled mb-0">
                                        <li>
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
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded">" Awesome product "</p>
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
                                                        <small className="text-muted">19th June, 2026 at 09:00 am</small>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                </ul>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded mb-0">" Good "</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <form className="ms-lg-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h5>Add your review:</h5>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <h6 className="small fw-bold">Your Rating:</h6>
                                                <Link href="#" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </Link>

                                                <Link href="#" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </Link>

                                                <Link href="#" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </Link>

                                                <Link href="#" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                    </ul>
                                                </Link>

                                                <Link href="#" className="d-inline-block">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    </ul>
                                                </Link>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Review:</label>
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
                                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control ps-5" required=""/>
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <div className="form-icon position-relative">
                                                        <FiMail className="fea icon-sm icons"/>
                                                        <input id="email" type="email" placeholder="Email" name="email" className="form-control ps-5" required=""/>
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div className="col-md-12">
                                                <div className="send d-grid">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
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
        </div> 
  )
}
