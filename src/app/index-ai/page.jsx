import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import AiNavbar from '../components/navbar/ai-navbar'
import AiAnnimation from '../components/text-animation/ai-annimation'
import PartnerOne from '../components/partner/partner-one'
import AiPricing from '../components/pricing/ai-pricing'
import ClientOne from '../components/client/client-one'
import GetApp from '../components/get-in-touch/get-app'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'
import VideoModal from '../components/video-modal'

import { aiAbout, aiFeature } from '../data/ai'
import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function IndexAi() {
  return (
    <>
      <AiNavbar/>

      <section className="bg-half-170 d-table w-100 overflow-hidden">
        <div className="container">
            <div className="row align-items-center pt-5">
                <div className="col-lg-7 col-md-6">
                    <div className="title-heading">
                       <AiAnnimation/>
                        <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                        <div className="mt-4 pt-2">
                            <Link href="" target="_blank" className="btn btn-primary">Try For Free</Link>
                            <p className="text-muted small mb-0 mt-1">No credit card required. Free 14-days trial</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="ai-hero position-relative">
                        <div className="image position-relative">
                            <Image src="/images/laptop.png" width={0} height={0} sizes='100vw' style={{width:'1175px', height:'auto'}} className="mx-auto d-block" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-4 border-bottom border-top">
        <div className="container">
            <PartnerOne/>
        </div>
      </section>

      <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">So, how does it works?</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>
            
            <div className="row">
              {aiAbout.map((item,index)=>{
                return(
                  <div className="col-md-4 mt-4 pt-2" key={index}>
                      <div className="card border-0 features feature-primary feature-clean p-4">
                          <div className="icons rounded-pill">
                              <i className={`h3 mb-0 ${item.icon}`}></i>
                          </div>
                          <div className="content mt-4">
                              <h5 className="fw-bold">{item.title}</h5>
                              <p className="text-muted mb-0">{item.desc}</p>
                          </div>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="position-relative p-4 rounded shadow">
                        <video className="w-100 rounded" controls autoPlay loop>
                            <source src="/images/video.mp4" type="video/mp4"/>
                        </video>
                        <VideoModal/>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-5">
                        <h4 className="title mb-4">Turn text into high-quality <br/> voiceovers with one click</h4>
                        <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>

                        <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className="align-middle"/></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">The future of AI.</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {aiFeature.map((item,index)=>{
                let Icon = item.icon
                return(
                  <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                      <div className="d-flex features feature-primary feature-clean align-items-center">
                          <div className="icons text-center mx-auto rounded flex-shrink-0">
                              <Icon className="h4 mb-0"/>
                          </div>
                          <div className="content ms-4 me-md-4">
                              <h5 className="mb-1"><Link href="#" className="text-dark">{item.title}</Link></h5>
                              <p className="text-muted mb-0">{item.desc}</p>
                          </div>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="bg-soft-primary ps-4 pt-4 position-relative overflow-hidden rounded shadow">
                        <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-5">
                        <h4 className="title mb-4">Write Blog Posts, <br/> Stories, & Even Books</h4>
                        <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title me-lg-5">
                        <h4 className="title mb-4">Create Content In Single <br/> Click With AI Power</h4>
                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 order-1 order-md-2">
                    <div className="bg-soft-primary pe-4 pt-4 position-relative overflow-hidden rounded shadow">
                        <Image src="/images/saas/classic03.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <AiPricing/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-4">What Our Users Say</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <ClientOne/>
        </div>
        
        <div className="container mt-100 mt-60">
            <GetApp/>
        </div>
      </section>
      <AiFooter/>
      <ScrollToTop/>
    </>
  )
}
