import React from 'react'
import Link from 'next/link'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import RealEstateAbout from '../components/react-estate/real-estate-about'
import RealEstateTab from '../components/react-estate/real-estate-tab'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import Footer from '../components/footer/footer'

import { FiSearch, FiHome, FiHeart, FiCamera, FiChevronRight } from 'react-icons/fi'
import { LiaCompressArrowsAltSolid } from 'react-icons/lia'
import { LuBedDouble, LuBath } from 'react-icons/lu'

import { propertyData } from '../data/real-estate'

import ScrollToTop from '../components/scroll-to-top'
import Image from 'next/image'

export default function PropertyBuy() {
  return (
    <>
    <RealEstateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-black opacity-7"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark mb-0"> Find Your Dream Home </h2>
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
          <div className="row">
              <div className="col-lg-12">
                  <div className="features-absolute blog-search">
                      <div className="row justify-content-center">
                          <div className="col-md-10">
                              <div className="text-center subcribe-form">
                                  <form style={{maxWidth:'600px'}}>
                                      <div className="mb-0">
                                          <div className="form-icon position-relative">
                                              <FiSearch className="icons fs-5"/>
                                              <input type="text" id="help" name="name" className="border shadow rounded bg-white-color ps-5" required="" placeholder="City, Address, Zip :"/>
                                          </div>
                                          <button type="submit" className="btn btn-primary">Search</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Featured Properties</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {propertyData.slice(0,6).map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 shadow position-relative overflow-hidden">
                        <div className="shop-image position-relative overflow-hidden shadow">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            <ul className="list-unstyled shop-icons">
                                <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="btn btn-icon btn-pills btn-primary"><FiHome className=""/></Link></li>
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
                  <div className="text-center">
                      <Link href="/property-grid" className="mt-3 h6 text-primary">View More Properties <FiChevronRight className="align-middle"/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mt-3 mb-4">Buyer Benefits</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          <RealEstateAbout/>
      </div>

      <RealEstateTab/>

      <div className="container mt-100 mt-60">
          <GetInTouch/>
      </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    </>
  )
}
