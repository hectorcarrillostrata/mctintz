'use client'
import Link from 'next/link'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import {FiX, FiUser, FiKey, FiMail} from 'react-icons/fi'
import {MdOutlineHeartBroken} from 'react-icons/md'

import Image from 'next/image';

export default function UiModal() {
    let [show, setShow] = useState(false);
    let [show2, setShow2] = useState(false);
    let [show3, setShow3] = useState(false);
    let [show4, setShow4] = useState(false);
    let [show5, setShow5] = useState(false);
  return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="row">
                <div className="col-12">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Modal </h5>
                        </div>

                        <div className="p-4">
                            <Link href="#" scroll={false} className="btn btn-primary m-1" onClick={()=>setShow(!show)}> Click Here</Link>
                            <Link href="#" scroll={false} className="btn btn-primary m-1" onClick={()=>setShow2(!show2)}> Login Popup</Link>
                            <Link href="#" scroll={false} className="btn btn-primary m-1" onClick={()=>setShow3(!show3)}>Subscribe Popup</Link>
                            <Link href="#" scroll={false} className="btn btn-primary m-1" onClick={()=>setShow4(!show4)}>Wishlist Popup</Link>
                            <Link href="#" scroll={false} className="btn btn-primary m-1" onClick={()=>setShow5(!show5)}>Empty Cart Popup</Link>
                        </div>
                        <Modal show={show} onHide={()=>setShow(!show)} centered>
                            <Modal.Header>
                                <Modal.Title>Modal title</Modal.Title>
                                <button type="button" className="btn btn-icon btn-close" onClick={()=>setShow(!show)}><FiX className="fs-4 text-dark"></FiX></button>
                            </Modal.Header>
                            <Modal.Body>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-secondary" onClick={()=>setShow(!show)}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={show2} onHide={()=>setShow2(!show2)} centered size="lg">
                            <Modal.Body className='p-0'>
                                <div className="row align-items-center g-0">
                                    <div className="col-lg-6 col-md-5">
                                        <Image src="/images/course/online/ab02.jpg" width={0} height={0} sizes='100VW' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    </div>

                                    <div className="col-lg-6 col-md-7">
                                        <form className="login-form p-4">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FiUser className="fea icon-sm icons"/>
                                                            <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <FiKey className="fea icon-sm icons"/>
                                                            <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-12">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="mb-3">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox"  id="flexCheckDefault4"/>
                                                                <label className="form-check-label" htmlFor="flexCheckDefault4">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <p className="forgot-pass mb-0"><Link href="auth-re-password.html" className="text-dark fw-bold">Forgot password ?</Link></p>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-12 mb-0">
                                                    <div className="d-grid">
                                                        <button className="btn btn-primary">Sign in</button>
                                                    </div>
                                                </div>
        
                                                <div className="col-12 text-center">
                                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link href="auth-signup.html" className="text-dark fw-bold">Sign Up</Link></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <Modal show={show3} onHide={()=>setShow3(!show3)} centered size="lg">
                            <Modal.Body style={{backgroundImage:"url('/images/subscribe.png')", backgroundRepeat:'no-repeat'}}>
                                <div className="clearfix"></div>
                                <div className="container-fluid px-0">
                                    <div className="row align-items-center g-0">
                                        <div className="col-lg-6 offset-lg-6">
                                            <div className="pb-5 pt-4 px-4">
                                                <h6 className="text-muted">Be the first to know daily updates</h6>

                                                <h4>Signup for daily updates</h4>
                                                <p className="text-muted mb-0">Subscribe to the Landrick mailing list to receive updates on new arrivals, special offers and our promotions.</p>
                                                <form className="mt-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="foot-subscribe mb-3">
                                                                <div className="form-icon position-relative">
                                                                    <FiMail className="fea icon-sm icons"/>
                                                                    <input type="email" name="email" id="daily-updates" className="form-control ps-5 rounded" placeholder="Your email : " required/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="d-grid">
                                                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary" value="Subscribe"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <div className="text-center">
                                                                <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link href="#" className="text-dark fw-bold">Sign in</Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal show={show4} onHide={()=>setShow4(!show4)} centered>
                            <Modal.Body className='p-5'>
                                <div className="text-center">
                                    <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{height:'95px', width:'95px'}}>
                                        <h1 className="mb-0"><MdOutlineHeartBroken className="align-middle"/></h1>
                                    </div>
                                    <div className="mt-4">
                                        <h4>Your wishlist is empty.</h4>
                                        <p className="text-muted">Create your first wishlist request...</p>
                                        <div className="mt-4">
                                            <Link href="#" className="btn btn-outline-primary">+ Create new wishlist</Link>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal show={show5} onHide={()=>setShow5(!show5)} centered>
                            <Modal.Body className='p-5'>
                                <div className="text-center">
                                    <Image src="/images/shop/cart.png" width={110} height={110} className="avatar avatar-medium rounded-circle shadow" alt=""/>
                                    <div className="mt-4">
                                        <h4>Your cart is empty.</h4>
                                        <p className="text-muted">Looks like you haven't made your choice yet...</p>
                                        <div className="mt-4">
                                            <Link href="#" className="btn btn-primary">Start Shopping</Link>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
  )
}
