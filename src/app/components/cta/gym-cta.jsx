'use client'
import React from 'react';
import Link from 'next/link'
import { FiX } from 'react-icons/fi';

export default function GymCta() {
  return (
    <section className="section bg-cta" style={{backgroundImage:"url('/images/gym/cta.jpg')", backgroundPosition:'top'}} id="cta">
      <div className="bg-overlay bg-gradient-overlay"></div>
      <div className="container my-5">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                      <p className="text-white-50 para-dark para-desc mx-auto mb-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>

                      <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal" className="avatar avatar-md-md mx-auto rounded-pill shadow-md card d-flex justify-content-center align-items-center lightbox">
                          <i className="mdi mdi-play mdi-24px text-primary"></i>
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
