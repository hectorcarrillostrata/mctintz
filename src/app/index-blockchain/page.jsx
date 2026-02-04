import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import { blockchainFeature } from '../data/feature'

import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import Image from 'next/image'
import PartnerOne from '../components/partner/partner-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function Blockchain() {
  return (
    <>
    <Navbar navlight={true}/> 

    <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/crypto/bg.jpg')", backgroundPosition:'top'}}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h4 className="heading fw-bold text-white title-dark mb-3">The World's Most Popular Way to Buy, <br/> Hold, and Use Crypto</h4>
                      <h5 className="para-desc mx-auto text-white title-dark">Automated. Precise. Efficient.</h5>
                      <div className="mt-4 pt-2">
                          <Link href="#" className="btn btn-primary">Get Started</Link>
                      </div>
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
                      <h4 className="title mb-4">More than just numbers and charts</h4>
                      <h5 className="text-muted para-desc mx-auto mb-0">Enterprise Solutions For The Modern Blockchain Business</h5>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
            {blockchainFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                        <div className="rounded icons text-center mx-auto">
                            <Icon className="h3 mb-0"/>
                        </div>
                        <div className="card-body p-0 mt-4">                                            
                            <Link href="#" className="title h5 text-dark">Auto Track & Sync</Link>
                            <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                            <Link href="#" className="read-more">Read More <FiChevronRight className=""/></Link>
                            <Icon className="full-img"/>
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
                  <Image src="/images/crypto/lapy01.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">Crypto Management for Businesses</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title me-lg-5">
                      <h4 className="title mb-4">Smart Tools for Finance Teams</h4>
                      <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                      <ul className="list-unstyled text-muted">
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                          <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                      </ul>
                      <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className=""/></Link>
                  </div>
              </div>

              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                  <Image src="/images/crypto/iphone.png" width={0} height={0} sizes='100vw' style={{width:'400px', height:'auto'}} className="img-fluid" alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="py-4 border-bottom border-top">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section pb-0" style={{backgroundImage:"url('/images/crypto/bg.jpg')"}}>
      <div className="bg-overlay bg-primary bg-gradient" style={{opacity:'0.7'}}></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title text-white title-dark mb-4">From Zero to Crypto in Minutes.</h4>
                      <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
                  <div className="subcribe-form mt-4">
                      <form>
                          <div className="mb-2">
                              <input type="email" id="email" name="email" className="rounded-pill border" placeholder="E-mail :"/>
                              <button type="submit" className="btn btn-pills btn-primary">Subscribe</button>
                          </div>
                      </form>
                  </div>
                  <div className="mt-4 pt-2">
                      <Image src="/images/crypto/cta.png" width={0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}} className="img-fluid d-block mx-auto" alt=""/>
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
