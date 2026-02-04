import React from 'react'
import Link from 'next/link'

import ForumsNavbar from '../components/navbar/forums-navbar'
import ForumsSidebar from '../components/forums-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiMessageCircle, FiUser, FiKey} from 'react-icons/fi'

export default function ForumsTopic() {
  return (
    <>
    <ForumsNavbar/>

    <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h4 className="title mb-0"> Introduction: Landrick </h4>
                    </div>
                </div>
            </div>
            
            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                        <li className="breadcrumb-item"><Link href="/forums">Forums</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Forum Topic</li>
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
                    <div className="table-responsive bg-white shadow rounded">
                        <table className="table mb-0 table-center">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-bottom p-3" style={{minWidth:"300px"}}>Topics</th>
                                    <th scope="col" className="border-bottom p-3 text-end" style={{width:'100px'}}>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3">
                                        <div className="d-flex">
                                            <FiMessageCircle className="text-muted h5"/>
                                            <div className="flex-1 content ms-3">
                                                <Link href="/forums-comments" className="forum-title text-primary fw-bold">Changelog</Link>
                                                <p className="text-muted small mb-0 mt-1">Write by: <Link href="#" className="text-dark fw-bold">Calvin Carlo</Link></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center small p-3">2</td>
                                </tr>

                                <tr>
                                    <td className="p-3">
                                        <div className="d-flex">
                                            <FiMessageCircle className="text-muted h5"/>
                                            <div className="flex-1 content ms-3">
                                                <Link href="/forums-comments" className="forum-title text-primary fw-bold">Documentation</Link>
                                                <p className="text-muted small mb-0 mt-1">Write by: <Link href="#" className="text-dark fw-bold">George Meta</Link></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center small p-3">4</td>
                                </tr>

                                <tr>
                                    <td className="p-3">
                                        <div className="d-flex">
                                            <FiMessageCircle className="text-muted h5"/>
                                            <div className="flex-1 content ms-3">
                                                <Link href="/forums-comments" className="forum-title text-primary fw-bold">Components</Link>
                                                <p className="text-muted small mb-0 mt-1">Write by: <Link href="#" className="text-dark fw-bold">Crista Joseph</Link></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center small p-3">1</td>
                                </tr>
                            </tbody>
                        </table>
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
