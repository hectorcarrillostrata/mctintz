'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Modal from 'react-bootstrap/Modal';

import {FiPhone, FiMail, FiMapPin, FiChevronRight} from 'react-icons/fi'
import { linkOne, linkTwo, payment, socialData } from '../../data/footer'


export default function ContactFooter({full}) {
    const [show, setShow] = useState(false);
  return (
    <footer className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="footer-py-60 text-center">
                        <div className="row py-5">
                            <div className="col-md-4">
                                <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                                    <div className="rounded icons text-center mx-auto">
                                        <FiPhone className="h3 mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="footer-head">Phone</h5>
                                        <p className="text-muted">Start working with Landrick that can provide everything</p>
                                        <Link href="tel:+152534-468-854" scroll={false} className="text-foot">+152 534-468-854</Link>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                                    <div className="rounded icons text-center mx-auto">
                                        <FiMail className="h3 mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="footer-head">Email</h5>
                                        <p className="text-muted">Start working with Landrick that can provide everything</p>
                                        <Link href="mailto:contact@example.com" scroll={false} className="text-foot">contact@example.com</Link>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                                    <div className="rounded icons text-center mx-auto">
                                        <FiMapPin className="h3 mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="footer-head">Location</h5>
                                        <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br/   >Houston, USA 485</p>
                                        <Link href="#" scroll={false} onClick={()=>setShow(!show)} className="video-play-icon text-foot lightbox">View on Google map</Link>
                                        <Modal show={show} onHide={()=>setShow(!show)} size='lg' centered="center">
                                            <Modal.Body className='p-0'>
                                                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin' width="100%" height={500}></iframe>
                                            </Modal.Body>
                                        </Modal>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {full ? (
            <>
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
            </>
        ) : (
            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container text-center">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3 col-md-2 col-sm-3">
                            <div className="text-sm-start">
                                <Link href="#" className="logo-footer">
                                    <Image src="/images/logo-icon.png" width={34} height={34} alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled footer-list terms-service mb-0">
                                <li className="list-inline-item mb-0"><Link href="#" className="text-foot me-2">Privacy</Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="text-foot me-2">Terms</Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="text-foot me-2">FAQs</Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="text-foot">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="text-sm-end">
                                <p className="mb-0 text-foot">© {new Date().getFullYear()} <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </footer>
  )
}
