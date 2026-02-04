import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CryptoNavbar from '../components/navbar/crypto-navbar'
import Counter from '../components/counter'
import AccordionOne from '../components/accordion/accordion-one'
import CryptoTooltip from '../components/tooltips/crypto-tooltip'
import CryptoCoverter from '../components/crypto/crypto-coverter'
import ClientSingle from '../components/client/client-single'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

import {FiArrowRight} from 'react-icons/fi'
import { coinList, cryptoAbout, cryptoFeature } from '../data/crypto'

export default function IndexCrypto() {
  
  return (
    <>
      <CryptoNavbar navlight={true}/>
      <section className="bg-half-260 bg-light bg-animation-left crypto-home d-table w-100">
        <div className="container position-relative" style={{zIndex:'1'}}>
            <div className="row mt-5 mt-sm-0 justify-content-center">
                <div className="col-lg-10">
                    <div className="title-heading text-center">
                        <Image src="/images/crypto/crypto.svg" width={0} height={0} sizes='100vw' style={{width:'auto', height:'136px'}} className="mover" alt=""/>
                        <h1 className="heading text-primary text-shadow-title mt-4 mb-3">Buy And Sale Cryptocurrency</h1>
                        <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                    </div>
                    <div className="text-center subcribe-form mt-4 pt-2">
                        <form>
                            <input type="email" id="email" name="email" className="rounded-pill bg-white-50 border" placeholder="E-mail :"/>
                            <button type="submit" className="btn btn-pills btn-primary">Submit <FiArrowRight className=""/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="table-responsive features-absolute shadow-md rounded-md">
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
                              {coinList.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                      <th className="p-3">
                                          <div className="align-items-center">
                                              <Image src={item.image} className="me-3" width={32} height={32} alt=""/>
                                              <p className="mb-0 d-inline fw-normal h6">{item.name} <span className="text-muted">{item.sName}</span> </p>
                                          </div>
                                      </th>
                                      <td className="p-3">{item.price}</td>
                                      <td className={`p-3 ${item.status === 'loss' ? 'text-danger' : 'text-success'}`}>{item.perChange}</td>
                                      <td className={`p-3 ${item.status === 'loss' ? 'text-danger' : 'text-success'}`}>{item.change}</td>
                                      <td className="text-muted p-3">{item.marketcap}</td>
                                      <td className="p-3 text-end"><Link href="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                    </tr>
                                )
                              })}
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-4">
                        <Link href="/crypto-market" className="text-muted">View more cryptocurrencies <FiArrowRight className="align-middle"/></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">How it works ?</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {cryptoAbout.map((item,index)=>{
                return(
                    <div className="col-md-3 col-12 mt-4 pt-2" key={index}>
                        <div className="text-center">
                            <div className="rounded p-4 shadow">
                                <Link href="#"><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'auto', height:'100px'}} className="mx-auto d-block" alt=""/></Link>
                            </div>

                            <div className="mt-3">
                                <h5><Link href="#" className="text-primary">{item.name}</Link></h5>
                                <p className="text-muted mb-0">{item.title}</p>
                            </div>
                        </div>
                    </div>
                )
              })}
            </div>
        </div>
      </section>

      <section className="section-two bg-primary bg-gradient">
        <div className="container">
            <div className="row" id="counter">
                <div className="col-md-4">
                    <div className="counter-box text-center">
                        <h2 className="mb-0 mt-3 title-dark display-4 text-white">$ <Counter end={9706873}/></h2>
                        <h5 className="counter-head title-dark text-white-50">Exchanged</h5>
                    </div>
                </div>

                <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="counter-box text-center">
                        <h2 className="mb-0 mt-3 title-dark display-4 text-white"><Counter end={106}/></h2>
                        <h5 className="counter-head title-dark text-white-50">Countries</h5>
                    </div>
                </div>

                <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="counter-box text-center">
                        <h2 className="mb-0 mt-3 title-dark display-4 text-white"><Counter end={56043}/></h2>
                        <h5 className="counter-head title-dark text-white-50">Customers</h5>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Create your cryptocurrency portfolio today</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <Image src="/images/crypto/portfolio.png" width={0} height={0} sizes='100vw' style={{width:'958px', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
                </div>
                {cryptoFeature.map((item,index)=>{
                  let Icon = item.icon
                  return(
                    <div className="col-md-4 col-12 mt-4" key={index}>
                        <div className="card border-0 text-center features feature-primary feature-clean p-4">
                            <div className="icons text-center rounded mx-auto">
                                <Icon className="h3 mb-0"/>
                            </div>

                            <div className="card-body p-0 mt-4">
                                <h5>{item.title}</h5>
                                <p className="text-muted mb-0">{item.desc}</p>
                                <div className="mt-2">
                                    <Link href="#" className="read-more">Read More<FiArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  )
                })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="p-4 text-center rounded bg-light shadow">
                        <h4 className="mb-0"><span className="text-warning">1 BTC</span> = $ 8654.32</h4>
                    </div>

                    <CryptoTooltip/>

                    <div className="card border-0 shadow rounded p-4 bg-light overflow-hidden mt-4">
                        <h5 className="text-center mb-3">Live Cryptocurrency Calculator</h5>
                        <CryptoCoverter/>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="ms-lg-4">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Frequently asked questions</h4>
                            <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <AccordionOne/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Buyer's Review</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-9 mt-4 pt-2 text-center">
                    <ClientSingle/>
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
