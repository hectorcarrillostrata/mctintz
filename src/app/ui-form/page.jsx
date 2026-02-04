import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiUser, FiMail, FiBook, FiMessageCircle} from 'react-icons/fi'

export default function Form() {
  return (
    <>
    <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Forms Elements </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Forms Elements</li>
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
                                  <h5 className="title mb-0"> Forms </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <br/>
                                      <pre><code className="text-danger">
                                            &lt;div className="row"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;div className="col-md-6"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Your Name &lt;span className="text-danger"&gt;*&lt;/span&gt;&lt;/label&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &lt;div className="form-icon position-relative"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FiUser className="fea icon-sm icons/"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>

                                                &nbsp;&nbsp;&nbsp;&lt;div className="col-md-6"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Your Email &lt;span className="text-danger"&gt;*&lt;/span&gt;&lt;/label&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&lt;div className="form-icon position-relative"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FiMail className="fea icon-sm icons/"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;/div&gt; <br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>

                                                &nbsp;&nbsp;&nbsp;&lt;div className="col-md-12"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Subject&lt;/label&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&lt;div className="form-icon position-relative"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FiBook className="fea icon-sm icons/"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>                                                                               
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>

                                                &nbsp;&nbsp;&nbsp;&lt;div className="col-md-12"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Comments&lt;/label&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&lt;div className="form-icon position-relative"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FiMessageCircle className="fea icon-sm icons"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Your Message :"&gt;&lt;/textarea&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;&lt;!--end row--&gt;<br/>
                                           &lt;div className="row"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="col-sm-12"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Message"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>
                                            &lt;/div&gt;&lt;!--end row--&gt;
                                            </code></pre>
                                            </h6>
                                  <form>
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                  <div className="form-icon position-relative">
                                                      <FiUser className="fea icon-sm icons"/>
                                                      <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                  <div className="form-icon position-relative">
                                                      <FiMail className="fea icon-sm icons"/>
                                                      <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                                  </div>
                                              </div> 
                                          </div>
                                          <div className="col-md-12">
                                              <div className="mb-3">
                                                  <label className="form-label">Subject</label>
                                                  <div className="form-icon position-relative">
                                                      <FiBook className="fea icon-sm icons"/>
                                                      <input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"/>
                                                  </div>
                                              </div>                                                                               
                                          </div>
                                          <div className="col-md-12">
                                              <div className="mb-3">
                                                  <label className="form-label">Comments</label>
                                                  <div className="form-icon position-relative">
                                                      <FiMessageCircle className="fea icon-sm icons"/>
                                                      <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Your Message :"></textarea>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-sm-12">
                                              <input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Message"/>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Checkboxes </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex.<br/> 
                                      <pre><code className="text-danger">
                                            &lt;div className="form-check form-check-inline"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;div className="mb-0"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="form-check"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" defaultChecked value="" id="flexCheckDefault1"&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexCheckDefault1"&gt;One&lt;/label&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;<br/><br/>

                                            &lt;div className="form-check form-check-inline"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;div className="mb-0"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="form-check"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexCheckDefault2"&gt;Two&lt;/label&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;<br/><br/>

                                            &lt;div className="form-check form-check-inline"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;div className="mb-0"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="form-check"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" disabled value="" id="flexCheckDefault3"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexCheckDefault3"&gt;Disabled&lt;/label&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;<br/>
                                            </code></pre>
                                            </h6>
                                  <div className="form-check form-check-inline">
                                      <div className="mb-0">
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" defaultChecked value="" id="flexCheckDefault1"/>
                                              <label className="form-check-label" htmlFor="flexCheckDefault1">One</label>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-check form-check-inline">
                                      <div className="mb-0">
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                              <label className="form-check-label" htmlFor="flexCheckDefault2">Two</label>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-check form-check-inline">
                                      <div className="mb-0">
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" disabled value="" id="flexCheckDefault3"/>
                                              <label className="form-check-label" htmlFor="flexCheckDefault3">Disabled</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Radio Buttons </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex.<br/> 
                                      <pre><code className="text-danger">
                                            &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br/> 
                                                &nbsp;&nbsp;&nbsp;&lt;div className="form-check mb-0"&gt;<br/> 
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault1"&gt;<br/> 
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexRadioDefault1"&gt;Yes&lt;/label&gt;<br/> 
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                            &lt;/div&gt;<br/> <br/> 

                                            &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;div className="form-check mb-0"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault2"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexRadioDefault2"&gt;No&lt;/label&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;<br/><br/>

                                            &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;div className="form-check mb-0"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" defaultChecked type="radio" disabled name="flexRadioDefault" id="flexRadioDefault3"&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexRadioDefault3"&gt;Disabled&lt;/label&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;
                                            </code></pre>
                                      </h6>
                                  <div className="custom-control custom-radio custom-control-inline">
                                      <div className="form-check mb-0">
                                          <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                          <label className="form-check-label" htmlFor="flexRadioDefault1">Yes</label>
                                      </div>
                                  </div>
                                  <div className="custom-control custom-radio custom-control-inline">
                                      <div className="form-check mb-0">
                                          <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                          <label className="form-check-label" htmlFor="flexRadioDefault2">No</label>
                                      </div>
                                  </div>
                                  <div className="custom-control custom-radio custom-control-inline">
                                      <div className="form-check mb-0">
                                          <input className="form-check-input" defaultChecked type="radio" disabled name="flexRadioDefault" id="flexRadioDefault3"/>
                                          <label className="form-check-label" htmlFor="flexRadioDefault3">Disabled</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Switches Button </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex.<br/> 
                                      <pre><code className="text-danger">
                                          &lt;div className="form-check form-switch"&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"&gt;<br/>
                                              &nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckDefault"&gt;Default switch checkbox input&lt;/label&gt;<br/>
                                          &lt;/div&gt;<br/><br/>

                                          &lt;div className="form-check form-switch"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckChecked"&gt;Checked switch checkbox input&lt;/label&gt;<br/>
                                          &lt;/div&gt;<br/><br/>

                                          &lt;div className="form-check form-switch"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckDisabled"&gt;Disabled switch checkbox input&lt;/label&gt;<br/>
                                          &lt;/div&gt;<br/><br/>

                                          &lt;div className="form-check form-switch"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled"&gt;Disabled defaultChecked switch checkbox input&lt;/label&gt;<br/>
                                          &lt;/div&gt;<br/><br/>
                                          </code></pre>

                                      </h6>
                                  <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                                  </div>

                                  <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked/>
                                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                  </div>

                                  <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled/>
                                      <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                                  </div>

                                  <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled/>
                                      <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled defaultChecked switch checkbox input</label>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Form Select Box </h5>
                              </div>

                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex.<br/> 
                                      <pre><code className="text-danger">
                                          &lt;select className="form-select form-control" aria-label="Default select example"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;option selected&gt;Open this select menu&lt;/option&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;option value="1"&gt;One&lt;/option&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;option value="2"&gt;Two&lt;/option&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;option value="3"&gt;Three&lt;/option&gt;<br/>
                                          &lt;/select&gt;<br/>
                                          </code></pre>
                                      </h6>     
                                  <select className="form-select form-control" aria-label="Default select example">
                                      <option>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Subscribe Form </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <br/>
                                      <pre><code className="text-danger">
                                          &lt;div className="subcribe-form"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;form&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder="Your email :" required&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="submit" className="btn btn-pills btn-primary"&gt;Subscribe&lt;/button&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;/form&gt;&lt;!--end form--&gt;<br/>
                                          &lt;/div&gt;<br/>
                                          </code></pre>
                                          </h6> 
                                  <div className="subcribe-form">
                                      <form>
                                          <input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder="Your email :" required/>
                                          <button type="submit" className="btn btn-pills btn-primary">Subscribe</button>
                                      </form>
                                  </div>
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
