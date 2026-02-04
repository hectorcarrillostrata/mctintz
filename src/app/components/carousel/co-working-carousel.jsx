'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ReactCarousel = dynamic(() => import('./react-carousel'), { ssr: false })

import {FiMail} from 'react-icons/fi'
import VideoOne from '../video/video-one'

export default function CoWorkingCarousel() {
  return (
    <>
    <ReactCarousel>
        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/coworking/bg01.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-12 text-center">
                        <div className="title-heading mt-4">
                            <h6 className="text-white-50 para-dark animated fadeInDownBig animated.delay-2s">Private office and Co-working space for <span className="text-success">$19</span></h6>
                            <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animated.delay-3s">Coworking  Space For a Success</h1>
                            <p className="para-desc text-white-50 para-dark mx-auto animated fadeInUpBig animated.delay-4s">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4 pt-2 animated fadeInUpBig animated.delay-5s">
                                <Link href="" className="btn btn-primary mt-2 d-inline-flex align-items-center"><FiMail className='me-1'/> Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/coworking/bg02.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-12 text-center">
                        <div className="title-heading mt-4">
                            <h6 className="text-white-50 para-dark animated fadeInDownBig animated.delay-2s">The Best Coworking in The City</h6>
                            <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animated.delay-3s">Office Space in Vietnam</h1>
                            <p className="para-desc mx-auto text-white-50 para-dark animated fadeInUpBig animated.delay-4s">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            
                            <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animated.delay-5s">
                                <form>
                                    <input type="email" id="email" name="email" className="rounded" placeholder="E-mail"/>
                                    <button type="submit" className="btn btn-primary">Book Space</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/coworking/bg03.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-12 text-center">
                        <div className="title-heading mt-4">
                            <h6 className="text-white-50 para-dark animated fadeInDownBig animated.delay-2s">Our Space for You</h6>
                            <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animated.delay-3s">Own Your Office For A Day</h1>
                            <p className="para-desc mx-auto text-white-50 para-dark animated fadeInUpBig animated.delay-4s">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4 pt-2 animated fadeInUpBig animated.delay-5s">
                                {/* <VideoOne/> */}
                                <span className="fw-bold text-uppercase small text-light title-dark align-middle ms-1">Watch Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ReactCarousel>
    </>
  )
}
