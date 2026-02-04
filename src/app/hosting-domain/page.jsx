import React from 'react'
import Link from 'next/link'

import HostingNavbar from '../components/navbar/hosting-navbar'
import PartnersSlider from '../components/partner/partners-slider'
import AboutOne from '../components/about/about-one'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiArrowRight} from 'react-icons/fi'

import { domainData, hostingAbout, hostingPricing } from '../data/hosting'

export default function HostingDomain() {
  return (
    <>
    <HostingNavbar/> 
    <section className="bg-half-170 d-table bg-primary w-100" style={{backgroundImage:"url('/images/hosting/domain.png')", backgroundPosition:"center"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col">
                  <div className="pages-heading title-heading text-center">
                      <h4 className="display-6 text-white title-dark mb-4 fw-bold">Find a Great Domain</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      
                      <div className="text-center subcribe-form mt-4 pt-2">
                          <form>
                              <input type="text" id="text" name="text" className="rounded-pill bg-white-50" placeholder="Search your domain name..."/>
                              <button type="submit" className="btn btn-pills btn-primary">Search <FiArrowRight className="#"/></button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pt-4">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="row">
                    {domainData.map((item,index)=>{
                      return(
                        <div className="col-lg-2 col-md-4 col-6 mt-4" key={index}>
                          <Link href="#" className="text-dark">
                            <div className="rounded shadow p-1 text-center">
                                <h6 className="mb-0">{item.name} <br/><span className="text-primary">{item.value}</span>/year</h6>
                            </div>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-3">Why choose Landrick ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {hostingAbout.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span className="h1 icon-color">
                            <Icon className=""/>
                        </span>
                        <div className="card-body p-0 content">
                            <h5>{item.title}</h5>
                            <p className="para text-muted mb-0">{item.desc}</p>
                        </div>
                        <div className="position-absolute top-0 end-0">
                            <Icon className="display-1 opacity-05"/>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section bg-primary">
      <div className="container">
          <div className="row mb-md-4 pb-md-2 justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center pb-md-5">
                      <h4 className="title text-white title-dark mb-3">Pricing Rates or Tables</h4>
                      <p className="text-white-50 para-desc mx-auto mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section" id="price">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 mt-md-5 pt-md-3 mt-lg-0 pt-lg-0">
                    <div className="table-responsive bg-white shadow rounded features-absolute">
                        <table className="table mb-0 table-center">
                            <thead>
                                <tr className="bg-light">
                                    <th scope="col" className="border-bottom py-4 px-3" style={{minWidth:'250px'}}>Domain Name</th>
                                    <th scope="col" className="border-bottom py-4 px-3 text-center" style={{minWidth:'80px'}}>Registration</th>
                                    <th scope="col" className="border-bottom py-4 px-3 text-center" style={{minWidth:'80px'}}>2 Year</th>
                                    <th scope="col" className="border-bottom py-4 px-3 text-center" style={{minWidth:'80px'}}>Renew</th>
                                    <th scope="col" className="border-bottom py-4 px-3 text-end" style={{minWidth:'100px'}}>Click Here</th>
                                </tr>
                            </thead>
                            <tbody>
                              {hostingPricing.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <th className="p-3">{item.name}</th>
                                        <td className="p-3 text-center">{item.registration}</td>
                                        <td className="p-3 text-center">{item.year}</td>
                                        <td className="p-3 text-center">{item.renew}</td>
                                        <td className="p-3 text-end"><Link href="#" className="btn btn-sm btn-soft-primary">Buy Now</Link></td>
                                    </tr>
                                )
                              })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-100 mt-60">
            <PartnersSlider/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center mb-5 pb-2">
                <div className="col-md-6">
                    <div className="section-title">
                        <h4 className="title mb-md-0 mb-4">Frequently asked <br/> questions</h4>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="section-title">
                        <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>
            <AboutOne/>
        </div>
    </section>
    <ContactFooter full={true}/>
    <ScrollToTop/>
    </>
  )
}
