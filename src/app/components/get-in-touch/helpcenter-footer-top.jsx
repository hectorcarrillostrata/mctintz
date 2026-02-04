import React from 'react'
import Link from 'next/link'

import {MdOutlineMarkEmailRead } from 'react-icons/md'
import { LuWebcam} from 'react-icons/lu'

export default function HelpcenterFooterTop() {
  return (
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="d-flex align-items-center features feature-primary feature-clean shadow rounded p-4">
                        <div className="icons text-center rounded">
                            <MdOutlineMarkEmailRead className="h3 mb-0"/>
                        </div>
                        <div className="flex-1 content ms-4">
                            <h5 className="mb-1"><Link href="#" className="text-dark">Get in Touch !</Link></h5>
                            <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                            <div className="mt-2">
                                <Link href="#" className="btn btn-sm btn-soft">Submit a Request</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="d-flex align-items-center features feature-primary feature-clean shadow rounded p-4">
                        <div className="icons text-center rounded">
                            <LuWebcam className="h3 mb-0"/>
                        </div>
                        <div className="flex-1 content ms-4">
                            <h5 className="mb-1"><Link href="#" className="text-dark">Start a Meeting</Link></h5>
                            <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                            <div className="mt-2">
                                <Link href="#" className="btn btn-sm btn-soft">Start Video Chat</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
