'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FiVideo, FiArrowRightCircle, FiX } from 'react-icons/fi'

export default function TokenHero() {
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    let deadline = "September, 13, 2026";

    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
    })
  return (
        <section className="bg-home d-flex align-items-center">
            <div className="bg-overlay bg-gradient-primary"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="title-heading">
                            <span className="badge bg-soft-success rounded-md">Sale tokens</span>
                            <h4 className="display-5 fw-bold text-white title-dark mt-3 mb-4">The token sale is live!</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4">
                                <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo className="icons"/></Link><small className="fw-medium text-white-50 align-middle ms-1">Watch Now</small>
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

                    <div className="col-lg-5 offset-lg-1 col-md-7 col-12 mt-4 pt-2">
                        <div className="card border-0 shadow rounded p-4 bg-light overflow-hidden ms-lg-4">
                            <Image src="/images/logo-icon.png" width={80} height={80} className="avatar avatar-md-md d-block mx-auto" alt=""/>
                            <h5 className="text-center mt-3">Landrick Token Sale</h5>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div id="token-sale">
                                        <ul className="count-down list-unstyled m-0">
                                            <li id="days" className="count-number fw-medium mb-0 list-inline-item px-3">{days}<p className='count-head'>Days</p></li>
                                            <li id="hours" className="count-number fw-medium mb-0 list-inline-item px-3">{hours}<p className='count-head'>Hours</p></li>
                                            <li id="mins" className="count-number fw-medium mb-0 list-inline-item px-3">{minutes}<p className='count-head'>Mins</p></li>
                                            <li id="secs" className="count-number fw-medium mb-0 list-inline-item px-3">{seconds}<p className='count-head'>Secs</p></li>
                                            <li id="end" className="h1"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-muted text-center">Token sale ends <span className="text-dark fw-medium">September 13th 2026</span></p>

                            <div className="progress-box mt-4">
                                <div className="progress rounded-md" style={{height:'10px'}}>
                                    <div className="progress-bar position-relative bg-primary rounded-md" style={{width:'60%'}}>
                                        <div className="progress-value d-block text-muted h6">Funded 60% = $ 600000</div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                                    <h6 className="title text-muted text-end mb-0">$ 1000000</h6>
                                </div>
                            </div>

                            <ul className="list-unstyled mb-0 mt-4">
                                <li className="h6 mb-2"><FiArrowRightCircle className="text-primary align-middle fs-5 me-1"/><span className="text-muted">Soft Cap:</span> &nbsp;10000 USD</li>
                                <li className="h6 mb-2"><FiArrowRightCircle className="text-primary align-middle fs-5 me-1"/><span className="text-muted">Min. transaction Amount:</span> &nbsp;1000 USD</li>
                                <li className="h6 mb-2"><FiArrowRightCircle className="text-primary align-middle fs-5 me-1"/><span className="text-muted">Target:</span> &nbsp;900000 USD</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary w-100">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                                
        </section>
  )
}
