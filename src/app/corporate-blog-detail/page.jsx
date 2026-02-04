import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CorporateNavbar from '../components/navbar/corporate-navbar'
import BlogComments from '../components/blog/blog-comments'
import ContactFooter from '../components/footer/contact-footer'
import ScrollToTop from '../components/scroll-to-top'
import BlogSidebar from '../components/blog/blog-sidebar'

import {LuUser, LuCalendarDays} from 'react-icons/lu'

export default function BlogDetail() {
  return (
    <>
      <CorporateNavbar/>

      <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/corporate/pages.jpg')", backgroundPosition:"top"}}>
        <div className="bg-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading title-heading">
                        <div className="pages-heading">
                            <h2 className="text-white title-dark"> Corporate Teams Respond After Crisis </h2>
                            <ul className="list-unstyled mt-4">
                                <li className="list-inline-item h6 user text-white-50 me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>
                                <li className="list-inline-item h6 date text-white-50"><i className="mdi mdi-calendar-check"></i> 19th June 2026</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                        <li className="breadcrumb-item"><Link href="/index-corporate">Business</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
            <div className="row">
                <div className="col-lg-8 col-md-6">
                    <div className="me-lg-5">
                        <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                            
                        <ul className="list-unstyled d-flex justify-content-between mt-4">
                            <li className="list-inline-item user me-2"><a href="#" className="text-muted"><LuUser className="text-dark"/> Calvin Carlo</a></li>
                            <li className="list-inline-item date text-muted"><LuCalendarDays className="text-dark"/> 19th June 2026</li>
                        </ul>
                        
                        <Image src="/images/blog/bg2.jpg" width={0} height={0} sizes='100vw' style={{width:'100vw', height:'auto'}} className="img-fluid rounded-md shadow" alt=""/>

                        <h5 className="mt-4">Mornings contain the secret to an extraordinarily successful life</h5>

                        <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>

                        <BlogComments/>
                    </div>
                </div>

                <BlogSidebar/>
            </div>
        </div>
      </section>
      <ContactFooter/>
      <ScrollToTop/>
    </>
  )
}
