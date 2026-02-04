import React, { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../../components/navbar/navbar'
import BlogComments from '../../components/blog/blog-comments'
import BlogSidebarTwo from '../../components/blog/blog-sidebar-two'
import Footer from '../../components/footer/footer'
import ScrollToTop from '../../components/scroll-to-top'

import {FiHeart, FiMessageCircle, FiChevronRight} from 'react-icons/fi'
import {LuUser, LuCalendarDays} from 'react-icons/lu' 

import { blogData } from '../../data/blogData'

export default function BlogDetail({params}) {
    let {id} = use(params)
    let data = blogData.find((item) =>item.id === parseInt(id))
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h2>{data?.title}</h2>
                      <ul className="list-unstyled mt-4 mb-0">
                          <li className="list-inline-item h6 user text-muted me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>
                          <li className="list-inline-item h6 date text-muted"><i className="mdi mdi-calendar-check"></i>{data?.date}</li>
                      </ul>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Blog</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog Detail</li>
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
          <div className="col-lg-8 col-md-6">
              <div className="card blog blog-detail border-0 shadow rounded">
                  <Image src={data?.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-top" alt=""/>
                  <div className="card-body content">
                      <h6>
                          <i className="mdi mdi-tag text-primary me-1"></i>
                          <Link href="#" className="text-primary">Software</Link>, 
                          <Link href="#" className="text-primary">Application</Link>
                      </h6>
                      <p className="text-muted mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. </p>
                      <blockquote className="blockquote mt-3 p-3">
                          <p className="text-muted mb-0 fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                      </blockquote>
                      <p className="text-muted">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                      <div className="post-meta mt-3">
                          <ul className="list-unstyled mb-0">
                              <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                              <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="card shadow rounded border-0 mt-4">
                  <div className="card-body">
                      <BlogComments/>
                  </div>
              </div>

              <div className="card shadow rounded border-0 mt-4">
                  <div className="card-body">
                      <h5 className="card-title mb-0">Related Posts :</h5>

                      <div className="row">
                        {blogData.slice(0,2).map((item,index)=>{
                          return(
                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                <div className="card blog blog-primary rounded border-0 shadow">
                                    <div className="position-relative">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt=""/>
                                    <div className="overlay rounded-top"></div>
                                    </div>
                                    <div className="card-body content">
                                        <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
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
                                        <small className="date"><LuCalendarDays className=""/> {item.date}</small>
                                    </div>
                                </div>
                            </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
          <BlogSidebarTwo/>
        </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
