'use client'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

import {FiChevronRight, FiCode, FiX} from 'react-icons/fi'
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-scroll'

export default function ProgrammingAbout() {
  return (
    <>
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
                <div className="modern-app-bg-shape position-relative">
                    <div className="px-4">
                        <Image src="/images/programming/3.jpg" width={0} height={0} sizes='100%' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block rounded-md shadow" alt=""/>
                    </div>
                    
                    <div className="modern-saas-absolute-right">
                        <div className="card">
                            <div className="features feature-primary d-flex justify-content-between align-items-center rounded shadow p-3">
                                <div className="icon bg-soft-primary text-center rounded-pill">
                                    <FiCode className="uil uil-arrow fs-4 mb-0"></FiCode>
                                </div>
                                <div className="flex-1 ms-2">
                                    <h6 className="mb-0 text-muted">Lines of Code</h6>
                                    <p className="fs-5 text-dark fw-bold mb-0"><CountUp className="counter-value" start={45968} end={48575} /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="position-absolute top-0 start-0">
                        <Link href="#!" data-bs-toggle="modal" data-bs-target="#about" className="avatar avatar-md-md rounded-pill shadow-md card bg-primary d-flex justify-content-center align-items-center lightbox">
                            <i className="mdi mdi-play fs-4 text-white"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-5">
                    <h4 className="title mb-4">Professional Developing & <br/> Programming Services <br/> You Can Trust!</h4>
                    <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <ul className="list-unstyled text-muted">
                        <li className="mb-1"><span className="text-primary h5 me-2"><FaRegCheckCircle  className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-1"><span className="text-primary h5 me-2"><FaRegCheckCircle  className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-1"><span className="text-primary h5 me-2"><FaRegCheckCircle  className="align-middle"/></span>Create your own skin to match your brand</li>
                    </ul>
                    <Link to="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className="align-middle"/></Link>
                </div>
            </div>
        </div>

        <div className="modal fade" id="about" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><FiX/></button>
                    </div>
                    <div className="modal-body">
                        <iframe 
                            width="100%" 
                            height="500" 
                            src="https://www.youtube.com/embed/yba7hPeTSjk" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
