import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'
import {MdOutlineCheckCircleOutline} from 'react-icons/md'

export default function Typographay() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Typography </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Typography</li>
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
                                    <h5 className="title mb-0"> Heading </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;</code></h6>
                                    
                                    <h1>H1. Bootstrap heading</h1>
                                    <h2>H2. Bootstrap heading</h2>
                                    <h3>H3. Bootstrap heading</h3>
                                    <h4>H4. Bootstrap heading</h4>
                                    <h5>H5. Bootstrap heading</h5>
                                    <h6 className="mb-0">H6. Bootstrap heading</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4 pt-2">
                            <div className="component-wrapper rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Display Heading </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;p className="display-1"&gt; Display 1 &lt;/p&gt;</code></h6>
                                    
                                    <p className="display-1">Display 1</p>
                                    <p className="display-2">Display 2</p>
                                    <p className="display-3">Display 3</p>
                                    <p className="display-4">Display 4</p>
                                    <p className="display-5">Display 5</p>
                                    <p className="display-6 mb-0">Display 6</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4 pt-2">
                            <div className="component-wrapper rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> List </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/> <code className="text-danger">
                                        &lt;ul className="list-unstyled text-muted"&gt; <br/>
                                            &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;&lt;MdOutlineCheckCircleOutline className="uil uil-check-circle align-middle"&gt;&lt;/MdOutlineCheckCircleOutline&gt;&lt;/span&gt;Digital Marketing Solutions for Tomorrow&lt;/li&gt;<br/>
                                            &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;&lt;MdOutlineCheckCircleOutline className="uil uil-check-circle align-middle"&gt;&lt;/MdOutlineCheckCircleOutline&gt;&lt;/span&gt;Our Talented &amp; Experienced Marketing Agency&lt;/li&gt;<br/>
                                            &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;&lt;MdOutlineCheckCircleOutline className="uil uil-check-circle align-middle"&gt;&lt;/MdOutlineCheckCircleOutline&gt;&lt;/span&gt;Create your own skin to match your brand&lt;/li&gt;<br/>
                                        &lt;/ul&gt;
                                    </code></h6>
                                    
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className=" align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className=" align-middle"/></span>Our Talented &amp; Experienced Marketing Agency</li>
                                        <li className="mb-2"><span className="text-primary h5 me-2"><MdOutlineCheckCircleOutline className=" align-middle"/></span>Create your own skin to match your brand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4 pt-2">
                            <div className="component-wrapper rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Blockquote </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/> <code className="text-danger">
                                        &lt;div className="blockquote-wrapper"&gt;<br/>
                                            &nbsp;&lt;div className="blockquote p-4 p-md-5 rounded-lg position-relative"&gt;<br/>
                                                &nbsp;&nbsp;&lt;h4&gt;Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.&lt;/h4&gt;<br/>
                
                                                &nbsp;&nbsp;&nbsp;&lt;div className="position-absolute start-0" style=&#123;&#123;zIndex: '-1', top: '-30px'&#125;&#125;&gt;<br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;i className="mdi mdi-format-quote-open text-primary opacity-1" style=&#123;&#123;fontSize: '100px'&#125;&#125;&gt;&lt;/i&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &nbsp;&nbsp;&lt;/div&gt;<br/>
                                            
                                            &nbsp;&lt;h6 className="author"&gt;- Shreethemes&lt;/h6&gt;<br/>
                                        &lt;/div&gt;
                                    </code></h6>
                                    
                                    <div className="blockquote-wrapper">
                                        <div className="blockquote p-4 p-md-5 rounded-lg position-relative">
                                            <h4>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</h4>
            
                                            <div className="position-absolute start-0" style={{zIndex: '-1', top: '-30px'}}>
                                                <i className="mdi mdi-format-quote-open text-primary opacity-1" style={{fontSize: '100px'}}></i>
                                            </div>
                                        </div>
                                        
                                        <h6 className="author">- Shreethemes</h6>
                                    </div>

                                    <h6 className="text-muted mt-5 mb-4 pt-5 pb-2 border-top">Ex. <br/> <code className="text-danger">
                                        &lt;blockquote className="blockquote mt-3 p-3"&gt;<br/>
                                            &nbsp;&lt;p className="text-muted mb-0 fst-italic"&gt;" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "&lt;/p&gt;<br/>
                                        &lt;/blockquote&gt;
                                    </code></h6>
                                    
                                    <blockquote className="blockquote mt-3 p-3">
                                        <p className="text-muted mb-0 fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                    </blockquote>
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
