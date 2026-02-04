import React from 'react'
import Image from 'next/image'
import BlogNavbar from '../components/navbar/blog-navbar'
import BlogHeroSlider from '../components/blog/blog-hero-slider'
import Link from 'next/link'
import BlogOne from '../components/blog/blog-one'

import { FaRegComment,  FaRegCalendar } from 'react-icons/fa'
import { LuUser } from 'react-icons/lu'
import { FiArrowRight, FiHeart,FiChevronRight } from 'react-icons/fi'

import { blogData } from '../data/blogData'
import BlogFooterSlider from '../components/blog/blog-footer-slider'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function IndexBlog() {
  return (
    <>
    <BlogNavbar/>

    <BlogHeroSlider/>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="features-absolute blog-search">
                      <div className="row justify-content-center">
                          <div className="col-md-10">
                              <div className="text-center subcribe-form">
                                  <form style={{maxWidth:'800px'}}>
                                      <div className="mb-0">
                                          <input type="text" id="help" name="name" className="border shadow rounded-pill bg-white-color" required="" placeholder="Search"/>
                                          <button type="submit" className="btn btn-pills btn-primary">Search</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container mt-4 mt-lg-0">
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h4 className="mb-4">Popular post</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                  <div className="text-center text-md-end">
                      <Link href="#" className="btn btn-soft-primary">See More <FiArrowRight className="fea icon-sm"/></Link>
                  </div>
              </div>
          </div>
          <BlogOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h4 className="mb-4">Recent Post</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                  <div className="text-center text-md-end">
                      <Link href="#" className="btn btn-soft-primary">See More <FiArrowRight className="fea icon-sm"/></Link>
                  </div>
              </div>
          </div>

        <div className="row">
            {blogData.slice(3,6).map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card blog blog-primary rounded border-0 shadow">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt="..."/>
                                <div className="overlay rounded-top"></div>
                            </div>
                            <div className="card-body content">
                                <h5><Link href={`/blog-detail/${item.id}`} className="card-title title text-dark">{item.title}</Link></h5>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className=" me-1"/>33</Link></li>
                                        <li className="list-inline-item"><Link href="#" className="text-muted comments"><FaRegComment className="me-1"/>08</Link></li>
                                    </ul>
                                    <Link href={`/blog-detail/${item.id}`} className="text-muted readmore">Read More <FiChevronRight/></Link>
                                </div>
                            </div>
                            <div className="author">
                                <small className="user d-block"><LuUser /> {item.name}</small>
                                <small className="date"><FaRegCalendar className='me-1'/>{item.date}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="rounded-md shadow-md py-5 position-relative" style={{backgroundImage:"url('/images/3.jpg')", backgroundPosition:'center'}}>
              <div className="bg-overlay rounded-md"></div>
              <div className="container py-5">
                  <div className="row justify-content-center">
                      <div className="col-12">
                          <div className="section-title text-center">
                              <h2 className="fw-bold text-white title-dark mb-4 pb-2">People are podcasting <br/> all over the world</h2>
                              <Link href="#" className="btn btn-primary">Read More <FiArrowRight className="fea icon-sm"/></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-md-8">
                  <div className="section-title text-center text-md-start">
                      <h4 className="mb-4">All News or Blog Post</h4>
                      <p className="text-muted mb-0 para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {blogData.slice(0,6).map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card blog blog-primary rounded border-0 shadow">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt="..."/>
                                <div className="overlay rounded-top"></div>
                            </div>
                            <div className="card-body content">
                                <h5><Link href={`/blog-detail/${item.id}`} className="card-title title text-dark">{item.title}</Link></h5>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className=" me-1"/>33</Link></li>
                                        <li className="list-inline-item"><Link href="#" className="text-muted comments"><FaRegComment className="me-1"/>08</Link></li>
                                    </ul>
                                    <Link href={`/blog-detail/${item.id}`} className="text-muted readmore">Read More <FiChevronRight/></Link>
                                </div>
                            </div>
                            <div className="author">
                                <small className="user d-block"><LuUser /> {item.name}</small>
                                <small className="date"><FaRegCalendar className='me-1'/>{item.date}</small>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className="col-12 mt-4 pt-2">
              <div className="text-center">
                  <Link href="#" className="btn btn-primary">See More <FiArrowRight className="fea icon-sm"/></Link>
              </div>
            </div>
        </div>
      </div>
    </section>
    <BlogFooterSlider/>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
