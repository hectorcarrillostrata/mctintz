import React from 'react'
import Link from 'next/link'

export default function PortfolioFooterTop() {
  return (
        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title mb-4">Let's talk about your portfolio</h4>
                        <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    
                        <div className="mt-4 pt-2">
                            <Link href="#" className="btn btn-primary">Get Started Now</Link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
}
