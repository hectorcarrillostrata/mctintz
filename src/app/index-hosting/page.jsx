import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { domainData, hostingServices } from '../data/hosting'
import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

import HostingNavbar from '../components/navbar/hosting-navbar'
import HostingPrice from '../components/hosting/hosting-price'
import ClientOne from '../components/client/client-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function IndexHosting() {
  return (
    <>
    <HostingNavbar/>

    <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/hosting/bg.png')", backgroundPosition:'center'}} id="home">
      <div className="bg-overlay bg-gradient-primary opacity-8"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12">
                  <div className="title-heading text-center">
                      <h1 className="heading title-dark text-white mb-3">Cloud Services & Web Hosting Solution</h1>
                      <p className="para-desc para-dark mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Get Started</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section-two bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <form className="card p-4 shadow rounded">
                      <h4 className="mb-3">Search Your Domain Now</h4>
                      <div className="row">
                          <div className="col-12">
                              <div className="input-group mb-3">
                                  <input name="name" id="name" type="text" className="form-control rounded-left" placeholder="Your domain name :"/>
                                  <div className="input-group-append" id="button-addon4">
                                      <select className="form-control rounded-0" id="domain_list">
                                          <option>.in</option>
                                          <option>.com</option>
                                          <option>.org</option>
                                          <option>.net</option>
                                          <option>.info</option>
                                          <option>.me</option>
                                      </select>
                                  </div>
                                  <input type="submit" id="search" name="search" className="searchbtn btn btn-primary" value="Search"/>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                        {domainData.map((item, index)=>{
                          return(
                            <div className="col-lg-2 col-md-4 col-6 mt-2" key={index}>
                                <Link href="#" className="text-dark">
                                    <div className="rounded shadow p-1 text-center">
                                        <h6 className="mb-0">{item.name}<br/><span className="text-primary">{item.value}</span>/year</h6>
                                    </div>
                                </Link>
                            </div>
                          )
                        })}
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container pb-lg-4 mb-md-5 mb-4">
          <div className="row align-items-center mb-4">
              <div className="col-lg-9 col-md-8 text-sm-start">
                  <div className="section-title">
                      <h4 className="title mb-4">Cloud Hosting Services</h4>
                      <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>

              <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 text-sm-end pt-2 pt-sm-0">
                  <Link href="#" className="btn btn-outline-primary">Read more <FiChevronRight className=""/></Link>
              </div>
          </div>

          <div className="row">
            {hostingServices.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3" key={index}>
                    <div className="features feature-primary">
                        <div className="image position-relative d-inline-block">
                            <Icon className="h2 text-primary"/>
                        </div>

                        <div className="content mt-4">
                            <h5>{item.name}</h5>
                            <p className="text-muted">{item.desc}</p>
                            <Link href="#" className="text-primary">Read more <FiChevronRight className="#"/></Link>
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

    <section className="section bg-light">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/hosting/1.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Get best plan for more power with cloud Hosting</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>                            
                      <Link href="#" className="btn btn-primary mt-3">Get Started <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title">
                      <h4 className="title mb-4">Don't Compromise with the best web hosting solutions</h4>
                      <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="btn btn-primary mt-3">Get Started <FiChevronRight className=""/></Link>
                  </div>
              </div>

              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                  <Image src="/images/hosting/deal-hend.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/hosting/2.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Powerful Server & Web Hosting Plateform</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                          <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="btn btn-primary mt-3">Get Started <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-color-white">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section">
      <div className="container">
          <HostingPrice/>
      </div>
    </section>
    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section pt-md-4 pt-5 pt-sm-0 bg-light">
      <div className="container pb-lg-4 mb-md-5 mb-4">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Client Reviews</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
