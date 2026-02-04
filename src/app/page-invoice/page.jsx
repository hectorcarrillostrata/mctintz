import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'

import MapModal from '../components/map-modal'
import SmallFooter from '../components/footer/small-footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiLink, FiMapPin, FiMail, FiPhone} from 'react-icons/fi'

export default function Invoice() {
  return (
    <>
     <Navbar/> 
    <section className="bg-invoice bg-light">
      <div className="container">
          <div className="row mt-5 pt-4 pt-sm-0 justify-content-center">
              <div className="col-lg-10">
                  <div className="card shadow rounded border-0">
                      <div className="card-body">
                          <div className="invoice-top pb-4 border-bottom">
                              <div className="row">
                                  <div className="col-md-8">
                                      <div className="logo-invoice mb-2">Landrick<span className="text-primary">.</span></div>
                                      <Link href="#" className="text-primary h6"><FiLink className="fea icon-sm text-muted me-2"/>www.landrick.corp</Link>
                                  </div>

                                  <div className="col-md-4 mt-4 mt-sm-0">
                                      <h5>Address :</h5>
                                      <dl className="row mb-0">
                                          <dt className="col-2 text-muted"><FiMapPin className="fea icon-sm"/></dt>
                                          <dd className="col-10 text-muted position-relative">
                                              <Link href="#" data-type="iframe" className="video-play-icon text-muted lightbox">
                                                  <p className="mb-0">1419 Riverwood Drive,</p>
                                                  <p className="mb-0">Redding, CA 96001</p>
                                              </Link>
                                              <div style={{position:'absolute', width:'100%', height:'100%', top:'0', opacity:'0'}}>
                                                <MapModal/>
                                              </div>
                                          </dd>

                                          <dt className="col-2 text-muted"><FiMail className=""/></dt>
                                          <dd className="col-10 text-muted">
                                              <Link href="mailto:contact@example.com" className="text-muted">info@landrick.com</Link>
                                          </dd>

                                          <dt className="col-2 text-muted"><FiPhone className="fea icon-sm"/></dt>
                                          <dd className="col-10 text-muted">
                                              <Link href="tel:+152534-468-854" className="text-muted">(+12) 1546-456-856</Link>
                                          </dd>
                                      </dl>
                                  </div>
                              </div>
                          </div>

                          <div className="invoice-middle py-4">
                              <h5>Invoice Details :</h5>
                              <div className="row mb-0">
                                  <div className="col-md-8 order-2 order-md-1">
                                      <dl className="row">
                                          <dt className="col-md-3 col-5 fw-normal">Invoice No. :</dt>
                                          <dd className="col-md-9 col-7 text-muted">land45845621</dd>
                                          
                                          <dt className="col-md-3 col-5 fw-normal">Name :</dt>
                                          <dd className="col-md-9 col-7 text-muted">Calvin Carlo</dd>
                                          
                                          <dt className="col-md-3 col-5 fw-normal">Address :</dt>
                                          <dd className="col-md-9 col-7 text-muted">
                                              <p className="mb-0">1962 Pike Street,</p>
                                              <p className="mb-0">Diego, CA 92123</p>
                                          </dd>
                                          
                                          <dt className="col-md-3 col-5 fw-normal">Phone :</dt>
                                          <dd className="col-md-9 col-7 text-muted">(+45) 4584-458-695</dd>
                                      </dl>
                                  </div>

                                  <div className="col-md-4 order-md-2 order-1 mt-2 mt-sm-0">
                                      <dl className="row mb-0">
                                          <dt className="col-md-4 col-5 fw-normal">Date :</dt>
                                          <dd className="col-md-8 col-7 text-muted">15th Oct, 2021</dd>
                                      </dl>
                                  </div>
                              </div>
                          </div>

                          <div className="invoice-table pb-4">
                              <div className="table-responsive bg-white shadow rounded">
                                  <table className="table mb-0 table-center invoice-tb">
                                      <thead className="bg-light">
                                          <tr>
                                              <th scope="col" className="border-bottom text-start">No.</th>
                                              <th scope="col" className="border-bottom text-start">Item</th>
                                              <th scope="col" className="border-bottom">Qty</th>
                                              <th scope="col" className="border-bottom">Rate</th>
                                              <th scope="col" className="border-bottom">Total</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <th scope="row" className="text-start">1</th>
                                              <td className="text-start">Inclusive Insights</td>
                                              <td>2</td>
                                              <td>$ 2600</td>
                                              <td>$ 5200</td>
                                          </tr>
                                          <tr>
                                              <th scope="row" className="text-start">2</th>
                                              <td className="text-start">Handy Guide</td>
                                              <td>1</td>
                                              <td>$ 3660</td>
                                              <td>$ 3660</td>
                                          </tr>
                                          <tr>
                                              <th scope="row" className="text-start">3</th>
                                              <td className="text-start">Premiere Product</td>
                                              <td>3</td>
                                              <td>$ 4580</td>
                                              <td>$ 13740</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>

                              <div className="row">
                                  <div className="col-lg-4 col-md-5 ms-auto">
                                      <ul className="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                                          <li className="text-muted d-flex justify-content-between">Subtotal :<span>$ 22600</span></li>
                                          <li className="text-muted d-flex justify-content-between">Taxes :<span> 0</span></li>
                                          <li className="d-flex justify-content-between">Total :<span>$ 22600</span></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>

                          <div className="invoice-footer border-top pt-4">
                              <div className="row">
                                  <div className="col-sm-6">
                                      <div className="text-sm-start text-muted text-center">
                                          <h6 className="mb-0">Customer Services : <a href="tel:+152534-468-854" className="text-warning">(+12) 1546-456-856</a></h6>
                                      </div>
                                  </div>

                                  <div className="col-sm-6">
                                      <div className="text-sm-end text-muted text-center">
                                          <h6 className="mb-0"><a href="page-terms.html" target="_blank" className="text-primary">Terms & Conditions</a></h6>
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
    <SmallFooter/>
    <ScrollToTop/>
    </>
  )
}
