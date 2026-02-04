import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import Image from 'next/image'
import ClientOne from '../components/client/client-one'

import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { FiChevronRight } from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function ClassicApp() {
  return (
    <>
    <Navbar app={true}/> 
    <section className="bg-half-170 d-table w-100 overflow-hidden" id="home">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                  <div className="title-heading mt-4">
                      <div className="alert alert-transparent alert-pills shadow text-dark" role="alert">
                          <span className="badge rounded-pill bg-primary me-1">New</span>
                          <span className="content">New Added Modern and Classic App Showcase</span>
                      </div>
                      <h1 className="heading mb-3">We build best apps that users love</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="#">
                              <Image src="/images/app/app.png" className="m-1" width={168} height={50} alt=""/>
                          </Link>

                          <Link href="#">
                              <Image src="/images/app/playstore.png" className="m-1" width={168} height={50} alt=""/>
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="classic-app-image position-relative">
                      <div className="bg-app-shape position-relative">
                          <Image src="/images/app/classic01.png" width={0} height={0} sizes='100vw' style={{width:'350px' , height:'auto'}} className="img-fluid mover mx-auto d-block " alt=""/>
                      </div>
                      <div className="app-images d-none d-md-block">
                          <Image src="/images/app/calender.png" width={200} height={234} className="img-fluid" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section overflow-hidden">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <span className="badge text-bg-primary rounded-pill mb-2">Features</span>
                      <h4 className="title mb-4">What We Do ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 col-12 mt-4 pt-2">
                  <div className="card text-center rounded border-0">
                      <div className="card-body">
                          <div className="p-3 bg-light rounded shadow d-inline-block">
                              <Image src="/images/icon/art-and-design.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                          </div>
                          <div className="mt-4">
                              <h5><Link href="#" className="text-dark">Design & Branding</Link></h5>
                              <p className="text-muted mt-3 mb-0">If the distribution of letters and distribution 'words' is random, the reader will not be distracted.</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 col-12 mt-4 pt-2">
                  <div className="card text-center bg-primary bg-gradient rounded border-0">
                      <div className="card-body">
                          <div className="p-3 bg-light rounded shadow d-inline-block">
                              <Image src="/images/icon/smartphone.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                          </div>
                          <div className="mt-4">
                              <h5><Link href="#" className="text-white title-dark">Fully Secured</Link></h5>
                              <p className="text-white-50 mt-3 mb-0">If the distribution of letters and distribution 'words' is random, the reader will not be distracted.</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 col-12 mt-4 pt-2">
                  <div className="card text-center rounded border-0">
                      <div className="card-body">
                          <div className="p-3 bg-light rounded shadow d-inline-block">
                              <Image src="/images/icon/clock.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                          </div>
                          <div className="mt-4">
                              <h5><Link href="#" className="text-dark">High Performance</Link></h5>
                              <p className="text-muted mt-3 mb-0">If the distribution of letters and distribution 'words' is random, the reader will not be distracted.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-5">
                  <div className="app-feature-shape-left position-relative">
                      <div className="text-center text-md-start">
                          <Image src="/images/app/classic02.png" width={0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}} className="img-fluid" alt=""/>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
                  <div className="section-title">
                      <h1 className="title mb-3">We Build High Performing <br/> Application</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
                  <div className="section-title">
                      <h1 className="title mb-3">Easy And Best Solution <br/> For Your App</h1>
                      <p className="para-desc text-muted">Launch your Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet eligendi expedita ducimus fuga sed possimus veritatis eum voluptates. Ab ex odio sed atque. Quam delectus, voluptatibus rem harum nihil minus. campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Learn More <FiChevronRight/></Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-5 order-1 order-md-2">
                  <div className="app-feature-shape-right position-relative">
                      <div className="text-center text-md-end">
                          <Image src="/images/app/classic03.png" width={0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}} className="img-fluid" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-5">
                  <div className="app-feature-shape-left position-relative">
                      <div className="text-center text-md-start">
                          <Image src="/images/app/classic04.png" width={0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}} className="img-fluid" alt=""/>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
                  <div className="section-title">
                      <h1 className="title mb-3">Beautiful, Simple & <br/> Easy to Use</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline/></span>Create your own skin to match your brand</li>
                      </ul>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-primary">Read More <FiChevronRight/></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60 pb-md-5 mb-md-5">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <span className="badge rounded-pill bg-success mb-2">Reviews</span>
                      <h4 className="title mb-4">What our users says !</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-12 mt-4">
                  <ClientOne/>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-primary bg-gradient">
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container position-relative">
          <div className="row">
              <div className="col-lg-5 col-md-6">
                  <div className="app-subscribe text-center text-md-start">
                      <Image src="/images/app/classic05.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-center text-md-start">
                      <h1 className="title text-white title-dark mb-2">Subscribe to our weekly news</h1>
                      <p className="text-white-50 para-dark">Sign up and receive the latest tips via email.</p>
                  </div>
                  <div className="subcribe-form mt-4 pt-2">
                      <form className="ms-0">
                          <div className="mb-2">
                              <input type="email" id="email" name="email" className="rounded-pill border" placeholder="E-mail :"/>
                              <button type="submit" className="btn btn-pills btn-primary">Subscribe</button>
                          </div>
                      </form>
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
