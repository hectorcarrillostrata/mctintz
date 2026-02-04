import React from 'react'
import {FiUser, FiUserCheck, FiMail, FiKey} from 'react-icons/fi'
import Link from 'next/link'
import BackToHome from '../components/back-to-home'

export default function AuthCoverSignup() {
  return (
    <>
      <section className="cover-user">
        <div className="container-fluid px-0">
            <div className="row g-0 position-relative">
                <div className="col-lg-4 cover-my-30 order-2">
                    <div className="cover-user-img d-lg-flex align-items-center">
                        <div className="row">
                            <div className="col-12">
                                <div className="card border-0" style={{zIndex:"1"}}>
                                    <div className="card-body p-0">
                                        <h4 className="card-title text-center">Signup</h4>
                                        <form className="login-form mt-4">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">First name <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FiUser className="fea icon-sm icons"/>
                                                            <input type="text" className="form-control ps-5" placeholder="First Name" name="s" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3"> 
                                                        <label className="form-label">Last name <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FiUserCheck className="fea icon-sm icons"/>
                                                            <input type="text" className="form-control ps-5" placeholder="Last Name" name="s" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FiMail className="fea icon-sm icons"/>
                                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FiKey className="fea icon-sm icons"/>
                                                            <input type="password" className="form-control ps-5" placeholder="Password" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="d-grid">
                                                        <button className="btn btn-primary">Register</button>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 mt-4 text-center">
                                                    <h6>Or Signup With</h6>
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

                                                <div className="mx-auto">
                                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link href="/auth-cover-login" className="text-dark fw-bold">Sign in</Link></p>
                                                </div>
                                            </div>
                                        </form>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     

                <div className="col-lg-8 offset-lg-4 padding-less img order-1 " style={{backgroundImage:"url('/images/user/02.jpg')"}}></div>   
            </div>
        </div>
      </section>
      <BackToHome/>
    </>
  )
}
