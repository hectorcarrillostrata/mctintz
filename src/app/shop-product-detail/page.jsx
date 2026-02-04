import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ShopNavbar from '../components/navbar/shop-navbar'
import ProductDetailSlider from '../components/shop/product-detail-slider'
import Quantity from '../components/shop/quantity'
import ProductDetailTab from '../components/shop/product-detail-tab'
import RelatedProductSlider from '../components/shop/related-product-slider'
import ShopFooter from '../components/footer/shop-footer'
import ScrollToTop from '../components/scroll-to-top'

import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { FiArrowLeft, FiHome, FiArrowRight } from 'react-icons/fi'

export default function ProductDetail() {
  return (
    <>
    <ShopNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Branded T-Shirts </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-shop">Shop</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Product Details</li>
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

    <section className="section pb-0">
      <div className="container">
          <div className="row align-items-center">
              <ProductDetailSlider/>

              <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-md-4">
                      <h4 className="title">Branded T-Shirts</h4>
                      <h5 className="text-muted">$21.00 <del className="text-danger ms-2">$25.00</del> </h5>
                      <ul className="list-unstyled text-warning h5 mb-0">
                          <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                          <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                      </ul>
                      
                      <h5 className="mt-4 py-2">Overview :</h5>
                      <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                  
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span> Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span> Our Talented &amp; Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span> Create your own skin to match your brand</li>
                      </ul>

                      <div className="row mt-4 pt-2">
                          <div className="col-lg-6 col-12">
                              <div className="d-flex align-items-center">
                                  <h6 className="mb-0">Your Size:</h6>
                                  <ul className="list-unstyled mb-0 ms-3">
                                      <li className="list-inline-item"><Link href="#" className="btn btn-icon btn-soft-primary">S</Link></li>
                                      <li className="list-inline-item ms-1"><Link href="#" className="btn btn-icon btn-soft-primary">M</Link></li>
                                      <li className="list-inline-item ms-1"><Link href="#" className="btn btn-icon btn-soft-primary">L</Link></li>
                                      <li className="list-inline-item ms-1"><Link href="#" className="btn btn-icon btn-soft-primary">XL</Link></li>
                                  </ul>
                              </div>
                          </div>

                          <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                              <div className="d-flex shop-list align-items-center">
                                  <h6 className="mb-0 me-2">Quantity:</h6>
                                  <Quantity/>
                              </div>
                          </div>
                      </div>

                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Shop Now</Link>
                          <Link href="/shop-cart" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <ProductDetailTab/>

      <RelatedProductSlider/>


      <div className="container-fluid mt-100 mt-60 px-0">
          <div className="py-5 bg-light">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-12">
                          <div className="d-flex align-items-center justify-content-between">
                              <Link href="/shop-product-detail" className="text-dark align-items-center">
                                  <span className="pro-icons"><FiArrowLeft/></span>
                                  <span className="text-muted d-none d-md-inline-block">Web Development</span>
                                  <Image src="/images/work/6.jpg" width={65} height={65} className="avatar avatar-small rounded shadow ms-2" alt=""/>
                              </Link>

                              <Link href="#" className="btn btn-lg btn-pills btn-icon btn-soft-primary"><FiHome/></Link>
                              
                              <Link href="/shop-product-detail" className="text-dark align-items-center">
                                  <Image src="/images/work/7.jpg" width={65} height={65} className="avatar avatar-small rounded shadow me-2" alt=""/>
                                  <span className="text-muted d-none d-md-inline-block">Web Designer</span>
                                  <span className="pro-icons"><FiArrowRight/></span>
                              </Link>  
                          </div>
                      </div>
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
