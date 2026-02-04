import React from 'react'
import Link from 'next/link'
import {FiMail} from 'react-icons/fi'
import BackToHome from '../components/back-to-home'

export default function AuthRePassword() {
  return (
    <>
    <section className="cover-user">
      <div className="container-fluid px-0">
          <div className="row g-0 position-relative">
              <div className="col-lg-4 cover-my-30 order-2">
                  <div className="cover-user-img d-flex align-items-center">
                      <div className="row">
                          <div className="col-12">
                              <div className="card border-0" style={{zIndex:'1'}}>
                                  <div className="card-body p-0">
                                      <h4 className="card-title text-center">Recover Account</h4>  
                                      <form className="login-form mt-4">
                                          <div className="row">
                                              <div className="col-lg-12">
                                                  <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                  <div className="mb-3">
                                                      <label className="form-label">Email address <span className="text-danger">*</span></label>
                                                      <div className="form-icon position-relative">
                                                          <FiMail className="fea icon-sm icons"/>
                                                          <input type="email" className="form-control ps-5" placeholder="Enter Your Email Address" name="email" required/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-12">
                                                  <div className="d-grid">
                                                      <button className="btn btn-primary ">Send</button>
                                                  </div>
                                              </div>
                                              <div className="mx-auto">
                                                  <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link href="/auth-cover-login" className="text-dark fw-bold">Sign in</Link></p>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> 
              </div>   

              <div className="col-lg-8 offset-lg-4 padding-less img order-1" style={{backgroundImage:"url('/images/user/03.jpg')"}}></div>  
          </div>
      </div>
    </section>
    <BackToHome/>
    </>
  )
}
