import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FiMail, FiChevronRight} from 'react-icons/fi'
import { linkOne, linkTwo, payment, socialData } from '../../data/footer'

export default function FooterLight() {
  return (
    <footer className="footer footer-light">    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="#" className="logo-footer">
                                        <Image src="/images/logo-dark.png" width={134} height={24} alt=""/>
                                    </Link>
                                <p className="mt-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <ul className="list-unstyled social-icon social mb-0 mt-4">
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
                                            <div className="foot-subscribe foot-white mb-3">
                                                <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiMail className="fea icon-sm icons"></FiMail>
                                                    <input type="email" name="email" id="emailsubscribe" className="form-control border ps-5 rounded" placeholder="Your email : " required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary" value="Subscribe"/>
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

        <div className="footer-py-30 bg-footer text-white-50 border-top">
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
