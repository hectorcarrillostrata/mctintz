import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import BackToHome from '../components/back-to-home'

export default function Error() {
  return (
    <>
    <section className="bg-home d-flex align-items-center">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                  <Image src="/images/404.svg" width={0} height={0} style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                  <div className="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                  <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
              </div>
          </div>

          <div className="row">
              <div className="col-md-12 text-center">  
                  <Link href="/" className="btn btn-outline-primary mt-4">Go Back</Link>
                  <Link href="/" className="btn btn-primary mt-4 ms-2">Go To Home</Link>
              </div>
          </div>
      </div>
    </section>
    <BackToHome/>
    </>
  )
}
