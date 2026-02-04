import React from 'react'
import Link from 'next/link'

import {FiSearch, FiUser,FiFacebook, FiInstagram, FiTwitter,FiLinkedin,FiGithub,FiYoutube,FiGitlab, FiKey} from 'react-icons/fi'

export default function ForumsSidebar() {
  return (
        <div className="col-lg-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card border-0 sidebar sticky-bar rounded shadow bg-light">
                <div className="card-body">
                    <div className="widget mb-4 pb-2">
                        <div className="widget">
                            <form role="search" method="get">
                                <div className="input-group mb-3 border rounded">
                                    <input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..."/>
                                    <button type="submit" className="input-group-text bg-white border-0 bg-transparent" id="searchsubmit"><FiSearch /></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="widget mb-4 pb-2">
                        <h5 className="widget-title">Login</h5>
                        <form className="login-form mt-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiUser className="fea icon-sm icons"/>
                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                        <div className="form-icon position-relative">
                                            <FiKey className="fea icon-sm icons"/>
                                            <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
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
                                        <p className="forgot-pass mb-0"><Link href="/auth-re-password-three" className="text-dark fw-bold">Forgot password ?</Link></p>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Sign in</button>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <p className="mb-0 mt-4"><small className="text-dark me-2">Don't have an account ?</small> <Link href="/auth-signup-three" className="text-dark fw-bold">Sign Up</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="widget mb-4 pb-2">
                        <h5 className="widget-title">Recent Replies</h5>
                        <ul className="list-unstyled mb-0 mt-4">
                            <li className="text-muted small h6 mb-3"><FiUser className="fea icon-sm"/><Link href="#" className="text-dark ms-2">Ameliya</Link> on <Link href="#" className="text-primary">Privacy policy</Link></li>
                            <li className="text-muted small h6 mb-3"><FiUser className="fea icon-sm"/><Link href="#" className="text-dark ms-2">Crista</Link> on <Link href="#" className="text-primary">HTML Template hosts</Link></li>
                            <li className="text-muted small h6 mb-3"><FiUser className="fea icon-sm"/><Link href="#" className="text-dark ms-2">John</Link> on <Link href="#" className="text-primary">Specific error messages</Link></li>
                            <li className="text-muted small h6 mb-3"><FiUser className="fea icon-sm"/><Link href="#" className="text-dark ms-2">Jafrin</Link> on <Link href="#" className="text-primary">Network administration</Link></li>
                            <li className="text-muted small h6 mb-0"><FiUser className="fea icon-sm"/><Link href="#" className="text-dark ms-2">Harry</Link> on <Link href="#" className="text-primary">Customized template options</Link></li>
                        </ul>
                    </div>
                    
                    <div className="widget">
                        <h5 className="widget-title">Follow us</h5>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiGithub className="fea icon-sm fea-social"/></Link></li>
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiYoutube className="fea icon-sm fea-social"/></Link></li>
                            <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiGitlab className="fea icon-sm fea-social"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}
