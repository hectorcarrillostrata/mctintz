import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoCenter from '../components/video/video-center'
import PricingTwo from '../components/pricing/pricing-two'
import ClientOne from '../components/client/client-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { MdOutlineCheckCircleOutline} from 'react-icons/md'
import { BsJournalBookmark } from 'react-icons/bs'
import { VscCloudDownload } from 'react-icons/vsc'
import { LuFileDown } from 'react-icons/lu'
import { featureOne } from '../data/feature'

export default function Software() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/software/bg.png')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row align-items-center position-relative mt-5" style={{zIndex:'1'}}>
              <div className="col-lg-6 col-md-12">
                  <div className="title-heading mt-4 text-center text-lg-start">
                      <h1 className="heading mb-3 title-dark text-white">Best Software For Your Work Monitor</h1>
                      <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="#" className="btn btn-light d-inline-flex align-items-center"><LuFileDown className="me-1"/> Download Now</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 col-md-12 mt-4 pt-2">
                  <div className="position-relative">
                      <div className="software_hero">
                          <Image src="/images/software/software.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid d-block" alt=""/>
                      </div>
                      <VideoCenter/>
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

    <section className="section pt-md-4 pt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Solutions</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {featureOne.map((item, index) =>{
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

            <div className="row justify-content-center mt-5 pt-4">
                <div className="col-lg-10 col-md-12">
                    <Image src="/images/software/mobile-hori.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid d-block mx-auto" alt=""/>
                </div>
                <div className="col-12 text-center pt-2">
                    <div className="alert alert-light alert-pills shadow text-dark" role="alert">
                        <span className="badge rounded-pill bg-primary me-1">Download</span>
                        <span className="content d-inline-flex align-items-center"> Trusted by the world's best <VscCloudDownload className="ms-1"/></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="card rounded bg-light shadow border-0">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-sm-7">
                            <div className="text-sm-start">
                                <h5 className="mb-0">Start building beautiful block-based websites.</h5>
                            </div>
                        </div>

                        <div className="col-sm-5 mt-4 mt-sm-0">
                            <div className="text-sm-end">
                                <Link href="#" className="btn btn-outline-primary d-inline-flex align-items-center"><BsJournalBookmark className="me-1"></BsJournalBookmark> Start Now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <Image src="/images/software/mobile01.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-5">
                        <h4 className="title mb-4">Carry out Marketing Initiatives : Landrick</h4>
                        <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                        <ul className="list-unstyled mb-0 text-muted">
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Chose your perfect Plan</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <PricingTwo/>
        </div>

        <div className="container mt-100 mt-60">
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

    <section className="section bg-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title mb-4">See everything about your employee at one place.</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    
                        <div className="mt-4 pt-2">
                            <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary">Get Started <span className="badge rounded-pill bg-danger ms-2">v5.0.0</span></Link>
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
