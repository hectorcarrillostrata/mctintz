import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import UserDetail from '../components/account/user-detail'
import AccountingTab from '../components/account/accounting-tab'
import Scrollbar from '../components/account/scrollbar'
import { chatData } from '../data/account'

import {FiClock, FiSend, FiSmile, FiPaperclip} from 'react-icons/fi'
import ChatDropdown from '../components/account/chat-dropdown'
import ScrollToTop from '../components/scroll-to-top'
import Footer from '../components/footer/footer'

export default function AccountChat() {
  return (
    <>
    <Navbar navlight={true}/> 
    <UserDetail/>

    <section className="section mt-60">
      <div className="container mt-lg-3">
          <div className="row">
              <AccountingTab/>

              <div className="col-lg-8 col-12">
                  <div className="card border-0 rounded shadow">
                    <Scrollbar height={360}>
                      <div className="p-2 chat chat-list" data-simplebar style={{maxHeight:'360px'}}>
                        {chatData.map((item,index)=>{
                          return(
                            <Link href="#" className={`d-flex chat-list p-2 mt-2 rounded position-relative ${item.bg=== true ? 'active': ''}`} key={index}>
                                <div className="position-relative">
                                    <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className={`mdi mdi-checkbox-blank-circle  on-off align-text-bottom ${item.active === true ? 'text-success' : 'text-danger'}`}></i>
                                </div>
                                <div className="overflow-hidden flex-1 ms-2">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-dark mb-0 d-block">{item.name}</h6>
                                        <small className="text-muted">{item.time}</small>
                                    </div>
                                    {item.base === true ? (
                                        <div className="d-flex justify-content-between">
                                          <div className="text-dark h6 mb-0 text-truncate">{item.msg}</div>
                                          <span className="badge rounded-md bg-soft-danger">2</span>
                                      </div>
                                    ) : (
                                      <div className="text-muted text-truncate">{item.msg}</div>
                                    )}
                                </div>
                            </Link>
                          )
                        })}
                      </div>
                    </Scrollbar>
                  </div>
                  
                  <div className="card chat chat-person border-0 shadow rounded mt-4">
                      <div className="d-flex justify-content-between border-bottom p-4">
                          <div className="d-flex">
                              <img src="/images/client/02.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                              <div className="overflow-hidden ms-3">
                                  <a href="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</a>
                                  <small className="text-muted"><i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                              </div>
                          </div>

                          <ChatDropdown/>
                      </div>
                      <Scrollbar height={500}>
                          <ul className="p-4 list-unstyled mb-0 chat" data-simplebar style={{backgroundImage:"url('/images/account/bg-chat.png')", backgroundPosition:'center'}}>
                              <li>
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative">
                                              <Image src="/images/client/02.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hey Calvin</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>59 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li className="chat-right">
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative chat-user-image">
                                              <Image src="/images/client/01.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>45 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li className="chat-right">
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative chat-user-image">
                                              <Image src="/images/client/01.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>44 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li>
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative">
                                              <Image src="/images/client/02.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>42 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li>
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative">
                                              <Image src="/images/client/02.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>40 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li className="chat-right">
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative chat-user-image">
                                              <Image src="/images/client/01.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>45 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li>
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative">
                                              <Image src="/images/client/02.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>35 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li className="chat-right">
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative chat-user-image">
                                              <Image src="/images/client/01.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <Link href="https://1.envato.market/landrick-next" target="_blank" className="text-primary">http://shreethemes.in/landrick/</Link></p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>25 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li>
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative">
                                              <Image src="/images/client/02.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>20 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li className="chat-right">
                                  <div className="d-inline-block">
                                      <div className="d-flex chat-type mb-3">
                                          <div className="position-relative chat-user-image">
                                              <Image src="/images/client/01.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                              <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                          </div>
                                              
                                          <div className="chat-msg" style={{maxWidth:'500px'}}>
                                              <p className="text-muted small msg px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                              <small className="text-muted msg-time"><FiClock className="me-1"/>18 min ago</small>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </Scrollbar>

                      <div className="p-2 rounded-bottom shadow">
                          <div className="row">
                              <div className="col">
                                  <input type="text" className="form-control" placeholder="Enter Message..."/>
                              </div>
                              <div className="col-auto">
                                  <Link href="#" className="btn btn-icon btn-primary" style={{margin:'0 2px'}}><FiSend/></Link>
                                  <Link href="#" className="btn btn-icon btn-primary" style={{margin:'0 2px'}}><FiSmile/></Link>
                                  <Link href="#" className="btn btn-icon btn-primary" style={{margin:'0 2px'}}><FiPaperclip/></Link>
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
