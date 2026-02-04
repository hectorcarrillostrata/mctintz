import React from 'react'
import Link from 'next/link'

import {FiThumbsUp} from 'react-icons/fi'
import BackToHome from '../components/back-to-home'

export default function Thankyou() {
  return (
    <>
          <section className="bg-home bg-light d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto" style={{height:'90px', width:"90px"}}>
                                <FiThumbsUp className="uil uil-thumbs-up align-middle h1 mb-0"/>
                            </div>
                            <h1 className="my-4 fw-bold">Thank You</h1>
                            <p className="text-muted para-desc mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <Link href="/" className="btn btn-soft-primary mt-3">Go To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <BackToHome/>
    </>
  )
}
