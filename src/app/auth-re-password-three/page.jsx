import Link from 'next/link'
import React from 'react'
import BackToHome from '../components/back-to-home'

import {FiMail} from 'react-icons/fi'

export default function AuthRePasswordThree() {
  return (
    <>
          <section className="bg-home bg-circle-gradiant d-flex align-items-center">
            <div className="bg-overlay bg-overlay-white"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8"> 
                        <div className="card shadow rounded border-0">
                            <div className="card-body">
                                <h4 className="card-title text-center">Recover Account</h4>  

                                <form className="login-form mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                            <div className="mb-3">
                                                <label className="form-label">Email address <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiMail className="fea icon-sm icons"/>
                                                    <input type="email" className="form-control ps-5" placeholder="Enter Your Email Address" name="email" required=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                        <div className="mx-auto">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link href="/auth-login-three" className="text-dark fw-bold">Sign in</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
          </section>
          <BackToHome/>
    </>
  )
}
