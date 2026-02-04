import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoTwo from '../components/video/video-two'
import Counter from '../components/counter'
import CharitySlider from '../components/carousel/charity-slider'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { causesList } from '../data/data'
import { charityServices } from '../data/services'
import { charityCounter } from '../data/counter-data'
import { teamOne, teamSocial } from '../data/team'
import { charityBlog } from '../data/blogData'
import {FiArrowRight, FiHeart, FiMessageCircle, FiChevronRight, } from 'react-icons/fi'
import { LuUser, LuCalendarDays } from 'react-icons/lu'

export default function Charity() {
  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/charity/bg.jpg')", backgroundPosition:"center"}}>
      <div className="" style={{backgroundImage:"url('/images/overlay.png')"}}></div>
      <div className="bg-overlay bg-linear-gradient-3" style={{opacity:'0.9'}}></div>
      <div className="container">
          <div className="row mt-5 mt-md-4">
              <div className="col-12">
                  <div className="title-heading">
                      <h5 className="fw-bold text-white title-dark"><i className="mdi mdi-heart text-danger align-middle"></i> Landrick Charity</h5>
                      <h4 className="display-3 my-4 fw-bold text-white title-dark">Do Something Great <br/> to Help Others</h4>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="" className="btn btn-lg btn-primary rounded-pill mt-1" style={{margin:"0 2px"}}>Donate Now</Link>
                          <Link href="" className="btn btn-lg btn-outline-primary rounded-pill mt-1" style={{margin:"0 2px"}}>View Causes</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="position-absolute bottom-0 end-0 p-3">
          <div className="d-flex align-items-center rounded-md bg-primary shadow-md p-3">
              <VideoTwo/>
              <h5 className="text-white ms-3 mb-0">Our Aim is Remove <br/> the Poverty</h5>
          </div>
      </div>
    </section>  

    <section className="section bg-primary py-5">
      <div className="container">
          <div className="row g-4">
            {charityCounter.map((item,index)=>{
              return(
                <div className="col-md-3 col-6" key={index}>
                    <div className="counter-box text-center">
                        <h2 className="fw-bold mb-2 text-white">{item.symbol}<Counter end={item.value}/>M</h2>
                        <p className="counter-head small fw-semibold text-white">{item.title}</p>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-6">
                  <div className="me-lg-5">
                      <Image src="/images/charity/about.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title">
                      <h6 className="fw-normal text-primary">ABOUT US</h6>
                      <h4 className="title mb-4">Our Highest Ambition <br/> is to Help People</h4>

                      <p className="text-muted mb-0">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Fronter network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                  
                      <div className="mt-4">
                          <Link href="" className="btn btn-pills btn-primary">Donate Now</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title fw-semibold mb-4">Popular Causes</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {causesList.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary rounded-md shadow overflow-hidden">
                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="img-fluid" alt=""/>

                        <div className="card-body content">
                            <h5><Link href="" className="card-title title text-dark">{item.title}</Link></h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                            <div className="progress-box mt-5">
                                <div className="progress rounded-md" style={{height:'10px'}}>
                                    <div className="progress-bar position-relative bg-primary rounded-md" style={{width:item.per}}>
                                        <div className="progress-value d-block text-dark h6 mb-0">{item.fund}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <h6 className="text-muted mb-0">{item.value}</h6>
                                <Link href="" className="btn btn-link primary fw-semibold text-primary">Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title fw-semibold mb-4">What We Do?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
            {charityServices.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-1" key={index}>
                    <div className="card text-center features feature-primary feature-clean explore-feature p-4 text-center rounded-md shadow">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h3 mb-0"/>
                        </div>

                        <div className="content mt-4">
                            <h5 className="mb-3">{item.title}</h5>
                            <p className="text-muted">{item.desc}</p>
                            <Link href="" className="btn btn-link primary text-primary fw-semibold">Read More <FiArrowRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="bg-cta" id="volunteer" style={{backgroundImage:"url('/images/charity/cta.jpg')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row justify-content-end">
              <div className="col-lg-5 col-md-6 col-12">
                  <div className="card p-4 border-0 rounded">
                      <div className="section-title">
                          <h4 className="title mb-4">Make a Donation</h4>
                          <p className="mb-0 text-muted">Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                      </div>

                      <form className="mt-4">
                          <div className="row">
                              <div className="col-md-12">
                                  <div className="mb-3">
                                      <label className="form-label small fw-bold" htmlFor="name">Your Name : </label>
                                      <input name="name" id="name" type="text" className="form-control" placeholder="Your Name :"/>
                                  </div>
                              </div>                              

                              <div className="col-md-6">
                                  <div className="mb-3">
                                      <label className="form-label small fw-bold" htmlFor="email"> Your Mail : </label>
                                      <input name="email" id="email" type="email" className="form-control" placeholder="Your Mail :"/>
                                  </div> 
                              </div> 

                              <div className="col-md-6">
                                  <div className="mb-3">
                                      <label className="form-label small fw-bold" htmlFor="number2">Phone No. : </label>
                                      <input name="number" type="number" className="form-control" id="number2" placeholder="Phone :"/>
                                  </div> 
                              </div>

                              <div className="col-md-12">
                                  <div className="mb-3">
                                      <label className="form-label small fw-bold">I Want to Donate for</label>
                                      <select className="form-select form-control" name="item_name">
                                          <option value="Donate For Food">Donate For Food</option>
                                          <option value="Food For Orphan">Food For Orphan</option>
                                          <option value="Home For Homeless">Home For Homeless</option>
                                          <option value="Holyday Gifts In Kind">Holyday Gifts In Kind</option>
                                          <option value="For clean Water in Africa">For clean Water in Africa</option>
                                          <option value="Health and Rights">Health and Rights</option>
                                      </select>
                                  </div>
                              </div>

                              <div className="col-md-12">
                                  <label className="form-label small fw-bold">How much do you want to donate ?</label>
                                  <div className="mb-3">
                                      <div className="input-group mb-3">
                                          <span className="input-group-text" id="basic-addon1">$</span>
                                          <input type="number" className="form-control" min="1" max="1000" placeholder="Enter Amount" id="amount" aria-describedby="inputGroupPrepend" required/>
                                      </div>
                                  </div>
                              </div>                                                                         

                              <div className="col-md-12">
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">I agree to the <a href="#" className="text-primary">Terms and Conditions</a>.</label>
                                  </div>
                              </div>                                   

                              <div className="col-lg-12 mt-3">
                                  <button type="submit" id="donatefund" name="send" className="btn btn-primary">Donate Now</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title fw-semibold mb-4">Charity Gallery</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>

      <CharitySlider/>

      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Volunteers</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                  <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                      <div className="card team team-primary text-center bg-transparent border-0">
                          <div className="card-body p-0">
                              <div className="position-relative">
                                  <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle" alt=""/>
                                  <ul className="list-unstyled mb-0 team-icon">
                                    {teamSocial.map((item,index)=>{
                                      let Icon = item
                                      return(
                                        <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                      )
                                    })}
                                  </ul>
                              </div>
                              <div className="content pt-3 pb-3">
                                  <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                  <small className="designation text-muted">Volunteer</small>
                              </div>                                
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center mb-4 pb-2">
              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <h6 className="text-primary">Blog</h6>
                      <h4 className="title mb-4 mb-lg-0">Reads Our Latest <br/> News & Blog</h4>
                  </div>
              </div>

              <div className="col-lg-6">
                  <div className="section-title text-center text-lg-start">
                      <p className="text-muted mb-0 mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {charityBlog.map((item,index)=>{
              return(
                  <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                      <div className="card blog blog-primary rounded border-0 shadow">
                          <div className="position-relative">
                              <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt=""/>
                              <div className="overlay rounded-top"></div>
                          </div>
                          <div className="card-body content">
                              <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                              <p className="text-muted mb-0">{item.desc}</p>
                              <div className="post-meta d-flex justify-content-between mt-2">
                                  <ul className="list-unstyled mb-0">
                                      <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                  </ul>
                                  <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                              </div>
                          </div>
                          <div className="author">
                              <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                              <small className="date"><LuCalendarDays className="#"/> {item.date}</small>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
      </div>
    </section>
    
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
