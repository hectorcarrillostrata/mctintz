import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PersonalAnnimation from '../components/text-animation/personal-annimation'
import PersonalPortfolio from '../components/portfolio/personal-portfolio'
import ClientSingle from '../components/client/client-single'
import PartnerOne from '../components/partner/partner-one'
import { personalBlog } from '../data/blogData'
import SmallFooter from '../components/footer/small-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { personalAbout, workProcess } from '../data/data'
import {FiCamera, FiPhone, FiChevronRight, FiHeart, FiMessageCircle, FiUser, FiMail, FiBook,} from 'react-icons/fi'
import { TbCloudDownload } from 'react-icons/tb'
import { LuUser, LuCalendarDays } from 'react-icons/lu'

export default function Personal() {
  return (
    <>
     <Navbar/> 

    <section className="bg-home rtl-personal-hero bg-light d-flex align-items-center" style={{backgroundImage:"url('/images/personal/bg01.png')"}} id="home">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-8 col-md-9">
                  <div className="title-heading mt-4">
                      <PersonalAnnimation/>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary mt-2 me-2 d-inline-flex align-items-center "><FiCamera className="me-1"/> View Portfolio</Link>
                          <Link href="#" className="btn btn-outline-primary mt-2 d-inline-flex align-items-center"><TbCloudDownload className="me-1"/> Hire Me</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <div className="section-title">
                      <h4 className="title">About Me</h4>
                      <h6 className="text-primary mb-4">I'm Passionate Web Designer</h6>
                      <p className="text-muted mb-0">Start working with landrick that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary d-inline-flex align-items-center"><FiPhone className="me-1"/> Contact Me</Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="ms-md-4">
                    {personalAbout.map((item,index)=>{
                      return(
                          <div className="progress-box mt-4" key={index}>
                              <h6 className="title text-muted">{item.title}</h6>
                              <div className="progress">
                                  <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}>
                                      <div className="progress-value d-block text-muted h6">{item.progress}</div>
                                  </div>
                              </div>
                          </div>
                      )
                    })}
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60" id="portfolio">
          <div className="row">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">My Work & Portfolio</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <PersonalPortfolio/>

          <div className="row">
              <div className="col-12 mt-4 pt-2">
                  <Link href="/portfolio-modern-three" className="btn btn-outline-primary">See More <FiChevronRight className=""/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Work Process</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
          
          <div className="row">
            {workProcess.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 mt-4 pt-2" key={index}>
                    <div className="card work-process border-0 rounded shadow">
                        <div className="card-body">
                            <h4 className="title">{item.title}</h4>
                            <p className="text-muted para">{item.desc}</p>
                            <Link href="#" className="text-primary">Read more <FiChevronRight className=""/></Link>
                            <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                                <li className="step h1 mb-0 fw-bold">{item.step}</li>
                                <li className="step-icon"><Icon className="h1 mb-0"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section" style={{backgroundImage:"url('/images/personal/bg02.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                  <ClientSingle textWhite={true}/>
              </div>
          </div>
      </div>
    </section>

    <section className="py-4 border-bottom">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Latest News</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {personalBlog.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
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
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
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

              <div className="col-12 mt-4 pt-2">
                  <Link href="/blog-grid" className="btn btn-primary">See More <FiChevronRight className=""/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60" id="contact">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Contact Me</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-lg-4 col-md-6  mt-4 pt-2">
                  <div className="card rounded shadow border-0">
                      <div className="card-body">
                          <h4 className="card-title">Get In Touch !</h4>

                          <div className="custom-form mt-3">
                            <form>
                              <div className="row">
                                  <div className="col-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :"/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :"/>
                                          </div>
                                      </div> 
                                  </div>

                                  <div className="col-12">
                                      <div className="mb-3">
                                          <label className="form-label">Subject</label>
                                          <div className="form-icon position-relative">
                                              <FiBook className="fea icon-sm icons"/>
                                              <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :"/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12">
                                      <div className="mb-3">
                                          <label className="form-label">Comments <span className="text-danger">*</span></label>
                                          <div className="form-icon position-relative">
                                              <FiMessageCircle className="fea icon-sm icons clearfix"/>
                                              <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Message :"></textarea>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-12">
                                      <div className="d-grid">
                                          <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                      </div>
                                  </div>
                              </div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8 col-md-6 ps-md-3 pe-md-3 mt-4 pt-2">
                  <div className="card border-0 shadow rounded">
                      <div className="map map-height-two map-gray">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} className="rounded"></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <SmallFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
