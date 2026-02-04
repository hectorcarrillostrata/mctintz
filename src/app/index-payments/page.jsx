import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PaymentCard from '../components/payment-card'
import ClientFive from '../components/client/client-five'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiChevronRight, FiCheckCircle} from 'react-icons/fi'
import { paymentFeature } from '../data/feature'

export default function Payments() {
  return (
    <>
    <Navbar/> 
    <section className="bg-half-170 pb-0 d-table w-100">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="title-heading text-center mt-4">
                      <Image src="/images/icon/credit-card.svg" width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                      <h6 className="text-primary mt-3 fw-bold">PAYMENTS</h6>
                      <h1 className="heading mb-3">A quick way to send your money faster</h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Get Started <FiChevronRight className="ms-1"></FiChevronRight></Link>
                      </div>
                  </div>
                  
                  <div className="row justify-content-center mt-lg-4 mt-3">
                      <div className="col-md-6 mt-4 pt-2">
                          <div className="card rounded shadow bg-light border-0">
                              <div className="card-body py-5">
                                  <Image src="/images/payments/payment/master.png" width={0} height={0} sizes='100vw' style={{width:'auto', height:'60px'}} className="text-end" alt=""/>
                                  <div className="mt-4">
                                      <h5 className="">•••• •••• •••• 4559</h5>
                                      <div className="d-flex justify-content-between">
                                          <p className="h6 text-muted mb-0">Cristino Murfy</p>
                                          <h6 className="mb-0">Exp: <span className="text-muted">10/22</span></h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 mt-4 pt-2">
                          <div className="card rounded shadow bg-dark border-0">
                              <div className="card-body py-5">
                                  <Image src="/images/payments/payment/visaa.png" width={0} height={0} sizes='100vw' style={{width:'auto', height:'60px'}} className="text-end" alt=""/>
                                  <div className="mt-4">
                                      <h5 className="text-light">•••• •••• •••• 9856</h5>
                                      <div className="d-flex justify-content-between">
                                          <p className="h6 text-muted mb-0">Calvin Carlo</p>
                                          <h6 className="mb-0 text-muted">Exp: <span className="text-muted">01/24</span></h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 mt-4 pt-2">
                          <div className="card rounded shadow bg-info border-0">
                              <div className="card-body py-5">
                                  <Image src="/images/payments/payment/rupay.png" width={0} height={0} sizes='100vw' style={{width:'auto', height:'60px'}} className="text-end" alt=""/>
                                  <div className="mt-4">
                                      <h5 className="text-white">•••• •••• •••• 5465</h5>
                                      <div className="d-flex justify-content-between">
                                          <p className="h6 text-light mb-0">Miriam Jockky</p>
                                          <h6 className="mb-0 text-light">Exp: <span className="text-light">03/23</span></h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 mt-4 pt-2">
                          <div className="card rounded shadow bg-light border-0">
                              <div className="card-body py-5">
                                  <Image src="/images/payments/payment/paypals.png" width={0} height={0} sizes='100vw' style={{width:'auto', height:'60px'}} className="text-end" alt=""/>
                                  <div className="mt-4">
                                      <div className="input-group mb-3">
                                          <input name="email" id="email" type="email" className="form-control" placeholder="Paypal Email :" required=""/>
                                          <button className="btn btn-primary submitBnt" type="submit" id="paypalmail">Send</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pb-0">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title mb-4">Easy payment processing for your business</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                   <PaymentCard/>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Payments Great Features</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {paymentFeature.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card bg-light rounded shadow border-0">
                                <div className="card-body py-5">
                                    <Icon className="h2 text-primary"></Icon>
                                    <div className="mt-2">
                                        <h5 className="card-title"><Link href="#" className="text-primary">{item.title}</Link></h5>
                                        <p className="text-muted mt-3 mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-5 pb-2">
                        <h4 className="title mb-4">Transection Between Buyers and Seller</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    <Image src="/images/payments/payment/seller-order.png" width={0} height={0} sizes='100vw' alt="" className="position-relative img-fluid mx-auto d-block" style={{zIndex:'1', width:'1000px', height:'auto'}}/>
                </div>
            </div>
        </div>
    </section>
    <div className="position-relative">
        <div className="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section bg-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">What customers say about us</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <ClientFive/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Pricing & Add Payment Card</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to genePrice awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2">
                    <div className="card bg-light shadow rounded border-0">
                        <div className="bg-primary bg-gradient p-4 text-center rounded-top">
                            <h4 className="mb-0 card-title title-dark text-white">Payment plan</h4>
                        </div>

                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-4">
                                <span className="price text-primary fw-bold display-4 mb-0">2</span>
                                <span className="h4 mb-0 mt-2 text-primary">%</span>
                                <span className="h6 align-self-end fw-bold text-uppercase mb-2 ms-2"> Per Transection</span>
                            </div>

                            <ul className="feature list-inline">
                                <li className="h6 mt-2 fw-normal mb-1"><FiCheckCircle className="fea icon-ex-md text-primary me-2"/>Transparent payouts</li>
                                <li className="h6 mt-2 fw-normal mb-1"><FiCheckCircle className="fea icon-ex-md text-primary me-2"/>Deposit tagging</li>
                                <li className="h6 mt-2 fw-normal mb-1"><FiCheckCircle className="fea icon-ex-md text-primary me-2"/>Control payout timing</li>
                                <li className="h6 mt-2 fw-normal mb-1"><FiCheckCircle className="fea icon-ex-md text-primary me-2"/>24×7 support</li>
                            </ul>

                            <div className="d-grid">
                                <Link href="#" className="btn btn-primary mt-4 pt-2">Payment Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2">
                    <div className="card rounded border-0 shadow">
                        <div className="bg-light p-4 text-center rounded-top">
                            <h4 className="mb-0 card-title text-primary">Add a new card</h4>
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Name of card holder : </label>
                                            <input name="name" id="name" type="text" className="form-control fw-bold" required placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Card Number :</label>
                                            <input type="number" min="0" autoComplete="off" id="cardnumber" className="form-control fw-bold" required placeholder="0000 0000 0000 0000"/>
                                        </div>                                                                               
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Expires End :</label>
                                            <input type="number" min="0" autoComplete="off" id="exdate" className="form-control fw-bold" required placeholder="MM/YY"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">CVV :</label>
                                            <input type="number" min="0" autoComplete="off" id="cvv" className="form-control fw-bold" required placeholder="CVV"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Add Card"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title mb-4">Connect your business with more customers today</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="contact-detail mt-5">
                        <div className="content mt-3 overflow-hidden d-block">
                            <h5 className="text-muted">Want to talk now ? <Link href="tel:+152534-468-854" className="text-primary h5">+152 534-468-854</Link></h5>
                        </div>  
                        <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary mt-3">Get Started <span className="badge rounded-pill bg-danger ms-2">v5.0.0</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
