import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import BlogNavbar from '../components/navbar/blog-navbar'
import BlogComments from '../components/blog/blog-comments'
import BlogSidebarTwo from '../components/blog/blog-sidebar-two'
import BlogFooterSlider from '../components/blog/blog-footer-slider'
import BlogFooter from '../components/footer/blog-footer'
import ScrollToTop from '../components/scroll-to-top'

import { blogData } from '../data/blogData'

import {FiHeart, FiMessageCircle, FiChevronRight,FiArrowLeft,FiArrowRight, FiHome} from 'react-icons/fi'
import {LuUser, LuCalendarDays} from 'react-icons/lu' 

export default function BlogAudioPost() {
  return (
    <>
     <BlogNavbar/> 

    <section className="bg-half-170 d-table w-100">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-7">
                  <div className="card border-0 shadow rounded overflow-hidden">
                      <iframe className="videoembed" src="https://w.soundcloud.com/player/?visual=true&amp;url=https://soundcloud.com/teo-8/sorry-creepa-x-subsets-x-teos&amp;show_artwork=true&amp;maxwidth=1170&amp;maxheight=1000&amp;dnt=1" style={{height:'433px'}}></iframe>

                      <div className="card-body">
                          <div className="text-center">
                              <span className="badge text-bg-primary">Music</span>
                              <h4 className="mt-3">Sorry (Creepa X Subsets X TEOS)</h4>

                              <ul className="list-unstyled mt-3">
                                  <li className="list-inline-item user text-muted me-2"><i className="mdi mdi-account"></i> Cristina Jota</li>
                                  <li className="list-inline-item date text-muted"><i className="mdi mdi-calendar-check"></i> 5th May, 2026</li>
                              </ul>
                          </div>

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
                                                <Link href="/blog-standard-post" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                            </div>
                                        </div>
                                        <div className="author">
                                            <small className="user d-block"><LuUser/> Calvin Carlo</small>
                                            <small className="date"><LuCalendarDays className="me-1"/> {item.date}</small>
                                        </div>
                                    </div>
                                </div>
                              )
                            })}
                          </div>
                      </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-5">
                      <Link href="/blog-standard-post" className="bg-soft-primary px-2 rounded"><FiArrowLeft className="h6 mb-0 align-middle"/> Prev </Link>

                      <Link href="/index-blog" className="btn btn-pills btn-icon btn-soft-primary"><FiHome className="icons"/></Link>
                      
                      <Link href="blog-standard-post" className="bg-soft-primary px-2 rounded"> Next <FiArrowRight className="h6 mb-0 align-middle"/></Link>
                  </div>
              </div>

              <BlogSidebarTwo/>
          </div>
      </div>
    </section>
    <BlogFooterSlider/>
    <BlogFooter/>
    <ScrollToTop/>
    </>
  )
}
