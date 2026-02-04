import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HostingNavbar from '../components/navbar/hosting-navbar'
import BlogComments from '../components/blog/blog-comments'
import BlogSidebar from '../components/blog/blog-sidebar'

import {FiHeart, FiMessageCircle, FiChevronRight} from 'react-icons/fi'

import { hostingBlog } from '../data/hosting'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function HostingBlogDetail() {
  return (
    <>
    <HostingNavbar/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hosting/pages.png')"}}>
      <div className="bg-overlay bg-gradient-primary opacity-9"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h4 className="title text-white title-dark mb-4"> How to work with Web Hosting ? </h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-hosting">Hosting</Link></li>
                      <li className="breadcrumb-item"><Link href="/hosting-blog">Blogs</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Single Blog</li>
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
                  <div className="card blog blog-primary blog-detail border-0 shadow rounded">
                      <Image src="/images/hosting/blog/single.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-top" alt=""/>
                      <div className="card-body content">
                          <h6><i className="mdi mdi-tag text-primary me-1"></i><Link href="#" className="text-primary">Software</Link>, <Link href="#" className="text-primary">Application</Link></h6>
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
                            {hostingBlog.slice(0, 2).map((item,index)=>{
                              return(
                                  <div className="col-lg-6 mt-4 pt-2" key={index}>
                                      <div className="card blog blog-primary rounded border-0 shadow">
                                          <div className="position-relative">
                                              <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt="..."/>
                                          <div className="overlay rounded-top"></div>
                                          </div>
                                          <div className="card-body content">
                                              <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                                              <div className="post-meta d-flex justify-content-between mt-3">
                                                  <ul className="list-unstyled mb-0">
                                                      <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                                      <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                                  </ul>
                                                  <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              )
                            })}
                          </div>
                      </div>
                  </div>
              </div>
              <BlogSidebar/>
          </div>
      </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
