'use client'
import React from 'react'
import Link from 'next/link'

import { TypeAnimation } from 'react-type-animation';

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import ProgrammingAbout from '../components/about/programming-about'
import WebFeature from '../components/feature/web-feature'
import WebCta from '../components/cta/web-cta'
import AccordionOne from '../components/accordion/accordion-one'
import BlogOne from '../components/blog/blog-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiVideo, FiX} from 'react-icons/fi'

export default function IndexWebProgramming() {
  return (
    <>
        <Navbar/>

        <section className="bg-half-170 d-table w-100 overflow-hidden">
            <span className="modern-app-round position-absolute primary-50 top-50 start-50 translate-middle"></span>
            <div className="container position-relative z-1">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title-heading">
                            <h1 className="display-4 fw-bold mb-4">Building A Better <br/>
                                <TypeAnimation
                                    sequence={[
                                        'Web',
                                        1000,
                                        'Application',
                                        1000,
                                        'Develop',
                                        1000,
                                        'Programming',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    className="text-primary text-decoration-underline fw-bold typewrite ms-1"
                                    repeat={Infinity}
                                    cursor={false}
                                />
                             together</h1>
                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4 pt-2">
                                <Link href="/page-aboutus" className="btn btn-primary m-1">Read More</Link>
                                <Link href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo data-feather="video" className="icons"></FiVideo></Link><span className="fw-bold text-uppercase small align-middle ms-2">Watch Now</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="classic-app-image position-relative">
                            <div className="rounded-pill position-relative overflow-hidden mx-lg-5 mx-md-4 mx-3">
                                <img src="/images/vector01.png" className="img-fluid" alt=""/>
                                <div className="bg-overlay bg-gradient-primary opacity-50"></div>
                            </div>

                            <div className="app-images-up">
                                <img src="/images/programming/1.jpg" className="img-fluid rounded-md mover" alt=""/>
                            </div>
                            
                            <div className="app-images-bottom">
                                <img src="/images/programming/2.jpg" className="img-fluid rounded-md mover-minus" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="py-4 border-bottom border-top">
            <div className="container">
                <PartnerOne/>
            </div>
        </section>

        <section className="section overflow-hidden">
            <div className="container">
                <ProgrammingAbout/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Services of Programmer</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <WebFeature/>
            </div>
        </section>

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

        <WebCta/>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Frequently Asked Questions</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="accordion" id="buyingquestion">
                            <div className="row">
                                <div className="col-md-6">
                                    <AccordionOne/>
                                </div>

                                <div className="col-md-6">
                                    <AccordionOne/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-md-start text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-md-0 mb-4">Reads Our Latest <br/> News & Blog</h4>
                        </div>
                    </div>
                    
                    <div className="col-md-6 text-md-start text-center">
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <BlogOne/>
            </div>
        </section>

        <Footer/>

        <ScrollToTop/>
    </>
  )
}
