import React from 'react'
import Navbar from '../components/navbar/navbar'
import UserDetail from '../components/account/user-detail'
import AccountingTab from '../components/account/accounting-tab'
import Link from 'next/link'
import Image from 'next/image'

import {FiPlus} from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function AccountPayment() {
  return (
    <>
    <Navbar navlight={true}/>
    <UserDetail/>

    <section className="section mt-60">
      <div className="container mt-lg-3">
          <div className="row">
              <AccountingTab/>

              <div className="col-lg-8 col-12">
                  <div className="rounded shadow p-4">
                      <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0">Payment Methods:</h5>
                          <Link href="#" className="btn btn-primary"><FiPlus className="fea icon-sm"/> Add</Link>
                      </div>

                      <div className="row">
                          <div className="col-md-6 mt-4 pt-2">
                              <Link href="#">
                                  <div className="card rounded shadow bg-light border-0">
                                      <div className="card-body">
                                          <Image src="/images/payments/payment/master.png" width={0} height={0} sizes='100vw' style={{width:'auto', height:'60px'}} className="text-end" alt=""/>
                                          <div className="mt-4">
                                              <h5 className="text-dark">•••• •••• •••• 4559</h5>
                                              <div className="d-flex justify-content-between">
                                                  <p className="h6 text-muted mb-0">Cristino Murfy</p>
                                                  <h6 className="mb-0 text-dark">Exp: <span className="text-muted">10/22</span></h6>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <Link href="#">
                                  <div className="card rounded shadow bg-dark border-0">
                                      <div className="card-body">
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
                              </Link>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <Link href="#">
                                  <div className="card rounded shadow bg-info border-0">
                                      <div className="card-body">
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
                              </Link>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <div className="card rounded shadow bg-light border-0">
                                  <div className="card-body">
                                      <Image src="/images/payments/payment/paypals.png" width={0} height={0} sizes='100vw' style={{width:'auto', height:'60px'}} className="text-end" alt=""/>
                                      <div className="mt-4">
                                          <form>
                                              <div className="mt-4 pt-3 mb-0">
                                                  <div className="input-group">
                                                      <input name="email" id="email" type="email" className="form-control" placeholder="Paypal Email :" required=""/>
                                                      <div className="input-group-append">
                                                          <button className="btn btn-primary submitBnt" type="submit" id="paypalmail">Send</button>
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
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
