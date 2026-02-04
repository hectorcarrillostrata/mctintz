import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeroSlider from '../components/shop/hero-slider'
import ShopNavbar from '../components/navbar/shop-navbar'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'
import ShopFooter from '../components/footer/shop-footer'

import { collection, productData, topCategories } from '../data/shop'

import ShopIcon from '../components/shop/shop-icon'

export default function Shop() {
  return (
    <>
    <ShopNavbar/> 
    <HeroSlider/>

    <div className="container-fluid mt-4">
      <div className="row">
        {collection.map((item,index)=>{
          return(
            <div className="col-md-4 mt-4 pt-2" key={index}>
                <div className="card shop-features border-0 rounded overflow-hidden">
                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    <div className="category-title ms-md-4 ms-2">
                        <h4>Summer <br/> Collection</h4>
                        <Link href="#" className="btn btn-sm btn-soft-primary mt-2">Shop Now</Link>
                    </div>
                </div>
            </div>
          )
        })}
      </div>
    </div>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <h5 className="mb-0">Most Viewed Products</h5>
              </div>
          </div>

          <div className="row">
            {productData.slice(0,8).map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 position-relative">
                        <ul className="label list-unstyled mb-0">
                          {item.tag.map((el,index)=>{
                            return(
                              <li key={index}><Link href="#" className={`${el === 'New' ? 'badge badge-link rounded-pill bg-primary' : ''} ${el === 'Featured' ? 'badge badge-link rounded-pill bg-success' : ''} ${el === 'Sale' ? 'badge badge-link rounded-pill bg-warning' : ''}`}>{el}</Link></li>
                            )
                          })}
                        </ul>
                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                            <Link href={`/shop-product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                            {item.outOfstock === true &&
                              <div className="overlay-work">
                                <div className="py-2 bg-soft-dark rounded-bottom out-stock">
                                    <h6 className="mb-0 text-center">Out of stock</h6>
                                </div>
                              </div>
                            }
                            {item.outOfstock === false && 
                              <Link href={`/shop-product-detail/${item.id}`} className="overlay-work">
                                  <Image src={item.image2} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                              </Link>
                            }
                            <ShopIcon id={item.id}/>
         
                        </div>
                        <div className="card-body content pt-4 p-2">
                            <a href="shop-product-detail.html" className="text-dark product-name h6">{item.name}</a>
                            <div className="d-flex justify-content-between mt-1">
                                <h6 className="text-dark small fst-italic mb-0 mt-1">{item.descRate}<del className="text-danger ms-2">{item.rate}</del> </h6>
                                <ul className="list-unstyled text-warning mb-0">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12">
                  <h5 className="mb-0">Top Categories</h5>
              </div>
          </div>
          <div className="row">
            {topCategories.map((item,index)=>{
              return(
                <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary explore-feature border-0 rounded text-center">
                        <div className="card-body">
                            <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded-circle shadow-md" alt=""/>
                            <div className="content mt-3">
                                <h6 className="mb-0"><Link href="#" className="title text-dark">{item.name}</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12">
                  <h5 className="mb-0">Popular Products</h5>
              </div>
          </div>

          <div className="row">
            {productData.slice(8,12).map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 position-relative">
                        <ul className="label list-unstyled mb-0">
                            <li><Link href="#" className="badge badge-link rounded-pill bg-info">Popular</Link></li>
                        </ul>
                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                            <Link href={`/shop-product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                            <Link href={`/shop-product-detail/${item.id}`} className="overlay-work">
                                <Image src={item.image2} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </Link> 
                           <ShopIcon id={item.id}/>
                        </div>
                        <div className="card-body content pt-4 p-2">
                            <Link href={`/shop-product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                            <div className="d-flex justify-content-between mt-1">
                                <h6 className="text-dark small fst-italic mb-0 mt-1">{item.descRate}<del className="text-danger ms-2">{item.rate}</del> </h6>
                                <ul className="list-unstyled text-warning mb-0">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="rounded py-5" style={{backgroundImage:" url('/images/shop/cta.jpg')" , backgroundAttachment:"fixed"}}>
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="section-title">
                              <h2 className="fw-bold text-black mb-4">End of Season Clearance <br/> Sale upto 30%</h2>
                              <p className="para-desc text-black mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                              <div className="mt-4">
                                  <Link href="#" className="btn btn-primary">Shop Now</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12">
                  <h5 className="mb-0">Recent Products</h5>
              </div>
          </div>

          <div className="row">
            {productData.slice(12,16).map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 position-relative">
                        <ul className="label list-unstyled mb-0">
                            <li><Link href="#" className="badge badge-link rounded-pill bg-primary">New</Link></li>
                        </ul>
                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                            <Link href={`/shop-product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                            <Link href={`/shop-product-detail/${item.id}`} className="overlay-work">
                                <Image src={item.image2} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="img-fluid" alt=""/>
                            </Link>
                            <ShopIcon id={item.id}/>
                        </div>
                        <div className="card-body content pt-4 p-2">
                            <Link href={`/shop-product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                            <div className="d-flex justify-content-between mt-1">
                                <h6 className="text-dark small fst-italic mb-0 mt-1">{item.descRate} <del className="text-danger ms-2">{item.rate}</del> </h6>
                                <ul className="list-unstyled text-warning mb-0">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div> 
    </section>
    <ShopFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
