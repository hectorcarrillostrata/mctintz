import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { teamSocial, teamThree, teamTwo } from '../data/team'

export default function Team() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Team Members </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Team</li>
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
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title">Team #1</h4>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamTwo.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center border-0">
                        <div className="position-relative">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                            <ul className="list-unstyled mb-0 team-icon">
                              {teamSocial.map((el,index)=>{
                                let Icon = el
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

          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title">Team #2</h4>
                  </div>
              </div>
          </div>

          <div className="row">
            {teamThree.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="d-flex align-items-center">
                        <Image src={item.image} width={110} height={110} className="avatar avatar-medium rounded-circle img-thumbnail" alt=""/>
                        <div className="content ms-3">
                            <h5 className="mb-0"><Link href="#" className="text-dark">{item.name}</Link></h5>
                            <small className="position text-muted">{item.designation}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
