import React from 'react'
import Link from 'next/link'
import {FiChevronRight, FiX} from 'react-icons/fi'
import { MdCheckCircleOutline } from 'react-icons/md'

export default function ClenerAbout() {
  return (
    <>
    <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
            <div className="modern-app-bg-shape position-relative">
                <div className="px-4">
                    <img src="/images/cleaner/ab1.jpg" className="img-fluid mx-auto d-block rounded-md shadow" alt=""/>
                </div>
                
                <div className="modern-saas-absolute-left">
                    <img src="/images/cleaner/ab2.jpg" className="img-fluid mover avatar avatar-ex-large rounded-md shadow border border-5" alt=""/>
                </div>

                <div className="position-absolute bottom-0 end-0">
                    <Link href="#!" data-bs-toggle="modal" data-bs-target="#about" className="avatar avatar-md-md rounded-pill shadow-md card bg-primary d-flex justify-content-center align-items-center lightbox">
                        <i className="mdi mdi-play fs-4 text-white"></i>
                    </Link>
                </div>
            </div>
        </div>

        <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title ms-lg-5">
                <h4 className="title mb-4">We Are Best Company <br/> In Cleaning</h4>
                <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>

                <div className="row gap-0">
                    <div className="col-md-6">
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>100% Satisfaction</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Annual Pass Programs</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Flexible and Cost-Effective</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Trained Emploies</li>
                        </ul>
                    </div>
                </div>
                
                <Link href="#" className="mt-3 btn btn-primary">Read More <FiChevronRight className=""/></Link>
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
