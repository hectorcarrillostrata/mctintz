import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ShopNavbar from '../components/navbar/shop-navbar'
import ShopFooter from '../components/footer/shop-footer'
import ScrollToTop from '../components/scroll-to-top'

import { shopBlog } from '../data/shop'

import { LuCalendarDays } from 'react-icons/lu'
import { FiClock, FiArrowRight } from 'react-icons/fi'

export default function ShopBlog() {
  return (
    <>
     <ShopNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Blogs & News </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-shop">Shop</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blogs</li>
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
            {shopBlog.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
                    <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            <div className="position-absolute top-0 start-0 mt-2 ms-2">
                                <Link href="#" className="badge badge-link bg-primary">{item.tag}</Link>
                            </div>
                        </div>
                        <div className="card-body content">
                            <ul className="list-unstyled mb-2">
                                <li className="list-inline-item text-muted small d-inline-flex align-align-items-center me-3"><LuCalendarDays className="text-dark h6 me-1 mb-0"/>{item.date}</li>
                                <li className="list-inline-item text-muted small d-inline-flex align-align-items-center"><FiClock className="text-dark h6 me-1 mb-0"/>5 min read</li>
                            </ul>
                            <Link href={`/shop-blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>
                            
                            <div className="mt-2">
                                <Link href={`/shop-blog-detail/${item.id}`} className="text-primary">Read more <FiArrowRight className="fea icon-sm"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}

              <div className="col-12">
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
    <ShopFooter/>
    <ScrollToTop/>
    </>
  )
}
