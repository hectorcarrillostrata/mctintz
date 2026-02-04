import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { blogData } from '../data/blogData'

import {FiHeart, FiMessageCircle, FiChevronRight,} from 'react-icons/fi'
import { LuUser, LuCalendarDays } from 'react-icons/lu'

export default function BlogGrid() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Blog </h4>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Blog</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog Grid</li>
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
              {blogData.map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
                        <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top" alt=""/>
                                <div className="overlay rounded-top"></div>
                            </div>
                            <div className="card-body content">
                                <h5><Link href={`/blog-detail/${item.id}`} className="card-title title text-dark">{item.title}</Link></h5>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                        <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                    </ul>
                                    <Link href={`/blog-detail/${item.id}`} className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                </div>
                            </div>
                            <div className="author">
                                <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                                <small className="date"><LuCalendarDays className="me-1"/>{item.date}</small>
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
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
