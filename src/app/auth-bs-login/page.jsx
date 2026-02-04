import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackToHome from '../components/back-to-home'

export default function AuthLogin() {
  return (
    <>
      <section className="bg-home d-flex align-items-center position-relative" style={{backgroundImage:"url('/images/shape01.png')", backgroundPosition:"center"}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card form-signin p-4 rounded shadow">
                        <form>
                            <Link href="/"><Image src="/images/logo-icon.png" width={65} height={65} className="avatar avatar-small mb-4 d-block mx-auto" alt=""/></Link>
                            <h5 className="mb-3 text-center">Please sign in</h5>
                        
                            <div className="form-floating mb-2">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                        
                            <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                    </div>
                                </div>
                                <p className="forgot-pass mb-0"><Link href="/auth-bs-reset" className="text-dark small fw-bold">Forgot password ?</Link></p>
                            </div>
            
                            <button className="btn btn-primary w-100" type="submit">Sign in</button>

                            <div className="col-12 text-center mt-3">
                                <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link href="/auth-bs-signup" className="text-dark fw-bold">Sign Up</Link></p>
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
