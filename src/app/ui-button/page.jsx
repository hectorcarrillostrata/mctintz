import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import UiSidebar from '../components/ui/ui-sidebar'
import { button, iconBtn, outlineBtn, outlineIconBtn, softBtn } from '../data/ui-data'

import {FiFacebook} from 'react-icons/fi'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function UiButtom() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Buttons </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Buttons</li>
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
              <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <h5>Components</h5>
                  <UiSidebar/>
              </div>

              <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                      <div className="col-12">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Buttons</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                  {button.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`mt-2 me-2 btn ${item.btnStyle}`} key={index}>{item.name}</Link>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Buttons Pill</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-pills btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                  {button.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`btn btn-pills mt-2 me-2 ${item.btnStyle}`} key={index}>{item.name}</Link>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Buttons Soft</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-soft-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                  {softBtn.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`btn mt-2 me-2 ${item.btnStyle}`} key={index}>{item.name}</Link>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Buttons Pill Soft</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-pills btn-soft-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                  {softBtn.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`btn btn-pills mt-2 me-2 ${item.btnStyle}`} key={index}>{item.name}</Link>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Buttons Outline</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-outline-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                  {outlineBtn.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`btn mt-2 me-2 ${item.btnStyle}`} key={index}>{item.name}</Link>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Buttons Pill Outline</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-pills btn-outline-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                  {outlineBtn.map((item,index)=>{
                                    return(
                                      <Link href="#" className={`btn btn-pills mt-2 me-2 ${item.btnStyle}`} key={index}>{item.name}</Link>
                                    )
                                  })}
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Button Icons</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-icon btn-primary"&gt;&lt;FiFacebook className="fea icon-sm"&gt;&lt;/FiFacebook&gt;&lt;/Link&gt;</code></h6>

                                  <ul className="list-inline mb-0">
                                    {iconBtn.map((item,index)=>{
                                      let Icon = item.icon
                                      return(
                                        <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className={`btn btn-icon mt-2 ${item.btnStyle}`}><Icon className="icons"/></Link></li>
                                      )
                                    })}
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Outline Button Icons</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-icon btn-outline-primary"&gt;&lt;FiFacebook className="fea icon-sm"&gt;&lt;/FiFacebook&gt;&lt;/Link&gt;</code></h6>

                                  <ul className="list-inline mb-0">
                                    {outlineIconBtn.map((item,index)=>{
                                      let Icon = item.icon
                                      return(
                                        <li className="list-inline-item" key={index} style={{margin:"0 2px"}}><Link href="#" className={`btn btn-icon mt-2 ${item.btnStyle}`}><Icon className="icons"/></Link></li>
                                      )
                                    })}
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Button Pill Icons</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-icon btn-pills btn-primary"&gt;&lt;FiFacebook className="fea icon-sm"&gt;&lt;/FiFacebook&gt;&lt;/Link&gt;</code></h6>

                                  <ul className="list-inline mb-0">
                                    {iconBtn.map((item,index)=>{
                                        let Icon = item.icon
                                        return(
                                          <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className={`btn btn-icon btn-pills mt-2 ${item.btnStyle}`}><Icon className="icons"/></Link></li>
                                        )
                                      })}
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Outline Button Pill Icons</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-icon btn-pills btn-outline-primary"&gt;&lt;FiFacebook className="fea icon-sm"&gt;&lt;/FiFacebook&gt;&lt;/Link&gt;</code></h6>

                                  <ul className="list-inline mb-0">
                                      {outlineIconBtn.map((item,index)=>{
                                        let Icon = item.icon
                                        return(
                                          <li className="list-inline-item" key={index} style={{margin:"0 2px"}}><Link href="#" className={`btn btn-icon btn-pills mt-2 ${item.btnStyle}`}><Icon className="icons"/></Link></li>
                                        )
                                      })}
                                  </ul>
                              </div>
                          </div>
                      </div>

                      
                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0">Button Sizing</h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-primary btn-sm"&gt; Primary &lt;/Link&gt;</code></h6>

                                  <ul className="list-inline mb-0">
                                      <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-primary mt-2 me-2">Small</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-primary mt-2 me-2">Small</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-outline-primary mt-2 me-2">Small</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-outline-primary mt-2 me-2">Small</Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-sm btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-sm btn-pills btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-sm btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-sm btn-pills btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                  </ul>
                                  
                                  <h6 className="text-muted mb-2 mt-4 pb-2">Ex. <code className="text-danger">&lt;Link href="#" className="btn btn-primary btn-lg"&gt; Primary &lt;/Link&gt;</code></h6>

                                  <ul className="list-inline mb-0">
                                      <li className="list-inline-item"><Link href="#" className="btn btn-lg btn-primary mt-2 me-2">Large</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="btn btn-lg btn-pills btn-primary mt-2 me-2">Large</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="btn btn-lg btn-outline-primary mt-2 me-2">Large</Link></li>
                                      <li className="list-inline-item"><Link href="#" className="btn btn-lg btn-pills btn-outline-primary mt-2 me-2">Large</Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-lg btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-lg btn-pills btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-lg btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                      <li className="list-inline-item me-2"><Link href="#" className="btn btn-icon btn-lg btn-pills btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                  </ul>
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
