import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { teamOne, teamSocial } from '../data/team'

import PortfolioNavbar from '../components/navbar/portfolio-navbar'
import MasonaryPortfolioTwo from '../components/portfolio/masonary-portfolio-two'
import KeyFeature from '../components/feature/key-feature'
import PortfolioFooterTop from '../components/portfolio/portfolio-footer-top'
import AiFooter from '../components/footer/ai-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function PortfolioAbout() {
  return (
    <>
     <PortfolioNavbar/> 

    <section className="bg-half">
      <div className="container">
          <div className="row">
              <div className="col-lg-10">
                  <div className="pages-heading">
                      <h4 className="title mb-0">We Are Landrick. <br/>Switzerland based art & design studio</h4>
                  </div>
              </div>
          </div>
      </div>

      <MasonaryPortfolioTwo/>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Key Features</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <KeyFeature/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Team</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamOne.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((item,index)=>{
                                let Icon = item
                                return(
                                  <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                )
                              })}
                            </ul>
                        </div>
                        <div className="card-body py-3 px-0 content">
                            <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                            <small className="designation text-muted">{item.designation}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
      <PortfolioFooterTop/>
    </section>
    <AiFooter/>
    <ScrollToTop/>
    </>
  )
}
