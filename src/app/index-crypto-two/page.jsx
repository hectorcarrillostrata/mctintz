import React from 'react'
import Navbar from '../components/navbar/navbar'
import CryptoImageSlider from '../components/carousel/crypto-image-slider'
import PartnerOne from '../components/partner/partner-one'
import { cryptoData } from '../data/data'
import Image from 'next/image'
import Link from 'next/link'

import { counterData } from '../data/counter-data'
import Counter from '../components/counter'
import AccordionOne from '../components/accordion/accordion-one'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import { RiGooglePlayLine } from 'react-icons/ri'
import { FiChevronRight, FiSmartphone, FiAirplay, } from 'react-icons/fi'
import { FaApple, FaLinux } from 'react-icons/fa'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { AiOutlineAppstore } from 'react-icons/ai'
import { BsQrCodeScan } from 'react-icons/bs'
import { TiVendorAndroid } from 'react-icons/ti'

export default function CryptoTwo() {
  return (
    <>
      <div className="tagline bg-light">
        <div className="container-fluid">                
            <div className="row">
                <div className="col-12">
                    <div className="text-slider">
                        <ul className="list-inline mb-0 move-text">
                            <li className="list-inline-item px-2 mb-0"><b>EOG</b> $ 55.88 <span className="text-success">+$ 4.62 ( +9.01% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>CHKP</b> $ 120.03 <span className="text-danger">-$ 14.07 ( -10.49% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>FANG</b> $ 63.58 <span className="text-success">+$ 5.17 ( +8.84% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>M</b> $ 14.75 <span className="text-success">+$ 1.05 ( +7.66% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>PKI</b> $ 139.72 <span className="text-danger">-$ 11.41 ( -7.55% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>ABMD</b> $ 326.23 <span className="text-danger">-$ 21.61 ( -6.21% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>BITCOIN</b> $ 37,471.47 <span className="text-danger">+$ 492.60 ( +1.33% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>XRP</b> <span> $ 0.39</span><span className="text-muted"> UNCH</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>LITECOIN</b> <span> $ 148.67</span><span className="text-danger">-$ 5.58 ( -3.62% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>BITCOIN CASH</b> <span> $ 427.37</span><span className="text-danger">-$ 15.98 ( -3.60% )</span></li>
                            <li className="list-inline-item px-2 mb-0"><b>ETHEREUM</b> $ 1,647.87 <span className="text-danger">+$ 14.71 ( +0.89% )</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>

     <Navbar navlight={true} tagline={true}/> 

    <section className="bg-half-260" style={{backgroundImage:"url('/images/crypto/crypto.png')", backgroundPosition:'top'}} id="home">
      <div className="bg-video-wrapper">
          <iframe src="https://player.vimeo.com/video/543682481?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
      </div>
      <div className="bg-overlay bg-black opacity-9"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 mt-5 pt-md-5">
                  <div className="title-heading text-center">
                      <h4 className="heading text-white title-dark mb-4">Buy & sell Cryptocurrency in minutes</h4>
                      <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  
                      <div className="subcribe-form mt-4 pt-2">
                          <form>
                              <div className="mb-2">
                                  <input className="rounded-pill" placeholder="Email Address / Phone Number"/>
                                  <button type="submit" className="btn btn-pills btn-primary">Register Now</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <CryptoImageSlider/>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Latest Cryptocurrency Table</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-12 mt-4 pt-2">
                  <div className="table-responsive shadow rounded-md">
                      <table className="table mb-0 table-center">
                          <thead>
                              <tr>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth:'250px'}}>Name</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Price</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Change(%)</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Change($)</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Marketcap</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end" style={{width:'100px'}}>Trade</th>
                              </tr>
                          </thead>

                          <tbody>
                            {cryptoData.map((item,index)=>{
                              return(
                                <tr key={index}>
                                    <th className="p-3">
                                        <div className="align-items-center">
                                            <Image src={item.image} width={32} height={32} className="me-3" alt=""/>
                                            <p className="mb-0 d-inline fw-normal h6">{item.fName} <span className="text-muted">{item.sName}</span> </p>
                                        </div>
                                    </th>
                                    <td className="p-3">{item.price}</td>
                                    <td className={`p-3 ${item.status === 'loss' ? 'text-danger' : 'text-success'}`}>{item.perChange}</td>
                                    <td className={`p-3 ${item.status === 'loss' ? 'text-danger' : 'text-success'}`}>{item.amountChange}</td>
                                    <td className="text-muted p-3">{item.marketcap}</td>
                                    <td className="p-3 text-end"><Link href="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                </tr>
                              )
                            })}
                          </tbody>
                      </table>
                  </div>

                  <div className="mt-4 pt-2 text-center">
                      <Link href="#" className="text-primary h6">See More <FiChevronRight className="align-middle"/></Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Exchange <span className="text-primary">Better, Faster & Together</span></h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row" id="counter">
            {counterData.map((item,index)=>{
              let Icon = item.icon 
              return(
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
                        <div className="card-body">
                            <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                                <Icon className="text-primary"></Icon>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><Counter end={item.value}/>{item.name}</h4>
                                <h6 className="mb-0 text-muted">{item.title}</h6>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container pt-4">
          <PartnerOne/>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <Image src="/images/illustrator/undraw_crypto.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">The Easiest and Most Powerful Crypto Wallet</h4>
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
          <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                  <AccordionOne/>
              </div>

              <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <Image src="/images/illustrator/faq.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Treading. Anytime. Anywhare.</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-lg-4 mt-4 pt-2">
                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                      <div className="align-items-center">
                          <span className="h2 mb-0 icon-color float-md-end">
                              <FiSmartphone className=""/>
                          </span>
                          <h5 className="mb-0 mt-md-2">Mobile</h5>
                      </div>
                      <div className="card-body p-0 content mt-3">
                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                      </div>
                  </div>

                  <div className="mt-3">
                      <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><RiGooglePlayLine className="me-1"/> Google Play</Link>
                      <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><TiVendorAndroid className="me-1"/> Android APK</Link>
                      <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><FaApple className="me-1"/> App Store</Link>
                      <Link href="#" className="btn btn-icon btn-outline-primary m-1"><BsQrCodeScan className="uil uil-qrcode-scan"/></Link>
                  </div>
              </div>
              
              <div className="col-lg-4 mt-4 pt-2">
                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                      <div className="align-items-center">
                          <span className="h2 mb-0 icon-color float-md-end">
                              <FiAirplay className=""/>
                          </span>
                          <h5 className="mb-0 mt-md-2">Desktop</h5>
                      </div>
                      <div className="card-body p-0 content mt-3">
                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                      </div>
                  </div>

                  <div className="mt-3">
                      <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><FaApple className="me-1"/> Mac OS</Link>
                      <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><AiOutlineAppstore className="me-1"/> Windows</Link>
                      <Link href="#" className="btn btn-outline-primary m-1 d-inline-flex align-items-center"><FaLinux className="me-1"/> Linux</Link>
                  </div>
              </div>
              
              <div className="col-lg-4 mt-4 pt-2">
                  <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
                      <div className="align-items-center">
                          <span className="h2 mb-0 icon-color float-md-end">
                            <FiSmartphone className=""/>
                          </span>
                          <h5 className="mb-0 mt-md-2">API</h5>
                      </div>
                      <div className="card-body p-0 content mt-3">
                          <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                      </div>
                  </div>

                  <div className="mt-4 text-center">
                      <Link href="#" className="text-primary h6">Official Landrick API Documentation</Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <NewsletterFooter/>
    <ScrollToTop/>
    <CookiesModal/>
    </>
  )
}
