import React from 'react'
import Link from 'next/link'
import {FiChevronRight, FiX} from 'react-icons/fi'
import { MdCheckCircleOutline } from 'react-icons/md'

export default function MctintzAbout() {
  return (
    <>
    <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
            <div className="modern-app-bg-shape position-relative">
                <div className="px-4">
                    <video 
                        src="/videos/mc_tintz_video_2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="img-fluid mx-auto d-block rounded-md shadow"
                        style={{objectFit: 'cover', height: '300px'}}
                    />
                </div>
                
                <div className="modern-saas-absolute-left">
                    <video 
                        src="/videos/mc_tintz_video_2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="mover avatar avatar-ex-large rounded-md shadow border border-5"
                        style={{objectFit: 'cover', width: '120px', height: '120px'}}
                    />
                </div>

                            </div>
        </div>

        <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title ms-lg-5">
                <h4 className="title mb-4">We Are The Best Choice <br/> For Automotive Customization</h4>
                <p className="text-muted">Choose <span className="text-primary fw-bold">MC Tintz</span> for premium window tinting, custom wheels, and performance tires with expert installation and flexible financing options.</p>
                <p className="text-muted">MC Tintz is your trusted destination for premium automotive customization in the 815 area. We specialize in window tinting, custom wheels, and performance tires, offering top-tier products, expert installation, and flexible financing options starting at just $50 down and 90 days same as cash.</p>

                <div className="row gap-0">
                    <div className="col-md-6">
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Premium Ceramic Films</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Lifetime Warranty</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Flexible Financing</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdCheckCircleOutline className="align-middle"/></span>Expert Installation</li>
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
                    <video 
                        src="/videos/mc_tintz_video_2.mp4"
                        controls
                        autoPlay
                        muted
                        className="w-100"
                        style={{maxHeight: '500px', objectFit: 'cover'}}
                    />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
