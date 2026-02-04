import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CoworkingPrice() {
  return (
        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Choose The Pricing Plan</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-3 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan rounded bg-light text-center border-0">
                        <div className="card-body py-5">
                            <Image src="/images/icon/lightbulb.svg" className="mb-4" width={50} height={50} alt=""/>
                            <h6 className="title text-uppercase mb-4">Member</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">19</span>
                                <span className="h4 align-self-end mb-1">/mo</span>
                            </div>

                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Buy Now</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan rounded shadow text-center border-0">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                        <div className="card-body py-5">
                            <Image src="/images/icon/table.svg" className="mb-4" width={50} height={50} alt=""/>
                            <h6 className="title text-uppercase mb-4">Desk</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">39</span>
                                <span className="h4 align-self-end mb-1">/mo</span>
                            </div>
                            
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Get Started</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan rounded bg-light text-center border-0">
                        <div className="card-body py-5">
                            <Image src="/images/icon/star.svg" className="mb-4" width={50} height={50} alt=""/>
                            <h6 className="title text-uppercase mb-4">Dedicated</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">49</span>
                                <span className="h4 align-self-end mb-1">/mo</span>
                            </div>
                            
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Get Started</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-12 mt-4 pt-2">
                    <div className="card pricing pricing-primary best-plan rounded bg-light text-center border-0">
                        <div className="card-body py-5">
                            <Image src="/images/icon/start-up.svg" className="mb-4" width={50} height={50} alt=""/>
                            <h6 className="title text-uppercase mb-4">Office</h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">59</span>
                                <span className="h4 align-self-end mb-1">/mo</span>
                            </div>

                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="#" className="btn btn-primary btn-sm mt-4">Try It Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
