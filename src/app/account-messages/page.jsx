'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const ComposeMessage = dynamic(()=>import('../components/account/compose-message'),{ssr:false})

import Navbar from '../components/navbar/navbar'
import UserDetail from '../components/account/user-detail'
import AccountingTab from '../components/account/accounting-tab'
import MessageDropdown from '../components/account/message-dropdown'

import { messages } from '../data/account'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function AccountMessage() {
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

                      <ComposeMessage/>

                      <div className="d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3">
                          <div className="form-check ps-0">
                              <div className="mb-0">
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value="" id="selectall"/>
                                      <label className="form-check-label" htmlFor="selectall">Select all</label>
                                  </div>
                              </div>
                          </div>

                          <MessageDropdown/>
                      </div> 
                      {messages.map((item,index)=>{
                        return(
                          <div className={`d-flex border-bottom p-3 ${item.bgLight === true ? 'bg-light' : ''}`} key={index}>
                              <div className="form-check ps-0">
                                  <div className="mb-0">
                                      <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="mail1"/>
                                          <label className="form-check-label" htmlFor="mail1"></label>
                                      </div>
                                  </div>
                              </div>
                              <Link href="#">
                                  <div className="d-flex ms-2">
                                      <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
                                      <div className="flex-1 ms-3">
                                          <h6 className="text-dark">{item.name}</h6>
                                          <p className="text-muted mb-0">{item.msg}</p>
                                      </div>
                                  </div>
                              </Link>
                          </div> 
                        )
                      })}

                      <div className="d-flex align-items-center justify-content-between mt-4">
                          <span className="text-muted h6 mb-0">Showing 8 out of 33</span>
                          <Link href="#" className="btn btn-primary">See more</Link>
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
