'use client'
import React from 'react';
import Link from 'next/link';
import { Parallax } from 'react-parallax';

import {FiPlay, FiX} from 'react-icons/fi'

export default function BusinessCta() {
  return (
    <section className="section bg-cta jarallax" data-jarallax data-speed="0.5"  id="cta">
        <Parallax
            bgImage='/images/2.jpg'
            bgImageAlt="the dog"
            strength={300}
            style={{
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',
            }}
        />
        <div className="bg-overlay"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                        <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal" className="play-btn  mt-4 lightbox">
                            <FiPlay className="fea icon-ex-md text-white title-dark"/>
                        </Link>

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
        </div>
    </section>
  )
}
