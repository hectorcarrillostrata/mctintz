import React from 'react'
import ReactCarousel from '../carousel/react-carousel'
import Link from 'next/link'
import {LuUser, LuCalendarDays} from 'react-icons/lu'

export default function BlogHeroSlider() {
  return (
    <ReactCarousel>
        <div className="bg-home-75vh d-flex align-items-center" style={{backgroundImage:"url('/images/blog/bg1.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h2 className="text-white title-dark mb-3">Weekend Travel</h2>
                            <ul className="list-unstyled">
                                <li className="list-inline-item small user text-white-50 me-2"><LuUser className="text-white title-dark"/> Calvin Carlo</li>
                                <li className="list-inline-item small date text-white-50"><LuCalendarDays className="text-white title-dark"/> 13th March 2026</li>
                            </ul>
                            <p className="para-desc mx-auto text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-home-75vh d-flex align-items-center" style={{backgroundImage:"url('/images/blog/bg2.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h2 className="text-white title-dark mb-3">Business Meeting</h2>
                            <ul className="list-unstyled">
                                <li className="list-inline-item small user text-white-50 me-2"><LuUser className="text-white title-dark"/>  Calvin Carlo</li>
                                <li className="list-inline-item small date text-white-50"><LuCalendarDays className="text-white title-dark"/> 5th May 2026</li>
                            </ul>
                            <p className="para-desc mx-auto text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-home-75vh d-flex align-items-center" style={{backgroundImage:"url('/images/blog/bg3.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h2 className="text-white title-dark mb-3">Delicious & Organic</h2>
                            <ul className="list-unstyled">
                                <li className="list-inline-item small user text-white-50 me-2"><LuUser className="text-white title-dark"/>  Calvin Carlo</li>
                                <li className="list-inline-item small date text-white-50"><LuCalendarDays className="text-white title-dark"/> 19th June 2026</li>
                            </ul>
                            <p className="para-desc mx-auto text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ReactCarousel>
  )
}
