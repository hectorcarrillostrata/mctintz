import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'


export default function SmallFooterTwo() {
  return (
        <footer className="footer footer-bar">
            <div className="footer-py-30">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <div className="text-sm-start">
                                <Link href="#" className="logo-footer">
                                    <Image src="/images/logo-light.png" width={134} height={24} alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Landrick. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>

                        <div className="col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                                <li className="list-inline-item mb-0" style={{margin:"0 2px"}}><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                <li className="list-inline-item mb-0" style={{margin:"0 2px"}}><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                <li className="list-inline-item mb-0" style={{margin:"0 2px"}}><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                <li className="list-inline-item mb-0" style={{margin:"0 2px"}}><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}
