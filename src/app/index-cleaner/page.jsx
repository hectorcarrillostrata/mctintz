import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import ClenerAbout from '../components/about/clener-about'
import ClenerFeature from '../components/feature/clener-feature'
import ClenerCta from '../components/cta/clener-cta'
import ClenerServices from '../components/services/clener-services'
import ClientOne from '../components/client/client-one'
import { teamOne, teamSocial } from '../data/team'
import Image from 'next/image'
import ClenerBlog from '../components/blog/clener-blog'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function IndexClener() {
  return (
    <>
        <Navbar navlight={true}/>   

        <section className="bg-home d-flex align-items-center justify-content-center">
            <div className="bg-overlay bg-primary" style={{opacity: '0.85'}}></div>
            <div className="bg-overlay" style={{backgroundImage:`url(${'/images/cleaner/bg.png'})`, backgroundPosition:'center'}}></div>
            <div className="bg-overlay" style={{backgroundImage:`url(${'/images/cleaner/bg2.png'})`, backgroundPosition:'center'}}></div>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-2 mb-4 fw-bold text-white title-dark">Cleaning Service for <br/> Your Residence</h4>
                            <p className="para-desc text-white-50 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-primary">Get an Quate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section overflow-hidden">
            <div className="container">
                <ClenerAbout/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Cleaning Services</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <ClenerFeature/>
            </div>
        </section>

        <ClenerCta/>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Cleaning Services</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

               <ClenerServices/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Expert Team</h2>
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
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Trusted by Our Customers</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
            
                <ClientOne/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Blog Or News</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <ClenerBlog/>
            </div>
        </section>

        <Footer/>
        <ScrollToTop/>
    </>
  )
}
