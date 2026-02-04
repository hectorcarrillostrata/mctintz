import React from 'react'
import BlogNavbar from '../components/navbar/blog-navbar'
import Image from 'next/image'
import {FiFacebook, FiInstagram,FiTwitter, FiLinkedin} from 'react-icons/fi'
import Link from 'next/link'
import BlogFooterSlider from '../components/blog/blog-footer-slider'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function BlogAbout() {
  return (
    <>
     <BlogNavbar/> 
    <section className="bg-half-170 d-table w-100">
      <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-lg-10">
                  <div className="section-title text-center">
                      <Image src="/images/client/03.jpg" width={140} height={140} className="img-fluid avatar avatar-large rounded-pill shadow-md" alt=""/>

                      <h4 className="title mt-4 mb-0">Cristina Jota</h4>
                      <small className="fw-bold text-primary">PHOTOGRAPHER & BLOGGER</small>
                  </div>
              </div>

              <div className="col-lg-10 mt-4 pt-2">
                  <p className="text-muted">Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through interoperable services.Quickly aggregate and worldwide potentialities. spirits boom yardarm  supply chains with distinctive quality vectors. Globally revolutionize global sources through interoperable services.</p>
                  <p className="text-muted">Dynamically reinvent market-driven opportunities, fingerstache single-origin coffee Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products. knausgaard portland keytar pop-up. Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products.</p>
                  <p className="text-muted">Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence. Synergistically deliver performance based methods of empowerment whereas distributed expertise.</p>
              
                  <ul className="list-unstyled text-center social-icon social mb-0 mt-4 pt-2">
                      <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded-pill"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                      <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded-pill"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                      <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded-pill"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                      <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded-pill"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
    <BlogFooterSlider/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
