import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FiUser, FiKey} from 'react-icons/fi'
import BackToHome from '../components/back-to-home'

export default function Login() {
  return (
    <>
    <section className="bg-home d-flex align-items-center">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                  <div className="me-lg-5">   
                      <Image src="/images/user/login.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid d-block mx-auto" alt=""/>
                  </div>
              </div>
              <div className="col-lg-5 col-md-6">
                  <div className="card login-page shadow rounded border-0">
                      <div className="card-body">
                          <h4 className="card-title text-center">Login</h4>  
                          <form className="login-form mt-4">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input type="email" className="form-control ps-5" placeholder="Email" name="email" required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-12">
                                      <div className="mb-3">
                                          <label className="form-label">Password <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiKey className="fea icon-sm icons"/>
                                              <input type="password" className="form-control ps-5" placeholder="Password" required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-12">
                                      <div className="d-flex justify-content-between">
                                          <div className="mb-3">
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                  <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                              </div>
                                          </div>
                                          <p className="forgot-pass mb-0"><Link href="/auth-re-password" className="text-dark fw-bold">Forgot password ?</Link></p>
                                      </div>
                                  </div>

                                  <div className="col-lg-12 mb-0">
                                      <div className="d-grid">
                                          <button className="btn btn-primary">Sign in</button>
                                      </div>
                                  </div>

                                  <div className="col-lg-12 mt-4 text-center">
                                      <h6>Or Login With</h6>
                                      <div className="row">
                                          <div className="col-6 mt-3">
                                              <div className="d-grid">
                                                  <Link href="#" className="btn btn-light"><i className="mdi mdi-facebook text-primary"></i> Facebook</Link>
                                              </div>
                                          </div>
                                          
                                          <div className="col-6 mt-3">
                                              <div className="d-grid">
                                                  <Link href="#" className="btn btn-light"><i className="mdi mdi-google text-danger"></i> Google</Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12 text-center">
                                      <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link href="/auth-signup" className="text-dark fw-bold">Sign Up</Link></p>
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
