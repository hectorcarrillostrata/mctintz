import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import { featureOne } from '../data/feature'
import ClientOne from '../components/client/client-one'
import { classicPortfolio } from '../data/portfolio'
import Image from 'next/image'

import {LuUser, LuCalendarDays} from 'react-icons/lu'

import GetInTouchOne from '../components/get-in-touch/get-in-touch-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function PageServices() {
  return (
    <>
     <Navbar/> 

      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h4 className="title mb-0"> Services </h4>
                    </div>
                </div>
            </div>
            
            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            {featureOne.map((item,index)=>{
              let Icon = item.icon
              return(
                <div className="col-md-4 col-12 mt-5 pt-4" key={index}>
                    <div className="features feature-primary">
                        <div className="image position-relative d-inline-block">
                            <Icon className="h3 text-primary"/>
                        </div>

                        <div className="content mt-4">
                            <h5>{item.title}</h5>
                            <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Client Reviews</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <ClientOne/>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">Our Latest Projects</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            {classicPortfolio.slice(0,4).map((item,index)=>{
              return(
                <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div className="card-body p-0">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                            <div className="overlay-work"></div>
                            <div className="content">
                                <Link href="/portfolio-detail-one" className="title text-white d-block fw-bold">{item.name}</Link>
                                <small className="text-white-50">{item.title}</small>
                            </div>
                            <div className="client">
                                <small className="user d-block"><LuUser className="me-1"/> Calvin Carlo</small>
                                <small className="date"><LuCalendarDays className="me-1"/> {item.date}</small>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
      
      <div className="container mt-100 mt-60">
         <GetInTouchOne/>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
