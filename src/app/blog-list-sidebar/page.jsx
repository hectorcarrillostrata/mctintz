import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import BlogSidebarTwo from '../components/blog/blog-sidebar-two'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiHeart, FiMessageCircle,FiChevronRight} from 'react-icons/fi'
import {LuUser,LuCalendarDays } from 'react-icons/lu'

export default function BlogListSidebar() {
  return (
    <>
     <Navbar/> 
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h4 className="title mb-0"> Blog Listing & Sidebar </h4>
                    </div>
                </div>
            </div>
            
            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="index.html">Landrick</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Blog</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog List with Sidebar</li>
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
              <div className="col-lg-8 col-12">
                  <div className="row">
                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6">
                                      <Image src="/images/work/14.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">Design your apps in your own way</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
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
                          </div>
                      </div>

                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6 order-2 order-md-1">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">How apps is changing the IT world</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                          <div className="post-meta d-flex justify-content-between mt-3">
                                              <ul className="list-unstyled mb-0">
                                                  <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                                  <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                              </ul>
                                              <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 order-1 order-md-2">
                                      <Image src="/images/work/15.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>
                              </div> 
                          </div>
                      </div>

                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6">
                                      <Image src="/images/work/16.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">Smartest Applications for Business</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
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
                          </div>
                      </div>

                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6 order-2 order-md-1">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">How apps is changing the IT world</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                          <div className="post-meta d-flex justify-content-between mt-3">
                                              <ul className="list-unstyled mb-0">
                                                  <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                                  <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                              </ul>
                                              <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6  order-1 order-md-2">
                                      <Image src="/images/work/17.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>
                              </div> 
                          </div>
                      </div>

                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6">
                                      <Image src="/images/work/18.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">Design your apps in your own way</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
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
                          </div>
                      </div>

                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6 order-2 order-md-1">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">Smartest Applications for Business</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                          <div className="post-meta d-flex justify-content-between mt-3">
                                              <ul className="list-unstyled mb-0">
                                                  <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                                  <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                              </ul>
                                              <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 order-1 order-md-2">
                                      <Image src="/images/work/19.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>
                              </div> 
                          </div>
                      </div>

                      <div className="col-12 mb-4 pb-2">
                          <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                              <div className="row align-items-center g-0">
                                  <div className="col-md-6">
                                      <Image src="/images/work/13.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
                                      <div className="author">
                                          <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                          <small className="date"><LuCalendarDays className="me-1"/> 25th June 2021</small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="card-body content">
                                          <h5><Link href="#" className="card-title title text-dark">Smartest Applications for Business</Link></h5>
                                          <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
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
                          </div>
                      </div>
  
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

              <BlogSidebarTwo/>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
