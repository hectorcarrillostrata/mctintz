import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { payment, shopLink1, shopLink2, shopLink3, socialData } from '../../data/footer'
import { FiArchive, FiChevronRight, FiMail, FiTruck } from 'react-icons/fi'
import { MdOutlinePayments } from 'react-icons/md'
import { LuShieldCheck } from 'react-icons/lu'

export default function ShopFooter() {
  return (
        <footer className="footer">    
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="#" className="logo-footer">
                                        <Image src="/images/logo-light.png" width={134} height={24} alt=""/>
                                    </Link>
                                    <p className="mt-4">Start working with Landrick that can provide everything you.</p>
                                        <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                            {socialData.map((item,index)=>{
                                                let Icon = item.icon
                                                return(
                                                    <li className="list-inline-item mb-0 me-1" key={index}><Link href={item.Link} target="_blank" className="rounded"><Icon/></Link></li>
                                                )
                                            })}
                                        </ul>
                                </div>
                        
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-12 mb-4 pb-2">
                                            <h5 className="footer-head mb-0">Shopping & Clothes</h5>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <ul className="list-unstyled footer-list">
                                                {shopLink1.map((item,index)=>{
                                                    return(
                                                        <li key={index}><Link href="#" className="text-foot"><FiChevronRight className="me-1"/> {item}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                
                                        <div className="col-lg-4 col-md-4 col-12 mt-2 mt-sm-0">
                                            <ul className="list-unstyled footer-list">
                                                {shopLink2.map((item,index)=>{
                                                    return(
                                                        <li key={index}><Link href="#" className="text-foot"><FiChevronRight className="me-1"/> {item} </Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                
                                        <div className="col-lg-4 col-md-4 col-12 mt-2 mt-sm-0">
                                            <ul className="list-unstyled footer-list">
                                                {shopLink3.map((item,index)=>{
                                                    return(
                                                        <li key={index}><Link href="#" className="text-foot"><FiChevronRight className="me-1"/>{item}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <h5 className="footer-head">Newsletter</h5>
                                    <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="foot-subscribe mb-3">
                                                    <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                    <div className="form-icon position-relative">
                                                        <FiMail className="fea icon-sm icons"/>
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

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-30 footer-border">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FiTruck className="align-middle h5 mb-0 me-2"/>
                                            <h6 className="mb-0">Free delivery</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FiArchive className="align-middle h5 mb-0 me-2"/>
                                            <h6 className="mb-0">Non-contact shipping</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <MdOutlinePayments className="align-middle h5 mb-0 me-2"/>
                                            <h6 className="mb-0">Money-back quarantee</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <LuShieldCheck className="align-middle h5 mb-0 me-2"/>
                                            <h6 className="mb-0">Secure payments</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-30 footer-border">
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
                                                    <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#"><Image src={item} width={36} height={25} className="avatar avatar-ex-sm" title="American Express" alt=""/></Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}
