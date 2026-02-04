import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackToHome from '../components/back-to-home'

export default function Reset() {
  return (
    <>
      <section className="bg-home d-flex align-items-center position-relative" style={{backgroundImage:"url('/images/shape01.png')", backgroundPosition:"center" }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card form-signin p-4 rounded shadow">
                        <form>
                            <Link href="/"><Image src="/images/logo-icon.png" width={65} height={65} className="avatar avatar-small mb-4 d-block mx-auto" alt=""/></Link>
                            <h5 className="mb-3 text-center">Reset your password</h5>

                            <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                        
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
            
                            <button className="btn btn-primary w-100" type="submit">Send</button>

                            <div className="col-12 text-center mt-3">
                                <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link href="/auth-bs-login" className="text-dark fw-bold">Sign in</Link></p>
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
