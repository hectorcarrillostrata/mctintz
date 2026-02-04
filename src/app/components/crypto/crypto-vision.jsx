import React from 'react'
import Counter from '../counter'
import Image from 'next/image'

export default function CryptoVision() {
  return (
    <>
        <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h6 className="text-primary">Our Vision</h6>
                      <h4 className="title mb-3 mt-2">Cryptocurrency in Every Wallet</h4>

                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center my-4 py-2">
              <div className="col-md-6">
                  <Image src="/images/logo-icon.png" width={200} height={200} className="img-fluid d-block mx-auto" alt=""/>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                  <div className="text-center">
                      <h5 className="text-muted mb-0">Founded in</h5>
                      <h2 className="mb-0 display-5 mt-4 fw-bold text-primary"><Counter end={2021}/></h2>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                  <div className="text-center">
                      <h5 className="text-muted mb-0">Team Member</h5>
                      <h2 className="mb-0 display-5 mt-4 fw-bold text-primary"><span className="counter-value" data-target="1000">551</span>+</h2>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                  <div className="text-center">
                      <h5 className="text-muted mb-0">Users</h5>
                      <h2 className="mb-0 display-5 mt-4 fw-bold text-primary"><Counter end={10}/>M</h2>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                  <div className="text-center">
                      <h5 className="text-muted mb-0">Insurance Coverage (USD)</h5>
                      <h2 className="mb-0 display-5 mt-4 fw-bold text-primary"><Counter end={410}/>M</h2>
                  </div>
              </div>
          </div> 
    </>
  )
}
