import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import UserDetail from '../components/account/user-detail'
import AccountingTab from '../components/account/accounting-tab'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { classicPortfolio } from '../data/portfolio'

export default function AccountWork() {
  return (
    <>
     <Navbar navlight={true}/> 
     <UserDetail/>

    <section className="section mt-60">
      <div className="container mt-lg-3">
          <div className="row">
              <AccountingTab/>
              <div className="col-lg-8 col-12">
                  <div className="rounded shadow p-4">
                      <h5 className="mb-0">Works & Projects: </h5>

                      <div className="row projects-wrapper">
                        {classicPortfolio.map((item,index)=>{
                          return(
                            <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card border-0 work-container work-primary work-classic">
                                    <div className="card-body p-0">
                                        <Link href="/portfolio-detail-one"><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded work-image" alt=""/></Link>
                                        <div className="content pt-3">
                                            <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-dark title">{item.name}</Link></h5>
                                            <h6 className="text-muted tag mb-0">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )
                        })}
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
