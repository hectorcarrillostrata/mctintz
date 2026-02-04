import Link from 'next/link'
import React from 'react'

import {FiPhone} from 'react-icons/fi'

export default function GetInTouch() {
  return (
        <div className="row mt-5 pt-md-4 justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <Link href="/page-contact-two" className="btn btn-primary mt-4"><FiPhone className=""/> Contact us</Link>
                </div>
            </div>
        </div>
  )
}
