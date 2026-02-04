import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackToHome from '../components/back-to-home'

export default function ResetPassword() {
  return (
    <>
      <section className="position-relative" style={{backgroundImage:"url('/images/bg-auth.jpg')", backgroundPosition:"center"}}>
        <div className="bg-video-wrapper">
            <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
        </div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="d-flex flex-column min-vh-100 p-4">
                        <div className="text-center">
                            <Link href="/"><Image src="/images/logo-light.png" width={134} height={24} alt=""/></Link>
                        </div>

                        <div className="title-heading my-auto">
                            <div className="card form-signin px-4 py-5 rounded-md shadow-sm">
                                <form>
                                    <div className="text-center">
                                        <h5 className="mb-4">Reset Your Password</h5>
                                    </div>

                                    <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                        </div>
                        
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-md w-100" type="submit">Send</button>
                                        </div>

                                        <div className="col-12 text-center mt-4">
                                            <small><span className="text-muted me-2">Remember your password ? </span><Link href="/auth-login-bg-video" className="text-dark fw-bold">Sign in</Link></small>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="mb-0 text-white">© {new Date().getFullYear()} Landrick. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
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
