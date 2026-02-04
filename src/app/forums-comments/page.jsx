import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ForumsNavbar from '../components/navbar/forums-navbar'
import ForumsSidebar from '../components/forums-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiKey, FiUser} from 'react-icons/fi'

export default function ForumsComments() {
  return (
    <>
    <ForumsNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h4 className="title mb-0"> Author Comments </h4>
                    </div>
                </div>
            </div>
            
            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                        <li className="breadcrumb-item"><Link href="/forums">Forums</Link></li>
                        <li className="breadcrumb-item"><Link href="/forums-topic">Forums Topic</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Comments</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div className="position-relative">
        <div className="shape overflow-hidden text-color-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="rounded shadow">
                        <div className="d-flex justify-content-between p-4 bg-light">
                            <h6 className="mb-0">Author</h6>
                            <h6 className="mb-0">Date</h6>
                        </div>
                        
                        <div className="p-4">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <Link className="pe-3" href="#">
                                        <Image src="/images/client/01.jpg" height={45} width={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                    </Link>
                                    <div className="flex-1 commentor-detail">
                                        <h6 className="mb-0"><Link href="#" className="media-heading text-dark">Calvin Carlo</Link></h6>
                                        <small className="text-muted">Author</small>
                                    </div>
                                </div>
                                <small className="text-muted">13th March, 2026 <br/> at 01:00 pm</small>
                            </div>
                            <div className="mt-3">
                                <p className="text-muted mb-0">" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."</p>
                            </div>
                        </div>
                        
                        <div className="p-4 border-top">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <Link className="pe-3" href="#">
                                        <Image src="/images/client/05.jpg" width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                    </Link>
                                    <div className="flex-1 commentor-detail">
                                        <h6 className="mb-0"><Link href="#" className="media-heading text-dark">Crista Joseph</Link></h6>
                                        <small className="text-muted">Author</small>
                                    </div>
                                </div>
                                <small className="text-muted">5th May, 2026 <br/> at 10:00 am</small>
                            </div>
                            <div className="mt-3">
                                <p className="text-muted mb-0">" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."</p>
                            </div>
                        </div>
                        
                        <div className="p-4 border-top">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <Link className="pe-3" href="#">
                                        <Image src="/images/client/06.jpg" width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                    </Link>
                                    <div className="flex-1 commentor-detail">
                                        <h6 className="mb-0"><Link href="#" className="media-heading text-dark">George Meta</Link></h6>
                                        <small className="text-muted">Author</small>
                                    </div>
                                </div>
                                <small className="text-muted">19th June, 2026 <br/> at 09:00 am</small>
                            </div>
                            <div className="mt-3">
                                <p className="text-muted mb-0">" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-2">
                        <div className="rounded shadow p-4">
                            <form className="login-form">
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
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-0">
                                        <div className="d-grid">
                                            <button className="btn btn-primary">Login Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ForumsSidebar/>
            </div>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
