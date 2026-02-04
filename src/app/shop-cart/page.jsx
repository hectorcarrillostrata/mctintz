import React from 'react'
import ShopNavbar from '../components/navbar/shop-navbar'
import Link from 'next/link'
import Image from 'next/image'
import QuantityTwo from '../components/shop/quantity-two'

import {FiX} from 'react-icons/fi'
import ShopFooter from '../components/footer/shop-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function ShopCart() {
  return (
    <>
     <ShopNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Shopping Cart </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-shop">Shop</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Cart</li>
                  </ul>
              </nav>
          </div>
      </div> 
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-color-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="table-responsive bg-white shadow rounded">
                      <table className="table mb-0 table-center">
                          <thead>
                              <tr>
                                  <th className="border-bottom py-3" style={{minWidth:"20px"}}></th>
                                  <th className="border-bottom text-start py-3" style={{minWidth:"300px"}}>Product</th>
                                  <th className="border-bottom text-center py-3" style={{minWidth:"160px"}}>Price</th>
                                  <th className="border-bottom text-center py-3" style={{minWidth:"160px"}}>Qty</th>
                                  <th className="border-bottom text-end py-3 pe-4" style={{minWidth:"160px"}}>Total</th>
                              </tr>
                          </thead>

                          <tbody>
                              <tr className="shop-list">
                                  <td className="h6 text-center"><Link href="#" className="text-danger"><FiX/></Link></td>
                                  <td>
                                      <div className="d-flex align-items-center">
                                          <Image src="/images/shop/product/s1.jpg" width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" alt=""/>
                                          <h6 className="mb-0 ms-3">T-Shirt</h6>
                                      </div>
                                  </td>
                                  <td className="text-center">$ 255.00</td>
                                  <QuantityTwo/>
                                  <td className="text-end fw-bold pe-4">$510.00</td>
                              </tr>

                              <tr className="shop-list">
                                  <td className="h6 text-center"><Link href="#" className="text-danger"><FiX/></Link></td>
                                  <td>
                                      <div className="d-flex align-items-center">
                                          <Image src="/images/shop/product/s3.jpg" width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" alt=""/>
                                          <h6 className="mb-0 ms-3">Branded Watch</h6>
                                      </div>
                                  </td>
                                  <td className="text-center">$ 520.00</td>
                                  <QuantityTwo/>
                                  <td className="text-end fw-bold pe-4">$520.00</td>
                              </tr>

                              <tr className="shop-list">
                                  <td className="h6 text-center"><Link href="#" className="text-danger"><FiX/></Link></td>
                                  <td>
                                      <div className="d-flex align-items-center">
                                          <Image src="/images/shop/product/s6.jpg" width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" alt=""/>
                                          <h6 className="mb-0 ms-3">T-Shirt</h6>
                                      </div>
                                  </td>
                                  <td className="text-center">$ 160.00</td>
                                  <QuantityTwo/>
                                  <td className="text-end fw-bold pe-4">$640.00</td>
                              </tr>

                              <tr className="shop-list">
                                  <td className="h6 text-center"><Link href="#" className="text-danger"><FiX/></Link></td>
                                  <td>
                                      <div className="d-flex align-items-center">
                                          <Image src="/images/shop/product/s10.jpg" width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" alt=""/>
                                          <h6 className="mb-0 ms-3">Sunglasses</h6>
                                      </div>
                                  </td>
                                  <td className="text-center">$ 260.00</td>
                                  <QuantityTwo/>
                                  <td className="text-end fw-bold pe-4">$520.00</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-8 col-md-6 mt-4 pt-2">
                  <Link href="#" className="btn btn-primary">Shop More</Link>
                  <Link href="#" className="btn btn-soft-primary ms-2">Update Cart</Link>
              </div>
              <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
                  <div className="table-responsive bg-white rounded shadow">
                      <table className="table table-center table-padding mb-0">
                          <tbody>
                              <tr>
                                  <td className="h6 ps-4 py-3">Subtotal</td>
                                  <td className="text-end fw-bold pe-4">$ 2190</td>
                              </tr>
                              <tr>
                                  <td className="h6 ps-4 py-3">Taxes</td>
                                  <td className="text-end fw-bold pe-4">$ 219</td>
                              </tr>
                              <tr className="bg-light">
                                  <td className="h6 ps-4 py-3">Total</td>
                                  <td className="text-end fw-bold pe-4">$ 2409</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="mt-4 pt-2 text-end">
                      <Link href="/shop-checkouts" className="btn btn-primary">Proceed to checkout</Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <ShopFooter/>
    <ScrollToTop/>
    </>
  )
}
