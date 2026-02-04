import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../components/navbar/navbar'
import HotelHeroSlider from '../components/hero-section/hotel-hero-slider'
import DateSelect from '../components/date-select';
import HotelCta from '../components/cta/hotel-cta';
import ClientSingle from '../components/client/client-single';
import Footer from '../components/footer/footer';
import ScrollToTop from '../components/scroll-to-top';
import CookiesModal from '../components/cookiesModal';

import { hotelRoomData } from '../data/data';
import { hotelServices } from '../data/services';
import { hotelBlog } from '../data/blogData';

import {FiChevronRight,  FiHeart, FiMessageCircle, FiUser, FiCalendar, FiMail} from 'react-icons/fi'
import { LuBedDouble, LuBath } from 'react-icons/lu';

export default function Hotel() {
  return (
    <>
    <Navbar bgWhite={true}/> 

    <HotelHeroSlider/>

    <section className="section-two bg-light" id="bookroom">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <form className="card p-4 shadow rounded">
                      <h4 className="mb-3">Book Now !</h4>
                      <div className="row text-start">
                          <div className="col-lg-3 col-md-6">
                              <div className="mb-3 mb-lg-0">
                                  <label className="form-label"> Check in : </label>
                                  <DateSelect/>
                              </div>
                          </div>

                          <div className="col-lg-3 col-md-6">
                              <div className="mb-3 mb-lg-0">
                                  <label className="form-label"> Check out : </label>
                                  <DateSelect/>
                              </div>
                          </div>
                          
                          <div className="col-lg-6">
                              <div className="row align-items-center">
                                  <div className="col-md-4">
                                      <div className="mb-3 mb-lg-0">
                                          <label className="form-label">Adults : </label>
                                          <input type="number" min="0" autoComplete="off" id="adult" required="" className="form-control" placeholder="Adults :"/>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-4">
                                      <div className="mb-3 mb-lg-0">
                                          <label className="form-label">Children : </label>
                                          <input type="number" min="0" autoComplete="off" id="children" className="form-control" placeholder="Children :"/>
                                      </div>
                                  </div>

                                  <div className="col-md-4 mt-lg-4 pt-2 pt-lg-1">
                                      <div className="d-grid">
                                          <input type="submit" id="search" name="search" className="searchbtn btn btn-primary" value="Search"/>
                                      </div>
                                  </div>
                              </div>
                          </div> 
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Rooms & Suits</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {hotelRoomData.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card work-container work-primary work-modern rounded border-0 overflow-hidden">
                        <div className="card-body p-0">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                            <div className="content">
                                <Link href="#" className="title text-white title-dark pb-2 border-bottom">{item.title}</Link>
                                <ul className="post-meta mb-0 mt-2 text-white title-dark list-unstyled">
                                    <li className="list-inline-item me-3"><LuBedDouble className="me-2"/>{item.bed}</li>
                                    <li className="list-inline-item"><LuBath className="me-2"></LuBath>{item.bathroom}</li>
                                </ul>
                                <p className="text-white title-dark d-block mb-0">Rent <span className="text-success">{item.rent}</span> /Night</p>
                            </div>

                            <div className="position-absolute top-0 end-0 m-3 z-index-1">
                                <Link href="" className="btn btn-primary btn-pills btn-sm btn-icon"><FiChevronRight className="fea icon-sm title-dark"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>

          <div className="row justify-content-center">
              <div className="col-12 text-center mt-4 pt-2">
                  <Link href="#" className="btn btn-primary">See More <FiChevronRight className=""/></Link>
              </div>
          </div>
      </div>
    </section>

    <HotelCta/>

    <section className="section">
      <div className="container pb-lg-4 mb-md-5 mb-4">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Best Services for you</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {hotelServices.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
                    <div className="features feature-primary text-center">
                        <div className="image position-relative d-inline-block">
                            <Icon className="h2 text-primary"/>
                        </div>

                        <div className="content mt-4">
                            <h5>{item.title}</h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section pt-5 pt-sm-0 pt-md-4 bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Latest News</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {hotelBlog.map((item,index) =>{
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
                                    <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className=" me-1"/>33</Link></li>
                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                </ul>
                                <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                            </div>
                        </div>
                        <div className="author">
                            <small className="user d-block"><FiUser className=""/> Calvin Carlo</small>
                            <small className="date"><FiCalendar className=""/> {item.date}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section" style={{backgroundImage:"url('/images/hotel/bg05.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                  <ClientSingle textWhite={true}/>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-6 p-0 ps-md-3 pe-md-3">
                  <div className="card map map-height-two rounded map-gray border-0">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} className="rounded" allowFullScreen></iframe>
                  </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card rounded shadow border-0">
                      <div className="card-body py-5">
                          <h5 className="card-title">Get In Touch !</h5>

                          <div className="custom-form mt-4">
                              <div id="message"></div>
                              <form name="contact-form">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiUser className="fea icon-sm icons"/>
                                                  <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMail className="fea icon-sm icons"/>
                                                  <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                              </div>
                                          </div> 
                                      </div>
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Comments</label>
                                              <div className="form-icon position-relative">
                                                  <FiMessageCircle className="fea icon-sm icons"/>
                                                  <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Your Message :"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-12 text-center">
                                          <div className="d-grid">
                                              <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Send Message"/>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
