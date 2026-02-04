import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import VideoCenter from '../components/video/video-center'
import Counter from '../components/counter'
import ClientOne from '../components/client/client-one'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiChevronRight} from 'react-icons/fi'
import { realEstateFeature } from '../data/real-estate'
import { teamOne, teamSocial } from '../data/team'

export default function PropertyAbout() {
  return (
    <>
     <RealEstateNavbar/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay bg-black opacity-7"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading title-heading">
                      <h2 className="text-white title-dark mb-0"> About Us </h2>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-real-estate">Real Estate</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">About Us</li>
                  </ul>
              </nav>
          </div>
      </div> 
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-color-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative">
                      <Image src="/images/real/about.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                      <VideoCenter/>
                  </div>
              </div>

              <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                      <h4 className="title mb-4">Efficiency. Transparency. <br/> Control.</h4>
                      <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                      <Link href="#" className="btn btn-primary mt-3">Buy Now <FiChevronRight /></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">How It Works</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {realEstateFeature.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean rounded p-4">
                        <div className="icons rounded text-center mx-auto">
                            <Icon className="h4 mb-0"/>
                        </div>

                        <div className="card-body p-0 mt-4">
                            <Link href="#" className="title h5 text-dark">{item.title}</Link>
                            <p className="text-muted mt-3 mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>

    <section className="section" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center', backgroundAttachment:'fixed'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row">
              <div className="col-md-4 py-3">
                  <div className="counter-box text-center">
                      <h1 className="mb-0 text-white fw-bold"><Counter end={1548}/>+</h1>
                      <h5 className="counter-head text-white">Investment</h5>
                  </div>
              </div>

              <div className="col-md-4 py-3">
                  <div className="counter-box text-center">
                      <h1 className="mb-0 text-white fw-bold"><Counter end={25}/>+</h1>
                      <h5 className="counter-head text-white">Awards</h5>
                  </div>
              </div>

              <div className="col-md-4 py-3">
                  <div className="counter-box text-center">
                      <h1 className="mb-0 text-white fw-bold"><Counter end={9}/>+</h1>
                      <h5 className="counter-head text-white">Profitability</h5>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">Meet The Agent Team</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((el,index)=>{
                                let Icon = el
                                return(
                                  <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                )
                              })}
                            </ul>
                        </div>
                        <div className="card-body py-3 px-0 content">
                            <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                            <small className="designation text-muted">{item.designation}</small>
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
                  <div className="section-title mb-4 pb-2 text-center">
                      <h4 className="title mb-4">What Our Client Say ?</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>

      <div className="container mt-100 mt-60">
          <GetInTouch/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
