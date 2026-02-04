'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import {FiX, FiFacebook, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'

import {AiOutlineExclamationCircle} from 'react-icons/ai'

export default function NftModal() {
    let [show, setShow] = useState(false)
    let [show2, setShow2] = useState(false)
    let [show3, setShow3] = useState(false)
    let [show4, setShow4] = useState(false)

    let modalThree = () => {
        if(show === true){
            setShow(false)
        }
        setShow3(true)
    }

    let modalFour = () => {
        if(show2 === true){
            setShow2(false)
        }
        setShow4(true)
    }


  return (
    <>
    <div className="mt-4">
        <Link scroll={false} onClick={()=>setShow(!show)} href="#" className="btn btn-pills btn-primary me-2"><i className="mdi mdi-gavel fs-6 me-2"></i> Place a Bid</Link>
        <Link scroll={false} onClick={()=>setShow2(!show2)} href="#" className="btn btn-pills btn-primary"><i className="mdi mdi-cart fs-6 me-2"></i> Buy Now</Link>
    </div>

    <div className={`modal fade ${show ? 'show d-block' : ''}`} id="NftBid" style={{backgroundColor:'#00000099'}}>
        <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow rounded-md">
                <div className="modal-header">
                    <h5 className="modal-title" id="bidtitle">Place a Bid</h5>
                    <button type="button" className="btn-icon btn-close" onClick={()=>setShow(!show)} ><FiX className="fs-4 text-dark"/></button>
                </div>
                <div className="modal-body p-4">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Your Bid Price <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="00.00 ETH"/>
                                    <small className="text-muted"><span className="text-dark">Note:</span> Bid price at least 1 ETH</small>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Enter Your QTY <span className="text-danger">*</span></label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="0"/>
                                    <small className="text-muted"><span className="text-dark">Note:</span> Max. Qty 5</small>
                                </div> 
                            </div>
                        </div>
                    </form>

                    <div className="pt-3 border-top">
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> You must bid at least:</p>
                            <p className="text-primary"> 1.22 ETH </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> Service free:</p>
                            <p className="text-primary"> 0.05 ETH </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> Total bid amount:</p>
                            <p className="text-primary mb-0"> 1.27 ETH </p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-pills btn-primary" onClick={()=>modalThree()}><i className="mdi mdi-gavel fs-6 me-1"></i> Place a Bid</button>
                </div>
            </div>
        </div>
    </div>
    <div className={`modal fade ${show3 ? 'show d-block' : ''}`} id="NftBid" style={{backgroundColor:'#00000099'}}>
        <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow rounded-md">
                <div className="modal-header">
                    <h5 className="modal-title" id="bidsuccess">Bidding Successful</h5>
                    <button type="button" className="btn-icon btn-close" onClick={()=>setShow3(false)} ><FiX className="fs-4 text-dark"/></button>
                </div>
                <div className="modal-body p-4">
                    your bid (1.27ETH) has been listing to our database
                </div>
                <div className="modal-footer">
                    <Link href="" onClick={()=>setShow3(false)} className="btn btn-pills btn-primary"><i className="mdi mdi-basket-plus fs-6 me-1"></i> View Your Bid</Link>
                </div>
            </div>
        </div>
    </div>

    <div className={`modal fade ${show2 ? 'show d-block' : ''}`} id="NftBid" style={{backgroundColor:'#00000099'}}>
        <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow rounded-md">
                <div className="modal-header">
                    <h5 className="modal-title" id="buyNft">Checkout</h5>
                    <button type="button" className="btn-icon btn-close" onClick={()=>setShow2(!show2)} ><FiX className="fs-4 text-dark"/></button>
                </div>
                <div className="modal-body p-4">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Your Price <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" defaultValue="1.5ETH"/>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="py-3 border-top">
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> You must bid at least:</p>
                            <p className="text-primary"> 1.22 ETH </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> Service free:</p>
                            <p className="text-primary"> 0.05 ETH </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> Total bid amount:</p>
                            <p className="text-primary mb-0"> 1.27 ETH </p>
                        </div>
                    </div>

                    <div className="bg-soft-danger p-3 rounded shadow">
                        <div className="d-flex align-items-center">
                            <AiOutlineExclamationCircle className="h2 mb-0 me-2"/>
                            <div className="flex-1">
                                <h6 className="mb-0">This creator is not verified</h6>
                                <small className="mb-0">Purchase this item at your own risk</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <button className="btn btn-pills btn-primary w-100" onClick={()=>modalFour()}><i className="mdi mdi-cart fs-6 me-1"></i> Continue</button>
                        <form>
                            <div className="form-check align-items-center d-flex mt-2">
                                <input className="form-check-input mt-0" type="checkbox" id="AcceptT&C"/>
                                <label className="form-check-label text-muted ms-2 mb-0" htmlFor="AcceptT&C">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className={`modal fade ${show4 ? 'show d-block' : ''}`} id="NftBid" style={{backgroundColor:'#00000099'}}>
        <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow rounded-md position-relative" >
                <div className="position-absolute translate-middle z-index-1" style={{top:'15px', right:'0'}}>
                    <button type="button" className="btn-icon btn-close" onClick={()=>setShow4(!show4)} ><FiX className="fs-4 text-dark"/></button>
                </div>
                <div className="modal-body text-center p-4">
                    <h3>Yahhhoooo! 🎉</h3>
                    <h6 className="text-muted mb-0">You successfully purchased <a href="" className="text-reset"><u>XYZ nft</u></a> from Landrick</h6>

                    <ul className="rounded-md shadow p-4 border list-unstyled mt-4">
                        <li className="d-flex justify-content-between">
                            <span className="fw-bold me-5">Status:</span>
                            <span className="text-warning">Processing</span>
                        </li>

                        <li className="d-flex justify-content-between mt-2">
                            <span className="fw-bold me-5">Transaction ID:</span>
                            <span className="text-muted">qhut0...hfteh45</span>
                        </li>
                    </ul>

                    <ul className="list-unstyled social-icon social mb-0 mt-4">
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
