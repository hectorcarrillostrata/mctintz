import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ShopNavbar from '../components/navbar/shop-navbar'
import ShopIcon from '../components/shop/shop-icon'
import ShopFooter from '../components/footer/shop-footer'
import ScrollToTop from '../components/scroll-to-top'

import { AiOutlineAppstore } from 'react-icons/ai'
import { FiList } from 'react-icons/fi'
import { productData } from '../data/shop'

export default function FullwidthList() {
  return (
    <>
    <ShopNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Fullwidth List Products </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-shop">Shop</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Products</li>
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
          <div className="row align-items-center">
              <div className="col-lg-9 col-md-7">
                  <div className="section-title">
                      <h5 className="mb-0">Showing 1–15 of 47 results</h5>
                  </div>
              </div>

              <div className="col-lg-3 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="d-flex justify-content-md-between align-items-center">
                      <div className="form custom-form">
                          <div className="mb-0">
                              <select className="form-select form-control" aria-label="Default select example" id="Sortbylist-job">
                                  <option defaultValue>Sort by latest</option>
                                  <option>Sort by popularity</option>
                                  <option>Sort by rating</option>
                                  <option>Sort by price: low to high</option>
                                  <option>Sort by price: high to low</option>
                              </select>
                          </div>
                      </div>

                      <div className="mx-2">
                          <Link href="/shop-fullwidth-grids" className="h5 text-muted"><AiOutlineAppstore className=""/></Link>
                      </div>

                      <div>
                          <Link href="/shop-fullwidth-lists" className="h5 text-muted"><FiList className=""/></Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">
            {productData.map((item,index)=>{
              return(
                <div className="col-lg-6 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 shadow position-relative">
                        <ul className="label list-unstyled mb-0">
                            {item.tag.map((item,index)=>{
                                return(
                                    <li key={index}><Link href="#" className={`${item === 'New' ? 'badge badge-link rounded-pill bg-primary' : ''} ${item === 'Featured' ? 'badge badge-link rounded-pill bg-success' : ''} ${item === 'Sale' ? 'badge badge-link rounded-pill bg-warning' : ''}`}>{item}</Link></li>
                                )
                            })}
                        </ul>
                        <div className="row align-items-center g-0">
                            <div className="col-lg-4 col-md-6">
                                <div className="shop-image position-relative overflow-hidden">
                                    <Link href={`/shop-product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                                    <Link href={`/shop-product-detail/${item.id}`} className="overlay-work">
                                        <Image src={item.image2} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6">
                                <div className="card-body content p-4">
                                    <Link href={`/shop-product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                    <div className="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 className="text-muted small fst-italic mb-0 me-3">{item.descRate}<del className="text-danger ms-2">{item.rate}</del></h6>
                                        <ul className="list-unstyled text-warning mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                    <p className="para-desc text-muted mb-1">{item.desc}</p>
                                    <ShopIcon list={true} id={item.id}/>
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
              )
            })}

              <div className="col-lg-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0">
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Previous"><i className="mdi mdi-arrow-left"></i> Prev</Link></li>
                      <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next <i className="mdi mdi-arrow-right"></i></Link></li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
    <ShopFooter/>
    <ScrollToTop/>
    </>
  )
}
