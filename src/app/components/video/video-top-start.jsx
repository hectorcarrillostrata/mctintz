'use client'
import React from 'react';
import Link from 'next/link';

import { FiX } from 'react-icons/fi';

export default function VideoTopStart() {
  return (
    <>
    <div className="position-absolute top-0 start-0">
        <Link href="#!" scroll={false} data-bs-toggle="modal" data-bs-target="#exampleModal" className="avatar avatar-md-md rounded-pill shadow-md card bg-primary d-flex justify-content-center align-items-center lightbox">
            <i className="mdi mdi-play fs-4 text-white"></i>
        </Link>
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
    </>
  )
}
