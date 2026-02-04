import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import {FiUser, FiFacebook, FiMapPin, FiLinkedin, FiCamera, FiMail} from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Icon() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Icons </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Icons</li>
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
              <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <h5>Components</h5>
                  <UiSidebar/>
              </div>

              <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                      <div className="col-12">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Icons </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6>React Icons</h6>
                                  <p className="text-muted">Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using info from here: <a href="https://react-icons.github.io/react-icons/" target="_blank"><code className="text-primary">https://react-icons.github.io/react-icons/</code></a></p>
                                  <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;FiUser className="fea icon-sm"/&gt;</code></h6>

                                  <FiUser className="fea icon-ex-md me-2"/>
                                  <FiFacebook className="fea icon-ex-md me-2"/>
                                  <FiMapPin className="fea icon-ex-md me-2"/>
                                  <FiLinkedin className="fea icon-ex-md me-2"/>
                                  <FiCamera className="fea icon-ex-md me-2"/>
                                  <FiMail className="fea icon-ex-md me-2"/>

                                  <h6 className="mt-4">Material Design Icons</h6>
                                  <p className="text-muted">There are 4400+ Material Design icons and you can get all icons info from here: <a href="https://materialdesignicons.com/" target="_blank"><code className="text-primary">https://materialdesignicons.com/</code></a></p>
                                  <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;i className="mdi mdi-home"&gt; &lt;/i&gt;</code></h6>

                                  <i className="mdi mdi-home h4 me-2"></i>
                                  <i className="mdi mdi-facebook h4 me-2"></i>
                                  <i className="mdi mdi-chevron-tight h4 me-2"></i>
                                  <i className="mdi mdi-camera-image h4 me-2"></i>
                                  <i className="mdi mdi-car-light-high h4 me-2"></i>
                                  <i className="mdi mdi-silverware-fork-knife h4 me-2"></i>

                                  <h6 className="mt-4">Flaticon Icons</h6>
                                  <p className="text-muted">There are Flaticon icons and you can get all icons info from here: <a href="https://www.flaticon.com/packs/basic-icon" target="_blank"><code className="text-primary">https://www.flaticon.com/packs/basic-icon</code></a></p>
                                  
                                  <Image src="/images/icon/Email.svg" width={50} height={50} className="me-3" alt=""/>
                                  <Image src="/images/icon/bitcoin.svg" width={50} height={50} className="me-3" alt=""/>
                                  <Image src="/images/icon/calendar.svg" width={50} height={50} className="me-3" alt=""/>
                                  <Image src="/images/icon/location.svg" width={50} height={50} className="me-3" alt=""/>

                              </div>
                          </div>
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
