import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoOne from '../components/video/video-one'
import VideoCenter from '../components/video/video-center'
import PartnerOne from '../components/partner/partner-one'
import ClientFive from '../components/client/client-five'
import DroneSlider from '../components/carousel/drone-slider'
import Schedule from '../components/get-in-touch/schedule'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { droneFreature } from '../data/data'
import { droneFeatureTwo } from '../data/feature'

import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

export default function SingleProduct() {
  return (
    <>
    <Navbar/> 

    <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/single/bg01.jpg')", backgroundPosition:'center', height:'auto'}} id="home">
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-9 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                  <div className="title-heading margin-top-100">
                      <h1 className="display-4 fw-bold mb-3">DJI Professional Drone Camera</h1>
                      <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4 pt-2">
                          <VideoOne/><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                      </div>
                  </div>

                  <div className="home-dashboard">
                      <Image src="/images/single/1.png" width={0} height={0} sizes='100vw' style={{width:'644px', height:'auto'}} alt="" className="img-fluid mover"/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section bg-light">
        <div className="container">
                <div className="row">
                    {droneFreature.map((item,index)=>{
                        return(
                            <div className="col-md-3 col-6 p-4 text-center" key={index}>
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'auto', height:'45px'}} alt=""/>
                                <h5 className="mt-2">{item.name}</h5>
                                <p className="text-muted mb-0">{item.title}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
      
        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <Image src="/images/single/camera.png" width={0} height={0} sizes='100vw' style={{width:'416px', height:'auto'}} className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-3">
                        <h4 className="title mb-4">DJI 48MP Camera</h4>
                        <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                        <Link href="#" className="mt-3 text-primary">Read more <FiChevronRight className=""/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <Image src="/images/single/drone.gif" width={0} height={0} sizes='100vw' style={{width:'800px', height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Awesome Features</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {droneFeatureTwo.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <Icon className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="position-relative">
                        <Image src="/images/single/bg02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                       <VideoCenter/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Client's Feedback</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <ClientFive/>
        </div>

        <div className="container mt-5 pt-3">
            <PartnerOne/>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <DroneSlider/>
        </div>

        <div className="container mt-100 mt-60">
            <Schedule title="Sign up for our Newsletter"/>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
