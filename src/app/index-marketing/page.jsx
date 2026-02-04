import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import PartnerOne from '../components/partner/partner-one'
import KeyFeature from '../components/feature/key-feature'
import ClientOne from '../components/client/client-one'
import Counter from '../components/counter'
import AccordionOne from '../components/accordion/accordion-one'
import VideoOne from '../components/video/video-one'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function Marketing() {
  return (
    <>
     <Navbar/> 

    <section className="bg-marketing d-table w-100" style={{backgroundImage:"url('/images/marketing/marketing-shape.png')"}} id="home">
      <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-lg-7 col-md-7 text-center">
                  <Image src="/images/marketing/marketing.png" width={0} height={0} sizes='100vw' className="img-fluid" style={{width:'460px', height:'auto', maxHeight: '400px'}} alt=""/>

                  <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h1 className="heading mb-3">Social Media Marketing is the Best Ever</h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary mt-2 me-2">Get Started</Link>
                          <Link href="/page-contact-one" className="btn btn-outline-primary mt-2"><i className="mdi mdi-phone"></i> Contact us</Link>
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

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Sample Features</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <KeyFeature/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/illustrator/youtube-media.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">A better compose with landrick marketing</h4>
                      <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                      <ul className="list-unstyled text-muted">
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
                      <h4 className="title mb-4">Our Valuable Clients</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">See everything about your <span className="text-primary">Landrick</span></h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row" id="counter">
                <div className="col-md-3 col-6 mt-4 pt-2">
                    <div className="counter-box text-center">
                        <Image src="/images/illustrator/Asset190.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                        <h2 className="mb-0 mt-4"><Counter end={97}/>%</h2>
                        <h6 className="counter-head text-muted">Happy Client</h6>
                    </div>
                </div>

                <div className="col-md-3 col-6 mt-4 pt-2">
                    <div className="counter-box text-center">
                        <Image src="/images/illustrator/Asset189.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                        <h2 className="mb-0 mt-4"><Counter end={15}/>+</h2>
                        <h6 className="counter-head text-muted">Awards</h6>
                    </div>
                </div>

                <div className="col-md-3 col-6 mt-4 pt-2">
                    <div className="counter-box text-center">
                        <Image src="/images/illustrator/Asset192.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                        <h2 className="mb-0 mt-4"><Counter end={2}/>K</h2>
                        <h6 className="counter-head text-muted">Job Placement</h6>
                    </div>
                </div>

                <div className="col-md-3 col-6 mt-4 pt-2">
                    <div className="counter-box text-center">
                        <Image src="/images/illustrator/Asset187.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                        <h2 className="mb-0 mt-4"><Counter end={93}/>%</h2>
                        <h6 className="counter-head text-muted">Project Complete</h6>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                    <AccordionOne/>
                </div>

                <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <Image src="/images/illustrator/faq.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title mb-4">Get Started !</h4>
                        <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <div className="mt-4 pt-2">
                            <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-primary m-1">Buy Now <span className="badge rounded-pill bg-danger ms-2">v5.0.0</span></Link>
                            <VideoOne/>
                            <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterLight/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
