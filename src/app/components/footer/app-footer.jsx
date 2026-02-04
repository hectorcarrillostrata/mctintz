import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { RiGooglePlayLine } from 'react-icons/ri'
import { FaApple } from 'react-icons/fa'
import { FiMail, FiChevronRight, FiSmartphone, } from 'react-icons/fi'
import { linkOne, linkTwo, payment, socialData } from '../../data/footer'

export default function AppFooter() {
  return (
    <footer className="footer">
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="section-title">
                            <div className="d-flex">
                                <FiSmartphone className="display-4 text-white title-dark"/>
                                <div className="flex-1 ms-md-4 ms-3">
                                    <h4 className="fw-bold text-white mb-1">Download our app now !</h4>
                                    <p className="text-white-50 mb-0">Build modern looking websites fast and easy using Landrick.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mt-4 mt-sm-0">
                        <div className="text-md-end ms-5 ms-sm-0">
                            <Link href="#" className="btn btn-primary me-2 me-lg-2 me-md-0 my-2 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                            <Link href="#" className="btn btn-soft-primary my-2 d-inline-flex align-items-center"><RiGooglePlayLine className="me-1"/> Play Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60 footer-border">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <Link href="#" className="logo-footer">
                                    <Image src="/images/logo-light.png" width={134} height={24} alt=""/>
                                </Link>
                                <p className="mt-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                    {socialData.map((item,index)=>{
                                        let Icon = item.icon
                                        return(
                                            <li className="list-inline-item mb-0 me-1" key={index}><Link href={item.Link} target="_blank" className="rounded"><Icon/></Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                    
                            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Company</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    {linkOne.map((item,index)=>{
                                        return(
                                            <li key={index}><Link href="#" className="text-foot"><FiChevronRight className="me-1"/>{item}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                    
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Usefull Links</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    {linkTwo.map((item,index)=>{
                                        return(
                                            <li key={index}><Link href="#" className="text-foot"><FiChevronRight className="me-1"/>{item}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Newsletter</h5>
                                <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="foot-subscribe mb-3">
                                                <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiMail className="fea icon-sm icons"></FiMail>
                                                    <input type="email" name="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Your email : " required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-py-30 footer-bar">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="text-sm-start">
                            <p className="mb-0">© {new Date().getFullYear()} Landrick. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled text-sm-end mb-0">
                            {payment.map((item,index)=>{
                                return(
                                    <li className="list-inline-item me-1" key={index}><Link href="#"><Image src={item} width={36} height={25} className="avatar avatar-ex-sm" title="American Express" alt=""/></Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
