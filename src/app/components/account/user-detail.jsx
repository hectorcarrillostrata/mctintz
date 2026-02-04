import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FiInstagram, FiLinkedin} from 'react-icons/fi'
import AccountTooltip from './account-tooltip'

export default function UserDetail() {
  return (
    <section className="bg-profile d-table w-100 bg-primary" style={{backgroundImage:"url('/images/account/bg.png')", backgroundPosition:'center'}}>
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="card public-profile border-0 rounded shadow" style={{zIndex:'1'}}>
                      <div className="card-body">
                          <div className="row align-items-center">
                              <div className="col-lg-2 col-md-3 text-md-start text-center">
                                  <Image src="/images/client/05.jpg" width={140} height={140} className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt=""/>
                              </div>

                              <div className="col-lg-10 col-md-9">
                                  <div className="row align-items-end">
                                      <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                                          <h3 className="title mb-0">Krista Joseph</h3>
                                          <small className="text-muted h6 me-2">Web Developer</small>
                                          <ul className="list-inline mb-0 mt-3">
                                              <li className="list-inline-item me-2"><Link href="#" className="text-muted d-flex align-items-center" title="Instagram"><FiInstagram className="fea icon-sm me-2"/>krista_joseph</Link></li>
                                              <li className="list-inline-item"><Link href="#" className="text-muted d-flex align-items-center" title="Linkedin"><FiLinkedin className="fea icon-sm me-2"/>Krista Joseph</Link></li>
                                          </ul>
                                      </div>
                                      <div className="col-md-5 text-md-end text-center">
                                         <AccountTooltip/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}
