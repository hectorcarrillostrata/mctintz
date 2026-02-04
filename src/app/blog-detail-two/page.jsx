import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import BlogComments from '../components/blog/blog-comments'
import { teamSocial } from '../data/team'
import {LuUser, LuCalendarDays} from 'react-icons/lu'
import Image from 'next/image'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function BlogDetailTwo() {
  return (
    <>
     <Navbar navlight={true}/> 

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/1.jpg')", backgroundPosition:'center'}}>
      <div className="bg-overlay"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h3 className="title text-white title-dark mb-0"> Smartest Applications for <br/>Your Business </h3>
                  </div>
              </div>
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Blog</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
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
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <div className="row">
                      <div className="col-md-2 d-none d-md-block">
                          <ul className="list-unstyled text-center sticky-bar social-icon social mb-0">
                              <li className="mb-2 h6">Share</li>
                              {teamSocial.map((item,index)=>{
                                let Icon = item
                                return(
                                  <li className="mt-1" key={index}><Link href="#" className="rounded"><Icon className="fea icon-sm fea-social"/></Link></li>
                                )
                              })}
                          </ul>
                      </div>
  
                      <div className="col-md-10">
                          <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                          
                          <ul className="list-unstyled d-flex justify-content-between mt-4">
                              <li className="list-inline-item user me-2"><Link href="#" className="text-muted"><LuUser className="text-dark"/> Calvin Carlo</Link></li>
                              <li className="list-inline-item date text-muted"><LuCalendarDays className="text-dark"/> 19th June 2026</li>
                          </ul>
                          
                          <Image src="/images/blog/bg1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow" alt=""/>

                          <h5 className="mt-4">Mornings contain the secret to an extraordinarily successful life</h5>

                          <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>

                          <BlogComments/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section> 
    <Footer/>
    <ScrollToTop/>
</>
  )
}
