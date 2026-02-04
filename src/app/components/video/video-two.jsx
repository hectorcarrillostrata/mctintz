'use client'
import Link from 'next/link'
import React from 'react';
import { FiX } from 'react-icons/fi';

export default function VideoTwo() {
  return (
    <>
        <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal" className="avatar avatar-small rounded-pill shadow-md card d-flex justify-content-center align-items-center lightbox">
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
    </>
  )
}
