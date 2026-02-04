import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PhotographyNavbar from '../components/navbar/photography-navbar'
import PhotoAboutBanner from '../components/photography/photo-about-banner'
import Counter from '../components/counter'
import SmallFooterTwo from '../components/footer/small-footer-two'
import ScrollToTop from '../components/scroll-to-top'

import {FiArrowRight} from 'react-icons/fi'
import { photoBrand } from '../data/photography'

export default function PhotographyAbout() {
  return (
    <>
      <PhotographyNavbar/>
      <PhotoAboutBanner title="About Me"/>

      <section className="section">
        <div className="container">
            <div className="card rounded shadow border-0 overflow-hidden">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-5">
                        <img src="/images/photography/about.jpg" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-7">
                        <div className="card-body section-title p-md-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="fw-semibold mb-0"><Counter end={9}/>+</h3>
                                    <h6 className="fw-normal text-muted mb-0">Years of Experience</h6>
                                </div>

                                <div className="col-md-6 mt-4 mt-sm-0">
                                    <h3 className="fw-semibold mb-0"><Counter end={1542}/>+</h3>
                                    <h6 className="fw-normal text-muted mb-0">Total Photo Click </h6>
                                </div>
                            </div>

                            <p className="my-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>

                            <Link href="/page-contact-one" className="text-primary">Get in touch <FiArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="text-center mb-4">
                        <h4 className="mb-0">Brands</h4>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
              {photoBrand.map((item,index)=>{
                return(
                  <div className="col-lg-3 col-md-4 col-6" key={index}>
                      <div className="brand-gray text-center">
                          <Image src={item} width={110} height={110} className="avatar avatar-medium" alt=""/>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h6 className="text-muted font-weight-normal">Do you like my work?</h6>
                        <h3 className="fw-semibold my-4">Let’s work together!</h3>
                        <div className="mt-4 pt-2">
                            <Link href="/page-contact-one" className="btn btn-primary"> Contact me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <SmallFooterTwo/>
      <ScrollToTop/>
    </>
  )
}
