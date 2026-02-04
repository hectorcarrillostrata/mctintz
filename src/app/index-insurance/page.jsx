import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import ClientOne from '../components/client/client-one'
import AboutOne from '../components/about/about-one'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { insuranceServices } from '../data/services'
import { insuranceCta, insuranceGoal, insurancePlan } from '../data/data'
import { FiChevronRight, FiUser, FiMail} from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md' 

export default function Insurance() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100" style={{backgroundImage:"url('/images/insurance/bg.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12">
                  <div className="title-heading text-center">
                      <h1 className="heading title-dark text-white mb-3">Landrick Insurance</h1>
                      <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>

                      <div className="row mt-4 pt-2">
                        {insuranceServices.map((item,index)=>{
                          return(
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary explore-feature border-0 rounded text-center">
                                    <div className="card-body">
                                        <div className="icons rounded-circle shadow-lg d-inline-block">
                                            <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                                        </div>
                                        <div className="content mt-3">
                                            <h6 className="mb-0"><Link href="#" className="title text-dark">{item.name}</Link></h6>
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
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
            {insuranceGoal.map((item, index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span className="h1 icon-color">
                            <Icon className="#"/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 pt-2">
                  <Image src="/images/illustrator/services.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Health Insurance</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Read More <FiChevronRight className="align-middle"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 pt-2 order-1 order-md-2">
                  <Image src="/images/illustrator/Marketing_strategy_SVG.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 order-2 order-md-1">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Investment Plans</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Read More <FiChevronRight className="align-middle"/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container-fluid mt-100 mt-60">
          <div className="rounded py-5" style={{backgroundImage:"url('/images/insurance/cta.jpg')", backgroundPosition:"center"}}>
              <div className="container py-md-5 py-3">
                  <div className="row">
                      <div className="col-lg-6 col-md-7 col-12 offset-lg-6 offset-md-5">
                          <div className="card border-0">
                              <div className="card-body p-md-5 p-4 rounded">
                                  <div className="section-title">
                                      <h4 className="title mb-4">Advantages</h4>
                                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                  </div>

                                  <div className="row">
                                    {insuranceCta.map((item,index)=>{
                                      let Icon = item.icon
                                      return(
                                        <div className="col-md-6 col-12 mt-4" key={index}>
                                            <div className="d-flex align-items-center">
                                                <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                                                    <Icon className=""/>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="title text-dark mb-0">{item.title}</h6>
                                                </div>
                                            </div>
                                        </div>
                                      )
                                    })}
                                  </div>

                                  <div className="mt-4">
                                      <Link href="#" className="btn btn-primary">Protect your life <FiChevronRight className="align-middle"/></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Other Insurance Plans</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {insurancePlan.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <Link href="#" className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                        <div className="icon text-center rounded-circle h4 me-3 mb-0">
                            <Icon className="h5 mb-0"/>
                        </div>
                        <div className="flex-1">
                            <h4 className="title text-dark mb-0">{item.title}</h4>
                        </div>
                    </Link>
                </div>
              )
            })}
              
              <div className="col-12 mt-4 pt-2 text-center">
                  <Link href="#" className="btn btn-primary">See More <FiChevronRight className="align-middle"/></Link>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Customers</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-12">
                  <div className="section-title">
                      <h4 className="title mb-4">We're here to help you</h4>
                      <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      <ul className="list-unstyled text-muted mt-4">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card rounded border-0 shadow-lg ms-lg-5">
                      <div className="card-body">
                          <div className="text-center">
                              <Image src="/images/client/01.jpg" width={80} height={80} className="avatar avatar-md-md rounded-circle shadow" alt=""/>
                              <div className="section-title">
                                  <h6 className="my-3">Calvin Carlo</h6>
                                  <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need.</p>
                              </div>
                          </div>

                          <div className="content mt-4 pt-2">
                              <form>
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="mb-3">
                                              <label className="form-label">Name : <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiUser className="fea icon-sm icons"/>
                                                  <input type="text" className="form-control ps-5" placeholder="Name" name="name" required=""/>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="mb-3">
                                              <label className="form-label">Email : <span className="text-danger">*</span></label>
                                              <div className="form-icon position-relative">
                                                  <FiMail className="fea icon-sm icons"/>
                                                  <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-12 mt-2">
                                          <div className="d-grid">
                                              <button className="btn btn-soft-primary">Request call <FiChevronRight className="align-middle"/></button>
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

      <div className="container mt-100 mt-60">
          <AboutOne/>
          <GetInTouch/>
      </div>
    </section>

    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>

    </>
  )
}
