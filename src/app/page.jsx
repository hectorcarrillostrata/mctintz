import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/navbar/navbar";
import PartnerOne from "./components/partner/partner-one";
import PartnersSlider from "./components/partner/partners-slider";
import PricingOne from "./components/pricing/pricing-one";
import AboutOne from "./components/about/about-one";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll-to-top";
import CookiesModal from "./components/cookiesModal";

import { FiMail, FiChevronRight,FiUser, FiKey, FiPhone } from "react-icons/fi";
import {LuBookMinus} from "react-icons/lu"
import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function Home() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100">
      <div className="container">
          <div className="row mt-5 align-items-center">
              <div className="col-lg-7 col-md-7">
                  <div className="title-heading me-lg-4">
                      <h1 className="heading mb-3">Our Creativity Is Your <span className="text-primary">Success</span> </h1>
                      <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                      <div className="mt-4">
                          <Link href="/page-contact-one" className="btn btn-primary mt-2 me-2"><FiMail/> Get Started</Link>
                          <Link href="/documentation" className="btn btn-outline-primary mt-2"><LuBookMinus/> Documentation</Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <Image src="/images/illustrator/Startup_SVG.svg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="py-4 border-bottom border-top">
      <div className="container">
          <PartnerOne/>
      </div>
    </section>

    <section className="section bg-light border-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">How It Work ?</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 mt-4 pt-2">
                    <Image src="/images/illustrator/SEO_SVG.svg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                </div>

                <div className="col-lg-7 col-md-6 mt-4 pt-2">
                    <div className="section-title ms-lg-5">
                        <h4 className="title mb-4">Change the way you build websites</h4>
                        <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                        <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className="align-middle"/></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title">
                        <h4 className="title mb-4">Speed up your development <br/> with <span className="text-primary">Landrick.</span></h4>
                        <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className="align-middle"/></span>Create your own skin to match your brand</li>
                        </ul>
                        <Link href="#" className="mt-3 h6 text-primary">Find Out More <FiChevronRight className="align-middle"/></Link>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 order-1 order-md-2">
                    <div className="card rounded border-0 shadow ms-lg-5">
                        <div className="card-body">

                            <Image src="/images/illustrator/Mobile_notification_SVG.svg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>

                            <div className="content mt-4 pt-2">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Name : <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiUser className="fea icon-sm icons"></FiUser>
                                                    <input type="text" className="form-control ps-5" placeholder="Name" name="name" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Email : <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiMail className="fea icon-sm icons"></FiMail>
                                                    <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password : <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiKey className="fea icon-sm icons"></FiKey>
                                                    <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-2 mb-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Download</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section pb-0">
        <PartnersSlider/>
    </section>

    <section className="section">
        <PricingOne/>
    </section>

  <div className="position-relative">
    <div className="shape overflow-hidden text-light">
        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
        </svg>
    </div>
  </div>

  <section className="section bg-light">
    <div className="container">
        <AboutOne/>

        <div className="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-4 justify-content-center">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <Link href="/page-contact-two" className="btn btn-primary mt-4"><FiPhone/> Contact us</Link>
                </div>
            </div>
        </div>
    </div>
  </section>

<div className="position-relative">
    <div className="shape overflow-hidden text-footer">
        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
        </svg>
    </div>
</div>
<Footer/>
<ScrollToTop/>
<CookiesModal/>

</>
  );
}
