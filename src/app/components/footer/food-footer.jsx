import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {FiShoppingCart, FiDribbble,  FiInstagram, FiTwitter, FiMail} from 'react-icons/fi'
import { FaBehance, FaFacebookF, } from 'react-icons/fa'

export default function FoodFooter() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="text-center">
                                    <h5 className="footer-head fw-semibold mb-4">Open Hours</h5>
                                    <p className="mb-2">Monday - Friday: 10 AM - 11 PM</p>
                                    <p className="mb-0">Saturday - Sunday: 9 AM - 1 PM</p>
                                </div>
                            </div>
                    
                            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="text-center">
                                    <h5 className="footer-head fw-semibold mb-4">Reservation</h5>
                                    <p className="mb-2"><Link href="tel:+152534-468-854" className="text-foot">+152 534-468-854</Link></p>
                                    <p className="mb-0"><Link href="mailto:contact@example.com" className="text-foot">contact@example.com</Link></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <div className="text-center">
                                    <h5 className="footer-head fw-semibold mb-4">Address</h5>
                                    <p className="mb-2">Landrick Restaurant</p>
                                    <p className="mb-0">C/54 Northwest Freeway, Suite 558, USA 485</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-5">
                            <div className="col-12">
                                <div className="text-center">
                                    <Link href="#" className="logo-footer">
                                        <Image src="/images/logo-icon.png" width={110} height={110} alt=""/>
                                    </Link>
                                    <p className="mt-4 para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="https://1.envato.market/landrick-next" target="_blank" className="rounded"><FiShoppingCart className="align-middle"/></Link></li>

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FiDribbble className="align-middle"/></Link></li>

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><FaBehance className="align-middle"/></Link></li>

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FaFacebookF className="align-middle" /></Link></li>

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FiInstagram className="align-middle"/></Link></li>

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><FiTwitter className="align-middle"/></Link></li>

                                        <li className="list-inline-item mb-0" style={{margin:'0 2px'}}><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail className="align-middle"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-py-30 footer-bar bg-footer">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Landrick. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
