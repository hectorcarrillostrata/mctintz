import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackToHome from '../components/back-to-home'

export default function Signup() {
  return (
    <>
          <section className="bg-home d-flex align-items-center position-relative" style={{backgroundImage:"url('/images/shape01.png')", backgroundPosition:"center"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card form-signin p-4 rounded shadow">
                            <form>
                                <Link href="/"><Image src="/images/logo-icon.png" width={65} height={65} className="avatar avatar-small mb-4 d-block mx-auto" alt=""/></Link>
                                <h5 className="mb-3 text-center">Register your account</h5>
                            
                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Harry"/>
                                    <label htmlFor="floatingInput">First Name</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"/>
                                    <label htmlFor="floatingEmail">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Register</button>

                                <div className="col-12 text-center mt-3">
                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link href="/auth-bs-login" className="text-dark fw-bold">Sign in</Link></p>
                                </div>

                                <p className="mb-0 text-muted mt-3 text-center">© {new Date().getFullYear()} Landrick.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <BackToHome/>
    </>
  )
}
