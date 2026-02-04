'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { LuGraduationCap, LuUser} from 'react-icons/lu'
import { SlBookOpen } from "react-icons/sl";

const ReactCarousel = dynamic(() => import('./react-carousel'), { ssr: false })

export default function CourseSlider() {
  return (
    <ReactCarousel>
        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/course/bg01.jpg')"}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="title-heading text-white mt-4">
                            <h1 className="display-4 text-white fw-bold mb-3">You Can Learn Anything With Us</h1>
                            <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4">
                                <Link href="#courses" className="btn btn-primary mt-2 d-inline-flex align-items-center"><SlBookOpen className="me-1"/> Find Courses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/course/bg02.jpg')"}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="title-heading text-white mt-4">
                            <h1 className="display-4 text-white fw-bold mb-3">Better Education For A Better Future </h1>
                            <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4">
                                <Link href="#admission" className="btn btn-primary mt-2 d-inline-flex align-items-center"><LuGraduationCap className="me-1"/> Admission Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/course/bg03.jpg')"}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="title-heading text-white mt-4">
                            <h1 className="display-4 text-white fw-bold mb-3">Education Is The Key of Success</h1>
                            <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4">
                                <Link href="#instructors" className="btn btn-primary mt-2 d-inline-flex align-items-center"><LuUser className="me-1"/> Instructors</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ReactCarousel>
  )
}
