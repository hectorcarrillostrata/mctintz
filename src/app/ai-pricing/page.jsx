import React from 'react'
import Link from 'next/link'

import AiNavbar from '../components/navbar/ai-navbar'
import VideoModal from '../components/video-modal'
import AiPricing from '../components/pricing/ai-pricing'
import ClientOne from '../components/client/client-one'
import GetApp from '../components/get-in-touch/get-app'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { FiChevronRight } from 'react-icons/fi'

export default function AiPricings() {
  return (
    <>
    <AiNavbar navlight={true}/> 

    <section className="bg-half-170 jarallax" style={{backgroundImage:"url('/images/ai/pages.jpg')", backgroundPosition:"center"}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="section-title">
                      <h4 className="title text-white title-dark mb-0">Pricing Plans</h4>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
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
