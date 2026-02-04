import React from 'react'
import Link from 'next/link'

export default function GetInTouchOne() {
  return (
    <div className="row justify-content-center">
        <div className="col-12 text-center">
            <div className="section-title">
                <h4 className="title mb-4">See everything about your employee at one place.</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            
                <div className="mt-4">
                    <Link href="#" className="btn btn-primary mt-2 me-2">Get Started Now</Link>
                    <Link href="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
