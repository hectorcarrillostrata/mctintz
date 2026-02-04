import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import ScrollToTop from '../components/scroll-to-top'
import Footer from '../components/footer/footer'

import { propertyData } from '../data/real-estate'

import { FiSearch, FiHome, FiHeart, FiCamera } from 'react-icons/fi'
import { LiaCompressArrowsAltSolid } from 'react-icons/lia'
import { LuBedDouble, LuBath } from 'react-icons/lu'

export default function PropertyGrid() {
  return (
    <>
    <RealEstateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-black opacity-7"></div>
      <div className="container">
          <div className="row my-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark mb-0"> Grid View Layout </h2>
                  </div>
              </div>
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
          <div className="row justify-content-center">
              <div className="col-xl-11 col-12 text-center">
                  <div className="card text-center features-absolute rounded shadow">
                      <form className="card-body text-start">
                          <div className="row">
                              <div className="col-lg-3 col-md-6 col-12">
                                  <div className="mb-3">
                                      <label className="form-label">Search :</label>
                                      <div className="form-icon position-relative">
                                          <FiSearch className="fea icon-sm icons"/>
                                          <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Search your home :"/>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-lg-3 col-md-6 col-12">
                                  <div className="mb-3">
                                      <label className="form-label">Select Categories:</label>
                                      <select className="form-control form-select" id="buy-properties">
                                          <option>Houses</option>
                                          <option>Apartment</option>
                                          <option>Offices</option>
                                          <option>Townhome</option>
                                      </select>
                                  </div>
                              </div>

                              <div className="col-lg-3 col-md-6 col-12">
                                  <div className="mb-3">
                                      <label className="form-label">Min Price :</label>
                                      <select className="form-control form-select" id="buy-min-price">
                                          <option>Min Price</option>
                                          <option>500</option>
                                          <option>1000</option>
                                          <option>2000</option>
                                          <option>3000</option>
                                          <option>4000</option>
                                          <option>5000</option>
                                          <option>6000</option>
                                      </select>
                                  </div>
                              </div>

                              <div className="col-lg-3 col-md-6 col-12">
                                  <div className="mb-3">
                                      <label className="form-label">Max Price :</label>
                                      <select className="form-control form-select" id="buy-max-price">
                                          <option>Max Price</option>
                                          <option>500</option>
                                          <option>1000</option>
                                          <option>2000</option>
                                          <option>3000</option>
                                          <option>4000</option>
                                          <option>5000</option>
                                          <option>6000</option>
                                      </select>
                                  </div>
                              </div>

                              <div className="col-lg-3 col-md-6 col-12">
                                  <Link href="#" className="btn btn-primary w-100">Search now</Link>
                              </div>
                          </div>
                      </form>
                  </div>                        
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
            {propertyData.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 shadow position-relative overflow-hidden">
                        <div className="shop-image position-relative overflow-hidden shadow">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            <ul className="list-unstyled shop-icons">
                                <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="btn btn-icon btn-pills btn-primary"><FiHome /></Link></li>
                                <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="btn btn-icon btn-pills btn-primary"><FiHeart/></Link></li>
                                <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="btn btn-icon btn-pills btn-primary"><FiCamera/></Link></li>
                            </ul>
                        </div>
                        <div className="card-body content p-4">
                            <Link href={`/property-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>

                            <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center">
                                <li className="d-flex align-items-center me-3">
                                    <LiaCompressArrowsAltSolid className="fs-5 me-1 text-primary"/>
                                    <span className="text-muted">{item.sqf}</span>
                                </li>

                                <li className="d-flex align-items-center me-3">
                                    <LuBedDouble className="fs-5 me-1 text-primary"/>
                                    <span className="text-muted">{item.beds}</span>
                                </li>

                                <li className="d-flex align-items-center">
                                    <LuBath className="fs-5 me-1 text-primary"/>
                                    <span className="text-muted">{item.baths}</span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                <li className="list-inline-item mb-0">
                                    <span className="text-muted">Price</span>
                                    <p className="fw-semibold mb-0">{item.price}</p>
                                </li>
                                <li className="list-inline-item mb-0 text-muted">
                                    <span className="text-muted">Rating</span>
                                    <ul className="fw-semibold text-warning list-unstyled mb-0">
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0 text-dark">5.0(30)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              )
            })}

              <div className="col-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0">
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                      <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
