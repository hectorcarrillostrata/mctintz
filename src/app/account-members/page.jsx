import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import UserDetail from '../components/account/user-detail'
import ScrollToTop from '../components/scroll-to-top'
import Footer from '../components/footer/footer'
import AccountingTab from '../components/account/accounting-tab'

import { teamSocial, teamTwo } from '../data/team'

export default function AccountMember() {
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
                      <h5>Members:</h5>

                      <div className="row">
                        {teamTwo.map((item,index)=>{
                          return(
                            <div className="col-lg-6 col-md-4 mt-4 pt-2" key={index}>
                                <div className="text-center">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="avatar avatar-medium shadow-lg rounded-pill" alt=""/>
                                    <div className="content mt-3">
                                        <Link href="#" className="h5 text-dark">{item.name}</Link>
                                        <ul className="list-unstyled social-icon social mb-0 mt-2">
                                          {teamSocial.map((el,index)=>{
                                            let Icon = el
                                            return(
                                              <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="rounded"><Icon className="fea icon-sm fea-social"/></Link></li>
                                            )
                                          })}
                                        </ul>
                                        <Link href="#" className="btn btn-primary mt-2"><i className="uil uil-envelope"></i> Send Message</Link>
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
