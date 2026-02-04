'use client'
import React from 'react';
import Link from 'next/link'

import {FiVideo, FiChevronRight, FiX} from 'react-icons/fi'
import CountUp from 'react-countup';

export default function ClientThree() {

  return (
        <div className="row justify-content-center" id="counter">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h4 className="title mb-4">Overall <span className="text-primary"><CountUp className="counter-value" start={0} end={333}/>k+</span> client are using, Get Started</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                
                    <div className="mt-4">
                        <Link href="#" className="btn btn-primary m-1">Get Started <FiChevronRight/></Link>
                        <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo className="icons"/></Link><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                </div>
            </div>
        </div>
  )
}
