'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { FiPlay, FiX} from 'react-icons/fi'

export default function CoWorkingCta() {

  return (
        <div className="container">
            <div className="card bg-light rounded border-0 overflow-hidden">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <Image src="/images/coworking/cta.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 text-center">
                        <div className="card-body section-title p-md-5">
                            <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="play-btn mt-0 text-center lightbox">
                                <FiPlay className="fea icon-ex-md text-dark"/>
                            </Link>
                            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <h4 className="title mb-4 mt-4">We Are Creative Dreamers and Co-workers</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
