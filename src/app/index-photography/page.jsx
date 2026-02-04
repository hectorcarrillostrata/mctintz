import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PhotographyNavbar from '../components/navbar/photography-navbar'
import PhotographyHeroBanner from '../components/photography/photography-hero-banner'
import PhotographyCta from '../components/photography/photography-cta'
import PhotographyPortfolio from '../components/photography/photography-portfolio'
import SmallFooterTwo from '../components/footer/small-footer-two'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiArrowUpRight, FiArrowRight} from 'react-icons/fi'

export default function IndexPhotography() {
  return (
    <>
      <PhotographyNavbar/>
      <PhotographyHeroBanner/>
      <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Photography</h4>
                            <p className="text-muted para-desc mx-auto mb-0">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="features feature-primary feature-clean position-relative">
                            <Image src="/images/photography/01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <div className="position-absolute bottom-0 text-center end-0 start-0 mb-4">
                                <Link href="/photography-about" className="fs-5 text-white title-dark title">Jack Jeffrey <FiArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-5 pt-lg-5 mt-4 pt-2">
                        <div className="features feature-primary feature-clean position-relative">
                            <Image src="/images/photography/02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <div className="position-absolute bottom-0 text-center end-0 start-0 mb-4">
                                <Link href="/photography-portfolio" className="fs-5 text-white title-dark title">Portfolio <FiArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="features feature-primary feature-clean position-relative">
                            <Image src="/images/photography/03.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <div className="position-absolute bottom-0 text-center end-0 start-0 mb-4">
                                <Link href="/page-contact-one" className="fs-5 text-white title-dark title">Contact <FiArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-5 pt-lg-5 mt-4 pt-2">
                        <div className="features feature-primary feature-clean position-relative">
                            <Image src="/images/photography/04.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <div className="position-absolute bottom-0 text-center end-0 start-0 mb-4">
                                <Link href="#" className="fs-5 text-white title-dark title">About Me <FiArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60" id="aboutme">
               <PhotographyCta/>

                <div className="container">
                    <div className="row justify-content-center mt-4 pt-2">
                        <div className="col-lg-7">
                            <div className="text-center">
                                <p className="text-muted title-dark fw-semibold">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                                <p className="text-muted">This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                <p className="text-muted">Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts</p>
                                <p className="text-muted">If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                                <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                            
                                <div className="mt-4 pt-2">
                                    <Link href="/photography-about" className="text-primary">Read More <FiArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Portfolio / Photography</h4>
                            <p className="text-muted para-desc mx-auto mb-0">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                        </div>
                    </div>
                </div>

                <PhotographyPortfolio/>
            </div>
        </section>
        <SmallFooterTwo/>
        <ScrollToTop/>
        <CookiesModal/>
    </>
  )
}
